import fetch from 'node-fetch'

async function testSimpleAuth() {
  try {
    console.log('🧪 Probando sistema de autenticación simple...')
    
    // 1. Probar login
    console.log('\n1. Probando login...')
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
    console.log('Login response:', loginData)
    
    if (loginData.success) {
      console.log('✅ Login exitoso')
      
      // 2. Obtener cookies
      const cookies = loginResponse.headers.get('set-cookie')
      console.log('\n2. Cookies:', cookies)
      
      // 3. Probar verificación
      console.log('\n3. Probando verificación...')
      const verifyResponse = await fetch('http://localhost:3000/api/auth/verify', {
        headers: {
          'Cookie': cookies || ''
        }
      })
      
      console.log('Verify status:', verifyResponse.status)
      const verifyData = await verifyResponse.json()
      console.log('Verify response:', verifyData)
      
      // 4. Probar acceso a admin
      console.log('\n4. Probando acceso a /admin...')
      const adminResponse = await fetch('http://localhost:3000/admin', {
        headers: {
          'Cookie': cookies || ''
        }
      })
      
      console.log('Admin status:', adminResponse.status)
      console.log('Admin accessible:', adminResponse.status === 200 ? 'SÍ' : 'NO')
      
      if (adminResponse.status === 200) {
        console.log('\n🎉 ¡SISTEMA DE AUTENTICACIÓN FUNCIONANDO CORRECTAMENTE!')
      }
    } else {
      console.log('❌ Error en login:', loginData.error)
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message)
  }
}

testSimpleAuth()
