import { PrismaClient } from '../src/generated/prisma'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function createAdminUser() {
  try {
    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash('admin123', 12)
    
    // Crear el usuario administrador
    const adminUser = await prisma.user.create({
      data: {
        username: 'administrador',
        email: 'admin@iscor.com',
        password: hashedPassword,
        role: 'admin',
        isActive: true
      }
    })
    
    console.log('✅ Usuario administrador creado exitosamente:')
    console.log(`   Username: ${adminUser.username}`)
    console.log(`   Email: ${adminUser.email}`)
    console.log(`   Role: ${adminUser.role}`)
    console.log(`   ID: ${adminUser.id}`)
    
  } catch (error) {
    if (error.code === 'P2002') {
      console.log('⚠️  El usuario administrador ya existe en la base de datos')
    } else {
      console.error('❌ Error creando usuario administrador:', error)
    }
  } finally {
    await prisma.$disconnect()
  }
}

createAdminUser()
