This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# 🚀 Portfolio Website - Full Stack Project

## 📋 Project Overview

A modern, professional portfolio website with an admin panel for dynamic content management. Built with a clean separation between frontend and backend.

---

## 🏗️ Architecture

```
Portfolio Project/
│
├── portfolio/                    ← Frontend (Next.js)
│   └── [This repository]
│
└── portfolio-backend/            ← Backend (Node.js + Express)
    └── [Separate repository]
```

---

## 💻 Tech Stack

### Frontend (Next.js)
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: 
  - Tailwind CSS (utility classes)
  - CSS Modules (component-specific styles)
- **Animations**: 
  - GSAP (text animations)
  - Three.js (3D backgrounds)
- **UI Libraries**:
  - @react-three/fiber
  - @react-three/drei
- **State Management**: React Hooks (useState, useEffect)

### Backend (Node.js - Separate Project)
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **ODM**: Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **Validation**: express-validator
- **File Upload**: Multer (for images)
- **CORS**: Enabled for frontend access

---

## 📁 Frontend Structure (Current - Next.js)

```
portfolio/
│
├── app/
│   ├── layout.tsx                # Root HTML wrapper
│   ├── page.tsx                  # Main homepage (Hero + Projects + Skills)
│   ├── globals.css               # Global styles
│   │
│   └── (site)/                   # Public site group
│       ├── layout.tsx            # Site wrapper (Nav + Footer)
│       └── page.tsx              # Alternative homepage route
│
├── components/
│   └── site/                     # Public-facing components
│       ├── Navigation.tsx        # Fixed navbar with scroll effects
│       ├── Hero.tsx              # Hero section with 3D animation
│       ├── Scene3D.tsx           # Three.js 3D background
│       ├── Projects.tsx          # Projects showcase with filtering
│       ├── Skills.tsx            # Skills display with categories
│       └── Footer.tsx            # Footer with links & contact
│
├── lib/
│   ├── api.ts                    # API endpoints configuration
│   ├── types.ts                  # TypeScript interfaces
│   └── services.ts               # API service functions (CRUD)
│
├── styles/
│   ├── Navigation.module.css     # Navigation styles
│   ├── Hero.module.css           # Hero styles
│   ├── Projects.module.css       # Projects styles
│   ├── Skills.module.css         # Skills styles
│   └── Footer.module.css         # Footer styles
│
├── public/                       # Static assets
│
├── .env.local                    # Environment variables (local)
├── .env.example                  # Environment template
├── tailwind.config.ts            # Tailwind configuration
├── next.config.js                # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies
```

---

## 📁 Backend Structure (To Be Built - Node.js)

```
portfolio-backend/
│
├── models/
│   ├── User.js                   # Admin user model
│   ├── Project.js                # Project model
│   ├── Skill.js                  # Skill model
│   └── BlogPost.js               # Blog post model
│
├── routes/
│   ├── auth.js                   # Authentication routes
│   ├── projects.js               # Project CRUD routes
│   ├── skills.js                 # Skill CRUD routes
│   └── blog.js                   # Blog CRUD routes
│
├── controllers/
│   ├── authController.js         # Auth logic
│   ├── projectController.js      # Project logic
│   ├── skillController.js        # Skill logic
│   └── blogController.js         # Blog logic
│
├── middleware/
│   ├── auth.js                   # JWT authentication middleware
│   ├── errorHandler.js           # Error handling
│   └── upload.js                 # File upload (Multer)
│
├── config/
│   └── database.js               # MongoDB connection
│
├── uploads/                      # Uploaded images
│
├── .env                          # Environment variables
├── .env.example                  # Environment template
├── server.js                     # Express app entry point
└── package.json                  # Dependencies
```

---

## 🎨 Features

### ✅ Currently Implemented (Frontend)

#### 🏠 Homepage
- **Hero Section**
  - Animated text with GSAP
  - 3D particle background with Three.js
  - Interactive geometric shapes (torus, sphere)
  - Mouse-tracking camera movement
  - Call-to-action buttons
  - Scroll indicator

- **Projects Section**
  - Grid layout of project cards
  - Filter: All / Featured
  - Technology tags
  - GitHub & Live demo links
  - Hover animations
  - Currently using dummy data

- **Skills Section**
  - Category filtering (All / Frontend / Backend / DevOps)
  - Animated proficiency bars
  - Skill icons
  - Glassmorphism card design
  - Currently using dummy data

#### 🧭 Navigation
- Fixed navbar with blur effect on scroll
- Smooth scroll to sections
- Mobile responsive hamburger menu
- Active link indicators

#### 📧 Footer
- Social media links (GitHub, LinkedIn, Twitter)
- Quick navigation links
- Contact information
- Copyright and credits

#### 🎨 Design Features
- Royal gradient color scheme (purple/blue)
- Glassmorphism effects
- Smooth animations and transitions
- Fully responsive design
- Modern UI/UX patterns

### ⏳ To Be Implemented

#### Frontend
- [ ] Blog listing page
- [ ] Individual blog post pages
- [ ] About page
- [ ] Contact form
- [ ] Admin login page
- [ ] Admin dashboard
- [ ] Admin CRUD interfaces

#### Backend (Separate Project)
- [ ] Express server setup
- [ ] MongoDB connection
- [ ] Mongoose models
- [ ] Authentication system (JWT)
- [ ] API routes for all entities
- [ ] File upload handling
- [ ] Input validation
- [ ] Error handling
- [ ] CORS configuration

---

## 🔌 API Integration

### API Endpoints (Backend to implement)

```
Authentication:
POST   /api/auth/register       # Register admin
POST   /api/auth/login          # Login admin
GET    /api/auth/me             # Get current user
POST   /api/auth/logout         # Logout

Projects:
GET    /api/projects            # Get all projects
GET    /api/projects/:id        # Get single project
POST   /api/projects            # Create project (admin)
PUT    /api/projects/:id        # Update project (admin)
DELETE /api/projects/:id        # Delete project (admin)

Skills:
GET    /api/skills              # Get all skills
GET    /api/skills/:id          # Get single skill
POST   /api/skills              # Create skill (admin)
PUT    /api/skills/:id          # Update skill (admin)
DELETE /api/skills/:id          # Delete skill (admin)

Blog:
GET    /api/blog                # Get all blog posts
GET    /api/blog/:slug          # Get single post by slug
POST   /api/blog                # Create post (admin)
PUT    /api/blog/:id            # Update post (admin)
DELETE /api/blog/:id            # Delete post (admin)

File Upload:
POST   /api/upload              # Upload image (admin)
```

### API Response Format

```typescript
{
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}
```

---

## 🚀 Getting Started

### Frontend Setup

```bash
# 1. Clone repository
git clone <your-repo-url>
cd portfolio

# 2. Install dependencies
npm install

# 3. Create environment file
cp .env.example .env.local

# 4. Edit .env.local
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_APP_URL=http://localhost:3000

# 5. Run development server
npm run dev

# 6. Open browser
# http://localhost:3000
```

### Backend Setup (To Do)

```bash
# 1. Create backend directory
mkdir portfolio-backend
cd portfolio-backend

# 2. Initialize Node.js project
npm init -y

# 3. Install dependencies
npm install express mongoose cors dotenv bcryptjs jsonwebtoken
npm install -D nodemon

# 4. Create environment file
# .env file with:
MONGODB_URI=mongodb://localhost:27017/portfolio
JWT_SECRET=your-secret-key
PORT=5000
FRONTEND_URL=http://localhost:3000

# 5. Create server.js and start coding
# (Models, Routes, Controllers, Middleware)

# 6. Run server
npm run dev

# Server should run on http://localhost:5000
```

---

## 📦 Dependencies

### Frontend (package.json)

```json
{
  "dependencies": {
    "next": "14.0.4",
    "react": "^18",
    "react-dom": "^18",
    "three": "^0.160.0",
    "@react-three/fiber": "^8.15.13",
    "@react-three/drei": "^9.92.7",
    "gsap": "^3.12.4"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "@types/three": "^0.160.0",
    "autoprefixer": "^10.0.1",
    "eslint": "^8",
    "eslint-config-next": "14.0.4",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "typescript": "^5"
  }
}
```

### Backend (To Install)

```json
{
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^8.1.0",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "bcryptjs": "^2.4.3",
    "jsonwebtoken": "^9.0.2",
    "express-validator": "^7.0.1",
    "multer": "^1.4.5-lts.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.2"
  }
}
```

---

## 🎯 Current Status

### ✅ Phase 1: Frontend Foundation (COMPLETED)

**What's Done:**
- [x] Next.js project setup with TypeScript
- [x] Tailwind CSS configuration
- [x] Global styles with custom theme
- [x] Navigation component with scroll effects
- [x] Hero section with GSAP animations
- [x] 3D background with Three.js
- [x] Projects section with filtering
- [x] Skills section with categories
- [x] Footer component
- [x] All CSS module files
- [x] API integration layer (lib/api.ts, lib/services.ts)
- [x] TypeScript interfaces
- [x] Responsive design for all components
- [x] Dummy data for testing

**Status:** ✅ **FRONTEND IS RUNNING**
- Homepage displays correctly
- All sections visible
- Animations working
- 3D effects rendering
- Responsive on all devices

---

## 🔜 Next Steps

### Phase 2: Backend Development (NEXT)

**Priority Tasks:**

1. **Setup Backend Project**
   - Create portfolio-backend folder
   - Initialize Node.js project
   - Install dependencies
   - Setup folder structure

2. **Database Connection**
   - Setup MongoDB (local or Atlas)
   - Create database connection file
   - Test connection

3. **Create Mongoose Models**
   - User model (admin authentication)
   - Project model
   - Skill model
   - BlogPost model

4. **Authentication System**
   - Register route
   - Login route
   - JWT token generation
   - Password hashing
   - Auth middleware

5. **API Routes**
   - Projects CRUD
   - Skills CRUD
   - Blog CRUD
   - File upload route

6. **Testing**
   - Test all API endpoints with Postman
   - Test CORS configuration
   - Verify JWT authentication

### Phase 3: Admin Panel (AFTER BACKEND)

1. **Admin Login Page**
   - Login form
   - JWT storage
   - Protected routes

2. **Admin Dashboard**
   - Overview statistics
   - Quick actions

3. **Content Management**
   - Projects management interface
   - Skills management interface
   - Blog post editor (with Markdown support)

4. **Media Management**
   - Image upload functionality
   - Image gallery
   - Image optimization

### Phase 4: Blog System

1. **Public Blog Pages**
   - Blog listing page
   - Individual post pages
   - Tags/categories
   - Search functionality

2. **Blog Editor (Admin)**
   - Rich text editor
   - Markdown support
   - Preview functionality
   - Draft/publish system

### Phase 5: Polish & Deploy

1. **Additional Features**
   - Contact form with email
   - Analytics integration
   - SEO optimization
   - Performance optimization

2. **Deployment**
   - Frontend: Vercel/Netlify
   - Backend: Railway/Render/Heroku
   - Database: MongoDB Atlas
   - Environment configuration

---

## 🐛 Known Issues

- [ ] None currently - frontend is working with dummy data

---

## 📝 Notes

### Important Reminders:

1. **NO MongoDB in Frontend**
   - Frontend only makes API calls
   - All database operations in backend
   - Clean separation of concerns

2. **CORS Configuration**
   - Backend must enable CORS
   - Allow frontend URL (http://localhost:3000)
   - Allow credentials for JWT

3. **Environment Variables**
   - Never commit .env files
   - Keep .env.example updated
   - Different configs for dev/production

4. **API Response Format**
   - Always return consistent JSON format
   - Include success/error flags
   - Proper HTTP status codes

5. **Authentication Flow**
   - JWT token stored in localStorage
   - Token sent in Authorization header
   - Protected routes check for valid token

---

## 🤝 Contributing

This is a personal portfolio project. Guidelines for future development:

1. Follow TypeScript best practices
2. Use Tailwind utility classes where possible
3. CSS Modules for complex component styles
4. Keep components small and focused
5. Comment complex logic
6. Test before committing

---

## 📄 License

This is a personal portfolio project. All rights reserved.

---

## 👨‍💻 Author

**Your Name**
- Portfolio: [Your Website]
- GitHub: [@yourusername]
- LinkedIn: [Your LinkedIn]
- Email: your.email@example.com

---

## 🎉 Acknowledgments

- Next.js team for the amazing framework
- Three.js community for 3D capabilities
- Tailwind CSS for utility-first styling
- GSAP for smooth animations

---

**Last Updated:** December 2024  
**Version:** 1.0.0  
**Status:** Frontend Complete ✅ | Backend Pending ⏳