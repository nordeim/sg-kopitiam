<?php

namespace App\Services;

use App\Models\Order;

class InvoiceService
{
    /**
     * Generate UBL 2.1 XML for InvoiceNow compliance.
     * This is a simplified implementation focusing on structure.
     */
    public function generateXml(Order $order): string
    {
        // XML Header
        $xml = '<?xml version="1.0" encoding="UTF-8"?>';
        $xml .= '<Invoice xmlns="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2"';
        $xml .= ' xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2"';
        $xml .= ' xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2">';
        
        // Metadata
        $xml .= "<cbc:ID>{$order->invoice_number}</cbc:ID>";
        $xml .= "<cbc:IssueDate>" . $order->created_at->format('Y-m-d') . "</cbc:IssueDate>";
        $xml .= "<cbc:InvoiceTypeCode>380</cbc:InvoiceTypeCode>"; // Commercial Invoice
        $xml .= "<cbc:DocumentCurrencyCode>SGD</cbc:DocumentCurrencyCode>";

        // Supplier (Morning Brew)
        $xml .= '<cac:AccountingSupplierParty><cac:Party><cac:PartyLegalEntity><cbc:RegistrationName>Morning Brew Collective</cbc:RegistrationName></cac:PartyLegalEntity></cac:Party></cac:AccountingSupplierParty>';

        // Customer (Minimal for walk-in/pickup)
        $xml .= '<cac:AccountingCustomerParty><cac:Party><cac:PartyLegalEntity><cbc:RegistrationName>Walk-in Customer</cbc:RegistrationName></cac:PartyLegalEntity></cac:Party></cac:AccountingCustomerParty>';

        // Tax Total (GST 9%)
        $xml .= '<cac:TaxTotal>';
        $xml .= "<cbc:TaxAmount currencyID=\"SGD\">{$order->gst_amount}</cbc:TaxAmount>";
        $xml .= '<cac:TaxSubtotal>';
        $xml .= "<cbc:TaxableAmount currencyID=\"SGD\">{$order->subtotal}</cbc:TaxableAmount>";
        $xml .= "<cbc:TaxAmount currencyID=\"SGD\">{$order->gst_amount}</cbc:TaxAmount>";
        $xml .= '<cac:TaxCategory><cbc:ID>S</cbc:ID><cbc:Percent>9</cbc:Percent><cac:TaxScheme><cbc:ID>GST</cbc:ID></cac:TaxScheme></cac:TaxCategory>';
        $xml .= '</cac:TaxSubtotal>';
        $xml .= '</cac:TaxTotal>';

        // Monetary Totals
        $xml .= '<cac:LegalMonetaryTotal>';
        $xml .= "<cbc:LineExtensionAmount currencyID=\"SGD\">{$order->subtotal}</cbc:LineExtensionAmount>";
        $xml .= "<cbc:TaxExclusiveAmount currencyID=\"SGD\">{$order->subtotal}</cbc:TaxExclusiveAmount>";
        $xml .= "<cbc:TaxInclusiveAmount currencyID=\"SGD\">{$order->total_amount}</cbc:TaxInclusiveAmount>";
        $xml .= "<cbc:PayableAmount currencyID=\"SGD\">{$order->total_amount}</cbc:PayableAmount>";
        $xml .= '</cac:LegalMonetaryTotal>';

        $xml .= '</Invoice>';

        return $xml;
    }
}
