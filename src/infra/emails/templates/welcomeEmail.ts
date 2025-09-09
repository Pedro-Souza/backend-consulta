import { EmailTemplate } from '../emailService';

export const welcomeEmailTemplate = (userName: string): EmailTemplate => ({
  subject: 'Bem-vindo ao EasyCPF!',
  html: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Bem-vindo ao EasyCPF</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background-color: #4f46e5;
          color: white;
          padding: 20px;
          text-align: center;
          border-radius: 8px 8px 0 0;
        }
        .content {
          background-color: #f9fafb;
          padding: 30px;
          border-radius: 0 0 8px 8px;
        }
        .button {
          display: inline-block;
          background-color: #4f46e5;
          color: white;
          padding: 12px 24px;
          text-decoration: none;
          border-radius: 6px;
          margin: 20px 0;
        }
        .footer {
          text-align: center;
          margin-top: 30px;
          color: #6b7280;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>EasyCPF</h1>
      </div>
      <div class="content">
        <h2>Olá, ${userName}!</h2>
        <p>Bem-vindo ao EasyCPF! Estamos felizes em tê-lo conosco.</p>
        <p>Com o EasyCPF, você pode:</p>
        <ul>
          <li>Consultar CPFs de forma rápida e segura</li>
          <li>Gerenciar suas consultas em um só lugar</li>
          <li>Acompanhar o status das suas solicitações</li>
        </ul>
        <p>Se você tiver alguma dúvida, não hesite em entrar em contato conosco.</p>
        <p>Obrigado por escolher o EasyCPF!</p>
      </div>
      <div class="footer">
        <p>Este é um email automático, por favor não responda.</p>
        <p>&copy; 2024 EasyCPF. Todos os direitos reservados.</p>
      </div>
    </body>
    </html>
  `,
  text: `
    Olá, ${userName}!
    
    Bem-vindo ao EasyCPF! Estamos felizes em tê-lo conosco.
    
    Com o EasyCPF, você pode:
    - Consultar CPFs de forma rápida e segura
    - Gerenciar suas consultas em um só lugar
    - Acompanhar o status das suas solicitações
    
    Se você tiver alguma dúvida, não hesite em entrar em contato conosco.
    
    Obrigado por escolher o EasyCPF!
    
    ---
    Este é um email automático, por favor não responda.
    © 2024 EasyCPF. Todos os direitos reservados.
  `
});
