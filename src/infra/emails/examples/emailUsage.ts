import { emailService, welcomeEmailTemplate, consultNotificationEmailTemplate } from '../index';

// Exemplo de uso do serviço de email

export class EmailExamples {
  // Exemplo 1: Enviar email de boas-vindas
  static async sendWelcomeEmail(userEmail: string, userName: string) {
    try {
      const template = welcomeEmailTemplate(userName);
      await emailService.sendTemplateEmail(userEmail, template);
      console.log('Email de boas-vindas enviado com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar email de boas-vindas:', error);
    }
  }

  // Exemplo 2: Enviar notificação de consulta
  static async sendConsultNotification(
    userEmail: string,
    userName: string,
    cpf: string,
    consultId: string,
    status: 'completed' | 'failed' | 'processing'
  ) {
    try {
      const template = consultNotificationEmailTemplate({
        userName,
        cpf,
        status,
        consultId
      });
      await emailService.sendTemplateEmail(userEmail, template);
      console.log('Notificação de consulta enviada com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar notificação de consulta:', error);
    }
  }

  // Exemplo 3: Enviar email personalizado
  static async sendCustomEmail(
    to: string,
    subject: string,
    htmlContent: string,
    textContent?: string
  ) {
    try {
      await emailService.sendEmail({
        to,
        subject,
        html: htmlContent,
        text: textContent
      });
      console.log('Email personalizado enviado com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar email personalizado:', error);
    }
  }

  // Exemplo 4: Enviar email para múltiplos destinatários
  static async sendBulkEmail(
    recipients: string[],
    subject: string,
    htmlContent: string
  ) {
    try {
      await emailService.sendEmail({
        to: recipients,
        subject,
        html: htmlContent
      });
      console.log('Email em massa enviado com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar email em massa:', error);
    }
  }
}

// Exemplos de uso:
/*
// Enviar email de boas-vindas
EmailExamples.sendWelcomeEmail('usuario@exemplo.com', 'João Silva');

// Enviar notificação de consulta concluída
EmailExamples.sendConsultNotification(
  'usuario@exemplo.com',
  'João Silva',
  '123.456.789-00',
  'consult-123',
  'completed'
);

// Enviar email personalizado
EmailExamples.sendCustomEmail(
  'usuario@exemplo.com',
  'Assunto do Email',
  '<h1>Conteúdo HTML</h1><p>Este é um email personalizado.</p>',
  'Conteúdo em texto simples'
);

// Enviar email para múltiplos destinatários
EmailExamples.sendBulkEmail(
  ['usuario1@exemplo.com', 'usuario2@exemplo.com'],
  'Newsletter',
  '<h1>Newsletter</h1><p>Conteúdo da newsletter...</p>'
);
*/
