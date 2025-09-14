import fetch from 'node-fetch'

async function debugRedirect() {
  try {
    console.log('🔍 Debugging redirect issue...')
    
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
    
    // 2. Obtener cookies
    const cookies = loginResponse.headers.get('set-cookie')
    console.log('\n2. Cookies recibidas:', cookies)
    
    // 3. Probar acceso directo a /admin
    console.log('\n3. Probando acceso directo a /admin...')
    const adminResponse = await fetch('http://localhost:3000/admin', {
      headers: {
        'Cookie': cookies || ''
      }
    })
    
    console.log('Admin status:', adminResponse.status)
    console.log('Admin headers:', Object.fromEntries(adminResponse.headers.entries()))
    
    // 4. Probar verificación de token
    console.log('\n4. Probando verificación de token...')
    const verifyResponse = await fetch('http://localhost:3000/api/auth/verify', {
      headers: {
        'Cookie': cookies || ''
      }
    })
    
    console.log('Verify status:', verifyResponse.status)
    const verifyData = await verifyResponse.json()
    console.log('Verify response:', verifyData)
    
  } catch (error) {
    console.error('❌ Error:', error.message)
  }
}

debugRedirect()
