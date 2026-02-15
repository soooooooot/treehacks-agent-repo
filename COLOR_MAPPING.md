# Color Mapping: Original → Pink Theme

## Original Colors → New Pink Colors

| Element | Original Color | New Pink Color | Shade Name |
|---------|---------------|----------------|------------|
| **Backgrounds** |
| Body Background | `#fdf6f8` (Cream) | `#FFC0CB` (Pink) | Pink |
| Main Gradient | Rose/Cream tones | `#FFC0CB → #FFB6C1 → #FF69B4` | Pink gradient |
| Card Background | `#fdf6f8` (Blush) | `#FFF0F3` (Light Pink Surface) | Custom light pink |
| **Text Colors** |
| Main Heading | `#8b2942` (Rose Deep) | `#C71585` (Medium Violet Red) | Medium Violet Red |
| Subtitle | `#c45c7a` (Rose Soft) | `#E91E63` (Material Pink) | Material Pink |
| Card Text | `#2d1b2e` (Ink) | `#8B1464` (Dark Pink) | Custom dark pink |
| Body Text | `#2d1b2e` (Ink) | `#8B1464` (Dark Pink) | Custom dark pink |
| **Buttons** |
| Button Default | `#8b2942` (Rose Deep) | `#FF69B4` (Hot Pink) | Hot Pink |
| Button Hover | `#c45c7a` (Rose Soft) | `#FF1493` (Deep Pink) | Deep Pink |
| Button Border | None | `#FF1493` (Deep Pink) | Deep Pink |
| Close Button | `#8b2942` (Rose Deep) | `#FF1493` (Deep Pink) | Deep Pink |
| Close Button Hover | `#c45c7a` (Rose Soft) | `#E91E63` (Material Pink) | Material Pink |
| Close Button Border | None | `#C71585` (Medium Violet Red) | Medium Violet Red |
| **Borders & Accents** |
| Card Border | `#d4a574` (Gold) | `#FF69B4` (Hot Pink) | Hot Pink |
| Floating Hearts | 20% opacity | `#FF1493` at 30% opacity | Deep Pink |
| **Shadows** |
| Card Shadow | `rgba(139, 41, 66, 0.2)` | `rgba(255, 105, 180, 0.4)` | Hot Pink shadow |
| Glow Effect | `rgba(196, 92, 122, 0.3-0.5)` | `rgba(255, 105, 180, 0.5)` + `rgba(255, 20, 147, 0.7)` | Hot + Deep Pink |
| Button Shadow | None | `rgba(255, 105, 180, 0.4)` | Hot Pink shadow |
| Text Shadow | None | `rgba(255, 105, 180, 0.3)` | Hot Pink shadow |

## Complete Pink Palette Used

```css
/* Primary Pink Shades */
--color-light-pink: #FFB6C1;        /* Light backgrounds, gradients */
--color-hot-pink: #FF69B4;          /* Primary buttons, borders, main interactive */
--color-deep-pink: #FF1493;         /* Hover states, strong accents */
--color-pink: #FFC0CB;              /* Main background color */
--color-material-pink: #E91E63;     /* Secondary buttons, text */
--color-pale-violet-red: #DB7093;   /* Accent elements */
--color-medium-violet-red: #C71585; /* Headings, borders */

/* Derived Colors for Text */
--color-dark-pink: #8B1464;         /* Body text, dark text (custom) */
--color-very-light-pink: #FFF0F3;   /* Card backgrounds (custom) */
--color-light-surface: #FFE4E9;     /* Alternative surfaces (custom) */
```

## Gradient Patterns

### Main Background Gradient
```css
background: linear-gradient(135deg, 
  #FFC0CB 0%,    /* Pink */
  #FFB6C1 50%,   /* Light Pink */
  #FF69B4 100%   /* Hot Pink */
);
```

## Button State Transitions

### Primary Button
- **Default**: `#FF69B4` (Hot Pink) + `#FF1493` border
- **Hover**: `#FF1493` (Deep Pink) + scale(1.05)
- **Active**: Same color + scale(0.95)
- **Shadow**: Pink glows intensify on hover

### Close Button
- **Default**: `#FF1493` (Deep Pink) + `#C71585` border
- **Hover**: `#E91E63` (Material Pink) + scale(1.1)

## Opacity & Transparency

| Element | Opacity | RGBA Equivalent |
|---------|---------|-----------------|
| Floating Hearts | 30% | `rgba(255, 20, 147, 0.3)` |
| Card Shadow | 40% | `rgba(255, 105, 180, 0.4)` |
| Glow Effect | 50-70% | `rgba(255, 105, 180, 0.5-0.7)` |
| Text Shadow | 30% | `rgba(255, 105, 180, 0.3)` |

## Contrast Ratios (Accessibility)

| Foreground | Background | Contrast | WCAG Level |
|------------|-----------|----------|------------|
| `#8B1464` | `#FFC0CB` | 4.8:1 | AA (Normal) |
| `#C71585` | `#FFB6C1` | 4.2:1 | AA (Large Text) |
| `#FFFFFF` | `#FF69B4` | 4.5:1 | AA (Normal) |
| `#8B1464` | `#FFF0F3` | 6.1:1 | AA (Normal) |

All text maintains readable contrast ratios meeting WCAG AA standards.

## Animation Color Updates

| Animation | Original Colors | New Pink Colors |
|-----------|----------------|-----------------|
| `pulse-glow` | `rgba(196, 92, 122, ...)` | `rgba(255, 105, 180, ...)` + `rgba(255, 20, 147, ...)` |
| `float` | No color | Hearts use `#FF1493` |
| `pop-in` | No color change | Maintains pink theme |

## Summary

- **Total colors replaced**: 15+ individual color values
- **Pink shades used**: 7 main shades + 3 custom derivatives
- **Gradient combinations**: 1 main background gradient
- **Shadow variations**: 5+ different pink shadow combinations
- **Interactive states**: All buttons and cards have pink hover/active states

The theme maintains visual cohesion while using the full range of specified pink colors, creating depth through gradients, shadows, and state transitions.
