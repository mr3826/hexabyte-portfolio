# API Conventions

## Supabase Integration

- Use TypeScript types generated from Supabase schema
- Implement proper error handling for database operations
- Use Row Level Security (RLS) policies
- Optimize queries with proper indexes

## API Design

- RESTful endpoints with consistent naming
- Proper HTTP status codes
- Input validation and sanitization
- Rate limiting for public endpoints

## Data Fetching

- Use React Query for server state management
- Implement proper loading and error states
- Cache strategies for frequently accessed data
- Pagination for large datasets

## Security

- Environment variables for sensitive data
- JWT token management
- CORS configuration
- Input validation on both client and server
