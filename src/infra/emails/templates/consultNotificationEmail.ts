import { EmailTemplate } from '../emailService';

export interface ConsultNotificationData {
  userName: string;
  cpf: string;
  status: 'completed' | 'failed' | 'processing';
  consultId: string;
}

export const consultNotificationEmailTemplate = (data: ConsultNotificationData): EmailTemplate => {
  const getStatusMessage = () => {
    switch (data.status) {
      case 'completed':
        return {
          title: 'Consulta Concluída',
          message: 'Sua consulta de CPF foi concluída com sucesso!',
          color: '#10b981'
        };
      case 'failed':
        return {
          title: 'Consulta Falhou',
          message: 'Houve um problema ao processar sua consulta de CPF.',
          color: '#ef4444'
        };
      case 'processing':
        return {
          title: 'Consulta em Processamento',
          message: 'Sua consulta de CPF está sendo processada.',
          color: '#f59e0b'
        };
      default:
        return {
          title: 'Atualização da Consulta',
          message: 'Houve uma atualização na sua consulta de CPF.',
          color: '#6b7280'
        };
    }
  };

  const statusInfo = getStatusMessage();

  return {
    subject: `EasyCPF - ${statusInfo.title}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${statusInfo.title}</title>
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
          .status-badge {
            display: inline-block;
            background-color: ${statusInfo.color};
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-weight: bold;
            margin: 10px 0;
          }
          .info-box {
            background-color: white;
            border: 1px solid #e5e7eb;
            border-radius: 6px;
            padding: 20px;
            margin: 20px 0;
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
          <h2>Olá, ${data.userName}!</h2>
          <p>${statusInfo.message}</p>
          
          <div class="status-badge">
            ${statusInfo.title}
          </div>
          
          <div class="info-box">
            <h3>Detalhes da Consulta:</h3>
            <p><strong>CPF:</strong> ${data.cpf}</p>
            <p><strong>ID da Consulta:</strong> ${data.consultId}</p>
            <p><strong>Status:</strong> ${statusInfo.title}</p>
          </div>
          
          ${data.status === 'completed' ? `
            <p>Você pode acessar os resultados da sua consulta através do nosso sistema.</p>
            <a href="#" class="button">Ver Resultados</a>
          ` : ''}
          
          ${data.status === 'failed' ? `
            <p>Por favor, tente novamente ou entre em contato conosco se o problema persistir.</p>
            <a href="#" class="button">Tentar Novamente</a>
          ` : ''}
          
          ${data.status === 'processing' ? `
            <p>Você receberá uma notificação assim que a consulta for concluída.</p>
          ` : ''}
        </div>
        <div class="footer">
          <p>Este é um email automático, por favor não responda.</p>
          <p>&copy; 2024 EasyCPF. Todos os direitos reservados.</p>
        </div>
      </body>
      </html>
    `,
    text: `
      Olá, ${data.userName}!
      
      ${statusInfo.message}
      
      Detalhes da Consulta:
      - CPF: ${data.cpf}
      - ID da Consulta: ${data.consultId}
      - Status: ${statusInfo.title}
      
      ${data.status === 'completed' ? 'Você pode acessar os resultados da sua consulta através do nosso sistema.' : ''}
      ${data.status === 'failed' ? 'Por favor, tente novamente ou entre em contato conosco se o problema persistir.' : ''}
      ${data.status === 'processing' ? 'Você receberá uma notificação assim que a consulta for concluída.' : ''}
      
      ---
      Este é um email automático, por favor não responda.
      © 2024 EasyCPF. Todos os direitos reservados.
    `
  };
};
