import { SetOptional } from 'type-fest';
import { DataType, DataTypes, Model } from 'sequelize';
import { DataBase } from '../db/db.config';
// Se defina módulos de forma funcional

interface Attributes {
    id_register: bigint,
    name: string,
    lastname: string,
    email: string,
    password: string,
}

type CreationAttributes = SetOptional<Attributes, 'id_register'>;
interface RegistredModel extends Model<Partial<Attributes>, CreationAttributes>, Attributes { }

// Se pueden establecer varios atributos opcionales a la vez

const Registro = DataBase.define<RegistredModel>(
    "Registro",
    {
        id_register: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },

        name: DataTypes.STRING(50),
        lastname: DataTypes.STRING(50),
        email: DataTypes.STRING(100),
        password: DataTypes.STRING
    },
    {
        tableName: "registro",
        createdAt: true,
        updatedAt: true
    });

export default Registro

