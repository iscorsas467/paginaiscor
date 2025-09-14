import fetch from 'node-fetch'

async function testAuth() {
  try {
    console.log('🧪 Probando autenticación...')
    
    const response = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'admin@iscor.com',
        password: 'admin123'
      })
    })

    const data: any = await response.json()
    
    if (response.ok) {
      console.log('✅ Autenticación exitosa!')
      console.log('Usuario:', data.user)
      console.log('Token generado:', data.token ? 'Sí' : 'No')
    } else {
      console.log('❌ Error en autenticación:', data.error)
    }
    
  } catch (error: any) {
    console.log('❌ Error de conexión:', error.message)
    console.log('Asegúrate de que el servidor esté ejecutándose en http://localhost:3000')
  }
}

testAuth()
