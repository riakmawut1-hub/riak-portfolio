import { NextResponse } from 'next/server';

/**
 * Keep-alive endpoint to prevent Render free tier from spinning down
 * This endpoint can be pinged every 5-10 minutes by a cron service
 */
export async function GET() {
  return NextResponse.json(
    { 
      status: 'ok', 
      timestamp: new Date().toISOString(),
      message: 'Service is awake' 
    },
    { status: 200 }
  );
}

