import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create reusable transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports like 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
});

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { message: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    // Prepare email to admin
    const adminMailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Form Submission - ${formData.queryType}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Query Type:</strong> ${formData.queryType}</p>
        <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `
    };

    // Prepare confirmation email to client
    const clientMailOptions = {
      from: process.env.SMTP_FROM,
      to: formData.email,
      subject: 'Thank you for contacting ARL Laboratory Services',
      html: `
        <h2>Thank you for contacting ARL Laboratory Services</h2>
        <p>Dear ${formData.firstName},</p>
        <p>We have received your message and will get back to you shortly.</p>
        <p>Here's a copy of your message:</p>
        <p><strong>Query Type:</strong> ${formData.queryType}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
        <br>
        <p>Best regards,</p>
        <p>ARL Laboratory Services Team</p>
      `
    };

    try {
      // Send emails
      await Promise.all([
        transporter.sendMail(adminMailOptions),
        transporter.sendMail(clientMailOptions)
      ]);
    } catch (emailError) {
      console.error('Error sending emails:', emailError);
      return NextResponse.json(
        { message: 'Error sending emails. Please try again later.' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { message: 'Error processing form submission' },
      { status: 500 }
    );
  }
} 