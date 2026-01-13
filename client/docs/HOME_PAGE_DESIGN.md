# Home Page Design Document

## Overview
The home page serves as the primary landing page for Manoj Ranga's portfolio website. It creates a strong first impression, showcases his full-stack development expertise in web applications, blockchain, and AI automation, and guides visitors to explore his projects and experience.

---

## Page Structure

### 1. Hero Section
**Purpose**: Create immediate impact and introduce Manoj Ranga as a software engineer

**Content**:
- **Name**: MANOJ RANGA
- **Professional Title**: Software Engineer
- **Headline/Tagline**: "Full-Stack Developer | Blockchain Engineer | AI Automation Specialist"
  - Alternative: "Building Scalable Web Apps, DeFi Protocols & AI-Powered Solutions"
- **Brief Introduction**:
  > "Software Engineer with 2+ years of expertise in full-stack development, blockchain solutions, and AI-powered automation. I build production-ready applications using React, TypeScript, Firebase, and cutting-edge technologies like Solana and Ethereum smart contracts."

- **Call-to-Action Buttons**:
  - Primary: "View My Projects" (links to /projects)
  - Secondary: "Get In Touch" (links to /contact)

- **Quick Links** (Icon buttons):
  - GitHub: https://github.com/kgmanojranga
  - LinkedIn: https://www.linkedin.com/in/manoj-ranga-76531416b
  - Email: manojranga7583@gmail.com

**Design Notes**:
- Full viewport height with animated gradient background
- Typing animation for the tagline
- Profile image/avatar on the right side (desktop) or top (mobile)
- Floating/pulsing animation on CTA buttons
- Scroll indicator at the bottom

---

### 2. About Preview Section
**Purpose**: Provide a compelling introduction highlighting Manoj's unique journey and expertise

**Content**:
- **Section Heading**: "About Me" or "My Journey"

- **Bio Content**:

  **Paragraph 1 - Background & Transition**:
  > I'm a Software Engineer with over 2 years of professional experience specializing in full-stack development, AI-powered automation, and blockchain solutions. My journey into software engineering is unique—I transitioned from 3+ years in Civil Engineering, bringing strong analytical thinking and project management expertise to every project I build.

  **Paragraph 2 - Current Focus & Expertise**:
  > Currently, I work at MetaruneLabs Pvt Ltd, where I develop production-ready applications spanning SaaS platforms, DeFi protocols, and enterprise dashboards. My expertise includes building React/TypeScript frontends, Firebase/NestJS backends, and blockchain smart contracts on Solana (Rust/Anchor) and Ethereum (Solidity). I've delivered solutions processing 100+ blockchain events per minute with sub-second transaction detection and achieved 60-80% database query optimization.

  **Paragraph 3 - Passion & Approach**:
  > I'm passionate about leveraging modern technologies to solve complex problems. Whether it's developing AI-driven workflows for content automation, building decentralized finance protocols, or creating comprehensive test automation frameworks, I combine engineering discipline with modern development practices to deliver scalable, high-performance applications.

- **Stats/Highlights** (displayed as cards or badges):
  - 2+ Years in Software Engineering
  - 6+ Production Projects Delivered
  - 50+ Cloud Functions Developed
  - Multiple Tech Stacks Mastered

- **CTA Button**: "Learn More About Me" (links to /about)

**Design Notes**:
- Two-column layout: text on left, image/graphic on right (desktop)
- Animated counter for stats on scroll
- Subtle gradient background or geometric patterns
- Profile photo or illustration

---

### 3. Skills & Expertise Section
**Purpose**: Showcase comprehensive technical skills across multiple domains

**Content**:
- **Section Heading**: "Technical Skills & Expertise"
- **Subheading**: "Building modern applications with cutting-edge technologies"

**Skill Categories** (displayed as interactive cards with icons):

#### Frontend Development
- **Primary**: React, Next.js, TypeScript
- **Styling**: TailwindCSS, Chakra UI, Ant Design, SASS/SCSS
- **State Management**: Redux Toolkit, Zustand, Context API
- **Form Management**: React Hook Form, Yup, Zod
- **Data Visualization**: Recharts, Chart.js, AG Grid React

#### Backend Development
- **Runtime & Frameworks**: Node.js, NestJS, Express, .NET
- **Serverless**: Firebase Cloud Functions
- **API Development**: REST APIs, OpenAPI Documentation
- **Authentication**: JWT, OAuth, Role-based Access Control
- **Message Queues**: BullMQ, Redis

#### Blockchain & Web3
- **Smart Contracts**: Solidity (Ethereum), Rust/Anchor (Solana)
- **Frameworks**: Hardhat, Foundry, Anchor Framework 0.30.1+
- **Web3 Libraries**: Solana Web3.js, wagmi, viem, ethers.js
- **DeFi Protocols**: Raydium SDK, Chainlink Oracles
- **Tools**: Reown AppKit, The Graph, Helius WebSocket API

#### Database Management
- **Relational**: PostgreSQL, MySQL
- **NoSQL**: Firebase Firestore
- **ORMs**: Prisma ORM
- **Caching**: Redis
- **Analytics**: BigQuery

#### AI & Automation
- **Workflow Automation**: n8n
- **AI Integration**: OpenAI API, Gemini, ElevenLabs
- **Protocols**: MCP (Model Context Protocol)
- **Testing Automation**: Selenium WebDriver 4.x

#### DevOps & Testing
- **CI/CD**: GitHub Actions, Docker
- **Testing**: Jest, Playwright, Mocha
- **Automation**: Selenium, Cross-browser Testing
- **Monitoring**: Sentry Error Tracking
- **Build Tools**: Vite, Turborepo

#### Programming Languages
- JavaScript, TypeScript, C#, Java, Solidity, Rust

#### Additional Skills
- Unity Game Development (C#)
- Google Maps API Integration
- LiveKit Video Conferencing
- PDF Generation
- Mobile-first Responsive Design

**Design Notes**:
- Grid layout with 6 category cards
- Each card has icon, title, and skill tags
- Hover effect reveals detailed list
- Progress bars or skill levels (optional)
- Animated entrance on scroll
- Filter/toggle between skill categories

---

### 4. Featured Projects Section
**Purpose**: Highlight the most impressive and diverse projects

**Content**:
- **Section Heading**: "Featured Projects"
- **Subheading**: "Showcasing full-stack development, blockchain solutions, and enterprise applications"

**Featured Projects** (Display 4 projects):

#### Project 1: WeMeme - Solana DeFi Token Launch Platform
- **Thumbnail**: Crypto/DeFi themed image with Solana branding
- **Duration**: October 2025 - December 2025
- **Role**: Full-stack Developer
- **Description**:
  > A decentralized finance platform for trustless token launches on Solana, featuring real-time blockchain monitoring with sub-second transaction detection processing 100+ events per minute.
- **Key Features**:
  - Rust-based Anchor smart contracts with automated testing
  - Real-time WebSocket monitoring with Redis event correlation
  - Optimized PostgreSQL database (60-80% query performance improvement)
  - NestJS backend with Sentry tracking and BullMQ processing
- **Technologies**:
  - Rust, Anchor Framework, Solana Web3.js, TypeScript, NestJS, PostgreSQL, Prisma, Redis, BullMQ, Raydium SDK, Helius API, Sentry
- **Links**:
  - View Details (internal project page)
  - GitHub (if public)

#### Project 2: Draftables - Fantasy Football Simulation Platform
- **Thumbnail**: Gaming/Sports themed image
- **Duration**: August 2024 - October 2025
- **Role**: Full-stack Developer
- **Description**:
  > A multiplayer fantasy football platform combining Web3 technology with turn-based gameplay, featuring 16 major modules and 50+ Firebase Cloud Functions.
- **Key Features**:
  - Turn-based game logic with MMR matchmaking system
  - Real-time multiplayer via Firestore synchronization
  - Web3 integration with ERC-20 tokens and ERC-1155 NFTs
  - AI opponent decision-making system
  - Unity game integration
- **Technologies**:
  - Firebase Functions, TypeScript, React 18, Chakra UI, Zustand, Solidity, Foundry, Reown AppKit, wagmi, The Graph, Chainlink, Unity, C#
- **Links**:
  - View Details
  - Live Demo (if available)

#### Project 3: CityHire - Enterprise Equipment Hire Management
- **Thumbnail**: Dashboard/Enterprise themed image
- **Duration**: December 2024 - April 2025
- **Role**: Frontend Developer (Freelance - Talpha Solutions)
- **Description**:
  > An enterprise-grade equipment rental management dashboard featuring advanced data grids, real-time tracking, and comprehensive reporting.
- **Key Features**:
  - AG Grid React with server-side pagination and CSV export
  - Interactive Chart.js dashboards for KPI tracking
  - Google Maps integration for equipment tracking
  - Role-based access control
  - Advanced search and filtering capabilities
- **Technologies**:
  - React 18, Redux Toolkit, Vite, TailwindCSS, AG Grid React, Chart.js, React Hook Form, Yup, Google Maps API
- **Links**:
  - View Details
  - Case Study

#### Project 4: JAAP MFM - Media Futures Market
- **Thumbnail**: Marketing/Media planning themed image
- **Duration**: May 2025 - November 2025
- **Role**: Frontend Developer (Freelance - Talpha Solutions)
- **Description**:
  > A media planning and budget management platform with AI-powered content scoring for marketing agencies.
- **Key Features**:
  - Multi-step client workflow with context extraction
  - AI-powered content quality scoring
  - Interactive Recharts timeline visualizations
  - Dynamic scorecard reporting with accordion UI
  - Version tracking for user edits vs AI suggestions
- **Technologies**:
  - React 19, TypeScript, React Hook Form, Yup, Context API, Recharts, Tailwind CSS
- **Links**:
  - View Details

**CTA Button**: "View All Projects" (links to /projects)

**Design Notes**:
- Grid layout (2x2 on desktop, 1 column on mobile)
- Project cards with hover effects showing more details
- Consistent aspect ratio for thumbnails (16:9)
- Technology badges/tags with brand colors
- Animated entrance on scroll
- Filter by category (Web3, Full-stack, Enterprise, etc.)

---

### 5. Experience Timeline Section
**Purpose**: Showcase professional journey and credibility

**Content**:
- **Section Heading**: "Professional Experience"
- **Subheading**: "From Civil Engineering to Software Development"

**Timeline Items** (Vertical timeline with 3 positions):

#### Software Engineer - MetaruneLabs Pvt Ltd
- **Duration**: August 2023 - Present (2.5+ years)
- **Location**: Sri Lanka
- **Key Achievements**:
  - Developed full-stack applications spanning SaaS platforms, DeFi protocols, and enterprise dashboards
  - Built smart contracts on Solana (Rust/Anchor) and Ethereum (Solidity)
  - Achieved sub-second transaction detection processing 100+ blockchain events/minute
  - Optimized database queries by 60-80% for trading data
  - Created comprehensive test automation frameworks with Selenium WebDriver
- **Technologies**: React, TypeScript, Firebase, NestJS, Solana, Ethereum, PostgreSQL, Selenium

#### Freelance Software Developer - Talpha Solutions
- **Duration**: November 2024 - November 2025 (1 year)
- **Location**: Remote
- **Key Achievements**:
  - Delivered production-ready React applications for enterprise clients
  - Built equipment hire management dashboard with AG Grid and Google Maps
  - Created media planning platform with AI-powered content scoring
  - Implemented advanced data visualization and form validation systems
- **Technologies**: React 18/19, Redux Toolkit, TailwindCSS, AG Grid, Chart.js, Recharts

#### Civil Engineer - Maga Engineering Pvt Ltd
- **Duration**: August 2019 - October 2022 (3 years 2 months)
- **Location**: Sri Lanka
- **Key Achievements**:
  - Managed aluminium and ceiling fixing sub-contracts for The Grand project
  - Conducted site inspections, quality control, and team coordination
  - Developed strong analytical thinking and project management skills
- **Transition Note**: "This experience taught me discipline, problem-solving, and attention to detail—skills I now apply to building robust software systems."

**Design Notes**:
- Vertical timeline with connecting line
- Company logos or icons on the left
- Date range prominently displayed
- Expandable sections for more details
- Highlight the career transition story
- Use alternating layout (left/right) on desktop

---

### 6. Education & Certifications Section
**Purpose**: Highlight educational background and credentials

**Content**:
- **Section Heading**: "Education"

**Education Items**:

#### BSc. Eng. (Hons) in Civil Engineering
- **Institution**: University of Moratuwa
- **Graduation**: February 2019
- **Icon**: University cap or building icon

#### G.C.E Advanced Level
- **Institution**: Rahula College Matara
- **Year**: 2013
- **Stream**: Science (Mathematics, Chemistry, Physics - All A grades)

**Design Notes**:
- Simple card-based layout
- Institution logos if available
- Minimalist design
- Can be combined with Skills section

---

### 7. Call-to-Action Section
**Purpose**: Encourage visitors to connect and collaborate

**Content**:
- **Main Heading**: "Let's Build Something Together"
- **Supporting Text**:
  > "I'm always interested in hearing about new projects and opportunities. Whether you need a full-stack developer, blockchain engineer, or someone to bring your AI automation ideas to life, let's connect and discuss how we can work together."

- **Primary CTA Button**: "Get In Touch" (links to /contact)

- **Contact Options** (displayed as cards or icons):
  - **Email**: manojranga7583@gmail.com
  - **Phone**: +94 77 2641989
  - **Location**: Matara, Southern Province, Sri Lanka
  - **LinkedIn**: [View Profile](https://www.linkedin.com/in/manoj-ranga-76531416b)
  - **GitHub**: [View Repositories](https://github.com/kgmanojranga)

- **Availability Status**: "Available for freelance projects and full-time opportunities"

**Design Notes**:
- Bold gradient background with contrasting text
- Large, prominent CTA button
- Icon-based contact methods
- Subtle animations
- Full-width section

---

### 8. Footer
**Purpose**: Provide navigation and additional information

**Content**:

**Column 1 - Navigation**:
- Home
- About
- Projects
- Resume
- Contact

**Column 2 - Quick Links**:
- Featured Projects
- Skills
- Experience
- Education

**Column 3 - Connect**:
- GitHub: https://github.com/kgmanojranga
- LinkedIn: https://www.linkedin.com/in/manoj-ranga-76531416b
- Email: manojranga7583@gmail.com
- Phone: +94 77 2641989

**Bottom Bar**:
- **Copyright**: © 2025 Manoj Ranga. All rights reserved.
- **Location**: Matara, Sri Lanka
- **Tagline**: "Built with React, TypeScript & Tailwind CSS"

**Design Notes**:
- Dark background with light text
- Three-column layout on desktop
- Stacked on mobile
- Social icons with hover effects
- Minimal, clean design

---

## Content Guidelines

### Tone and Voice
- **Professional yet approachable**: Technical expertise without jargon
- **Confident but humble**: Showcase achievements without arrogance
- **Clear and concise**: Direct communication of value
- **Action-oriented**: Focus on results and impact
- **Story-driven**: Highlight the unique Civil Engineering to Software Engineering transition

### Text Length
- **Headlines**: 3-7 words (e.g., "Full-Stack Developer | Blockchain Engineer")
- **Taglines**: 5-10 words (e.g., "Building Scalable Web Apps & DeFi Protocols")
- **Descriptions**: 1-3 sentences max
- **Bios**: 2-3 short paragraphs (150-200 words total)

### Visual Elements
- **Color Scheme**:
  - Primary: Professional blue/purple for tech feel
  - Secondary: Accent colors for blockchain (gold/orange) and AI (green/teal)
  - Neutral: Grays for text and backgrounds
- **Typography**:
  - Headings: Bold, modern sans-serif
  - Body: Readable, clean sans-serif
  - Code/Tech: Monospace for technical terms
- **Imagery**:
  - Professional headshot
  - Project screenshots
  - Technology logos/icons
  - Abstract tech/blockchain graphics
- **Animations**:
  - Typing effect for hero tagline
  - Scroll-triggered fade-ins
  - Hover effects on cards
  - Counter animations for stats

---

## Responsive Design Considerations

### Mobile (< 768px)
- Single column layout for all sections
- Hamburger menu navigation
- Touch-friendly buttons (min 44x44px)
- Optimized images (mobile-first)
- Stack hero content vertically
- Reduce hero section height (70vh)
- Simplified skill cards (2 columns)
- Project cards stack vertically

### Tablet (768px - 1024px)
- Two-column layouts for skills and projects
- Adjusted spacing and typography
- Maintain visual hierarchy
- Hero section at 80vh
- Experience timeline remains vertical

### Desktop (> 1024px)
- Full multi-column layouts
- Maximum content width: 1280px (centered)
- Enhanced hover effects and animations
- Full viewport height hero section
- 2x2 grid for featured projects
- Three-column footer
- Parallax effects (optional)

---

## Performance Considerations
- Lazy load project images and thumbnails
- Optimize hero section for fast initial render (< 2s)
- Use WebP format for images with JPEG/PNG fallbacks
- Minimize animation impact on performance (use CSS transforms)
- Code splitting for heavy components (charts, maps)
- Preload critical fonts
- Defer non-critical JavaScript
- Optimize for Core Web Vitals (LCP, FID, CLS)

---

## Accessibility
- Semantic HTML5 structure (header, nav, main, section, footer)
- ARIA labels for interactive elements
- Keyboard navigation support (tab order, focus states)
- Sufficient color contrast (WCAG AA minimum - 4.5:1)
- Focus indicators on all interactive elements
- Alt text for all images and icons
- Skip to main content link
- Screen reader friendly animations (prefers-reduced-motion)

---

## Implementation Priority

### Phase 1 (MVP) - Core Sections
1. **Hero Section** - First impression with name, title, CTA
2. **About Preview Section** - Brief bio and transition story
3. **Skills & Expertise Section** - Comprehensive skill showcase
4. **Featured Projects Section** - 4 key projects
5. **Call-to-Action Section** - Contact encouragement
6. **Footer** - Navigation and social links

### Phase 2 (Enhanced Experience)
1. **Experience Timeline Section** - Professional journey
2. **Education Section** - Academic background
3. **Advanced animations** - Scroll effects, parallax
4. **Interactive elements** - Skill filters, project filters
5. **Performance optimization** - Image optimization, lazy loading
6. **Analytics integration** - Track user behavior

### Phase 3 (Polish & Optimization)
1. **Testimonials Section** - Client/colleague feedback (collect testimonials)
2. **Blog/Articles preview** - If blog is added later
3. **A/B testing** - Test different CTAs and layouts
4. **SEO optimization** - Meta tags, structured data
5. **Micro-interactions** - Button feedback, loading states

---

## SEO & Meta Information

### Page Title
"Manoj Ranga - Full-Stack Developer | Blockchain Engineer | Portfolio"

### Meta Description
"Software Engineer with 2+ years of experience in full-stack development, blockchain solutions (Solana, Ethereum), and AI automation. View my portfolio of React, TypeScript, and DeFi projects."

### Keywords
- Full-stack developer
- React developer
- TypeScript developer
- Blockchain engineer
- Solana developer
- Ethereum developer
- Smart contract developer
- Firebase developer
- NestJS developer
- Sri Lanka software engineer

---

## Analytics & Tracking

### Key Metrics to Track
- Page views and unique visitors
- Time spent on page
- Scroll depth
- CTA click-through rates (View Projects, Get In Touch)
- Project card clicks
- Social link clicks
- Mobile vs Desktop traffic
- Bounce rate
- Navigation patterns

---

## Content Update Schedule

### Regular Updates (Monthly)
- Featured projects (rotate or add new ones)
- Skills section (add new technologies learned)
- Experience descriptions (update achievements)

### Periodic Updates (Quarterly)
- Professional summary
- Project statistics
- Testimonials (when received)

### Annual Updates
- Complete content review
- Design refresh if needed
- Performance audit
- Accessibility audit

---

## Notes & Considerations

### Unique Value Proposition
- **Career Transition Story**: Highlight the unique journey from Civil Engineering to Software Engineering as a differentiator
- **Diverse Expertise**: Showcase versatility across Web2 (React, Firebase) and Web3 (Solana, Ethereum) technologies
- **Full-Stack Capability**: Emphasize end-to-end development skills from smart contracts to frontend
- **International Experience**: Freelance work demonstrates ability to work with diverse clients

### Brand Personality
- **Analytical**: Engineering mindset applied to software
- **Innovative**: Early adopter of blockchain and AI technologies
- **Reliable**: Proven track record with production applications
- **Growth-Oriented**: Continuous learning and skill expansion

### Competitive Advantages
- 2+ years of production experience with modern tech stack
- Hands-on blockchain development (both Solana and Ethereum)
- AI/automation integration experience
- Enterprise and startup experience
- Strong educational foundation (Engineering degree)

---

## Related Documentation
- [Portfolio Structure](./PORTFOLIO_STRUCTURE.md) - Overall site architecture
- [Responsive Design Guide](./RESPONSIVE_DESIGN_GUIDE.md) - Responsive implementation
- [Dark Mode Setup](./DARK_MODE_SETUP.md) - Theme system
- [Using Custom Colors](./USING_CUSTOM_COLORS.md) - Color palette
- [Resume Content](./manoj-resume.md) - Full professional details

---

## Quick Reference - Copy-Ready Content

### Hero Section Text
```
Name: MANOJ RANGA
Title: Software Engineer
Tagline: Full-Stack Developer | Blockchain Engineer | AI Automation Specialist
Intro: Software Engineer with 2+ years of expertise in full-stack development, blockchain solutions, and AI-powered automation. I build production-ready applications using React, TypeScript, Firebase, and cutting-edge technologies like Solana and Ethereum smart contracts.
```

### Stats for Display
```
2+ Years Software Engineering Experience
6+ Production Projects Delivered
50+ Firebase Cloud Functions Developed
100+ Blockchain Events/Minute Processing
60-80% Database Query Optimization
```

### Quick Bio (50 words)
```
Full-stack developer specializing in React, TypeScript, and blockchain solutions. Transitioned from Civil Engineering to build production-ready web applications, DeFi protocols, and AI automation systems. Currently at MetaruneLabs, delivering scalable solutions with Firebase, NestJS, Solana, and Ethereum.
```

---

## Implementation Plan

### Current State Assessment

**Existing Implementation** (`src/pages/HomePage.tsx`):
- Basic hero section with name and title
- Placeholder text (needs replacement with actual content)
- Minimal styling
- No other sections implemented

**Status**: MVP - Basic structure only

---

### Implementation Strategy

#### Phase 1: Component Architecture (Step 1-2)

**Step 1: Create Section Components**
Create individual components for each homepage section in `src/components/sections/`:

1. **HeroSection.tsx** (Already exists - needs enhancement)
   - Full viewport height hero
   - Name, title, tagline, intro
   - CTA buttons (View Projects, Get In Touch)
   - Social links
   - Profile image/avatar
   - Scroll indicator

2. **AboutPreviewSection.tsx** (New)
   - Bio paragraphs (3 paragraphs highlighting background, expertise, passion)
   - Stats/highlights cards
   - "Learn More" CTA

3. **SkillsSection.tsx** (New)
   - 6 skill category cards
   - Frontend, Backend, Blockchain, Database, AI, DevOps
   - Interactive hover effects
   - Skill tags with icons

4. **FeaturedProjectsSection.tsx** (New)
   - 4 featured project cards
   - Project thumbnails
   - Tech stack badges
   - Links to details
   - Filter/category tags

5. **ExperienceTimelineSection.tsx** (New)
   - 3 experience items (MetaruneLabs, Talpha Solutions, Maga Engineering)
   - Vertical timeline design
   - Company logos/icons
   - Key achievements
   - Expandable details

6. **EducationSection.tsx** (New)
   - 2 education items
   - University degree
   - A-Level certification
   - Simple card layout

7. **CTASection.tsx** (New)
   - Large heading and supporting text
   - Primary CTA button
   - Contact options cards
   - Availability status

**Step 2: Update HomePage Structure**
Compose all sections in `src/pages/HomePage.tsx`:
```tsx
<div className="w-full">
  <HeroSection />
  <AboutPreviewSection />
  <SkillsSection />
  <FeaturedProjectsSection />
  <ExperienceTimelineSection />
  <EducationSection />
  <CTASection />
</div>
```

---

#### Phase 2: Data Structure (Step 3)

**Step 3: Create Data Files**

Update `src/data/portfolio.ts` with structured content:

```typescript
export const personalInfo = {
  name: "MANOJ RANGA",
  title: "Software Engineer",
  tagline: "Full-Stack Developer | Blockchain Engineer | AI Automation Specialist",
  intro: "Software Engineer with 2+ years...",
  bio: {
    background: "I'm a Software Engineer with over 2 years...",
    expertise: "Currently, I work at MetaruneLabs...",
    passion: "I'm passionate about leveraging..."
  },
  stats: [
    { value: "2+", label: "Years Software Engineering Experience" },
    { value: "6+", label: "Production Projects Delivered" },
    { value: "50+", label: "Firebase Cloud Functions Developed" },
    { value: "100+", label: "Blockchain Events/Minute Processing" }
  ],
  contact: { email, phone, location },
  social: { github, linkedin }
}

export const skills = [
  {
    category: "Frontend Development",
    icon: "💻",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", ...]
  },
  // ... 5 more categories
]

export const featuredProjects = [
  {
    id: "wememe",
    title: "WeMeme - Solana DeFi Token Launch Platform",
    thumbnail: "/projects/wememe.jpg",
    duration: "October 2025 - December 2025",
    role: "Full-stack Developer",
    description: "A decentralized finance platform...",
    keyFeatures: [...],
    technologies: ["Rust", "Anchor", "Solana", ...],
    links: { details: "/projects/wememe" }
  },
  // ... 3 more projects
]

export const experience = [
  {
    company: "MetaruneLabs Pvt Ltd",
    logo: "/logos/metarune.png",
    role: "Software Engineer",
    duration: "August 2023 - Present (2.5+ years)",
    location: "Sri Lanka",
    achievements: [...],
    technologies: [...]
  },
  // ... 2 more positions
]

export const education = [
  {
    degree: "BSc. Eng. (Hons) in Civil Engineering",
    institution: "University of Moratuwa",
    graduation: "February 2019",
    icon: "🎓"
  },
  // ... 1 more
]
```

---

#### Phase 3: Section Implementation (Steps 4-10)

**Step 4: Implement HeroSection**
- Full viewport height (`min-h-screen`)
- Centered content with Container
- Gradient background
- Name with large typography (`text-6xl`)
- Animated tagline (typing effect - optional)
- Two CTA buttons (primary + secondary)
- Social icon links
- Scroll down indicator

**Responsive Behavior**:
- Mobile: text-4xl, single column, full-width buttons
- Tablet: text-5xl, buttons side-by-side
- Desktop: text-6xl, profile image on right

**Step 5: Implement AboutPreviewSection**
- Two-column layout (text left, image/graphic right)
- 3 bio paragraphs
- Stats grid (2x2 on mobile, 4x1 on desktop)
- Animated counter on scroll
- "Learn More" button

**Responsive Behavior**:
- Mobile: single column, stats 2x2
- Desktop: two columns, stats 4x1

**Step 6: Implement SkillsSection**
- Grid layout (1 col mobile, 2 col tablet, 3 col desktop)
- 6 category cards with icons
- Hover effect reveals detailed skill list
- Technology badges/tags
- Animated entrance on scroll

**Responsive Behavior**:
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns

**Step 7: Implement FeaturedProjectsSection**
- Grid layout (1 col mobile, 2x2 desktop)
- Project cards with thumbnails (16:9 aspect ratio)
- Title, description, tech badges
- Hover effects (scale, border glow)
- "View All Projects" CTA

**Responsive Behavior**:
- Mobile: 1 column, vertical stack
- Desktop: 2x2 grid

**Step 8: Implement ExperienceTimelineSection**
- Vertical timeline with connecting line
- 3 experience cards
- Company logo/icon on left
- Date range prominently displayed
- Achievement bullets
- Highlight career transition story
- Expandable details (optional)

**Responsive Behavior**:
- Mobile: Vertical timeline, stacked
- Desktop: Alternating left/right layout (optional)

**Step 9: Implement EducationSection**
- Simple 2-card layout
- University cap icons
- Institution name and year
- Minimal design
- Can be combined with Experience section

**Responsive Behavior**:
- Mobile: Stacked
- Desktop: Side-by-side

**Step 10: Implement CTASection**
- Full-width gradient background
- Centered content (Container size="md")
- Large heading + supporting text
- Primary CTA button
- Contact options as icon cards
- Availability status badge

**Responsive Behavior**:
- Mobile: Vertical stack, full-width button
- Desktop: Centered, auto-width button

---

#### Phase 4: Polish & Optimization (Steps 11-12)

**Step 11: Add Animations & Transitions**
- Scroll-triggered fade-ins (intersection observer)
- Typing animation for hero tagline (optional)
- Counter animations for stats
- Hover effects on cards and buttons
- Smooth transitions between sections

**Step 12: Responsive Testing & Refinement**
- Test at 320px, 768px, 1024px, 1440px
- Verify touch targets (min 44x44px)
- Check text readability
- Ensure images scale properly
- Test dark mode on all sections
- Verify navigation and CTAs work

---

### Implementation Checklist

#### Components to Create
- [ ] `src/components/sections/HeroSection.tsx` (enhance existing)
- [ ] `src/components/sections/AboutPreviewSection.tsx`
- [ ] `src/components/sections/SkillsSection.tsx`
- [ ] `src/components/sections/FeaturedProjectsSection.tsx`
- [ ] `src/components/sections/ExperienceTimelineSection.tsx`
- [ ] `src/components/sections/EducationSection.tsx`
- [ ] `src/components/sections/CTASection.tsx`

#### Supporting Components
- [ ] `src/components/cards/StatCard.tsx` (for stats display)
- [ ] `src/components/cards/ExperienceCard.tsx` (for timeline items)
- [ ] `src/components/cards/EducationCard.tsx` (for education items)
- [ ] `src/components/common/SocialLinks.tsx` (social media icons)

#### Data Files
- [ ] Update `src/data/portfolio.ts` with all content
- [ ] Add project thumbnails to `public/projects/`
- [ ] Add company logos to `public/logos/`

#### Styling & Theming
- [ ] Ensure all sections use design system colors
- [ ] Implement dark mode variants for all sections
- [ ] Add responsive spacing (py-12 md:py-16 lg:py-20)
- [ ] Ensure consistent typography scale

#### Testing
- [ ] Mobile responsive (320px - 640px)
- [ ] Tablet responsive (640px - 1024px)
- [ ] Desktop responsive (1024px+)
- [ ] Dark mode toggle works on all sections
- [ ] All links and CTAs functional
- [ ] Keyboard navigation works
- [ ] Screen reader accessible

---

### File Structure After Implementation

```
src/
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx          ✅ (enhance existing)
│   │   ├── AboutPreviewSection.tsx   🆕
│   │   ├── SkillsSection.tsx         🆕
│   │   ├── FeaturedProjectsSection.tsx 🆕
│   │   ├── ExperienceTimelineSection.tsx 🆕
│   │   ├── EducationSection.tsx      🆕
│   │   └── CTASection.tsx            🆕
│   ├── cards/
│   │   ├── ProjectCard.tsx           ✅ (exists)
│   │   ├── SkillCard.tsx             ✅ (exists)
│   │   ├── StatCard.tsx              🆕
│   │   ├── ExperienceCard.tsx        🆕
│   │   └── EducationCard.tsx         🆕
│   └── common/
│       └── SocialLinks.tsx           🆕
├── data/
│   └── portfolio.ts                  ✅ (enhance)
├── pages/
│   └── HomePage.tsx                  ✅ (restructure)
└── types/
    └── index.ts                      ✅ (add types)
```

---

### Next Steps

1. **Start with Step 1**: Create all section component files with basic structure
2. **Step 2**: Update HomePage to import and render all sections
3. **Step 3**: Create comprehensive data structure in portfolio.ts
4. **Steps 4-10**: Implement each section one by one
5. **Steps 11-12**: Add polish, animations, and test thoroughly

**Estimated Time**:
- Phase 1 (Architecture): 1-2 hours
- Phase 2 (Data): 1 hour
- Phase 3 (Implementation): 6-8 hours
- Phase 4 (Polish): 2-3 hours
- **Total**: 10-14 hours

---

### Notes & Considerations

**Content Priority**:
- Hero Section: Most important - first impression
- Featured Projects: Second most important - showcases skills
- Skills & Experience: Support credibility
- CTA: Critical for conversion

**Performance**:
- Lazy load images below the fold
- Optimize project thumbnails (WebP format)
- Minimize animation performance impact
- Consider code splitting for heavy sections

**Accessibility**:
- All sections need proper headings (h2, h3)
- Interactive elements need focus states
- Images need alt text
- Color contrast must meet WCAG AA

**SEO**:
- Proper heading hierarchy
- Descriptive alt text
- Semantic HTML structure
- Meta tags for social sharing
