"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Globe, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About ShopMount</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're passionate about bringing you the best products at unbeatable prices. Our mission is to make online
          shopping simple, secure, and enjoyable for everyone.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
        <Card>
          <CardContent className="text-center p-6">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">10M+</h3>
            <p className="text-gray-600">Happy Customers</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="text-center p-6">
            <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">50K+</h3>
            <p className="text-gray-600">Products</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="text-center p-6">
            <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">100+</h3>
            <p className="text-gray-600">Countries</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="text-center p-6">
            <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">99%</h3>
            <p className="text-gray-600">Satisfaction</p>
          </CardContent>
        </Card>
      </div>

      {/* Story */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2025, ShopMount started as a small team with a big vision: to revolutionize the way people shop
            online. We believed that everyone deserves access to quality products at fair prices, delivered with
            exceptional service.
          </p>
          <p className="text-gray-600 mb-4">
            Today, we've grown into a global marketplace serving millions of customers worldwide. Our commitment to
            quality, innovation, and customer satisfaction remains at the heart of everything we do.
          </p>
          <p className="text-gray-600">
            We're not just an ecommerce platform – we're your trusted partner in finding exactly what you need, when you
            need it.
          </p>
        </div>
        <div className="bg-gradient-to-br from-blue-200 to-indigo-100 rounded-lg p-8">
  <img
    src="https://freeillustrations.xyz/wp-content/uploads/2020/12/E-Commerce-Illustration-Kit@4x.png"
    alt="Our team"
    className="w-full h-64 object-cover rounded-lg"
  />
</div>
      </div>

      {/* Values */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          These core values guide everything we do and help us deliver the best possible experience to our customers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality First</h3>
            <p className="text-gray-600">
              We carefully curate every product to ensure it meets our high standards for quality and value.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Focus</h3>
            <p className="text-gray-600">
              Your satisfaction is our priority. We're here to help you find exactly what you're looking for.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
            <p className="text-gray-600">
              We continuously improve our platform and services to provide you with the best shopping experience.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
