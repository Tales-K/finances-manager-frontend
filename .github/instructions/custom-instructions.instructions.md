---
applyTo: '**'
---

# Development Conventions

1. Components should be organized by feature/page in the `pages/` directory
2. Shared components go in the `components/` directory
3. Each component should have its own CSS file when styles are needed
4. API calls should be centralized in the `api/` directory
5. Layout components that are used across multiple pages should be in the `layout/` directory
6. I prefer **Flexbox** as the default layout method for all styles.
7. When styling and structuring components, leverage **Flexbox** properties (display: flex, justify-content, align-items, flex-direction, etc.) wherever possible.
8. I prefer using custom React **components** for form elements (e.g., `<Input>`, `<Checkbox>`, `<Button>`) instead of native HTML tags like `<input>`.
9. When mocking data, use the api file with a mocked axios api call instead of hardcoding data in the component. Add a comment with the file structure above each mocked request.