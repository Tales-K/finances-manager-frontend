---
applyTo: '**'
---

## File Organization & Structure (Priority 1)
1. **Split files bigger than 100 lines** into smaller, focused components
1. **Split css files bigger than 150 lines** into smaller, focused files, ideally one per component
2. **Component reusability**: Extract shared logic into reusable components in `components/`
3. **Directory structure**:
   - `pages/` - Feature/page-specific components
   - `components/` - Shared, reusable components  
   - `layout/` - Layout components used across pages
   - `api/` - Centralized API requests and data mocking
   - `styles/` - Global styles, colors, fonts, theme variables
   - `types/` - TypeScript type definitions
   - `hooks/` - Custom React hooks
   - `utils/` - Pure utility functions
4. **File operations**: Use `mv` or `rm` for moving/renaming/deleting files
5. **Clean up**: Delete unused files instead of leaving them empty

## Code Quality & Standards (Priority 2)
7. **Production-ready code**: Write clean, maintainable code with proper error handling and edge cases
8. **Custom components**: Use React components for form elements (`<Input>`, `<Button>`) instead of native HTML
9. **Data handling**: Mock data via API calls in `/api/mockData.js`, not hardcoded in components
10. **Library preference**: Use popular libraries for common functionality instead of custom implementations
12. **Error boundaries**: Implement React error boundaries for graceful error handling

## Testing & Quality Assurance (Priority 3)
14. **Code consistency**: ESLint, Prettier, and pre-commit hooks for consistent code style
15. **Performance optimization**: Implement React.memo, useMemo, useCallback for expensive operations
16. **Accessibility**: WCAG 2.1 AA compliance, semantic HTML, proper ARIA labels

## Architecture & Performance (Priority 4)
17. **State management**: Consistent patterns for global state, loading states, and error handling
18. **API patterns**: Standardized error handling, loading indicators, and data fetching patterns
19. **Code splitting**: Lazy load routes and heavy components for better performance
20. **Environment management**: Separate configs for development, staging, and production

## Styling & UI (Priority 5)
21. **Flexbox-first**: Default to Flexbox for all layouts and styling
22. **Dark theme**: Modern, sleek dark theme design
23. **Component CSS**: Each component should have its own CSS file when needed
24. **Design system**: Consistent spacing, typography, and color tokens

## Security & Production Readiness (Priority 6)
25. **Input validation**: Validate and sanitize all user inputs
26. **Environment variables**: Use .env files for sensitive configuration

## Workflow & Communication (Priority 7)
29. **Ask before proceeding** if unsure about styling or implementation choices
30. **Concise summaries**: Focus on the most important changes only
31. **Suggest improvements**: Recommend new features/improvements after task completion
32. **No documentation files**: Don't create summary documentation of changes

## Language
33. **Use english language**: even if the provided prompt or image is in other language. Translate existent code, texts, labels that are not in english.

## Others
34. **Avoid too many ifs**, use object composition instead
35. **Check file size** for all changed files using a single command that lists the size of all of them