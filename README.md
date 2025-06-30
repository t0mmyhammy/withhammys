# Hammy's Home Experts - Website

## 🚨 2024 Update: Key Features & Best Practices

- **Font System:**
  - All headings use Discount font family (multiple weights/styles), body uses DM Sans.
  - Fonts are loaded from `public/fonts` and declared in `app/globals.css` with `@font-face`.
- **Asset Management:**
  - All logos, favicons, and webmanifest are in `public/logos` and `public/favicon`.
  - Asset paths are case-sensitive and must match code references exactly.
- **Forms & API:**
  - Homeowner and Realtor forms share a component, with custom copy and Google Sheets integration.
  - Realtor form submissions go to a separate tab in the same Google Sheet.
  - All forms use strong validation and show creative confirmation messages.
- **Email Handling:**
  - Realtor CTAs use `mailto:` links to open prefilled emails to `hello@withhammys.com`.
  - For sending as `hello@withhammys.com`, use Namecheap Private Email SMTP (`mail.privateemail.com`).
- **Deployment (Vercel):**
  - All static assets must be in the `public/` directory and pushed to GitHub.
  - If assets are missing in production, trigger a redeploy and do a hard refresh.
  - Use the Vercel dashboard to "Promote to Production" if preview is correct but prod is not.
- **Troubleshooting:**
  - If fonts or images 404, check file names, push to GitHub, and redeploy.
  - Use the browser network tab to verify asset URLs and check for 404s.
  - For persistent issues, clear browser cache and CDN cache (via redeploy).

A modern, responsive website for Hammy's Home Experts, a premium home management service serving Metro Detroit homeowners and real estate professionals.

## 🏠 About Hammy's

Hammy's is a family-run home management service that handles the to-dos that come with homeownership - from filters to furnaces - so homeowners can actually enjoy their homes. Founded by siblings-in-law David, Maureen, and Tom, Hammy's brings dependable, high-quality home care to Metro Detroit neighborhoods.

## 🚀 Features

### For Homeowners
- **Custom Home Care Plans** - Tailored maintenance schedules and preventive care
- **24/7 Emergency Coordination** - Rapid response for urgent home issues
- **Trusted Vendor Network** - Vetted professionals with transparent pricing
- **Secure Access Management** - Smart entry systems for safe vendor access
- **Detailed Reporting** - Complete documentation of all home systems and services

### For Real Estate Professionals
- **Client Referral Program** - Seamless handoff process for new homeowners
- **Co-branded Marketing Materials** - Custom landing pages and referral tools
- **Post-closing Support** - Keep relationships warm after the deal closes
- **Agent Training Resources** - Presentation decks and educational materials

## 🎨 Design System

### Brand Colors
- **Primary Navy**: `#032b53` - Main brand color for headings and key elements
- **Secondary Pink**: `#fba0ab` - Accent color for CTAs and highlights
- **Background**: White and light gray (`slate-50`) for clean, professional look

### Typography
- **Headings**: Discount Black - Strong, professional headlines
- **Body Text**: DM Sans - Clean, readable body copy
- **Weights**: Regular (400), Medium (500), Semibold (600), Bold (700)

### Components
- **Cards**: Rounded corners (2xl), subtle shadows, hover effects
- **Buttons**: Rounded (lg/xl), clear hierarchy, hover states
- **Forms**: Clean inputs with focus states matching brand colors
- **Navigation**: Sticky header with centered logo, clear active states

## 🛠 Technical Stack

### Framework & Libraries
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **Lucide React** - Beautiful, consistent icons

### Key Dependencies
\`\`\`json
{
  "next": "^14.0.0",
  "react": "^18.0.0",
  "typescript": "^5.0.0",
  "tailwindcss": "^3.0.0",
  "@radix-ui/react-*": "Various components",
  "lucide-react": "^0.263.1"
}
\`\`\`

## 📁 Project Structure

\`\`\`
hammys-landing/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Homepage for homeowners
│   ├── about/
│   │   └── page.tsx        # About us page
│   ├── for-realtors/
│   │   └── page.tsx        # Realtor-focused landing page
│   └── globals.css         # Global styles and Tailwind imports
├── components/
│   └── ui/                 # shadcn/ui components
├── lib/
│   └── utils.ts           # Utility functions
└── README.md              # This file
\`\`\`

## 🎯 Page Overview

### Homepage (`/`)
**Target Audience**: New homeowners in Metro Detroit
**Key Sections**:
- Hero with value proposition
- How it works (3-step process)
- Why we exist (brand story)
- Customer testimonials
- Service areas with coverage map
- FAQ with contact form
- Final CTA banner

### For Realtors (`/for-realtors`)
**Target Audience**: Real estate professionals
**Key Sections**:
- Hero focused on client relationships
- Partnership benefits
- Service offerings for buyers
- How the referral process works
- Agent testimonials
- Marketing materials and resources
- FAQ for agents

### About Us (`/about`)
**Purpose**: Tell the family story and build trust
**Content**:
- Founder introductions (David, Maureen, Tom)
- Company mission and values
- Community focus and professional expertise

## 🎨 Design Principles

### User Experience
- **Mobile-first responsive design** - Works perfectly on all devices
- **Clear information hierarchy** - Easy to scan and understand
- **Consistent navigation** - Intuitive user flow between pages
- **Accessible design** - Proper contrast, alt text, semantic HTML

### Brand Voice
- **Conversational but professional** - "We handle the real-life chaos"
- **Family-focused** - "Family-run. Community-rooted."
- **Results-oriented** - "Get your weekends back"
- **Trustworthy** - Emphasis on vetted vendors and transparent pricing

### Visual Design
- **Clean, modern aesthetic** - Plenty of whitespace, subtle shadows
- **Consistent component styling** - Reusable design patterns
- **Strategic use of color** - Navy for trust, pink for energy
- **Professional photography placeholders** - Ready for real images

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation
\`\`\`bash
# Clone the repository
git clone [repository-url]

# Navigate to project directory
cd hammys-landing

# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`

### Development
\`\`\`bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run type checking
npm run type-check
\`\`\`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

All components are designed mobile-first with progressive enhancement for larger screens.

## 🔧 Customization

### Adding New Pages
1. Create new file in `app/[page-name]/page.tsx`
2. Follow existing component structure
3. Update navigation links in all relevant pages
4. Maintain consistent styling and brand voice

### Modifying Colors
Update the Tailwind config or use CSS custom properties:
\`\`\`css
:root {
  --primary-navy: #032b53;
  --secondary-pink: #fba0ab;
}
\`\`\`

### Adding Components
Use shadcn/ui CLI to add new components:
\`\`\`bash
npx shadcn@latest add [component-name]
\`\`\`

## 📊 Performance Considerations

- **Optimized images** - Use Next.js Image component with proper sizing
- **Font optimization** - Preload critical fonts, use font-display: swap
- **Code splitting** - Automatic with Next.js App Router
- **SEO optimization** - Proper meta tags, structured data ready

## 🔍 SEO Features

- **Semantic HTML** - Proper heading hierarchy, landmarks
- **Meta tags** - Title, description, Open Graph ready
- **Structured data** - Ready for local business schema
- **Fast loading** - Optimized for Core Web Vitals

## 📞 Contact Information

- **Email**: hello@withhammys.com
- **Service Areas**: Beverly Hills, Birmingham, Bloomfield Hills, Rochester, Troy, West Bloomfield
- **Coverage**: Metro Detroit area

## 🤝 Contributing

This is a client project for Hammy's Home Experts. For updates or modifications, please coordinate with the development team and stakeholders.

## 📄 License

Proprietary - All rights reserved by Hammy's Home Experts

---
