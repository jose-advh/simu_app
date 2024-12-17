import Intento from '../models/Intento.js';

const intentoController = {
    async crearIntento(req, res) {
        const { usuario_id, fecha_inicio, puntuaciones } = req.body;
        const hora_final = new Date();

        if (!usuario_id || !fecha_inicio) {
            return res.status(400).json({ message: 'El usuario_id y la fecha_inicio son obligatorios' });
        }

        if (isNaN(new Date(fecha_inicio))) {
            return res.status(400).json({ message: 'La fecha de inicio no es válida' });
        }

        const puntajes = [
            puntuaciones.matematicas,
            puntuaciones.lectura,
            puntuaciones.naturales,
            puntuaciones.sociales,
            puntuaciones.ingles,
            puntuaciones.general,
        ];

        for (const puntaje of puntajes) {
            if (puntaje < 0 || puntaje > 500) {
                return res.status(400).json({ message: 'Los puntajes deben estar entre 1 y 500' });
            }
        }
        for (const puntaje of puntajes) {
            if (puntaje < 1 || puntaje > 500) {
                return res.status(400).json({ message: 'Los puntajes deben estar entre 1 y 500' });
            }
        }

        try {
            const intento = new Intento();
            await intento.crearIntento(usuario_id, fecha_inicio, hora_final, puntuaciones.matematicas, puntuaciones.lectura, puntuaciones.naturales, puntuaciones.sociales, puntuaciones.ingles, puntuaciones.general);
            return res.status(201).json({ message: 'Intento creado con éxito' });
        } catch (error) {
            console.error('Error al generar el intento:', error);
            return res.status(500).json({ message: 'Error al crear el intento' });
        }
    },

    async obtenerIntentosPorUsuario(req, res) {
        const { usuario_id } = req.params;
        try {
            const intento = new Intento();
            const intentos = await intento.obtenerIntentosPorUsuarioId(usuario_id);
            if (intentos.length === 0) {
                return res.status(404).json({ message: 'No se encontraron intentos para este usuario' });
            }
            return res.json({ intentos });
        } catch (error) {
            console.error('Error al obtener intentos:', error);
            return res.status(500).json({ message: 'Error al obtener intentos' });
        }
    },

    async obtenerIntentoPorId(req, res) {
        const { id } = req.params;
        try {
            const intento = new Intento();
            const resultado = await intento.obtenerIntentoPorId(id);
            if (!resultado) {
                return res.status(404).json({ message: 'No se encontró el intento con este ID' });
            }
            return res.json({ intento: resultado });
        } catch (error) {
            console.error('Error al obtener intento por ID:', error);
            return res.status(500).json({ message: 'Error al obtener el intento' });
        }
    },

    async obtenerTodosLosIntentos(req, res) {
        try {
            const intento = new Intento();
            const intentos = await intento.obtenerIntentos(); // Llama al método del modelo para obtener todos los intentos
            if (intentos.length === 0) {
                return res.status(404).json({ message: 'No se encontraron intentos' });
            }
            return res.json({ intentos });
        } catch (error) {
            console.error('Error al obtener todos los intentos:', error);
            return res.status(500).json({ message: 'Error al obtener todos los intentos' });
        }
    },
    
    async editarIntento(req, res) {
        const { id } = req.params; 
        const { usuario_id, fecha_inicio, puntuaciones } = req.body; 
        const hora_final = new Date(); 

        if (!usuario_id || !fecha_inicio) {
            return res.status(400).json({ message: 'El usuario_id y la fecha_inicio son obligatorios' });
        }

        if (isNaN(new Date(fecha_inicio))) {
            return res.status(400).json({ message: 'La fecha de inicio no es válida' });
        }

        const puntajes = [
            puntuaciones.matematicas,
            puntuaciones.lectura,
            puntuaciones.naturales,
            puntuaciones.sociales,
            puntuaciones.ingles,
            puntuaciones.general,
        ];

        for (const puntaje of puntajes) {
            if (puntaje < 0 || puntaje > 500) {
                return res.status(400).json({ message: 'Los puntajes deben estar entre 0 y 500' });
            }
        }

        try {
            const intento = new Intento();
            await intento.editarIntentoPorId(id, usuario_id, fecha_inicio, hora_final, puntuaciones.matematicas, puntuaciones.lectura, puntuaciones.naturales, puntuaciones.sociales, puntuaciones.ingles, puntuaciones.general);
            return res.status(200).json({ message: 'Intento editado con éxito' });
        } catch (error) {
            console.error('Error al editar el intento:', error);
            return res.status(500).json({ message: 'Error al editar el intento' });
        }
    }
};

export default intentoController;