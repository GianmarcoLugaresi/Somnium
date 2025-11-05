import emailjs from '@emailjs/browser';

// ⚠️ CONFIGURAZIONE EMAILJS
// Sostituisci questi valori con le tue credenziali da https://www.emailjs.com/
const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID', // es: 'service_abc123'
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // es: 'template_xyz789'
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // es: 'user_ABC123XYZ'
};

export interface NewsletterEmailData {
  userEmail: string;
  userName?: string;
}

export async function sendNewsletterEmail(data: NewsletterEmailData): Promise<boolean> {
  try {
    // Verifica se le credenziali sono state configurate
    if (
      EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID' ||
      EMAILJS_CONFIG.TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
      EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY'
    ) {
      console.error('⚠️ EMAILJS NON CONFIGURATO: Le credenziali sono ancora placeholder.');
      console.error('📖 Segui la guida in /SETUP_EMAILJS.md per configurare EmailJS');
      console.error('🔗 Vai su https://dashboard.emailjs.com/admin/account per ottenere le credenziali');
      throw new Error('EmailJS non configurato. Leggi /SETUP_EMAILJS.md per le istruzioni.');
    }

    // Parametri che verranno passati al template EmailJS
    const templateParams = {
      to_email: 'evolv.project.business@gmail.com',
      user_email: data.userEmail,
      user_name: data.userName || 'Nuovo utente',
      subject: 'Nuova iscrizione alla Newsletter Somnium',
      
      // Dati aggiuntivi per il template
      app_name: 'Somnium',
      message_title: 'Inscritto alla Newsletter',
      timestamp: new Date().toLocaleString('it-IT'),
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    console.log('✅ Email inviata con successo:', response);
    return true;
  } catch (error) {
    console.error('❌ Errore invio email:', error);
    
    // Messaggi di errore più dettagliati
    if (error && typeof error === 'object' && 'text' in error) {
      const errorText = (error as any).text;
      if (errorText?.includes('Public Key')) {
        console.error('🔑 Public Key non valida. Verifica su: https://dashboard.emailjs.com/admin/account');
      } else if (errorText?.includes('Service ID')) {
        console.error('🔧 Service ID non valido. Verifica su: https://dashboard.emailjs.com/admin');
      } else if (errorText?.includes('Template')) {
        console.error('📧 Template ID non valido. Verifica su: https://dashboard.emailjs.com/templates');
      }
    }
    
    throw error;
  }
}

// Template HTML per la email (da usare su EmailJS)
export const EMAIL_HTML_TEMPLATE = `
<!DOCTYPE html>
<html>
  <head>
    <style>
      body { 
        font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif; 
        background: linear-gradient(135deg, #120b1e 0%, #0470f9 100%);
        margin: 0;
        padding: 40px 20px;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background: white;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 20px 60px rgba(4, 112, 249, 0.3);
      }
      .header {
        background: linear-gradient(135deg, #120b1e 0%, #0470f9 100%);
        padding: 40px;
        text-align: center;
      }
      .header h1 {
        color: white;
        font-size: 36px;
        font-weight: bold;
        margin: 0;
        letter-spacing: -1px;
      }
      .header .icon {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        width: 80px;
        height: 80px;
        margin: 0 auto 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
      }
      .content {
        padding: 40px;
        text-align: center;
      }
      .content h2 {
        color: #120b1e;
        font-size: 28px;
        font-weight: bold;
        margin-bottom: 20px;
      }
      .content p {
        color: #666;
        font-size: 16px;
        line-height: 1.6;
        margin-bottom: 15px;
      }
      .email-badge {
        background: #f2f2f2;
        border: 2px solid #0470f9;
        border-radius: 12px;
        padding: 15px 25px;
        display: inline-block;
        margin: 20px 0;
        color: #0470f9;
        font-weight: bold;
        font-size: 18px;
      }
      .footer {
        background: #f2f2f2;
        padding: 30px;
        text-align: center;
        color: #666;
        font-size: 14px;
      }
      .footer strong {
        color: #0470f9;
      }
      .timestamp {
        background: #f2f2f2;
        padding: 10px;
        border-radius: 8px;
        display: inline-block;
        margin-top: 15px;
        font-size: 14px;
        color: #666;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <div class="icon">🚀</div>
        <h1>SOMNIUM</h1>
      </div>
      <div class="content">
        <h2>🎉 Nuova Iscrizione alla Newsletter</h2>
        <p>Un nuovo utente si è iscritto alla newsletter di Somnium!</p>
        
        <div class="email-badge">
          {{user_email}}
        </div>
        
        <p style="margin-top: 30px; color: #0470f9; font-weight: bold; font-size: 24px;">
          ✅ Inscritto alla Newsletter
        </p>
        
        <div class="timestamp">
          📅 Data iscrizione: {{timestamp}}
        </div>
      </div>
      <div class="footer">
        <p>
          <strong>Somnium</strong> - Impara mentre dormi<br/>
          Il futuro dell'apprendimento linguistico
        </p>
        <p style="margin-top: 15px; font-size: 12px; color: #999;">
          Questo è un messaggio automatico dal sistema di newsletter di Somnium
        </p>
      </div>
    </div>
  </body>
</html>
`;
