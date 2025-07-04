"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CreditCard, Truck, Lock, Smartphone, Building } from "lucide-react"
import { getCartItems, clearCart, getProductById, createOrder, getCurrentUser } from "@/lib/data"
import { toast } from "@/hooks/use-toast"
import type { CartItem, Product } from "@/lib/types"

export default function Checkout() {
  const router = useRouter()
  const [cartItems, setCartItems] = useState<(CartItem & { product: Product })[]>([])
  const [user, setUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("telebirr")
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    region: "",
    phone: "",
    // Payment specific fields
    telebirrPhone: "",
    bankAccount: "",
    bankName: "",
  })

  useEffect(() => {
    const currentUser = getCurrentUser()
    if (!currentUser) {
      router.push("/auth")
      return
    }

    setUser(currentUser)
    setFormData((prev) => ({
      ...prev,
      email: currentUser.email,
      firstName: currentUser.name.split(" ")[0] || "",
      lastName: currentUser.name.split(" ")[1] || "",
    }))

    const items = getCartItems()
    const itemsWithProducts = items.map((item) => ({
      ...item,
      product: getProductById(item.productId)!,
    }))
    setCartItems(itemsWithProducts)
  }, [router])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate payment processing based on method
      await new Promise((resolve) => setTimeout(resolve, 3000))

      // Create order
      const order = createOrder({
        userId: user.id,
        items: cartItems.map((item) => ({
          productId: item.productId,
          quantity: item.quantity,
          price: item.product.price,
        })),
        shippingAddress: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          address: formData.address,
          city: formData.city,
          state: formData.region,
          zipCode: "00000",
          country: "Ethiopia",
        },
        paymentMethod: paymentMethod,
        total: total,
      })

      // Clear cart
      clearCart()

      toast({
        title: "Order placed successfully! 🇪🇹",
        description: `Your order #${order.id} has been confirmed. Payment processed via ${getPaymentMethodName(paymentMethod)}.`,
      })

      router.push(`/account?tab=orders`)
    } catch (error) {
      toast({
        title: "Payment failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const getPaymentMethodName = (method: string) => {
    switch (method) {
      case "telebirr":
        return "Telebirr"
      case "cbe":
        return "Commercial Bank of Ethiopia"
      case "dashen":
        return "Dashen Bank"
      case "abyssinia":
        return "Bank of Abyssinia"
      default:
        return "Bank Transfer"
    }
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const shipping = subtotal > 1000 ? 0 : 50 // Free shipping over 1000 ETB
  const tax = subtotal * 0.15 // 15% VAT in Ethiopia
  const total = subtotal + shipping + tax

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Add some products to checkout!</p>
          <Button onClick={() => router.push("/products")}>Continue Shopping</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout - Ethiopian Payment</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+251 9XX XXX XXX"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                  />
                </div>
              </CardContent>
            </Card>

            {/* Shipping Address */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Truck className="h-5 w-5" />
                  <span>Delivery Address</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    placeholder="Street address, building, apartment"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Select value={formData.city} onValueChange={(value) => handleInputChange("city", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select city" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="addis-ababa">Addis Ababa</SelectItem>
                        <SelectItem value="dire-dawa">Dire Dawa</SelectItem>
                        <SelectItem value="mekelle">Mekelle</SelectItem>
                        <SelectItem value="gondar">Gondar</SelectItem>
                        <SelectItem value="hawassa">Hawassa</SelectItem>
                        <SelectItem value="bahir-dar">Bahir Dar</SelectItem>
                        <SelectItem value="adama">Adama</SelectItem>
                        <SelectItem value="jimma">Jimma</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="region">Region</Label>
                    <Select value={formData.region} onValueChange={(value) => handleInputChange("region", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="addis-ababa">Addis Ababa</SelectItem>
                        <SelectItem value="oromia">Oromia</SelectItem>
                        <SelectItem value="amhara">Amhara</SelectItem>
                        <SelectItem value="tigray">Tigray</SelectItem>
                        <SelectItem value="snnp">SNNP</SelectItem>
                        <SelectItem value="somali">Somali</SelectItem>
                        <SelectItem value="afar">Afar</SelectItem>
                        <SelectItem value="dire-dawa">Dire Dawa</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5" />
                  <span>Ethiopian Payment Method</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                  {/* Telebirr */}
                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <RadioGroupItem value="telebirr" id="telebirr" />
                    <div className="flex-1">
                      <Label htmlFor="telebirr" className="flex items-center space-x-3 cursor-pointer">
                        <Smartphone className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-medium">Telebirr Mobile Wallet</p>
                          <p className="text-sm text-gray-600">Pay instantly with your Telebirr account</p>
                        </div>
                      </Label>
                    </div>
                  </div>

                  {paymentMethod === "telebirr" && (
                    <div className="ml-6 space-y-2">
                      <Label htmlFor="telebirrPhone">Telebirr Phone Number</Label>
                      <Input
                        id="telebirrPhone"
                        placeholder="+251 9XX XXX XXX"
                        value={formData.telebirrPhone}
                        onChange={(e) => handleInputChange("telebirrPhone", e.target.value)}
                        required
                      />
                    </div>
                  )}

                  {/* CBE Bank */}
                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <RadioGroupItem value="cbe" id="cbe" />
                    <div className="flex-1">
                      <Label htmlFor="cbe" className="flex items-center space-x-3 cursor-pointer">
                        <Building className="h-5 w-5 text-blue-600" />
                        <div>
                          <p className="font-medium">Commercial Bank of Ethiopia</p>
                          <p className="text-sm text-gray-600">Online banking transfer</p>
                        </div>
                      </Label>
                    </div>
                  </div>

                  {/* Dashen Bank */}
                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <RadioGroupItem value="dashen" id="dashen" />
                    <div className="flex-1">
                      <Label htmlFor="dashen" className="flex items-center space-x-3 cursor-pointer">
                        <Building className="h-5 w-5 text-purple-600" />
                        <div>
                          <p className="font-medium">Dashen Bank</p>
                          <p className="text-sm text-gray-600">Secure bank transfer</p>
                        </div>
                      </Label>
                    </div>
                  </div>

                  {/* Bank of Abyssinia */}
                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <RadioGroupItem value="abyssinia" id="abyssinia" />
                    <div className="flex-1">
                      <Label htmlFor="abyssinia" className="flex items-center space-x-3 cursor-pointer">
                        <Building className="h-5 w-5 text-orange-600" />
                        <div>
                          <p className="font-medium">Bank of Abyssinia</p>
                          <p className="text-sm text-gray-600">Direct bank payment</p>
                        </div>
                      </Label>
                    </div>
                  </div>
                </RadioGroup>

                {(paymentMethod === "cbe" || paymentMethod === "dashen" || paymentMethod === "abyssinia") && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <Label htmlFor="bankAccount">Account Number</Label>
                      <Input
                        id="bankAccount"
                        placeholder="Enter your account number"
                        value={formData.bankAccount}
                        onChange={(e) => handleInputChange("bankAccount", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Order Items */}
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div key={item.productId} className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <img
                          src={item.product.image || "/placeholder.svg"}
                          alt={item.product.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div>
                          <p className="font-medium text-sm">{item.product.name}</p>
                          <p className="text-gray-600 text-sm">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <span className="font-medium">{(item.product.price * item.quantity).toFixed(2)} ETB</span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{subtotal.toFixed(2)} ETB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery</span>
                    <span>{shipping === 0 ? "Free" : `${shipping.toFixed(2)} ETB`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>VAT (15%)</span>
                    <span>{tax.toFixed(2)} ETB</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>{total.toFixed(2)} ETB</span>
                    </div>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                  <Lock className="h-4 w-4 mr-2" />
                  {isLoading ? "Processing Payment..." : `Pay ${total.toFixed(2)} ETB`}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  🇪🇹 Secure Ethiopian payment processing. Your information is protected.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  )
}
