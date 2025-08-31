import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const itemType = formData.get('itemType') as string;
    const description = formData.get('description') as string;
    const budget = formData.get('budget') as string;
    const timeline = formData.get('timeline') as string;
    const preferredContact = formData.get('preferredContact') as string;
    const imageCount = parseInt(formData.get('imageCount') as string) || 0;

    // Validate required fields
    if (!name || !email || !itemType || !description) {
      return NextResponse.json(
        { message: 'Name, email, item type, and description are required' },
        { status: 400 }
      );
    }

    // Extract and process images for attachments
    const attachments = [];
    for (let i = 0; i < imageCount; i++) {
      const image = formData.get(`image_${i}`) as File;
      if (image) {
        // Convert the File object to a Buffer
        const buffer = Buffer.from(await image.arrayBuffer());

        attachments.push({
          filename: `reference_image_${i + 1}_${image.name}`,
          content: buffer, 
          contentType: image.type,
        });
      }
    }

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, 
      replyTo: email, 
      subject: `🎨 New Custom Order Request: ${itemType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto;">
          <h2 style="color: #7A4E7A; border-bottom: 3px solid #7A4E7A; padding-bottom: 15px; text-align: center;">
            🎨 New Custom Order Request
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 25px; border-radius: 12px; margin: 25px 0; border-left: 5px solid #7A4E7A;">
            <h3 style="color: #4B2B4F; margin-top: 0; font-size: 20px;">👤 Customer Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4B2B4F; width: 150px;">Name:</td>
                <td style="padding: 8px 0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4B2B4F;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #7A4E7A;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4B2B4F;">Phone:</td>
                <td style="padding: 8px 0;">${phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4B2B4F;">Preferred Contact:</td>
                <td style="padding: 8px 0; text-transform: capitalize;">${preferredContact}</td>
              </tr>
            </table>
          </div>
          
          <div style="background-color: #ffffff; padding: 25px; border: 2px solid #e9ecef; border-radius: 12px; margin: 25px 0;">
            <h3 style="color: #4B2B4F; margin-top: 0; font-size: 20px;">📋 Project Requirements</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4B2B4F; width: 150px;">Item Type:</td>
                <td style="padding: 8px 0; text-transform: capitalize;">${itemType.replace('-', ' ')}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4B2B4F;">Budget Range:</td>
                <td style="padding: 8px 0;">${budget || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4B2B4F;">Timeline:</td>
                <td style="padding: 8px 0;">${timeline || 'Not specified'}</td>
              </tr>
            </table>
          </div>
          
          <div style="background-color: #fff8f8; padding: 25px; border: 2px solid #ffe6e6; border-radius: 12px; margin: 25px 0;">
            <h3 style="color: #4B2B4F; margin-top: 0; font-size: 20px;">💭 Detailed Description</h3>
            <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #f0f0f0;">
              <p style="line-height: 1.8; white-space: pre-wrap; margin: 0; font-size: 16px;">${description}</p>
            </div>
          </div>
          
          ${attachments.length > 0 ? `
          <div style="background-color: #f0f8ff; padding: 25px; border: 2px solid #e6f3ff; border-radius: 12px; margin: 25px 0;">
            <h3 style="color: #4B2B4F; margin-top: 0; font-size: 20px;">🖼️ Reference Images (${attachments.length})</h3>
            <p style="color: #666; margin-bottom: 15px;">Customer has uploaded ${attachments.length} reference image${attachments.length > 1 ? 's' : ''} to help visualize their requirements.</p>
            <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #e6f3ff;">
              <p style="margin: 0; color: #4B2B4F; font-weight: 500;">📎 Images are attached to this email for your reference.</p>
            </div>
          </div>
          ` : ''}
          
          <div style="margin-top: 35px; padding: 25px; background: linear-gradient(135deg, #7A4E7A, #4B2B4F); border-radius: 12px; text-align: center; color: white;">
            <h3 style="margin: 0 0 15px 0; font-size: 22px;">🚀 Next Steps</h3>
            <p style="margin: 0; font-size: 16px; line-height: 1.6;">
              Review the requirements and reference images above.<br>
              Contact the customer to discuss design concepts and pricing.<br>
              Prepare a detailed quote and timeline for approval.
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef; text-align: center; color: #6c757d;">
            <p style="margin: 0;">This custom order request was submitted from your website.</p>
            <p style="margin: 5px 0 0 0;">To reply, simply reply to this email.</p>
          </div>
        </div>
      `,
      text: `
🎨 New Custom Order Request

👤 Customer Details:
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Preferred Contact: ${preferredContact}

📋 Project Requirements:
Item Type: ${itemType.replace('-', ' ')}
Budget Range: ${budget || 'Not specified'}
Timeline: ${timeline || 'Not specified'}

💭 Detailed Description:
${description}

${attachments.length > 0 ? `🖼️ Reference Images: ${attachments.length} image(s) attached` : '🖼️ Reference Images: None provided'}

---
This custom order request was submitted from your website.
To reply, simply reply to this email.
      `,
      attachments: attachments, 
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Your custom order request has been submitted successfully! We will review your requirements and get back to you within 24-48 hours.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Custom order email sending error:', error);
    return NextResponse.json(
      { message: 'Failed to submit your custom order request. Please try again later or contact us directly.' },
      { status: 500 }
    );
  }
}