# Project Structure

```
riak-portfolio/
├── app/                          # Next.js App Router
│   ├── api/
│   │   └── contact/
│   │       └── route.ts         # POST endpoint for contact form
│   ├── layout.tsx               # Root layout with SEO metadata
│   ├── page.tsx                 # Main portfolio component
│   └── globals.css              # Global Tailwind styles
│
├── lib/
│   └── mongodb.ts               # MongoDB connection utility (cached)
│
├── models/
│   └── Contact.ts               # Mongoose schema for contact submissions
│
├── public/                      # Static assets
│   └── .gitkeep                 # Place resume.pdf here
│
├── middleware.ts                # Rate limiting for /api/contact
│
├── next.config.js               # Next.js config with security headers
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── postcss.config.js            # PostCSS configuration
├── package.json                 # Dependencies and scripts
├── .gitignore                   # Git ignore rules
│
├── env.example                  # Environment variables template
├── README.md                    # Main documentation
├── SETUP_GUIDE.md              # Step-by-step setup instructions
├── SECURITY.md                  # Security documentation
└── PROJECT_STRUCTURE.md        # This file
```

## Key Files Explained

### `app/page.tsx`
- Main portfolio component with all sections
- Contact form with client-side validation
- Responsive navigation
- Smooth scrolling

### `app/api/contact/route.ts`
- Handles POST requests from contact form
- Validates and sanitizes input
- Saves to MongoDB
- Returns JSON responses

### `lib/mongodb.ts`
- Caches MongoDB connection
- Prevents multiple connections in development
- Handles connection errors gracefully

### `models/Contact.ts`
- Mongoose schema definition
- Validation rules
- Field constraints

### `middleware.ts`
- Rate limiting: 5 requests per 15 minutes per IP
- Only applies to `/api/contact` endpoint
- Returns 429 status when limit exceeded

### `next.config.js`
- Security headers configuration
- X-Frame-Options, CSP, etc.

## Environment Variables

Required in `.env.local` (development) or Render (production):

- `MONGODB_URI`: MongoDB Atlas connection string
- `CONTACT_EMAIL`: Optional, for notifications
- `NODE_ENV`: `development` or `production`

## Next Steps

1. Run `npm install`
2. Create `.env.local` from `env.example`
3. Add MongoDB connection string
4. Test locally with `npm run dev`
5. Deploy to Render (see SETUP_GUIDE.md)

