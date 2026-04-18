# Code Style Rules

## TypeScript/React Guidelines

- Use functional components with hooks
- Prefer TypeScript interfaces over types for object shapes
- Use descriptive variable and function names
- Keep components small and focused
- Use React.memo for performance optimization when needed
- Follow PascalCase for components, camelCase for functions/variables

## File Organization

- Group related files in feature directories
- Use index.ts for barrel exports
- Keep utility functions in shared utils directory
- Separate UI components from business logic

## Import Order

1. React and Next.js imports
2. Third-party libraries
3. Internal imports (absolute paths)
4. Relative imports

## Code Quality

- Enable ESLint and Prettier
- Use strict TypeScript configuration
- Write meaningful comments for complex logic
- Avoid any types unless absolutely necessary
