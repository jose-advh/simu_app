import  mysql  from 'mysql2/promise';

class Database {
  constructor () {
    this.connection = null;
    this.config = {
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'db_simu',
    };
  };

  //método para conectar a la base de datos
  async connect () {
    try {
      this.connection = await mysql.createConnection(this.config);
      return this.connection;
      } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
      }
  }

  async query(sql, params = []) {
    try {
      const [rows, fields] = await this.connection.execute(sql, params);
      return rows;
    } catch (error) {
      console.error('Error al ejecutar la consulta:', error);
    }
  }

  async close() {
    try {
      await this.connection.end();
    } catch (error) {
      console.error('Error en cerrar la conexión a la base de datos', error);
    }
  }
}

export default Database;