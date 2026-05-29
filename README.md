# Dr. Penguin – CCTV & Security Company Website

A premium, production-ready website for **Dr. Penguin** — India's leading CCTV installation and security solutions provider.

## Features

- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **shadcn/ui** components
- **Framer Motion** animations
- **Lucide React** icons
- **Responsive** mobile-first design
- **SEO optimized** with metadata, Open Graph, Twitter Cards
- **Static export** ready for Vercel deployment

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| Next.js 14 | React framework with App Router |
| TypeScript | Type-safe development |
| Tailwind CSS | Utility-first CSS framework |
| shadcn/ui | UI component primitives |
| Framer Motion | Animations & transitions |
| Lucide React | Icon library |

## Project Structure

```
dr-penguin/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout with metadata
│   ├── globals.css        # Global styles
│   ├── services/
│   │   └── page.tsx       # Services page
│   ├── products/
│   │   └── page.tsx       # Products page
│   ├── projects/
│   │   └── page.tsx       # Projects portfolio
│   ├── about/
│   │   └── page.tsx       # About us page
│   └── contact/
│       └── page.tsx       # Contact page
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Footer.tsx
│   ├── ServicesSection.tsx
│   ├── ProductsShowcase.tsx
│   ├── WhyChooseUs.tsx
│   ├── ProjectGallery.tsx
│   ├── Testimonials.tsx
│   ├── CTASection.tsx
│   ├── FloatingButtons.tsx
│   ├── SectionHeading.tsx
│   └── AnimatedCounter.tsx
├── lib/
│   └── utils.ts          # Utility functions
├── public/               # Static assets
├── styles/               # Additional styles
├── tailwind.config.ts    # Tailwind configuration
├── next.config.js        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies
```

## Pages

1. **Homepage** (`/`) — Hero, services, products, stats, projects, testimonials, CTA
2. **Services** (`/services/`) — Detailed services, installation process, FAQ
3. **Products** (`/products/`) — Product catalog with filtering by category
4. **Projects** (`/projects/`) — Portfolio gallery with category filters
5. **About** (`/about/`) — Company story, team, certifications, values
6. **Contact** (`/contact/`) — Contact form, working hours, locations

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/dr-penguin.git
cd dr-penguin

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Update .env.local with your values
NEXT_PUBLIC_WHATSAPP=+919999999999
NEXT_PUBLIC_PHONE=+919999999999
NEXT_PUBLIC_EMAIL=info@drpenguin.in
```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:3000
```

### Build

```bash
# Create production build
npm run build

# The static files will be in the `out/` directory
```

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Other Platforms

Since the project uses `output: 'export'`, the `out/` folder contains static HTML files that can be deployed to:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting provider

## Customization

### Colors
Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  navy: { DEFAULT: "#0A2540", ... },
  "accent-orange": { DEFAULT: "#FF6200", ... },
  "dark-bg": { DEFAULT: "#000000", ... },
}
```

### Contact Information
Update `.env.local` with your actual contact details.

### Content
All content is in the page components. Edit the data arrays to update services, products, projects, testimonials, etc.

## SEO

The site includes:
- Meta tags and Open Graph
- Twitter Cards
- Structured data ready
- robots.txt support
- Sitemap ready for generation

## Performance

- Static site generation for fast loading
- Optimized images with next/image
- Lazy loading for below-fold content
- Minimal JavaScript bundle
- Lighthouse optimized

## License

MIT License — feel free to use for your projects.

---

**Made with security & trust across India** 🇮🇳
