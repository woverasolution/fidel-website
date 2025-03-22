import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Create a new ratelimiter that allows 3 requests per minute
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(2, '1 m'),
  analytics: true,
});

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request: Request) {
    
    
    try {
    // Rate limit by IP
    const ip = request.headers.get('x-forwarded-for') || 'anonymous';
    const { success } = await ratelimit.limit(ip);
    
    if (!success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in 1 minute.' },
        { status: 429 }
      );
    }

    // Get form data from request body
    const { name, email, message, schoolName, schoolType } = await request.json();

    // Validate required fields
    if (!name || !email || !message || !schoolName || !schoolType) {
      return NextResponse.json(
        { error: 'Name, email, message, school name, and school type are required' },
        { status: 400 }
      );
    }

    // Email configuration
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.RECIPIENT_EMAIL, // Your personal email address
      subject: `Fidel Demo Request from ${name} - ${schoolName}`,
      text: `
        Name: ${name}
        Email: ${email}
        School Name: ${schoolName}
        School Type: ${schoolType}
        
        Message:
        ${message}
      `,
      html: `
        <h3>Fidel Demo Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>School Name:</strong> ${schoolName}</p>
        <p><strong>School Type:</strong> ${schoolType}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
