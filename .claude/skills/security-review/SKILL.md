---
description: Automated security review for the portfolio website
---

# Security Review Skill

Automatically performs security analysis of the codebase.

## Triggers:
- Before deployment
- After sensitive code changes
- On demand via `/security-review`

## Checks Performed:
- Environment variable exposure
- SQL injection vulnerabilities
- XSS prevention measures
- Authentication/authorization issues
- Dependency security scans
- HTTPS enforcement
- CORS configuration

## Tools Used:
- Supabase security advisors
- Dependency vulnerability scanners
- Code pattern analysis
- Configuration validation

## Output:
- Security risk report
- Remediation recommendations
- Priority-based action items
