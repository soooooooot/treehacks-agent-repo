# TreeHacks 2026 Stats Dashboard

## Overview
A polished, animated live stats dashboard for TreeHacks 2026 with a festive brown/orange/pink color theme.

## Features

### Stats Tracked
1. **Hackers Active** 👨‍💻
   - Starting value: ~847
   - Increments by 0-2 every 3 seconds
   - Orange color (#d97706)

2. **Lines of Code Written** ⚡
   - Starting value: ~52,473
   - Increments by 50-200 every 3 seconds
   - Pink color (#ec4899)

3. **Pizzas Consumed** 🍕
   - Starting value: ~243
   - Increments by 0-1 every 3 seconds (70% chance)
   - Brown color (#92400e)

### Animations & Effects
- **Initial Count-Up Animation**: Stats count from 0 to their starting values over 2 seconds using smooth easing
- **Staggered Entrance**: Cards appear one by one with a 150ms delay
- **Live Updates**: Stats increment every 3 seconds to simulate real-time activity
- **Flash Effect**: Cards pulse/flash when values update
- **Hover Effects**: Cards scale up and show a glow effect on hover
- **Bouncing Trees**: 🌲 emojis in the header bounce continuously
- **Live Indicator**: Pulsing dot showing "Live Now" status
- **Background Gradient**: Warm festive gradient (yellow → orange → pink)

### Design Elements
- **Color Scheme**: Brown (#92400e), Orange (#d97706), Pink (#ec4899)
- **Icons**: Emoji-based icons for each stat
- **Responsive**: Works on mobile and desktop
- **Modern UI**: Rounded cards with shadows, glows, and smooth transitions
- **Typography**: Bold, large numbers for easy reading

## Files Created/Modified

### New Files
- `/repo/app/components/TreeHacksStatsDashboard.tsx` - Main dashboard component

### Modified Files
- `/repo/app/page.tsx` - Integrated dashboard at the top of the page
- `/repo/app/globals.css` - Added new animations:
  - `animate-bounce-slow` - Slow bouncing for tree emojis
  - `animate-bounce-quick` - Quick bounce for value updates
  - `animate-pulse-dot` - Pulsing dot animation for live indicator

## Usage
The dashboard is automatically displayed at the top of the home page. It requires no user interaction and updates automatically.

## Technical Details
- Built with React 19 and Next.js 16
- TypeScript for type safety
- Tailwind CSS for styling
- Client-side component (`"use client"`)
- Uses React hooks: `useState`, `useEffect`, `useRef`
- Smooth cubic easing for count-up animation
- Efficient re-renders with proper state management

## Customization
To modify stats, edit the `stats` array in `TreeHacksStatsDashboard.tsx`:
- Change `startValue` for initial values
- Modify `increment()` function for different update patterns
- Adjust colors via `color` and `glowColor` properties
- Change icons by updating the `icon` emoji
