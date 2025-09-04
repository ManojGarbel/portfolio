# Retro Comic Portfolio - Hakkan Parbej Shah

A modern, recruiter-friendly portfolio website with a retro comic book aesthetic and realistic page-turn interface. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🎨 Features

### Core Functionality
- **Realistic Page-Turn Animation**: Corner fold → lift → reveal → settle with Framer Motion
- **8 Interactive Chapters**: Cover, About, Projects A/B, Skills, Education, Certifications, Contact
- **Multi-Input Navigation**: Click, keyboard arrows, swipe gestures, navbar, pager controls
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Accessibility**: Reduced motion support, keyboard navigation, ARIA labels

### Visual Design
- **Retro Comic Theme**: Faded reds, yellows, blues, off-white papers with halftone textures
- **Typography**: Bangers (comic headlines) + Rubik (clean retro sans)
- **Comic Elements**: Speech bubbles, action bursts, panel borders, vintage stamps
- **Textures**: Halftone overlays, paper grain, subtle mis-registration effects

### Technical Features
- **Next.js App Router**: Server-side rendering with dynamic routes
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Custom theme with comic-specific design tokens
- **Framer Motion**: Smooth animations and gesture handling
- **SEO Optimized**: Dynamic metadata, JSON-LD structured data, OG images
- **Contact Form**: Server-side validation with rate limiting and spam protection

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd retro-comic-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── [page]/            # Dynamic route for chapters
│   ├── api/contact/       # Contact form API endpoint
│   ├── layout.tsx         # Root layout with fonts and providers
│   └── page.tsx           # Home page (redirects to cover)
├── components/            # React components
│   ├── panels/           # Page content components
│   │   ├── HeroPanel.tsx
│   │   ├── AboutPanel.tsx
│   │   ├── ProjectsAPanel.tsx
│   │   ├── ProjectsBPanel.tsx
│   │   ├── SkillsPanel.tsx
│   │   ├── EducationPanel.tsx
│   │   ├── CertificationsPanel.tsx
│   │   └── ContactPanel.tsx
│   ├── providers/        # React context providers
│   │   └── PageStateProvider.tsx
│   ├── PageBook.tsx      # Main page flip orchestrator
│   ├── Page.tsx          # Individual page component
│   ├── FlipLayer.tsx     # Page flip animation layer
│   ├── NavBar.tsx        # Navigation bar
│   ├── Pager.tsx         # Previous/Next controls
│   └── GestureLayer.tsx  # Touch/keyboard gesture handling
├── lib/                  # Utility libraries
│   ├── chapters.ts       # Chapter configuration and metadata
│   ├── framer.ts         # Framer Motion variants and animations
│   ├── seo.ts           # SEO metadata generation
│   └── data.ts          # Content data (projects, skills, etc.)
└── styles/
    └── globals.css       # Global styles and comic utilities
```

## 🎮 Navigation Controls

### Desktop
- **Mouse**: Click navbar items, pager buttons, or page edges (12% gutters)
- **Keyboard**: 
  - `←` / `→` arrows: Previous/Next page
  - `Home`: Jump to Cover page
  - `End`: Jump to Contact page
- **Visual**: Chapter tabs on right edge, progress indicator

### Mobile
- **Touch**: Swipe left/right to flip pages
- **Tap**: Page edges or navbar hamburger menu
- **Gestures**: Horizontal swipe with 50px threshold

## 🎨 Customization

### Design Tokens
Edit `tailwind.config.ts` to customize:
- Colors: `paper`, `ink`, `retro-red`, `retro-yellow`, `retro-blue`
- Fonts: Comic and retro font families
- Animations: Custom keyframes and easing functions
- Shadows: Comic-style drop shadows

### Content
Update `src/lib/data.ts` to modify:
- Personal information and bio
- Project details and links
- Skills and certifications
- Education history
- Contact information

### Chapters
Modify `src/lib/chapters.ts` to:
- Add/remove chapters
- Change chapter order
- Update metadata and descriptions

## 🔧 Technical Details

### Page Flip Animation
The realistic page-turn effect uses:
- **CSS 3D Transforms**: `rotateY`, `scaleX`, `skewY` for paper physics
- **Framer Motion**: Timeline control and gesture handling
- **GPU Acceleration**: `will-change: transform` for smooth 60fps
- **Reduced Motion**: Crossfade fallback for accessibility

### Performance Optimizations
- **Code Splitting**: Dynamic imports for panel components
- **Image Optimization**: Next.js Image component with responsive sizes
- **Bundle Analysis**: First Load JS ~169kB (within budget)
- **Static Generation**: Pre-rendered pages for fast loading

### SEO Features
- **Dynamic Metadata**: Unique titles/descriptions per chapter
- **JSON-LD**: Structured data for Person and SoftwareSourceCode
- **Open Graph**: Social media preview images
- **Canonical URLs**: Proper URL structure for each page

## 📱 Responsive Behavior

### Desktop (≥1024px)
- Two-page book layout with visible gutter
- Expanded navbar with labels
- Chapter tabs on right edge
- Full keyboard navigation

### Tablet (768-1023px)
- Single page fills width
- Collapsed navbar with icons
- Floating pager controls

### Mobile (≤767px)
- Full-bleed single page
- Hamburger menu navigation
- Swipe gesture controls
- Larger tap targets (44px minimum)

## 🎯 Performance Budget

- **LCP**: ≤ 2.5s on mid-range 4G Android
- **CLS**: < 0.02 (minimal layout shift)
- **INP**: < 200ms (responsive interactions)
- **Bundle Size**: Initial JS ≤ 140kB gzipped

## 🛠️ Development

### Available Scripts
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

### Code Style
- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js recommended rules
- **Prettier**: Consistent code formatting
- **Conventional Commits**: Semantic commit messages

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on push to main branch

### Other Platforms
The app is compatible with any Node.js hosting platform:
- Netlify
- Railway
- Render
- DigitalOcean App Platform

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

**Hakkan Parbej Shah**
- Email: hakkanparbej@gmail.com
- Phone: +91-7810843038
- GitHub: [github.com/HakkanShah](https://github.com/HakkanShah)
- LinkedIn: [linkedin.com/in/hakkan](https://www.linkedin.com/in/hakkan/)

---

Built with ❤️ using Next.js, TypeScript, and Framer Motion