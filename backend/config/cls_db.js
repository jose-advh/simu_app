import  mysql  from 'mysql2/promise';

class Database {
  constructor () {
    this.connection = null;
    this.config = {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'bd_simu',
    };
  };

  //método para conectar a la base de datos
  async connect () {
    try {
      this.connection = await mysql.createConnection(this.config);
      console.log('Conectado a la base de datos');
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
      console.log('Conexión cerrada');      
    } catch (error) {
      console.error('Error en cerrar la conexión a la base de datos', error);
    }
  }
}

export default Database;