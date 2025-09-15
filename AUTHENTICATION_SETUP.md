# Configuración de Autenticación con Supabase

## Variables de Entorno Requeridas

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```env
# Base de datos
DATABASE_URL="postgresql://username:password@localhost:5432/iscor_db"
DIRECT_URL="postgresql://username:password@localhost:5432/iscor_db"

# Supabase
NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"

# Next.js
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

## Configuración de la Base de Datos

### 1. Ejecutar migraciones de Prisma
```bash
npx prisma migrate dev
```

### 2. Crear usuario administrador
```bash
npx tsx scripts/create-admin-user.ts
```

Esto creará un usuario con las siguientes credenciales:
- **Email**: `admin@iscor.com`
- **Contraseña**: `admin123`
- **Rol**: `admin`

## Funcionalidades Implementadas

### ✅ Autenticación Segura
- Hash de contraseñas con bcrypt
- Verificación de usuarios en base de datos
- Cookies seguras con httpOnly
- Validación de usuarios activos

### ✅ Endpoints de API
- `POST /api/auth/login` - Autenticación de usuarios
- `GET /api/auth/verify` - Verificación de sesión
- `POST /api/auth/logout` - Cierre de sesión

### ✅ Middleware de Protección
- Protección automática de rutas `/admin/*`
- Redirección a login si no hay sesión válida

### ✅ Panel de Administración
- Verificación de identidad en tiempo real
- Información del usuario autenticado
- Logout seguro con limpieza de cookies

## Estructura de la Base de Datos

La tabla `users` incluye:
- `id` - Identificador único
- `username` - Nombre de usuario
- `email` - Email único
- `password` - Contraseña hasheada
- `role` - Rol del usuario (admin, user, etc.)
- `isActive` - Estado del usuario
- `createdAt` - Fecha de creación
- `updatedAt` - Fecha de actualización

## Seguridad

- Las contraseñas se almacenan con hash bcrypt (12 rounds)
- Las cookies son httpOnly y secure en producción
- Validación de usuarios activos
- Protección CSRF con sameSite strict
- Verificación de sesión en cada request

## Uso

1. Configura las variables de entorno
2. Ejecuta las migraciones de Prisma
3. Crea el usuario administrador
4. Inicia el servidor: `npm run dev`
5. Accede a `/login` con las credenciales del administrador
6. Una vez autenticado, accede a `/admin`
