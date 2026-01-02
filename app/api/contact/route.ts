import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import dbConnect from '../../../lib/mongodb';
import Contact from '../../../models/Contact';

// Initialize Resend only if API key is available
const getResend = () => {
  if (process.env.RESEND_API_KEY) {
    return new Resend(process.env.RESEND_API_KEY);
  }
  return null;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Input validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, phone, and message are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Sanitize inputs (basic)
    const sanitizedData = {
      name: name.trim().substring(0, 100),
      email: email.trim().toLowerCase().substring(0, 100),
      phone: phone.trim().substring(0, 20),
      subject: subject?.trim().substring(0, 200) || '',
      message: message.trim().substring(0, 2000),
    };

    // Connect to MongoDB
    await dbConnect();

    // Log the data being saved (for debugging)
    console.log('Saving contact submission:', {
      name: sanitizedData.name,
      email: sanitizedData.email,
      phone: sanitizedData.phone,
      hasSubject: !!sanitizedData.subject,
      messageLength: sanitizedData.message.length
    });

    // Save contact submission
    const contact = await Contact.create(sanitizedData);
    
    console.log('Contact saved successfully:', contact._id);

    // Send email notification (if RESEND_API_KEY is configured)
    if (process.env.RESEND_API_KEY && process.env.CONTACT_EMAIL) {
      try {
        const resend = getResend();
        if (resend) {
          await resend.emails.send({
          from: 'Portfolio Contact <onboarding@resend.dev>', // You'll need to verify a domain or use Resend's default
          to: process.env.CONTACT_EMAIL,
          subject: `New Contact Form Submission${sanitizedData.subject ? `: ${sanitizedData.subject}` : ''}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #ea580c;">New Contact Form Submission</h2>
              <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Name:</strong> ${sanitizedData.name}</p>
                <p><strong>Email:</strong> <a href="mailto:${sanitizedData.email}">${sanitizedData.email}</a></p>
                <p><strong>Phone:</strong> <a href="tel:${sanitizedData.phone}">${sanitizedData.phone}</a></p>
                ${sanitizedData.subject ? `<p><strong>Subject:</strong> ${sanitizedData.subject}</p>` : ''}
                <p><strong>Message:</strong></p>
                <p style="white-space: pre-wrap; background: white; padding: 15px; border-radius: 4px;">${sanitizedData.message}</p>
              </div>
              <p style="color: #6b7280; font-size: 12px;">Submitted at: ${new Date().toLocaleString()}</p>
              <p style="margin-top: 20px;">
                <a href="mailto:${sanitizedData.email}" style="background: #ea580c; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Reply to ${sanitizedData.name}</a>
              </p>
            </div>
          `,
          });
        }
      } catch (emailError) {
        // Log email error but don't fail the request
        console.error('Failed to send email notification:', emailError);
      }
    }

    return NextResponse.json(
      { success: true, id: contact._id },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Contact form error:', error);
    console.error('Error details:', {
      name: error?.name,
      message: error?.message,
      stack: error?.stack
    });

    // Handle validation errors from Mongoose
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((err: any) => err.message);
      return NextResponse.json(
        { error: `Validation error: ${errors.join(', ')}` },
        { status: 400 }
      );
    }

    // Handle MongoDB connection errors
    if (error.name === 'MongoServerError' || error.message?.includes('Mongo')) {
      return NextResponse.json(
        { error: 'Database connection error. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: error?.message || 'Failed to submit form. Please try again later.' },
      { status: 500 }
    );
  }
}

