-- Script SQL para insertar el usuario administrador
-- Ejecutar este script directamente en Supabase SQL Editor

-- Hashear la contraseña 'admin123' con bcrypt
-- El hash generado es: $2b$12$F0xIdSKFvHEYhkKnhs5XJ.ZSBI1D1C7XkDXyPvps9YG4h2mr6v1lS

INSERT INTO users (id, username, email, password, role, "isActive", "createdAt", "updatedAt")
VALUES (
  'admin-001',
  'administrador',
  'admin@iscor.com',
  '$2b$12$F0xIdSKFvHEYhkKnhs5XJ.ZSBI1D1C7XkDXyPvps9YG4h2mr6v1lS',
  'admin',
  true,
  NOW(),
  NOW()
)
ON CONFLICT (email) DO UPDATE SET
  username = EXCLUDED.username,
  password = EXCLUDED.password,
  role = EXCLUDED.role,
  "isActive" = EXCLUDED."isActive",
  "updatedAt" = NOW();

-- Verificar que el usuario se insertó correctamente
SELECT id, username, email, role, "isActive", "createdAt" FROM users WHERE email = 'admin@iscor.com';
