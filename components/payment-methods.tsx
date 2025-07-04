"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Smartphone, Building, Shield } from "lucide-react"

export default function PaymentMethods() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ethiopian Payment Methods</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We support all major Ethiopian payment methods for your convenience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Telebirr */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-fit">
                <Smartphone className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-lg">Telebirr</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">Pay instantly with Telebirr mobile wallet</p>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-sm font-medium text-green-800">Instant Payment</p>
                <p className="text-xs text-green-600">No additional fees</p>
              </div>
            </CardContent>
          </Card>

          {/* Commercial Bank of Ethiopia */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                <Building className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-lg">CBE Bank</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">Commercial Bank of Ethiopia online banking</p>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm font-medium text-blue-800">Secure Banking</p>
                <p className="text-xs text-blue-600">Direct bank transfer</p>
              </div>
            </CardContent>
          </Card>

          {/* Dashen Bank */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-fit">
                <CreditCard className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="text-lg">Dashen Bank</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">Dashen Bank online payment gateway</p>
              <div className="bg-purple-50 p-3 rounded-lg">
                <p className="text-sm font-medium text-purple-800">Fast Transfer</p>
                <p className="text-xs text-purple-600">Real-time processing</p>
              </div>
            </CardContent>
          </Card>

          {/* Bank of Abyssinia */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-orange-100 rounded-full w-fit">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <CardTitle className="text-lg">Bank of Abyssinia</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">Secure payment with Bank of Abyssinia</p>
              <div className="bg-orange-50 p-3 rounded-lg">
                <p className="text-sm font-medium text-orange-800">Trusted Banking</p>
                <p className="text-xs text-orange-600">Encrypted transactions</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">🔒 Secure Ethiopian Payment Processing</h3>
            <p className="text-gray-600">
              All payments are processed securely through Ethiopian banking systems. Your financial information is
              protected with bank-level encryption and security measures.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
