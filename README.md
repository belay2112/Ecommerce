# ShopMount Ecommerce - Ethiopian E-commerce Platform

A modern, full-featured e-commerce platform built with Next.js 14, TypeScript, and Tailwind CSS, specifically designed for the Ethiopian market with local payment methods.

## 🚀 Features

- **Modern UI/UX**: Built with shadcn/ui components and Tailwind CSS
- **Ethiopian Payment Methods**: Telebirr, CBE, Dashen Bank, Bank of Abyssinia
- **Product Management**: Full CRUD operations for products
- **User Authentication**: Registration, login, and user management
- **Shopping Cart**: Add, remove, and manage cart items
- **Wishlist**: Save favorite products
- **Order Management**: Complete order processing workflow
- **Admin Panel**: Product and order management
- **Responsive Design**: Mobile-first approach
- **Search & Filters**: Advanced product search and filtering
- **Reviews & Ratings**: Customer review system

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Icons**: Lucide React
- **State Management**: React hooks + Local Storage
- **API**: Next.js API Routes
- **Images**: Unsplash integration

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn

### 1. Clone the Repository

\`\`\`bash
git clone <repository-url>
cd shopmount-ecommerce
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
# or
yarn install
\`\`\`

### 3. Environment Setup

Create a `.env.local` file in the root directory:

\`\`\`env
# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME="ShopMount Ecommerce"

# Database (if using external database)
DATABASE_URL="your-database-url"

# Payment Gateway APIs (for production)
TELEBIRR_API_KEY="your-telebirr-api-key"
CBE_API_KEY="your-cbe-api-key"
DASHEN_API_KEY="your-dashen-api-key"

# Email Service (optional)
SMTP_HOST="your-smtp-host"
SMTP_PORT=587
SMTP_USER="your-email"
SMTP_PASS="your-password"
\`\`\`

### 4. Run Development Server

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

\`\`\`bash
npm run build
npm start
# or
yarn build
yarn start
\`\`\`

## 🔧 Configuration

### Admin Access

- **Email**: `admin@shopmount.com`
- **Password**: `admin123`

### Payment Methods Configuration

The app currently uses mock payment processing. For production:

1. **Telebirr Integration**:
   - Register with Ethio Telecom
   - Get API credentials
   - Update `/app/api/payment/telebirr/route.ts`

2. **Bank Integration**:
   - Contact respective banks for API access
   - Update `/app/api/payment/bank/route.ts`

### Database Setup (Optional)

Currently uses localStorage. For production database:

1. **PostgreSQL/MySQL**:
   \`\`\`bash
   npm install prisma @prisma/client
   npx prisma init
   \`\`\`

2. **MongoDB**:
   \`\`\`bash
   npm install mongodb mongoose
   \`\`\`

3. Update data functions in `/lib/data.ts`

## 📁 Project Structure

\`\`\`
shopmount-ecommerce/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   ├── products/      # Product endpoints
│   │   ├── orders/        # Order endpoints
│   │   ├── users/         # User endpoints
│   │   ├── payment/       # Payment endpoints
│   │   └── auth/          # Authentication
│   ├── products/          # Product pages
│   ├── cart/              # Shopping cart
│   ├── checkout/          # Checkout process
│   ├── account/           # User account
│   ├── admin/             # Admin panel
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── layout/           # Layout components
│   └── ...               # Feature components
├── lib/                  # Utility functions
│   ├── data.ts           # Data management
│   ├── types.ts          # TypeScript types
│   └── utils.ts          # Helper functions
├── public/               # Static assets
└── ...config files
\`\`\`

## 🔌 API Endpoints

### Products
- `GET /api/products` - Get all products
- `POST /api/products` - Create product
- `GET /api/products/[id]` - Get product by ID
- `PUT /api/products/[id]` - Update product
- `DELETE /api/products/[id]` - Delete product

### Orders
- `GET /api/orders` - Get all orders
- `POST /api/orders` - Create order

### Users
- `GET /api/users` - Get all users
- `POST /api/users` - Register user
- `POST /api/auth/login` - Login user

### Payment
- `POST /api/payment/telebirr` - Process Telebirr payment
- `POST /api/payment/bank` - Process bank payment

### Other
- `GET /api/categories` - Get categories
- `GET /api/search` - Search products
- `GET /api/reviews/[productId]` - Get product reviews
- `POST /api/reviews` - Add review

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables
4. Deploy

### Other Platforms

- **Netlify**: Configure build settings
- **Railway**: Add environment variables
- **DigitalOcean**: Use App Platform

## 🔒 Security Considerations

1. **Environment Variables**: Never commit sensitive data
2. **Input Validation**: Validate all user inputs
3. **Authentication**: Implement proper session management
4. **HTTPS**: Use SSL certificates in production
5. **Rate Limiting**: Implement API rate limiting

## 🧪 Testing

\`\`\`bash
# Run type checking
npm run type-check

# Run linting
npm run lint

# Run tests (if configured)
npm test
\`\`\`

## 📱 Mobile Optimization

- Responsive design for all screen sizes
- Touch-friendly interface
- Optimized images and performance
- Progressive Web App (PWA) ready

## 🌍 Internationalization

Ready for multiple languages:
- English (default)
- Amharic support ready
- Currency: Ethiopian Birr (ETB)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions:
- Email: support@shopmount.com
- Phone: +251 911 123 456

## 🙏 Acknowledgments

- Built with Next.js and React
- UI components by shadcn/ui
- Icons by Lucide React
- Images from Unsplash
