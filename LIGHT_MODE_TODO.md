# Light Mode Implementation TODO

## Phase 1: Setup & Configuration

### 1.1 Theme Context & State Management
- [ ] Create a theme context provider (`contexts/ThemeContext.tsx`)
  - [ ] Set up React Context for theme state (light/dark/system)
  - [ ] Add localStorage persistence for user preference
  - [ ] Add system theme detection using `window.matchMedia('(prefers-color-scheme: dark)')`
  - [ ] Handle theme change events and updates

### 1.2 Install Dependencies
- [ ] Install `next-themes` package (recommended for Next.js)
  ```bash
  yarn add next-themes
  ```
- [ ] Alternative: Build custom theme provider if needed

### 1.3 Configure Root Application
- [ ] Wrap app with ThemeProvider in `pages/_app.tsx`
- [ ] Set default theme and storage key
- [ ] Configure theme attribute (class-based approach already set in tailwind.config.js)

---

## Phase 2: Design System Updates

### 2.1 Update CSS Variables
- [ ] Review and refine light mode CSS variables in `styles/globals.css:34-60`
- [ ] Ensure proper contrast ratios for accessibility (WCAG AA compliance)
- [ ] Update light mode colors:
  - [ ] Background colors
  - [ ] Foreground/text colors
  - [ ] Primary/secondary colors
  - [ ] Border colors
  - [ ] Card backgrounds
  - [ ] Accent colors

### 2.2 Component-Specific Styling
- [ ] Review hardcoded colors using Tailwind classes (e.g., `bg-primary`, `text-white`)
- [ ] Replace hardcoded colors with CSS variable-based colors where needed
- [ ] Update custom components in `.btn-outlined` and `.btn-solid` classes for light mode

### 2.3 Background Images & Patterns
- [ ] Review `bg-tile.png` visibility in light mode (`styles/globals.css:98`)
- [ ] Consider creating a light mode variant or adjusting opacity
- [ ] Update `about-image-pattern.png` if needed for light mode contrast

---

## Phase 3: Component Updates

### 3.1 Navigation Components
- [ ] Update `components/navbar.tsx` for light mode styling
  - [ ] Logo visibility in both themes
  - [ ] Navigation link colors
  - [ ] Mobile menu styling
  - [ ] Active link indicators

### 3.2 Layout Components
- [ ] Update `components/Layout.tsx` wrapper styles if needed
- [ ] Update `components/hero.tsx` for light mode
- [ ] Update `components/section.tsx` background/text colors
- [ ] Update `components/section-with-bg.tsx` for light mode compatibility

### 3.3 Content Components
- [ ] Update `components/projectCard.tsx` styling
  - [ ] Card backgrounds
  - [ ] Text colors
  - [ ] Hover states
  - [ ] Shadows
- [ ] Update `components/footer.tsx` for light mode
- [ ] Update `components/CustomNavLink.tsx` for both themes

### 3.4 Page-Specific Updates
- [ ] Review and update `pages/index.tsx` (home page)
- [ ] Review and update `pages/about-me.tsx`
  - [ ] Hero image overlay (`bg-primary bg-opacity-95`)
  - [ ] Text colors in hero section
- [ ] Review and update `pages/projects/index.tsx`
- [ ] Review and update `pages/projects/[id].tsx`
- [ ] Review and update `pages/contact.tsx`

---

## Phase 4: Theme Toggle Component

### 4.1 Create Toggle Component
- [ ] Create `components/ThemeToggle.tsx` component
  - [ ] Add sun/moon icon (use `lucide-react` or `react-icons`)
  - [ ] Add click handler to toggle theme
  - [ ] Add smooth transition animations
  - [ ] Add accessible label and ARIA attributes
  - [ ] Optional: Add system/light/dark three-way toggle

### 4.2 Position Toggle
- [ ] Add theme toggle to navbar (desktop)
- [ ] Add theme toggle to mobile menu
- [ ] Ensure toggle is accessible (keyboard navigation, screen readers)

---

## Phase 5: Visual Polish

### 5.1 Transitions & Animations
- [ ] Add smooth theme transition CSS
  ```css
  * {
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  ```
- [ ] Test animations don't interfere with existing `tailwindcss-animate`

### 5.2 Image Optimization
- [ ] Review all images for visibility in both themes
  - [ ] Profile images (`about-portrait-mask-bw.png`, `about-landscape-mask-bw.png`)
  - [ ] Logo SVG (`public/icons/logo.svg`)
  - [ ] Project images
- [ ] Consider creating light/dark variants for critical images

### 5.3 Special Elements
- [ ] Update gradient text effect in `#my-name` CSS (`styles/globals.css:127-134`)
- [ ] Update mouse animation colors (`#mouse:before`)
- [ ] Review custom components with `bg-[url(...)]` patterns

---

## Phase 6: Testing & QA

### 6.1 Visual Testing
- [ ] Test all pages in light mode
- [ ] Test all pages in dark mode
- [ ] Test theme toggle functionality
- [ ] Verify theme persistence across page navigation
- [ ] Verify theme persistence on browser refresh

### 6.2 Responsive Testing
- [ ] Test light mode on mobile (320px - 767px)
- [ ] Test light mode on tablet (768px - 1023px)
- [ ] Test light mode on desktop (1024px+)
- [ ] Test on 3xl screens (1920px+)

### 6.3 Browser Testing
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

### 6.4 Accessibility Testing
- [ ] Check contrast ratios with WCAG checker
- [ ] Test with screen reader
- [ ] Test keyboard navigation
- [ ] Verify focus indicators in both themes
- [ ] Test with reduced motion preference

### 6.5 Performance Testing
- [ ] Verify no flash of unstyled content (FOUC)
- [ ] Test theme switch performance
- [ ] Verify localStorage usage

---

## Phase 7: Documentation & Deployment

### 7.1 Code Documentation
- [ ] Add comments to theme provider
- [ ] Document theme variable usage
- [ ] Update README with theme toggle information

### 7.2 User Documentation
- [ ] Consider adding tooltip/hint for theme toggle on first visit
- [ ] Optional: Add theme preference to settings/preferences page

### 7.3 Deployment
- [ ] Test in production build (`yarn build`)
- [ ] Verify no console errors or warnings
- [ ] Deploy to staging/preview environment
- [ ] Final QA before production deployment

---

## Optional Enhancements

### Advanced Features
- [ ] Add system theme auto-detection with manual override
- [ ] Add theme transition animations (fade, slide, etc.)
- [ ] Add per-page theme override capability
- [ ] Add theme preview in settings
- [ ] Add custom theme color picker
- [ ] Add theme presets (beyond just light/dark)

### Analytics
- [ ] Track theme preference in Google Analytics
- [ ] Monitor theme toggle usage
- [ ] Gather user feedback on theme implementation

---

## Notes

### Current State Analysis
- Tailwind already configured with `darkMode: ["class"]`
- CSS variables already set up for both `:root` and `.dark`
- Project uses a blue primary color (`hsl(210, 88%, 19%)`) and yellow secondary (`hsl(60, 100%, 50%)`)
- Background pattern (`bg-tile.png`) needs consideration for both themes

### Key Files to Modify
- `pages/_app.tsx` - Add ThemeProvider
- `components/navbar.tsx` - Add theme toggle
- `styles/globals.css` - Refine light mode variables
- All component files with hardcoded color classes

### Recommended Approach
1. Use `next-themes` for simplicity and SSR support
2. Test theme toggle early in development
3. Address contrast issues incrementally
4. Prioritize user experience with smooth transitions
