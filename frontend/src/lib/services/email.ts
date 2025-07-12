// Email service using SMTP.js
// This service handles sending emails for contact forms and waitlist signups

declare global {
  interface Window {
    Email: {
      send: (config: {
        SecureToken?: string;
        Host?: string;
        Username?: string;
        Password?: string;
        To: string;
        From: string;
        Subject: string;
        Body: string;
      }) => Promise<string>;
    };
  }
}

// Company email that will receive notifications
const COMPANY_EMAIL = 'wellvestltd@gmail.com';

interface EmailConfig {
  to: string;
  from: string;
  subject: string;
  body: string;
}

export const emailService = {
  /**
   * Send an email using SMTP.js
   */
  async sendEmail({ to, from, subject, body }: EmailConfig): Promise<void> {
    try {
      // Using ElasticEmail SMTP service (they have a free tier)
      // You'll need to sign up at elasticemail.com and get your own credentials
      await window.Email.send({
        Host: "smtp.elasticemail.com",
        Username: "wellvestltd@gmail.com", // Use your ElasticEmail account username
        Password: "", // Replace with your actual ElasticEmail password
        To: to,
        From: from,
        Subject: subject,
        Body: body
      });
      
      // Alternative: Use SecureToken approach (recommended for production)
      // Get your secure token from smtpjs.com after setting up your SMTP server
      // await window.Email.send({
      //   SecureToken: "YOUR_SECURE_TOKEN", // Replace with your actual secure token
      //   To: to,
      //   From: from,
      //   Subject: subject,
      //   Body: body
      // });
    } catch (error) {
      console.error('Failed to send email:', error);
      throw new Error('Failed to send email. Please try again later.');
    }
  },

  /**
   * Send a notification to the company when a contact form is submitted
   */
  async sendContactFormNotification(formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }): Promise<void> {
    const { name, email, phone, message } = formData;
    
    const body = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <p><small>Sent from Wellvest website contact form</small></p>
    `;

    await this.sendEmail({
      to: COMPANY_EMAIL,
      from: COMPANY_EMAIL,
      subject: `New Contact Form: ${name}`,
      body
    });
  },

  /**
   * Send a confirmation email to the user who submitted the contact form
   */
  async sendContactFormConfirmation(formData: {
    name: string;
    email: string;
  }): Promise<void> {
    const { name, email } = formData;
    
    const body = `
      <h2>Thank You for Contacting Wellvest</h2>
      <p>Dear ${name},</p>
      <p>We have received your message and will get back to you as soon as possible.</p>
      <p>In the meantime, feel free to explore our website for more information about our services.</p>
      <br>
      <p>Best regards,</p>
      <p>The Wellvest Team</p>
    `;

    await this.sendEmail({
      to: email,
      from: COMPANY_EMAIL,
      subject: 'Thank You for Contacting Wellvest',
      body
    });
  },

  /**
   * Send a notification to the company when a user joins the waitlist
   */
  async sendWaitlistNotification(email: string): Promise<void> {
    const body = `
      <h2>New Waitlist Signup</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><small>Sent from Wellvest website waitlist form</small></p>
    `;

    await this.sendEmail({
      to: COMPANY_EMAIL,
      from: COMPANY_EMAIL,
      subject: 'New Waitlist Signup',
      body
    });
  },

  /**
   * Send a confirmation email to the user who joined the waitlist
   */
  async sendWaitlistConfirmation(email: string): Promise<void> {
    const body = `
      <h2>Welcome to the Wellvest Waitlist!</h2>
      <p>Thank you for joining our waitlist!</p>
      <p>We're excited to have you on board. We'll notify you as soon as our portfolio dashboard launches.</p>
      <p>In the meantime, feel free to explore our website for more information about our services.</p>
      <br>
      <p>Best regards,</p>
      <p>The Wellvest Team</p>
    `;

    await this.sendEmail({
      to: email,
      from: COMPANY_EMAIL,
      subject: 'Welcome to the Wellvest Waitlist',
      body
    });
  }
};
