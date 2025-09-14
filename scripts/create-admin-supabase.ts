import { createClient } from '@supabase/supabase-js'
import bcrypt from 'bcryptjs'

// Configuración de Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Variables de entorno de Supabase no configuradas')
  console.log('Necesitas configurar:')
  console.log('- NEXT_PUBLIC_SUPABASE_URL o SUPABASE_URL')
  console.log('- SUPABASE_SERVICE_ROLE_KEY o SUPABASE_ANON_KEY')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function createAdminUser() {
  try {
    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash('admin123', 12)
    
    // Verificar si el usuario ya existe
    const { data: existingUser, error: checkError } = await supabase
      .from('users')
      .select('*')
      .eq('email', 'admin@iscor.com')
      .single()

    if (existingUser) {
      console.log('⚠️  El usuario administrador ya existe en la base de datos')
      console.log(`   Username: ${existingUser.username}`)
      console.log(`   Email: ${existingUser.email}`)
      console.log(`   Role: ${existingUser.role}`)
      return
    }

    // Crear el usuario administrador
    const { data: newUser, error } = await supabase
      .from('users')
      .insert([
        {
          username: 'administrador',
          email: 'admin@iscor.com',
          password: hashedPassword,
          role: 'admin',
          isActive: true
        }
      ])
      .select()
      .single()

    if (error) {
      console.error('❌ Error creando usuario administrador:', error)
      return
    }
    
    console.log('✅ Usuario administrador creado exitosamente:')
    console.log(`   Username: ${newUser.username}`)
    console.log(`   Email: ${newUser.email}`)
    console.log(`   Role: ${newUser.role}`)
    console.log(`   ID: ${newUser.id}`)
    
  } catch (error) {
    console.error('❌ Error creando usuario administrador:', error)
  }
}

createAdminUser()
