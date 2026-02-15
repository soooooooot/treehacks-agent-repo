# Footer Component

A modern, reusable React footer component with social media links built with TypeScript and Tailwind CSS.

## Features

- ✅ **TypeScript Support**: Fully typed with interfaces and proper type safety
- 🎨 **Modern Design**: Clean, minimal design with Tailwind CSS
- 🔗 **Social Media Links**: Twitter, GitHub, and LinkedIn icons included
- 🎭 **Hover Effects**: Smooth color transitions and scale animations
- ♿ **Accessible**: Proper ARIA labels and semantic HTML
- 📱 **Responsive**: Mobile-first design with responsive spacing
- 🔧 **Customizable**: Easy to customize colors, links, and copyright text

## Usage

### Basic Usage

```tsx
import { Footer } from '@/components';

function App() {
  return (
    <div>
      {/* Your page content */}
      <Footer />
    </div>
  );
}
```

### Custom Copyright Text

```tsx
<Footer copyrightText="© 2026 My Company. All rights reserved." />
```

### Custom Background Color

```tsx
<Footer bgColor="bg-gray-900" />
```

### Custom Social Links

```tsx
const customLinks = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourhandle',
    icon: <TwitterIcon />,
    ariaLabel: 'Follow us on Twitter',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/yourorg',
    icon: <GitHubIcon />,
    ariaLabel: 'Visit our GitHub',
  },
];

<Footer socialLinks={customLinks} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `socialLinks` | `SocialLink[]` | Default links | Optional custom social links array |
| `copyrightText` | `string` | `© {year} Soot AI...` | Optional copyright text |
| `bgColor` | `string` | `bg-gray-950` | Optional Tailwind background color class |

## TypeScript Interfaces

```typescript
interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  ariaLabel: string;
}

interface FooterProps {
  socialLinks?: SocialLink[];
  copyrightText?: string;
  bgColor?: string;
}
```

## Styling

The component uses Tailwind CSS with:
- Responsive padding and margins
- Hover effects (color change + scale animation)
- Smooth transitions (200ms)
- Semantic spacing
- Dark theme colors (customizable)

## Example in Layout

```tsx
// app/layout.tsx
import { Footer } from '@/components';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

## Accessibility

- Proper `aria-label` attributes on links
- `target="_blank"` with `rel="noopener noreferrer"` for security
- Semantic HTML5 `<footer>` element
- Keyboard navigation support
- Screen reader friendly

## Browser Support

Works in all modern browsers that support:
- CSS Grid/Flexbox
- CSS Transitions
- SVG
