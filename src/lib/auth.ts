import bcrypt from 'bcryptjs'
import { prisma } from './prisma'

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12)
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

export async function authenticateUser(email: string, password: string) {
  try {
    // Buscar usuario en la base de datos
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        password: true,
        role: true,
        isActive: true,
        username: true
      }
    })

    if (!user) {
      return { success: false, error: 'Usuario no encontrado' }
    }

    if (!user.isActive) {
      return { success: false, error: 'Usuario inactivo' }
    }

    // Verificar contraseña
    const isValidPassword = await verifyPassword(password, user.password)
    
    if (!isValidPassword) {
      return { success: false, error: 'Contraseña incorrecta' }
    }

    // Retornar datos del usuario sin la contraseña
    const { password: _, ...userWithoutPassword } = user
    return { 
      success: true, 
      user: userWithoutPassword 
    }
  } catch (error) {
    console.error('Error en autenticación:', error)
    return { success: false, error: 'Error del servidor' }
  }
}

export async function getUserById(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        role: true,
        isActive: true,
        username: true,
        createdAt: true,
        updatedAt: true
      }
    })

    return user
  } catch (error) {
    console.error('Error al obtener usuario:', error)
    return null
  }
}
