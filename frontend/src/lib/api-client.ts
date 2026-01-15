export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: string; // Decimal string to avoid float errors on frontend until display
  stock_quantity: number;
  category: string;
  tags: string[];
  image_url: string;
  is_active: boolean;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  postal_code: string;
  features: string[];
  operating_hours: Record<string, string>;
}

export interface CreateOrderPayload {
  email: string;
  pdpa_consent: boolean;
  items: {
    id: string;
    quantity: number;
  }[];
}

export interface OrderResponse {
  invoice_number: string;
  total: string;
  status: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export const apiClient = {
  async getProducts(category?: string): Promise<{ data: Product[] }> {
    const params = new URLSearchParams();
    if (category && category !== 'all') params.append('category', category);
    
    const res = await fetch(`${API_URL}/products?${params}`);
    if (!res.ok) throw new Error('Failed to fetch products');
    return res.json();
  },

  async getLocations(): Promise<Location[]> {
    const res = await fetch(`${API_URL}/locations`);
    if (!res.ok) throw new Error('Failed to fetch locations');
    return res.json();
  },

  async createOrder(payload: CreateOrderPayload): Promise<OrderResponse> {
    const res = await fetch(`${API_URL}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || 'Order creation failed');
    }
    
    return res.json();
  }
};
