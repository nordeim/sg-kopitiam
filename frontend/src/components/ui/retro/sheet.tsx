"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const RetroSheet = DialogPrimitive.Root
const RetroSheetTrigger = DialogPrimitive.Trigger
const RetroSheetClose = DialogPrimitive.Close
const RetroSheetPortal = DialogPrimitive.Portal

const RetroSheetOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-espresso-dark/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
RetroSheetOverlay.displayName = DialogPrimitive.Overlay.displayName

const RetroSheetContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <RetroSheetPortal>
    <RetroSheetOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed z-50 gap-4 bg-latte-cream p-6 shadow-xl transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 right-0 h-full w-3/4 border-l-4 border-espresso-dark sm:max-w-sm data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-full border-2 border-espresso-dark p-2 opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary hover:bg-sunrise-coral hover:text-white">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </RetroSheetPortal>
))
RetroSheetContent.displayName = DialogPrimitive.Content.displayName

const RetroSheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left mb-6 border-b-2 border-dashed border-espresso-dark/20 pb-6",
      className
    )}
    {...props}
  />
)
RetroSheetHeader.displayName = "RetroSheetHeader"

const RetroSheetTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-2xl font-display font-bold text-espresso-dark", className)}
    {...props}
  />
))
RetroSheetTitle.displayName = DialogPrimitive.Title.displayName

export {
  RetroSheet,
  RetroSheetTrigger,
  RetroSheetClose,
  RetroSheetContent,
  RetroSheetHeader,
  RetroSheetTitle,
}
