import fetch from 'node-fetch'

async function testRedirect() {
  try {
    console.log('🧪 Probando login y redirección...')
    
    // Hacer login
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

    const loginData: any = await loginResponse.json()
    
    if (loginResponse.ok) {
      console.log('✅ Login exitoso')
      
      // Obtener las cookies
      const cookies = loginResponse.headers.get('set-cookie')
      console.log('🍪 Cookies establecidas:', cookies ? 'Sí' : 'No')
      
      // Probar acceso a /admin
      const adminResponse = await fetch('http://localhost:3000/admin', {
        headers: {
          'Cookie': cookies || ''
        }
      })
      
      console.log('🔒 Acceso a /admin:', adminResponse.status === 200 ? 'Permitido' : 'Denegado')
      console.log('Status:', adminResponse.status)
      
    } else {
      console.log('❌ Error en login:', loginData.error)
    }
    
  } catch (error: any) {
    console.log('❌ Error de conexión:', error.message)
  }
}

testRedirect()
