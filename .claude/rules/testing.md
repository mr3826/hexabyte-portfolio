# Testing Guidelines

## Testing Strategy

- Unit tests for utility functions and business logic
- Integration tests for API endpoints
- Component tests for UI interactions
- E2E tests for critical user flows

## Test Structure

- Use Vitest for unit/integration tests
- Use Playwright for E2E tests
- Group tests by feature/module
- Use descriptive test names

## Coverage Requirements

- Minimum 80% code coverage
- Critical paths must have 100% coverage
- Test error handling and edge cases

## Best Practices

- Write tests before or alongside code
- Mock external dependencies
- Use TypeScript in test files
- Keep tests fast and reliable
