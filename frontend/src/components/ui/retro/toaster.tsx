"use client"

import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

export function Toaster({ ...props }: ToasterProps) {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-latte-cream group-[.toaster]:text-espresso-dark group-[.toaster]:border-2 group-[.toaster]:border-espresso-dark group-[.toaster]:shadow-lg group-[.toaster]:rounded-xl group-[.toaster]:font-sans",
          description: "group-[.toast]:text-coffee-medium",
          actionButton:
            "group-[.toast]:bg-sunrise-coral group-[.toast]:text-white",
          cancelButton:
            "group-[.toast]:bg-golden-hour group-[.toast]:text-espresso-dark",
        },
      }}
      {...props}
    />
  )
}
