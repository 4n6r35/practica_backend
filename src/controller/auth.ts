import { Request, Response } from "express";
import User from '../models/user';
import generarJWT from "../helpers/generarJWT";
import bcrypt from 'bcrypt';

const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const userpre = await User.findOne({ where: { email } });

        if (!userpre) {
            return res.status(400).json({
                ok: false
            })
        }

        const validpass = await bcrypt.compare(password, userpre.password)
        // const validpass = await bcrypt.compare(password, userpre.getDataValue('password') as string)
        //VALIDACIONES
        //Verificar si existe el email
        if (!userpre) {
            return res.status(400).json({
                msg: 'Usuario|Password no son correctos/correo'
            })
        }

        // if (!userpre.getDataValue('status')) {
        if (!userpre.status) {
            return res.status(400).json({
                msg: 'no se encontro el usuario/estado_falso'
            })
        }
        // Validar si la contraseña 
        if (!validpass) {
            return res.status(400).json({
                msg: 'Usuario|Password no son correctos/password'
            })
        }

        //Generar JWT
        const token = await generarJWT(userpre.id_user)
        return res.json({
            ok: true,
            userpre,
            token
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: 'Se ha producido un error'
        });
    }
}

export default login