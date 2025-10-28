import { sendContactEmail, sendConfirmationEmail } from './src/lib/email';

async function testEmailSending() {
  console.log('🧪 Probando envío de emails...');
  
  try {
    // Datos de prueba
    const testFormData = {
      id: 'test-123',
      nombre: 'Juan Pérez',
      email: 'juan@test.com',
      telefono: '3001234567',
      empresa: 'Empresa Test',
      servicio: 'Trabajo en Alturas',
      mensaje: 'Este es un mensaje de prueba para verificar que el sistema de emails funciona correctamente.',
      courseName: 'Trabajo en Alturas',
      courseSlug: 'trabajo-en-alturas'
    };

    console.log('📧 Enviando email de contacto al admin...');
    await sendContactEmail(testFormData);
    console.log('✅ Email de contacto enviado exitosamente');

    console.log('📧 Enviando email de confirmación al cliente...');
    await sendConfirmationEmail({
      nombre: testFormData.nombre,
      email: testFormData.email,
      servicio: testFormData.servicio,
      mensaje: testFormData.mensaje
    });
    console.log('✅ Email de confirmación enviado exitosamente');

    console.log('\n🎉 ¡Todos los emails se enviaron correctamente!');
    console.log('📬 Revisa tu bandeja de entrada en: victormanuelcardonaespitia@gmail.com');
    
  } catch (error) {
    console.error('❌ Error enviando emails:', error);
  }
}

testEmailSending();
