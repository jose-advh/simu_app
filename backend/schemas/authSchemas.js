import { z } from 'zod';

const registroSchema = z.object({
  nombre: z.string().min(1, 'El nombre es obligatorio'),
  correo: z.string().email('correo invalido'),
  contrasena: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres'),
});

const loginSchema = z.object({
  correo: z.string().email('correo invalido'),
  contrasena: z.string().min(1, 'La contraseña es obligatoria'),
  });

  export { registroSchema, loginSchema };
