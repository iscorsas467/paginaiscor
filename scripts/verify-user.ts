import { PrismaClient } from '../src/generated/prisma'

const prisma = new PrismaClient()

async function verifyUser() {
  try {
    console.log('🔍 Verificando usuario en la base de datos...')
    
    const user = await prisma.user.findUnique({
      where: { email: 'admin@iscor.com' }
    })
    
    if (user) {
      console.log('✅ Usuario encontrado en la base de datos:')
      console.log(`   ID: ${user.id}`)
      console.log(`   Username: ${user.username}`)
      console.log(`   Email: ${user.email}`)
      console.log(`   Role: ${user.role}`)
      console.log(`   Activo: ${user.isActive}`)
      console.log(`   Creado: ${user.createdAt}`)
    } else {
      console.log('❌ Usuario no encontrado')
    }
    
  } catch (error) {
    console.error('❌ Error verificando usuario:', error)
  } finally {
    await prisma.$disconnect()
  }
}

verifyUser()
