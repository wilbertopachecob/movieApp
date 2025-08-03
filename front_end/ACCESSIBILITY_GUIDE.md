# Accessibility Guide - MovieApp

## Overview

This document outlines the comprehensive accessibility improvements implemented in the MovieApp frontend, ensuring compliance with WCAG 2.1 AA standards and providing an inclusive user experience for all users.

## ♿ Accessibility Features Implemented

### 1. **Semantic HTML Structure**
- Proper use of HTML5 semantic elements (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`)
- Logical heading hierarchy (h1 → h2 → h3)
- Meaningful page titles and landmarks
- Proper form structure with fieldsets and legends

### 2. **ARIA (Accessible Rich Internet Applications)**
- **ARIA Labels**: Descriptive labels for interactive elements
- **ARIA Describedby**: Additional context for form inputs
- **ARIA Live Regions**: Dynamic content announcements
- **ARIA Roles**: Proper roles for custom components
- **ARIA States**: Current states for interactive elements

### 3. **Keyboard Navigation**
- Full keyboard accessibility for all interactive elements
- Logical tab order throughout the application
- Keyboard shortcuts for common actions
- Focus management and focus indicators
- Skip navigation links

### 4. **Screen Reader Support**
- Screen reader only content (`.sr-only` class)
- Descriptive alt text for images
- Proper heading structure
- Live region announcements
- Form labels and descriptions

### 5. **Focus Management**
- Visible focus indicators with high contrast
- Focus trapping for modals
- Focus restoration after modal close
- Programmatic focus management

### 6. **Color and Contrast**
- High contrast mode support
- Color is not the only way to convey information
- Sufficient color contrast ratios
- Dark mode compatibility

### 7. **Motion and Animation**
- Respect for `prefers-reduced-motion` setting
- Non-essential animations can be disabled
- Smooth transitions that don't cause motion sickness

## 🛠️ Technical Implementation

### Accessibility Service

The `AccessibilityService` provides centralized accessibility functionality:

```typescript
// Announce messages to screen readers
accessibilityService.announce('Movie deleted successfully');

// Focus management
accessibilityService.saveFocus();
accessibilityService.restoreFocus();

// Check user preferences
accessibilityService.prefersReducedMotion();
accessibilityService.prefersHighContrast();
```

### Accessibility Directives

#### `appAccessibility` Directive
```html
<div appAccessibility="navigation" 
     announceOnFocus="Movie card focused"
     announceOnClick="Opening movie details">
  <!-- Content -->
</div>
```

#### `appFocusTrap` Directive
```html
<div appFocusTrap>
  <!-- Modal content with trapped focus -->
</div>
```

#### `appLiveRegion` Directive
```html
<div appLiveRegion="polite" [appLiveRegionAtomic]="true">
  <!-- Dynamic content that should be announced -->
</div>
```

## 📋 WCAG 2.1 AA Compliance Checklist

### Perceivable
- [x] **1.1.1 Non-text Content**: All images have alt text
- [x] **1.2.1 Audio/Video**: No audio/video content without alternatives
- [x] **1.3.1 Info and Relationships**: Semantic HTML structure
- [x] **1.3.2 Meaningful Sequence**: Logical reading order
- [x] **1.3.3 Sensory Characteristics**: Not relying on shape, size, or position
- [x] **1.4.1 Use of Color**: Color not the only way to convey information
- [x] **1.4.3 Contrast (Minimum)**: Sufficient color contrast
- [x] **1.4.4 Resize Text**: Text can be resized up to 200%
- [x] **1.4.5 Images of Text**: No images of text used

### Operable
- [x] **2.1.1 Keyboard**: All functionality available via keyboard
- [x] **2.1.2 No Keyboard Trap**: No keyboard traps
- [x] **2.2.1 Timing Adjustable**: No time limits that cannot be adjusted
- [x] **2.2.2 Pause, Stop, Hide**: Moving content can be paused
- [x] **2.3.1 Three Flashes**: No content flashes more than 3 times per second
- [x] **2.4.1 Bypass Blocks**: Skip navigation links available
- [x] **2.4.2 Page Titled**: Pages have descriptive titles
- [x] **2.4.3 Focus Order**: Logical focus order
- [x] **2.4.4 Link Purpose**: Link purpose clear from context
- [x] **2.4.5 Multiple Ways**: Multiple ways to navigate
- [x] **2.4.6 Headings and Labels**: Clear headings and labels
- [x] **2.4.7 Focus Visible**: Focus indicator visible

### Understandable
- [x] **3.1.1 Language of Page**: Page language specified
- [x] **3.1.2 Language of Parts**: Language changes marked
- [x] **3.2.1 On Focus**: No unexpected changes on focus
- [x] **3.2.2 On Input**: No unexpected changes on input
- [x] **3.2.3 Consistent Navigation**: Consistent navigation structure
- [x] **3.2.4 Consistent Identification**: Consistent identification of components
- [x] **3.3.1 Error Identification**: Errors clearly identified
- [x] **3.3.2 Labels or Instructions**: Clear labels and instructions
- [x] **3.3.3 Error Suggestion**: Error suggestions provided
- [x] **3.3.4 Error Prevention**: Error prevention for critical actions

### Robust
- [x] **4.1.1 Parsing**: Valid HTML markup
- [x] **4.1.2 Name, Role, Value**: Custom components have proper names, roles, and values

## 🎯 Component-Specific Accessibility

### Header Component
- Navigation landmark with proper ARIA label
- Menu structure with proper roles
- Dropdown menu with ARIA attributes
- Skip navigation links

### Home Component
- Search form with proper labels and descriptions
- Movie grid with semantic structure
- Empty state with clear messaging
- Live region for dynamic content

### Movie Component
- Movie cards as articles with proper roles
- Keyboard navigation support
- Descriptive action buttons
- Rating information accessible to screen readers

### Login Component
- Form with proper fieldset and legend
- Error messages with ARIA live regions
- Clear validation feedback
- Help text for form fields

### Modal Components
- Focus trapping within modals
- Proper ARIA attributes for dialogs
- Keyboard escape functionality
- Focus restoration after close

## 🧪 Testing Accessibility

### Automated Testing
```bash
# Run accessibility tests
npm run test:accessibility

# Check for ARIA violations
npm run lint:accessibility
```

### Manual Testing Checklist
- [ ] **Keyboard Navigation**: All functionality accessible via keyboard
- [ ] **Screen Reader**: Test with NVDA, JAWS, or VoiceOver
- [ ] **High Contrast**: Test in high contrast mode
- [ ] **Zoom**: Test with 200% zoom
- [ ] **Color Blindness**: Test with color blindness simulators
- [ ] **Motion Sensitivity**: Test with reduced motion preferences

### Browser Developer Tools
- Chrome DevTools Accessibility panel
- Firefox Accessibility Inspector
- Safari Web Inspector Accessibility features

## 📱 Mobile Accessibility

### Touch Targets
- Minimum 44px touch targets
- Adequate spacing between interactive elements
- Touch-friendly button sizes

### Gesture Support
- Swipe gestures for navigation
- Pinch-to-zoom support
- Touch feedback for interactions

### Mobile Screen Readers
- VoiceOver (iOS) compatibility
- TalkBack (Android) compatibility
- Proper touch navigation support

## 🔧 Best Practices

### Writing Accessible Content
```html
<!-- Good: Descriptive alt text -->
<img src="movie-poster.jpg" alt="Poster for The Matrix showing Keanu Reeves in dark sunglasses">

<!-- Good: Proper heading structure -->
<h1>Movie Collection</h1>
<h2>Action Movies</h2>
<h3>The Matrix</h3>

<!-- Good: Form with proper labels -->
<label for="search">Search movies</label>
<input id="search" type="text" aria-describedby="search-help">
<div id="search-help">Type the movie title or genre you want to search for</div>
```

### ARIA Usage Guidelines
```html
<!-- Use ARIA sparingly - prefer semantic HTML -->
<!-- Good: Semantic HTML -->
<button type="submit">Submit</button>

<!-- Good: ARIA for custom components -->
<div role="button" tabindex="0" aria-label="Close dialog">×</div>

<!-- Avoid: Redundant ARIA -->
<button role="button" aria-label="Submit form">Submit</button>
```

### Focus Management
```typescript
// Save focus before opening modal
accessibilityService.saveFocus();

// Trap focus in modal
accessibilityService.trapFocus(modalElement);

// Restore focus after closing modal
accessibilityService.restoreFocus();
```

## 🚀 Future Improvements

### Planned Enhancements
- [ ] **Voice Commands**: Voice navigation support
- [ ] **Braille Display**: Braille display compatibility
- [ ] **Cognitive Accessibility**: Simplified interface option
- [ ] **Motor Accessibility**: Switch navigation support
- [ ] **Auditory Accessibility**: Audio descriptions for visual content

### Monitoring and Maintenance
- Regular accessibility audits
- User feedback collection
- Automated accessibility testing in CI/CD
- Accessibility training for development team

## 📚 Resources

### Documentation
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/)
- [Web Accessibility Initiative](https://www.w3.org/WAI/)

### Testing Tools
- [axe DevTools](https://www.deque.com/axe/)
- [WAVE Web Accessibility Evaluator](https://wave.webaim.org/)
- [Lighthouse Accessibility Audit](https://developers.google.com/web/tools/lighthouse)

### Screen Readers
- [NVDA](https://www.nvaccess.org/) (Windows, free)
- [JAWS](https://www.freedomscientific.com/products/software/jaws/) (Windows)
- [VoiceOver](https://www.apple.com/accessibility/vision/) (macOS/iOS)
- [TalkBack](https://support.google.com/accessibility/android/answer/6283677) (Android)

---

This accessibility guide ensures that MovieApp provides an inclusive experience for all users, regardless of their abilities or assistive technologies used. 