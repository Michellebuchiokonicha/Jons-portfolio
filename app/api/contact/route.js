
import nodemailer from 'nodemailer';

export async function POST(req) {
  const { firstName, lastName, email, company, message } = await req.json();

  
  const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS, 
    },
  });

  try {
    
    await transporter.sendMail({
      from: `"${firstName} ${lastName}" <${email}>`,
      to: process.env.RECEIVER_EMAIL, 
      subject: `New Contact Message from ${firstName} ${lastName}`,
      text: `
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Company: ${company}
        Message: ${message}
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error sending email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
