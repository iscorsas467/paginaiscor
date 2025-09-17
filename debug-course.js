// Script para debuggear el problema de sincronización
const fetch = require('node-fetch');

async function debugCourse() {
  try {
    console.log('🔍 Verificando API de cursos...');
    
    // Probar API general
    const coursesResponse = await fetch('http://localhost:3000/api/courses');
    const coursesData = await coursesResponse.json();
    
    console.log('📊 Total de cursos en BD:', coursesData.data?.length || 0);
    
    if (coursesData.data && coursesData.data.length > 0) {
      const firstCourse = coursesData.data[0];
      console.log('📝 Primer curso:', firstCourse.name);
      console.log('📄 Descripción:', firstCourse.description?.substring(0, 100) + '...');
      console.log('🖼️ Imagen:', firstCourse.image);
    }
    
    // Probar API específica
    console.log('\n🔍 Verificando API específica de "Trabajo en Alturas"...');
    const specificResponse = await fetch('http://localhost:3000/api/courses/trabajo-en-alturas');
    const specificData = await specificResponse.json();
    
    if (specificData.success) {
      console.log('✅ API específica funciona');
      console.log('📝 Nombre:', specificData.data.name);
      console.log('📄 Descripción:', specificData.data.description?.substring(0, 100) + '...');
      console.log('📄 Descripción detallada:', specificData.data.detailedDescription?.substring(0, 100) + '...');
    } else {
      console.log('❌ API específica falló:', specificData.error);
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

debugCourse();
