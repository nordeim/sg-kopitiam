"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { RetroButton } from "@/components/ui/retro/button"

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().regex(/^\+65\d{8}$/, "Must be a valid Singapore number (+65XXXXXXXX)"),
  pdpaConsent: z.boolean().refine(val => val === true, "Consent is required"),
})

type CustomerFormData = z.infer<typeof schema>

export function CustomerDetails({ 
  onNext 
}: { 
  onNext: (data: CustomerFormData) => void 
}) {
  const { register, handleSubmit, formState: { errors } } = useForm<CustomerFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      phone: "+65"
    }
  })

  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-500">
      <div className="space-y-4">
        <h2 className="font-display text-2xl text-espresso-dark">Who are we brewing for?</h2>
        
        <div>
          <label className="block text-sm font-bold text-espresso-dark mb-1">Name</label>
          <input 
            {...register("name")}
            className="w-full px-4 py-3 bg-white border-2 border-espresso-dark/20 rounded-lg focus:border-sunrise-coral focus:outline-none"
            placeholder="Uncle Lim"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-bold text-espresso-dark mb-1">Email</label>
          <input 
            {...register("email")}
            type="email"
            className="w-full px-4 py-3 bg-white border-2 border-espresso-dark/20 rounded-lg focus:border-sunrise-coral focus:outline-none"
            placeholder="lim@example.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-bold text-espresso-dark mb-1">Phone</label>
          <input 
            {...register("phone")}
            className="w-full px-4 py-3 bg-white border-2 border-espresso-dark/20 rounded-lg focus:border-sunrise-coral focus:outline-none"
            placeholder="+65 9123 4567"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="bg-golden-hour/10 p-4 rounded-lg border border-golden-hour">
        <label className="flex items-start gap-3 cursor-pointer">
          <input 
            type="checkbox" 
            {...register("pdpaConsent")}
            className="mt-1 w-4 h-4 text-sunrise-coral rounded border-espresso-dark focus:ring-sunrise-coral"
          />
          <span className="text-sm text-espresso-dark/80">
            I consent to Morning Brew Collective collecting my data for the purpose of order processing, in accordance with the PDPA.
          </span>
        </label>
        {errors.pdpaConsent && <p className="text-red-500 text-xs mt-1 block">You must consent to proceed.</p>}
      </div>

      <RetroButton type="submit" className="w-full">
        Continue to Pickup
      </RetroButton>
    </form>
  )
}