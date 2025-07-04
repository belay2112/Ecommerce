import type { Product, Category, User, CartItem, Order, Review } from "./types"

// Sample data initialization
export const initializeData = () => {
  if (typeof window === "undefined") return

  // Initialize categories if not exists
  if (!localStorage.getItem("categories")) {
    const categories: Category[] = [
      { id: "electronics", name: "Electronics", icon: "📱" },
      { id: "clothing", name: "Clothing", icon: "👕" },
      { id: "home", name: "Home & Garden", icon: "🏠" },
      { id: "sports", name: "Sports", icon: "⚽" },
      { id: "books", name: "Books", icon: "📚" },
      { id: "beauty", name: "Beauty", icon: "💄" },
      { id: "automotive", name: "Automotive", icon: "🚗" },
      { id: "jewelry", name: "Jewelry", icon: "💎" },
    ]
    localStorage.setItem("categories", JSON.stringify(categories))
  }

  // Initialize products with real images
  if (!localStorage.getItem("products")) {
    const products: Product[] = [
      // Electronics
      {
        id: "1",
        name: "Wireless Bluetooth Headphones",
        description:
          "Premium wireless headphones with active noise cancellation, 30-hour battery life, and crystal-clear sound quality. Perfect for music lovers and professionals.",
        price: 2999.99,
        categoryId: "electronics",
        stock: 50,
        image:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        featured: true,
        discount: 15,
        rating: 4.5,
        reviews: 128,
        createdAt: new Date().toISOString(),
      },
      {
        id: "2",
        name: "Smart Fitness Watch",
        description:
          "Advanced smartwatch with heart rate monitoring, GPS tracking, sleep analysis, and 7-day battery life. Track your fitness goals with precision.",
        price: 4999.99,
        categoryId: "electronics",
        stock: 30,
        image:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        featured: true,
        discount: 10,
        rating: 4.3,
        reviews: 89,
        createdAt: new Date().toISOString(),
      },
      {
        id: "3",
        name: "Apple Watch Series 9",
        description:
          "Latest Apple Watch with advanced health monitoring, ECG, blood oxygen sensor, and seamless iPhone integration.",
        price: 12999.99,
        categoryId: "electronics",
        stock: 25,
        image:
          "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        featured: true,
        discount: 5,
        rating: 4.8,
        reviews: 245,
        createdAt: new Date().toISOString(),
      },
      {
        id: "4",
        name: "Samsung Galaxy Watch",
        description: "Premium Android smartwatch with rotating bezel, fitness tracking, and long-lasting battery life.",
        price: 8999.99,
        categoryId: "electronics",
        stock: 40,
        image:
          "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        featured: false,
        discount: 12,
        rating: 4.4,
        reviews: 156,
        createdAt: new Date().toISOString(),
      },
      {
        id: "5",
        name: "Wireless Gaming Mouse",
        description:
          "High-precision gaming mouse with customizable RGB lighting, 16000 DPI sensor, and ergonomic design for competitive gaming.",
        price: 1599.99,
        categoryId: "electronics",
        stock: 35,
        image:
          "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        featured: false,
        discount: 12,
        rating: 4.5,
        reviews: 94,
        createdAt: new Date().toISOString(),
      },
      {
        id: "6",
        name: "Smart Home Speaker",
        description:
          "Voice-controlled smart speaker with premium sound quality, built-in assistant, and smart home integration capabilities.",
        price: 2599.99,
        categoryId: "electronics",
        stock: 55,
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        featured: true,
        discount: 15,
        rating: 4.4,
        reviews: 112,
        createdAt: new Date().toISOString(),
      },
      {
        id: "7",
        name: "Laptop Computer",
        description:
          "High-performance laptop with Intel i7 processor, 16GB RAM, 512GB SSD, and 15.6-inch Full HD display.",
        price: 35999.99,
        categoryId: "electronics",
        stock: 15,
        image:
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        featured: true,
        discount: 8,
        rating: 4.7,
        reviews: 203,
        createdAt: new Date().toISOString(),
      },
      {
        id: "8",
        name: "Smartphone",
        description:
          "Latest smartphone with 128GB storage, triple camera system, 5G connectivity, and all-day battery life.",
        price: 18999.99,
        categoryId: "electronics",
        stock: 60,
        image:
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        featured: true,
        discount: 10,
        rating: 4.6,
        reviews: 189,
        createdAt: new Date().toISOString(),
      },

      // Clothing
      {
        id: "9",
        name: "Premium Cotton T-Shirt",
        description:
          "Ultra-soft 100% organic cotton t-shirt with a comfortable fit. Available in multiple colors and sizes. Perfect for everyday wear.",
        price: 599.99,
        categoryId: "clothing",
        stock: 100,
        image:
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        featured: false,
        discount: 0,
        rating: 4.2,
        reviews: 45,
        createdAt: new Date().toISOString(),
      },
      {
        id: "10",
        name: "Designer Jeans",
        description:
          "Premium denim jeans with a modern fit and classic styling. Made from high-quality cotton blend for comfort and durability.",
        price: 1799.99,
        categoryId: "clothing",
        stock: 45,
        image:
          "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        featured: false,
        discount: 25,
        rating: 4.3,
        reviews: 67,
        createdAt: new Date().toISOString(),
      },
      {
        id: "11",
        name: "Winter Jacket",
        description:
          "Warm and stylish winter jacket with water-resistant fabric, insulated lining, and multiple pockets.",
        price: 3499.99,
        categoryId: "clothing",
        stock: 30,
        image:
          "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        featured: false,
        discount: 15,
        rating: 4.5,
        reviews: 78,
        createdAt: new Date().toISOString(),
      },
      {
        id: "12",
        name: "Casual Dress",
        description:
          "Elegant casual dress perfect for any occasion. Made from breathable fabric with a flattering silhouette.",
        price: 1299.99,
        categoryId: "clothing",
        stock: 55,
        image:
          "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        featured: false,
        discount: 20,
        rating: 4.4,
        reviews: 92,
        createdAt: new Date().toISOString(),
      },

      // Home & Garden
      {
        id: "13",
        name: "Ergonomic Office Chair",
        description:
          "Professional office chair with lumbar support, adjustable height, and breathable mesh back. Designed for all-day comfort and productivity.",
        price: 8999.99,
        categoryId: "home",
        stock: 25,
        image:
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        featured: true,
        discount: 20,
        rating: 4.6,
        reviews: 67,
        createdAt: new Date().toISOString(),
      },
      {
        id: "14",
        name: "Kitchen Knife Set",
        description:
          "Professional chef knife set with 8 high-carbon steel knives, wooden block, and sharpening steel. Essential for any kitchen.",
        price: 3199.99,
        categoryId: "home",
        stock: 20,
        image:
          "https://images.unsplash.com/photo-1593618998160-e34014e67546?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        featured: false,
        discount: 30,
        rating: 4.8,
        reviews: 89,
        createdAt: new Date().toISOString(),
      },
      {
        id: "15",
        name: "Coffee Maker",
        description: "Automatic drip coffee maker with programmable timer, thermal carafe, and brew strength control.",
        price: 2799.99,
        categoryId: "home",
        stock: 35,
        image:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        featured: false,
        discount: 10,
        rating: 4.3,
        reviews: 124,
        createdAt: new Date().toISOString(),
      },
      {
        id: "16",
        name: "Indoor Plant",
        description:
          "Beautiful indoor plant perfect for home decoration. Low maintenance and air-purifying properties.",
        price: 899.99,
        categoryId: "home",
        stock: 80,
        image:
          "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        featured: false,
        discount: 0,
        rating: 4.2,
        reviews: 56,
        createdAt: new Date().toISOString(),
      },

      // Sports
      {
        id: "17",
        name: "Yoga Mat Premium",
        description:
          "Non-slip yoga mat made from eco-friendly materials with superior grip and cushioning. Perfect for yoga, pilates, and meditation practices.",
        price: 899.99,
        categoryId: "sports",
        stock: 75,
        image:
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        featured: false,
        discount: 5,
        rating: 4.4,
        reviews: 32,
        createdAt: new Date().toISOString(),
      },
      {
        id: "18",
        name: "Running Shoes",
        description:
          "Lightweight running shoes with advanced cushioning technology, breathable mesh upper, and durable rubber outsole.",
        price: 2399.99,
        categoryId: "sports",
        stock: 65,
        image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        featured: false,
        discount: 20,
        rating: 4.6,
        reviews: 143,
        createdAt: new Date().toISOString(),
      },
      {
        id: "19",
        name: "Basketball",
        description: "Official size basketball with superior grip and bounce. Perfect for indoor and outdoor play.",
        price: 1299.99,
        categoryId: "sports",
        stock: 50,
        image:
          "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        featured: false,
        discount: 0,
        rating: 4.3,
        reviews: 87,
        createdAt: new Date().toISOString(),
      },
      {
        id: "20",
        name: "Dumbbells Set",
        description: "Adjustable dumbbell set with multiple weight plates. Perfect for home gym and strength training.",
        price: 4999.99,
        categoryId: "sports",
        stock: 25,
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        featured: false,
        discount: 15,
        rating: 4.7,
        reviews: 112,
        createdAt: new Date().toISOString(),
      },

      // Books
      {
        id: "21",
        name: "JavaScript Programming Book",
        description:
          "Complete guide to modern JavaScript programming for beginners and experts. Covers ES6+, async programming, and best practices.",
        price: 799.99,
        categoryId: "books",
        stock: 60,
        image:
          "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        featured: false,
        discount: 0,
        rating: 4.7,
        reviews: 156,
        createdAt: new Date().toISOString(),
      },
      {
        id: "22",
        name: "Business Strategy Book",
        description:
          "Essential guide to business strategy and management. Learn from successful entrepreneurs and business leaders.",
        price: 1199.99,
        categoryId: "books",
        stock: 40,
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        featured: false,
        discount: 10,
        rating: 4.5,
        reviews: 89,
        createdAt: new Date().toISOString(),
      },

      // Beauty
      {
        id: "23",
        name: "Organic Face Moisturizer",
        description:
          "Natural face moisturizer with organic ingredients, hyaluronic acid, and vitamin E. Suitable for all skin types and dermatologist tested.",
        price: 499.99,
        categoryId: "beauty",
        stock: 40,
        image:
          "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        featured: true,
        discount: 0,
        rating: 4.1,
        reviews: 78,
        createdAt: new Date().toISOString(),
      },
      {
        id: "24",
        name: "Makeup Palette",
        description:
          "Professional makeup palette with 20 eyeshadow colors, blush, and highlighter. Perfect for creating stunning looks.",
        price: 1899.99,
        categoryId: "beauty",
        stock: 30,
        image:
          "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        featured: false,
        discount: 25,
        rating: 4.4,
        reviews: 134,
        createdAt: new Date().toISOString(),
      },

      // Automotive
      {
        id: "25",
        name: "Car Phone Mount",
        description:
          "Universal car phone mount with 360-degree rotation and strong magnetic hold. Compatible with all smartphones.",
        price: 599.99,
        categoryId: "automotive",
        stock: 100,
        image:
          "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        featured: false,
        discount: 0,
        rating: 4.2,
        reviews: 67,
        createdAt: new Date().toISOString(),
      },
      {
        id: "26",
        name: "Car Air Freshener",
        description:
          "Long-lasting car air freshener with natural fragrance. Eliminates odors and keeps your car smelling fresh.",
        price: 299.99,
        categoryId: "automotive",
        stock: 150,
        image:
          "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        featured: false,
        discount: 15,
        rating: 4.0,
        reviews: 45,
        createdAt: new Date().toISOString(),
      },

      // Jewelry
      {
        id: "27",
        name: "Gold Necklace",
        description:
          "Elegant 18k gold necklace with delicate chain design. Perfect for special occasions or everyday wear.",
        price: 15999.99,
        categoryId: "jewelry",
        stock: 10,
        image:
          "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        featured: true,
        discount: 5,
        rating: 4.8,
        reviews: 23,
        createdAt: new Date().toISOString(),
      },
      {
        id: "28",
        name: "Silver Ring",
        description:
          "Beautiful sterling silver ring with intricate design. Adjustable size and hypoallergenic material.",
        price: 1999.99,
        categoryId: "jewelry",
        stock: 25,
        image:
          "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        featured: false,
        discount: 10,
        rating: 4.6,
        reviews: 56,
        createdAt: new Date().toISOString(),
      },
    ]
    localStorage.setItem("products", JSON.stringify(products))
  }

  // Initialize admin user if not exists
  if (!localStorage.getItem("users")) {
    const users: User[] = [
      {
        id: "admin",
        name: "Admin User",
        email: "admin@shopmount.com",
        password: "admin123", // In real app, this would be hashed
        createdAt: new Date().toISOString(),
      },
    ]
    localStorage.setItem("users", JSON.stringify(users))
  }

  // Initialize sample reviews
  if (!localStorage.getItem("reviews")) {
    const reviews: Review[] = [
      {
        id: "1",
        productId: "1",
        userId: "user1",
        userName: "Abebe Kebede",
        rating: 5,
        comment: "Excellent headphones! The sound quality is amazing and works perfectly in Addis Ababa.",
        createdAt: new Date(Date.now() - 86400000).toISOString(),
      },
      {
        id: "2",
        productId: "1",
        userId: "user2",
        userName: "Hanan Mohammed",
        rating: 4,
        comment: "Great product, very comfortable to wear for long periods. Fast delivery to Dire Dawa.",
        createdAt: new Date(Date.now() - 172800000).toISOString(),
      },
      {
        id: "3",
        productId: "2",
        userId: "user3",
        userName: "Dawit Tadesse",
        rating: 5,
        comment: "Perfect fitness tracker! Accurate heart rate monitoring and the app works great.",
        createdAt: new Date(Date.now() - 259200000).toISOString(),
      },
      {
        id: "4",
        productId: "3",
        userId: "user4",
        userName: "Sara Alemayehu",
        rating: 5,
        comment: "Love my Apple Watch! The health features are incredible and battery lasts all day.",
        createdAt: new Date(Date.now() - 345600000).toISOString(),
      },
    ]
    localStorage.setItem("reviews", JSON.stringify(reviews))
  }
}

// Product functions
export const getProducts = (): Product[] => {
  if (typeof window === "undefined") return []
  return JSON.parse(localStorage.getItem("products") || "[]")
}

export const getProductById = (id: string): Product | null => {
  const products = getProducts()
  return products.find((product) => product.id === id) || null
}

export const getFeaturedProducts = (): Product[] => {
  return getProducts()
    .filter((product) => product.featured)
    .slice(0, 8)
}

export const addProduct = (product: Omit<Product, "id" | "createdAt">): Product => {
  const products = getProducts()
  const newProduct: Product = {
    ...product,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  }
  products.push(newProduct)
  localStorage.setItem("products", JSON.stringify(products))
  return newProduct
}

export const updateProduct = (id: string, updates: Partial<Product>): void => {
  const products = getProducts()
  const index = products.findIndex((product) => product.id === id)
  if (index !== -1) {
    products[index] = { ...products[index], ...updates }
    localStorage.setItem("products", JSON.stringify(products))
  }
}

export const deleteProduct = (id: string): void => {
  const products = getProducts()
  const filteredProducts = products.filter((product) => product.id !== id)
  localStorage.setItem("products", JSON.stringify(filteredProducts))
}

// Category functions
export const getCategories = (): Category[] => {
  if (typeof window === "undefined") return []
  return JSON.parse(localStorage.getItem("categories") || "[]")
}

// User functions
export const getUsers = (): User[] => {
  if (typeof window === "undefined") return []
  return JSON.parse(localStorage.getItem("users") || "[]")
}

export const getCurrentUser = (): User | null => {
  if (typeof window === "undefined") return null
  const currentUser = localStorage.getItem("currentUser")
  return currentUser ? JSON.parse(currentUser) : null
}

export const loginUser = (email: string, password: string): User | null => {
  const users = getUsers()
  const user = users.find((u) => u.email === email && u.password === password)
  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user))
    return user
  }
  return null
}

export const registerUser = (name: string, email: string, password: string): User | null => {
  const users = getUsers()
  const existingUser = users.find((u) => u.email === email)
  if (existingUser) {
    return null
  }

  const newUser: User = {
    id: Date.now().toString(),
    name,
    email,
    password, // In real app, this would be hashed
    createdAt: new Date().toISOString(),
  }

  users.push(newUser)
  localStorage.setItem("users", JSON.stringify(users))
  localStorage.setItem("currentUser", JSON.stringify(newUser))
  return newUser
}

export const logoutUser = (): void => {
  localStorage.removeItem("currentUser")
}

// Cart functions
export const getCartItems = (): CartItem[] => {
  if (typeof window === "undefined") return []
  return JSON.parse(localStorage.getItem("cart") || "[]")
}

export const addToCart = (productId: string, quantity: number): void => {
  const cart = getCartItems()
  const existingItem = cart.find((item) => item.productId === productId)

  if (existingItem) {
    existingItem.quantity += quantity
  } else {
    cart.push({ productId, quantity })
  }

  localStorage.setItem("cart", JSON.stringify(cart))
}

export const updateCartItem = (productId: string, quantity: number): void => {
  const cart = getCartItems()
  const item = cart.find((item) => item.productId === productId)
  if (item) {
    item.quantity = quantity
    localStorage.setItem("cart", JSON.stringify(cart))
  }
}

export const removeFromCart = (productId: string): void => {
  const cart = getCartItems()
  const filteredCart = cart.filter((item) => item.productId !== productId)
  localStorage.setItem("cart", JSON.stringify(filteredCart))
}

export const clearCart = (): void => {
  localStorage.setItem("cart", "[]")
}

// Wishlist functions
export const getWishlist = (): string[] => {
  if (typeof window === "undefined") return []
  return JSON.parse(localStorage.getItem("wishlist") || "[]")
}

export const addToWishlist = (productId: string): void => {
  const wishlist = getWishlist()
  if (!wishlist.includes(productId)) {
    wishlist.push(productId)
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
  }
}

export const removeFromWishlist = (productId: string): void => {
  const wishlist = getWishlist()
  const filteredWishlist = wishlist.filter((id) => id !== productId)
  localStorage.setItem("wishlist", JSON.stringify(filteredWishlist))
}

// Order functions
export const getAllOrders = (): Order[] => {
  if (typeof window === "undefined") return []
  return JSON.parse(localStorage.getItem("orders") || "[]")
}

export const getUserOrders = (userId: string): Order[] => {
  return getAllOrders().filter((order) => order.userId === userId)
}

export const createOrder = (orderData: Omit<Order, "id" | "createdAt" | "status">): Order => {
  const orders = getAllOrders()
  const newOrder: Order = {
    ...orderData,
    id: Date.now().toString(),
    status: "processing",
    createdAt: new Date().toISOString(),
  }
  orders.push(newOrder)
  localStorage.setItem("orders", JSON.stringify(orders))
  return newOrder
}

// Review functions
export const getProductReviews = (productId: string): Review[] => {
  if (typeof window === "undefined") return []
  const reviews = JSON.parse(localStorage.getItem("reviews") || "[]")
  return reviews.filter((review: Review) => review.productId === productId)
}

export const addReview = (review: Omit<Review, "id" | "createdAt">): Review => {
  const reviews = JSON.parse(localStorage.getItem("reviews") || "[]")
  const newReview: Review = {
    ...review,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  }
  reviews.push(newReview)
  localStorage.setItem("reviews", JSON.stringify(reviews))
  return newReview
}
