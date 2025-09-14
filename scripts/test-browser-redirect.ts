import fetch from 'node-fetch'

async function testBrowserRedirect() {
  try {
    console.log('🧪 Simulando el flujo completo del navegador...')
    
    // 1. Login
    console.log('\n1. Haciendo login...')
    const loginResponse = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'admin@iscor.com',
        password: 'admin123'
      })
    })

    console.log('Login status:', loginResponse.status)
    const loginData = await loginResponse.json()
    console.log('Login success:', loginData.success)
    
    if (loginData.success) {
      console.log('✅ Login exitoso, redirigiendo inmediatamente...')
      
      // 2. Simular redirección
      console.log('\n2. Simulando redirección a /admin...')
      const adminResponse = await fetch('http://localhost:3000/admin', {
        headers: {
          'Cookie': loginResponse.headers.get('set-cookie') || ''
        }
      })
      
      console.log('Admin status:', adminResponse.status)
      console.log('Admin accessible:', adminResponse.status === 200 ? 'SÍ' : 'NO')
      
      if (adminResponse.status === 200) {
        console.log('✅ Redirección exitosa - Panel de administración accesible')
      } else {
        console.log('❌ Error en redirección - Panel no accesible')
      }
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message)
  }
}

testBrowserRedirect()
