export interface Product {
  id: string
  name: string
  description: string
  price: number
  categoryId: string
  stock: number
  image: string
  featured: boolean
  discount: number
  rating: number
  reviews: number
  createdAt: string
}

export interface Category {
  id: string
  name: string
  icon: string
}

export interface User {
  id: string
  name: string
  email: string
  password: string
  createdAt: string
}

export interface CartItem {
  productId: string
  quantity: number
}

export interface Order {
  id: string
  userId: string
  items: {
    productId: string
    quantity: number
    price: number
  }[]
  total: number
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  shippingAddress: {
    firstName: string
    lastName: string
    address: string
    city: string
    state: string
    zipCode: string
    country: string
  }
  paymentMethod?: string
  createdAt: string
}

export interface Review {
  id: string
  productId: string
  userId: string
  userName: string
  rating: number
  comment: string
  createdAt: string
}
