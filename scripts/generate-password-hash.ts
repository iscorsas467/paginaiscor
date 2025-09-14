import bcrypt from 'bcryptjs'

async function generateHash() {
  const password = 'admin123'
  const hash = await bcrypt.hash(password, 12)
  
  console.log('Contraseña:', password)
  console.log('Hash generado:', hash)
  
  // Verificar que el hash funciona
  const isValid = await bcrypt.compare(password, hash)
  console.log('Hash válido:', isValid)
}

generateHash()
