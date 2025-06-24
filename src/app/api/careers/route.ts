import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const position = formData.get('position');
    const resume = formData.get('resume') as File;

    // Validate required fields
    if (!name || !email || !position || !resume) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Convert file to base64
    const buffer = Buffer.from(await resume.arrayBuffer());
    const filename = resume.name;

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_EMAIL,
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

    // Send email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to the applicant
    const userMailOptions = {
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Thank you for your application - ARL Laboratory Services',
      html: `
        <h2>Thank you for your application</h2>
        <p>Dear ${name},</p>
        <p>We have received your application for the position of ${position} at ARL Laboratory Services.</p>
        <p>Our team will review your application and get back to you if your qualifications match our requirements.</p>
        <p>Application Details:</p>
        <ul>
          <li><strong>Position:</strong> ${position}</li>
          <li><strong>Resume:</strong> ${filename}</li>
        </ul>
        <p>Best regards,<br>ARL Laboratory Services HR Team</p>
      `,
    };

    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { message: 'Application submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    );
  }
} 