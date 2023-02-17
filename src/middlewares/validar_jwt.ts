import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import Registro from "../models/registro";
import { tokenenv } from "../environments/db.env";


const validarJWT = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            msg: 'No se encuentra token en la petición'
        });
    }
    try {
        const tokenDecoded = jwt.verify(token, tokenenv.SECRETKEYTOKEN);
        const { id_user = null } = tokenDecoded as any
        //leer el usuario que corresponde al id_user
        const user = await Registro.findByPk(id_user);
        //Si el usuario no existe
        if (!user) {
            return res.status(401).json({
                msg: 'Token no vallido / user no existe en la Base de datos'
            })
        }
        
        //Conectarme a la base de datos y verificar si el id_user tiene estado true
        // if (!user.getDataValue('status')) {
        //     return res.status(401).json({
        //         msg: 'Token no valido/user(status false)'
        //     })
        // }

        req.user = user as any;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'token no valido'
        });
    }
}

export default validarJWT;