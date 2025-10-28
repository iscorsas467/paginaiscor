import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER, // iscor.sas@gmail.com
    pass: process.env.SMTP_PASS  // kqdj zwxc uibk mntl
  }
});

export async function sendContactEmail(formData: any) {
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.EMAIL_TO, // victormanuelcardonaespitia@gmail.com
    subject: `📧 Nueva Solicitud de Contacto - ISCOR`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1e40af, #3b82f6); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">📧 Nueva Solicitud de Contacto</h1>
          <p style="color: #e5e7eb; margin: 5px 0 0 0;">ISCOR S.A.S.</p>
        </div>
        
        <div style="padding: 30px; background: #f9fafb;">
          <h2 style="color: #1f2937; margin-top: 0;">👤 Información del Cliente</h2>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <p style="margin: 8px 0;"><strong>Nombre:</strong> ${formData.nombre}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> ${formData.email}</p>
            <p style="margin: 8px 0;"><strong>Teléfono:</strong> ${formData.telefono}</p>
            <p style="margin: 8px 0;"><strong>Empresa:</strong> ${formData.empresa || 'No especificada'}</p>
            <p style="margin: 8px 0;"><strong>Servicio de Interés:</strong> ${formData.servicio || 'No especificado'}</p>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <h3 style="color: #1f2937; margin-top: 0;">💬 Mensaje</h3>
            <p style="white-space: pre-wrap; margin: 0;">${formData.mensaje}</p>
          </div>
          
          <div style="background: #e5e7eb; padding: 15px; border-radius: 8px; font-size: 14px; color: #6b7280;">
            <p style="margin: 5px 0;"><strong>📅 Fecha:</strong> ${new Date().toLocaleString('es-CO')}</p>
            <p style="margin: 5px 0;"><strong>🆔 ID:</strong> ${formData.id || 'N/A'}</p>
          </div>
        </div>
        
        <div style="background: #1f2937; padding: 20px; text-align: center;">
          <p style="color: #9ca3af; margin: 0; font-size: 14px;">
            Este email fue enviado automáticamente desde el sitio web de ISCOR S.A.S.
          </p>
        </div>
      </div>
    `
  };

  return await transporter.sendMail(mailOptions);
}

export async function sendConfirmationEmail(formData: any) {
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: formData.email,
    subject: `✅ Confirmación de Contacto - ISCOR S.A.S.`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #059669, #10b981); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">✅ ¡Mensaje Recibido!</h1>
          <p style="color: #d1fae5; margin: 5px 0 0 0;">ISCOR S.A.S.</p>
        </div>
        
        <div style="padding: 30px; background: #f9fafb;">
          <p style="color: #1f2937; font-size: 18px;">Hola <strong>${formData.nombre}</strong>,</p>
          
          <p style="color: #4b5563; line-height: 1.6;">
            Hemos recibido tu solicitud de información y nos pondremos en contacto contigo 
            en las próximas 24 horas.
          </p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <h3 style="color: #1f2937; margin-top: 0;">📋 Resumen de tu solicitud:</h3>
            <p style="margin: 8px 0;"><strong>Servicio de interés:</strong> ${formData.servicio || 'No especificado'}</p>
            <p style="margin: 8px 0;"><strong>Mensaje:</strong> ${formData.mensaje}</p>
          </div>
          
          <div style="background: #eff6ff; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6;">
            <h3 style="color: #1e40af; margin-top: 0;">📞 Contacto Directo</h3>
            <p style="margin: 5px 0;"><strong>Teléfono:</strong> 312 656 7077</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> iscor@iscorcolombia.com</p>
            <p style="margin: 5px 0;"><strong>WhatsApp:</strong> 312 656 7077</p>
          </div>
        </div>
        
        <div style="background: #1f2937; padding: 20px; text-align: center;">
          <p style="color: #9ca3af; margin: 0; font-size: 14px;">
            ISCOR S.A.S. - Soluciones de Seguridad y Salud Ocupacional
          </p>
        </div>
      </div>
    `
  };

  return await transporter.sendMail(mailOptions);
}
