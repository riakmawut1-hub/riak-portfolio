import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Simple in-memory rate limiting
// For production, consider using Redis or a more robust solution
const rateLimit = new Map<string, number[]>();

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 5; // 5 requests per window

function getRateLimitKey(request: NextRequest): string {
  // Try to get IP from various headers (for production behind proxy)
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const ip = forwarded?.split(',')[0] || realIp || request.ip || '127.0.0.1';
  return ip;
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const requests = rateLimit.get(key) || [];

  // Filter out requests outside the time window
  const recentRequests = requests.filter((time) => now - time < RATE_LIMIT_WINDOW_MS);

  if (recentRequests.length >= MAX_REQUESTS) {
    return true;
  }

  // Add current request
  recentRequests.push(now);
  rateLimit.set(key, recentRequests);

  // Clean up old entries periodically (simple cleanup)
  if (Math.random() < 0.01) {
    // 1% chance to clean up
    for (const [k, v] of rateLimit.entries()) {
      const filtered = v.filter((time) => now - time < RATE_LIMIT_WINDOW_MS);
      if (filtered.length === 0) {
        rateLimit.delete(k);
      } else {
        rateLimit.set(k, filtered);
      }
    }
  }

  return false;
}

export function middleware(request: NextRequest) {
  // Apply rate limiting only to contact API endpoint
  if (request.nextUrl.pathname.startsWith('/api/contact')) {
    const key = getRateLimitKey(request);

    if (isRateLimited(key)) {
      return new NextResponse(
        JSON.stringify({ error: 'Too many requests. Please try again later.' }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': '900', // 15 minutes in seconds
          },
        }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/contact/:path*',
};

