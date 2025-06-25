import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // 1. FormData se values nikalna aur unhein type-check karna
    const formData = await request.formData();

    // Explicitly cast to string for non-file fields.
    // Check for null/undefined as well, as formData.get can return null.
    const name = formData.get('name') as string | null;
    const email = formData.get('email') as string | null;
    const phone = formData.get('phone') as string | null;
    const position = formData.get('position') as string | null;
    const resume = formData.get('resume') as File | null; // Use File | null for resume

    // 2. Validate required fields and their types
    // Ensure that required fields are not null/empty and are strings.
    if (!name || typeof name !== 'string' || name.trim() === '') {
      return NextResponse.json({ error: 'Name is required and must be a string.' }, { status: 400 });
    }
    if (!email || typeof email !== 'string' || email.trim() === '') {
      return NextResponse.json({ error: 'Email is required and must be a string.' }, { status: 400 });
    }
    if (!position || typeof position !== 'string' || position.trim() === '') {
      return NextResponse.json({ error: 'Position is required and must be a string.' }, { status: 400 });
    }
    if (!resume) {
      return NextResponse.json({ error: 'Resume file is required.' }, { status: 400 });
    }

    // Optional: Basic email format validation for the applicant's email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format for applicant email.' },
        { status: 400 }
      );
    }

    // 3. Nodemailer Transporter Setup
    // Ensure environment variables are correctly set for SMTP configuration.
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 465;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASSWORD;
    const smtpFrom = process.env.SMTP_FROM || smtpUser; // Default to SMTP_USER if SMTP_FROM is not set
    const contactEmail = process.env.CONTACT_EMAIL; // Recipient email for applications

    // Critical check for environment variables
    if (!smtpHost || !smtpUser || !smtpPass || !contactEmail || !smtpFrom) {
      console.error('Environment variables for email configuration are missing in careers route.');
      return NextResponse.json(
          { error: 'Server configuration error: Email credentials or host missing.' },
          { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // Use true for 465 (SSL/TLS), false for other ports like 587 (STARTTLS)
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // 4. Convert resume file to buffer for attachment
    const buffer = Buffer.from(await resume.arrayBuffer());
    const filename = resume.name;

    // 5. Prepare email to admin (for new job application)
    const mailOptions = {
      from: `"${name}" <${email}>`, // Applicant's name and email as sender
      to: contactEmail, // Company's email where applications are received
      subject: `New Job Application: ${position}`,
      html: `
        <h2>New Job Application</h2>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      `,
      attachments: [
        {
          filename: filename,
          content: buffer,
        },
      ],
    };

    // 6. Prepare confirmation email to the applicant
    const userMailOptions = {
      from: smtpFrom, // Company's email as sender for confirmation
      to: email, // Applicant's email for confirmation
      subject: 'Thank you for your application - Optivance Inspect',
      html: `
        <h2>Thank you for your application</h2>
        <p>Dear ${name},</p>
        <p>We have received your application for the position of ${position} at Optivance Inspect.</p>
        <p>Our team will review your application and get back to you if your qualifications match our requirements.</p>
        <p>Application Details:</p>
        <ul>
          <li><strong>Position:</strong> ${position}</li>
          <li><strong>Resume:</strong> ${filename}</li>
        </ul>
        <p>Best regards,<br>Optivance Inspect HR Team</p>
      `,
    };

    // 7. Send both emails concurrently
    await Promise.all([
      transporter.sendMail(mailOptions),       // Email to admin
      transporter.sendMail(userMailOptions)    // Confirmation email to applicant
    ]);

    // 8. Send success response to client
    return NextResponse.json(
      { message: 'Application submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing application:', error);
    let errorMessage = 'Failed to submit application due to an internal server error.';
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
