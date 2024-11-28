import Database from "../config/cls_db";
import bcrypt from 'bcrypt';

const db = Database();

class authController {
    async login(email, password) {
        try {
            await db.connect();
            const rows = await db.query('SELECT * FROM usuarios WHERE email = ?', [email])

            if (rows.length === 0) {
                throw new Error('El correo ingresado no existe.')
            }

            const usuario = rows[0];

            // TO-DO: Hacer comparación con bcrypt

            return {
                success: true,
                message: 'Te has logeado correctamente.',
                usuario: {
                    id: usuario.id_contraseña,
                    nombre: usuario.nombre,
                    email: usuario.email,
                    password: usuario.contraseña
                }
            }


        } catch {

        }
    } 
}
