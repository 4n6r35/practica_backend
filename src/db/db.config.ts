import { Sequelize } from "sequelize";
import { dbenv } from "../environments/db.env";

const DataBase = new Sequelize({
    dialect: dbenv.DB_DIALECT,
    host: dbenv.DB_HOST,
    port: dbenv.DB_PORT,
    username: dbenv.DB_USER,
    password: dbenv.DB_PASS,
    database: dbenv.DB_NAME,
    logging: undefined
});

const connect = async () => {
    try {
        await DataBase.authenticate();
        console.log("Conexión exitosa con la base de datos")
    } catch (error) {
        console.log("Error::", error)
        console.log("Se ha producido un error al conectarse a la base de datos")
    }
}

export default connect
export { DataBase };