# Security Measures

This document outlines the security measures implemented in the portfolio website.

## ✅ Implemented Security Features

### Input Validation & Sanitization
- **Client-side validation**: Email format, required fields
- **Server-side validation**: Mongoose schema validation
- **Input sanitization**: Trimming, length limits, type checking
- **Email regex validation**: Prevents invalid email formats

### Rate Limiting
- **Endpoint**: `/api/contact`
- **Limit**: 5 requests per 15 minutes per IP
- **Implementation**: In-memory rate limiting (middleware)
- **Response**: 429 Too Many Requests with Retry-After header

### Security Headers
Configured in `next.config.js`:
- `X-Frame-Options: SAMEORIGIN` - Prevents clickjacking
- `X-Content-Type-Options: nosniff` - Prevents MIME sniffing
- `Referrer-Policy: origin-when-cross-origin` - Controls referrer information
- `Permissions-Policy` - Restricts browser features
- `X-DNS-Prefetch-Control: on` - DNS prefetching control

### Database Security
- **MongoDB Atlas**: Cloud-hosted with authentication
- **Connection string**: Stored in environment variables
- **Schema validation**: Mongoose enforces data types and constraints
- **No SQL injection**: Mongoose handles parameterization

### Environment Variables
- **Secrets**: Stored in `.env.local` (not committed to Git)
- **Production**: Set in Render dashboard
- **Validation**: Required variables checked at runtime

### HTTPS
- **Enforced**: Via Render's SSL/TLS certificates
- **Redirect**: HTTP → HTTPS (automatic on Render)

## 🔐 Best Practices from Cybersecurity Coursework

### Secure by Design Principles
- Input validation at every layer (client + server)
- Defense in depth strategy
- Least privilege access
- Fail securely (graceful error handling)

### Secure Coding Practices
- No sensitive data in repository
- Environment-based configuration
- Error messages don't expose system details
- CORS configured appropriately

## 🚨 Security Checklist

Before deploying to production:

- [ ] MongoDB Atlas network access configured
- [ ] Environment variables set in Render
- [ ] `.env.local` not committed to Git
- [ ] Rate limiting tested
- [ ] Input validation tested
- [ ] Security headers verified
- [ ] HTTPS enabled
- [ ] No console.log with sensitive data
- [ ] Error messages are user-friendly (not exposing internals)

## 📝 Notes

- Rate limiting uses in-memory storage (suitable for single-instance deployments)
- For high-traffic sites, consider Redis-based rate limiting
- MongoDB connection uses connection pooling
- All user inputs are sanitized before database storage

## 🔄 Updates

Security measures are reviewed and updated regularly based on:
- Security best practices
- Next.js security recommendations
- MongoDB security guidelines
- University of Juba Cybersecurity coursework

