import jwt from "jsonwebtoken";
import { tokenenv } from "../environments/db.env";

const generarJWT = (id_user: bigint) => {
    return new Promise((resolve, reject) => {
        const payload = { id_user };
        jwt.sign(payload, tokenenv.SECRETKEYTOKEN, {
            expiresIn: '1h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se ha podido generar el token')
            } else {
                resolve(token as any);
            }
        })
    })
}

export default generarJWT