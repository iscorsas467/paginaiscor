import { PrismaClient } from '../src/generated/prisma'

const prisma = new PrismaClient()

async function checkUsersTable() {
  try {
    // Intentar consultar la tabla de usuarios
    const users = await prisma.user.findMany()
    console.log('✅ La tabla de usuarios existe y tiene', users.length, 'usuarios')
    
    if (users.length > 0) {
      console.log('Usuarios encontrados:')
      users.forEach(user => {
        console.log(`  - ${user.username} (${user.email}) - ${user.role}`)
      })
    }
    
  } catch (error) {
    if (error.code === 'P2021') {
      console.log('❌ La tabla de usuarios no existe en la base de datos')
      console.log('Necesitamos crearla...')
    } else {
      console.error('Error verificando tabla de usuarios:', error)
    }
  } finally {
    await prisma.$disconnect()
  }
}

checkUsersTable()
