import { resend } from './resendClient';

export interface EmailData {
  to: string | string[];
  subject: string;
  html?: string;
  text?: string;
  from?: string;
}

export interface EmailTemplate {
  subject: string;
  html: string;
  text?: string;
}

export class EmailService {
  private defaultFrom: string;

  constructor() {
    this.defaultFrom = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
  }

  async sendEmail(emailData: EmailData): Promise<void> {
    try {
      const { to, subject, html, text, from } = emailData;

      const result = await resend.emails.send({
        react: '',
        from: from || this.defaultFrom,
        to: Array.isArray(to) ? to : [to],
        subject,
        html,
        text,
      });

      console.log('Email sent successfully:', result);
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email');
    }
  }

  async sendTemplateEmail(
    to: string | string[],
    template: EmailTemplate,
    from?: string
  ): Promise<void> {
    await this.sendEmail({
      to,
      subject: template.subject,
      html: template.html,
      text: template.text,
      from,
    });
  }
}

export const emailService = new EmailService();



