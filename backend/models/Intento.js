import Database from '../config/db.js';

class Intento {
    constructor() {
        this.db = new Database();
    }

    async crearIntento(usuarioId, fechaInicio, horaFinal, puntuacionMatematicas, puntuacionLectura, puntuacionNaturales, puntuacionSociales, puntuacionIngles, puntuacionGeneral) {
        try {
            // Validaciones
            if (!usuarioId || !fechaInicio) {
                throw new Error('El usuarioId y la fechaInicio son obligatorios');
            }

            // Validar fecha
            if (isNaN(new Date(fechaInicio))) {
                throw new Error('La fecha de inicio no es válida');
            }

            // Validar puntajes
            const puntajes = [
                puntuacionMatematicas,
                puntuacionLectura,
                puntuacionNaturales,
                puntuacionSociales,
                puntuacionIngles,
                puntuacionGeneral,
            ];

            for (const puntaje of puntajes) {
                if (puntaje < 0 || puntaje > 500) {
                    throw new Error('Los puntajes deben estar entre 0 y 500');
                }
            }

            const sql = `INSERT INTO intento (usuario_id, fecha_inicio, hora_final, puntuacion_Matematicas, puntuacion_Lectura, puntuacion_Naturales, puntuacion_Sociales, puntuacion_Ingles, puntuacion_General) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
            await this.db.connect();
            await this.db.query(sql, [usuarioId, fechaInicio, horaFinal, puntuacionMatematicas, puntuacionLectura, puntuacionNaturales, puntuacionSociales, puntuacionIngles, puntuacionGeneral]);
            await this.db.close();
        } catch (error) {
            console.error('Error al crear el intento', error);
            throw error;
        }
    }

    async obtenerIntentosPorUsuarioId(usuarioId) {
        try {
            const sql = `SELECT * FROM intento WHERE usuario_id = ? ORDER BY fecha_inicio DESC`;
            await this.db.connect();
            const intentos = await this.db.query(sql, [usuarioId]);
            await this.db.close();
            return intentos;
        } catch (error) {
            console.error('Error al obtener los intentos', error);
            throw error;
        }
    }

    async obtenerIntentoPorId(id) {
        try {
            const sql = `SELECT * FROM intento WHERE id_intento = ?`;
            await this.db.connect();
            const intento = await this.db.query(sql, [id]);
            await this.db.close();
            return intento[0] || null;
        } catch (error) {
            console.error('Error al obtener intento por ID', error);
            throw error;
        }
    }

    async obtenerIntentos() {
        try {
            const sql = `SELECT * FROM intento ORDER BY id_intento DESC`;
            await this.db.connect();
            const intentos = await this.db.query(sql);
            return intentos || null; 
        } catch (error) {
            console.error('No se pudo buscar el último intento', error);
            throw new Error('No se pudo buscar el último intento');
        } finally {
            await this.db.close(); 
        }
    }
    async editarIntentoPorId(id, usuarioId, fechaInicio, horaFinal, puntuacionMatematicas, puntuacionLectura, puntuacionNaturales, puntuacionSociales, puntuacionIngles, puntuacionGeneral) {
        try {
            const usuarioExists = await this.validarUsuario(usuarioId);
            if (!usuarioExists) {
                throw new Error('El usuario no existe');
            }
    
            const sql = `UPDATE intento SET usuario_id = ?, fecha_inicio = ?, hora_final = ?, puntuacion_Matematicas = ?, puntuacion_Lectura = ?, puntuacion_Naturales = ?, puntuacion_Sociales = ?, puntuacion_Ingles = ?, puntuacion_General = ? WHERE id_intento = ?`;
            await this.db.connect();
            await this.db.query(sql, [usuarioId, fechaInicio, horaFinal, puntuacionMatematicas, puntuacionLectura, puntuacionNaturales, puntuacionSociales, puntuacionIngles, puntuacionGeneral, id]);
            await this.db.close();
        } catch (error) {
            console.error('Error al editar el intento', error);
            throw error;
        }
    }
    
    async validarUsuario(usuarioId) {
        try {
            const sql = `SELECT COUNT(*) as count FROM usuario WHERE id_usuario = ?`;
            await this.db.connect();
            const result = await this.db.query(sql, [usuarioId]);
            await this.db.close();
            return result[0].count > 0; 
        } catch (error) {
            console.error('Error al validar el usuario', error);
            throw error;
        }
    }
}

export default Intento;