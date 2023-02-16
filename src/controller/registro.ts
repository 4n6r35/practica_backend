import { Request, Response } from "express";
import { DataBase } from "../db/db.config";
import Registro from "../models/registro";
import bcrypt from 'bcrypt';

const postRegistro = async (req: Request, res: Response) => {
    const { name, lastname, email, password } = req.body;
    const transaction = await DataBase.transaction();
    try {
        //Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        const encryptPassword = bcrypt.hashSync(password, salt);

        const registro = await Registro.create({
            name,
            lastname,
            email,
            password: encryptPassword
        },
            {
                transaction
            })
        transaction.commit();
        res.json(registro)
    } catch (error) {
        transaction.rollback();
        console.log(error)
        res.status(500).json({
            msg: 'Error en el servidor'
        })
    }
}

export { postRegistro }