"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShoppingBag, Truck, Shield, Headphones, Star } from "lucide-react"

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-yellow-300">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <span className="text-sm">Trusted by 10M+ customers in Ethiopia</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Shop Smart in
                <br />
                <span className="text-yellow-300">Ethiopia</span>
              </h1>

              <p className="text-xl text-blue-100 max-w-lg">
                Discover amazing products at unbeatable prices. From electronics to fashion, we have everything you need
                with fast delivery across Ethiopia. Pay with Ethiopian banks and Telebirr.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 flex items-center space-x-2">
                  <ShoppingBag className="h-5 w-5" />
                  <span>Shop Now</span>
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            <div className="flex items-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <Truck className="h-5 w-5 text-yellow-300" />
                <span>Free Delivery in Addis Ababa</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-yellow-300" />
                <span>Ethiopian Bank Payment</span>
              </div>
              <div className="flex items-center space-x-2">
                <Headphones className="h-5 w-5 text-yellow-300" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Shopping in Ethiopia"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-gray-900 p-4 rounded-lg shadow-lg">
                <p className="font-bold text-lg">🇪🇹 Made for Ethiopia</p>
                <p className="text-sm">Local payment methods supported</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
