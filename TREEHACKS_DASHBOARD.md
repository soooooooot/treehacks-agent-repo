# TreeHacks 2026 Stats Dashboard

## Overview
A beautiful, animated live stats dashboard for TreeHacks 2026 with a festive brown/orange/pink color theme.

## Features

### 🎨 Visual Design
- **Color Theme**: Brown (#D2691E), Orange (#FF6B35), and Pink (#FF69B4)
- **Dark Background**: Gradient background (dark purple/brown tones)
- **Glow Effects**: Each stat card has a colored glow that intensifies on hover
- **Responsive Design**: Works beautifully on mobile, tablet, and desktop

### 📊 Live Stats
1. **Hackers Active** 👨‍💻
   - Starting value: ~847
   - Increments by 1-5 every 3 seconds

2. **Lines of Code Written** 💻
   - Starting value: ~52,847
   - Increments by 50-250 every 3 seconds

3. **Pizzas Consumed** 🍕
   - Starting value: ~234
   - Increments by 1-3 every 3 seconds

### ✨ Animations
- **Count-up Animation**: Numbers smoothly animate up on initial load and when values change
- **Entrance Animation**: Cards fade in with a staggered delay
- **Hover Effects**: Cards scale up and glow when hovered
- **Icon Bounce**: Emoji icons bounce subtly on hover
- **Progress Bar**: Animated progress bar at bottom of each card
- **Pulsing Indicators**: "LIVE" indicator and corner decorations pulse
- **Gradient Text**: Header text has an animated gradient effect

### 🎯 Interactive Elements
- Hover over any stat card to see enhanced glow and scale effects
- Smooth transitions throughout
- "LIVE" indicator with pulsing green dot

## Technical Implementation

### Component Structure
- `TreeHacksStatsDashboard.tsx`: Main dashboard component
- `StatCard`: Individual stat card sub-component
- Custom animations defined in `globals.css`

### Technologies Used
- **React 19** with hooks (useState, useEffect, useRef)
- **Next.js 16** (App Router)
- **Tailwind CSS 4** for styling
- **TypeScript** for type safety
- **Custom CSS animations** for smooth effects

### Key Features
- Client-side component ("use client")
- Automatic value updates every 3 seconds
- Smooth easing animations (cubic ease-out)
- Responsive grid layout (1 column on mobile, 3 on desktop)
- Optimized with requestAnimationFrame for smooth animations

## Integration
The dashboard is integrated into the main page (`/repo/app/page.tsx`) and appears at the top of the application, above the existing Valentine's content.

## Color Palette
- **Chocolate Brown**: `#D2691E` - Hackers Active
- **Vibrant Orange**: `#FF6B35` - Lines of Code
- **Hot Pink**: `#FF69B4` - Pizzas Consumed
- **Dark Background**: `#2d1b2e` to `#3d2b3e`
- **Gold Accent**: `#d4a574` - Labels
- **Live Green**: `#00ff00` - Live indicator

## Running the Project
```bash
npm install
npm run dev
```

Visit http://localhost:3000 to see the dashboard in action!
