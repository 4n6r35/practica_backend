import { SetOptional } from "type-fest";
import { DataTypes, Model, ModelDefined } from "sequelize";
import { DataBase } from "../db/db.config";

// Se define módulos de forma funcional
interface Attributes {
    id_user: bigint;
    name: string,
    cargo: string,
    email: string,
    status: boolean,
}
type CreationAttributes = SetOptional<Attributes, 'id_user'>;

interface UserModel extends Model<Attributes, CreationAttributes>, Attributes { }

// Se pueden establecer varios atributos opcionales a la vez

const User = DataBase.define<UserModel>(
    "User",
    {
        id_user: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING
        },
        cargo: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
    tableName: "users",
    createdAt: true,
    updatedAt: true,
});

export default User