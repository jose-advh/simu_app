import { z } from 'zod';

const respuestaSchema = z.object({
  id: z.number().positive().min(1, 'El id es requerido'),
  intento: z.number().positive().min(1, 'El intento es requerido'),
  pregunta: z.number().positive().min(1, 'La pregunta es requerida'),
  opcion_seleccionada: z.string().min(1),
  puntos: z.number().positive().min(1, 'Los puntos son requeridos'),
});

export { respuestaSchema };