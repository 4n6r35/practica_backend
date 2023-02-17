import { Router } from "express";
import { check } from "express-validator"
import Validar_campos from '../middlewares/validar_campos';
import { existe_email } from "../helpers/validators_user";
import { postRegistro } from "../controller/registro";

const routerregis = Router();

routerregis.post('/registro', [
    check('name', 'EL nombre es obligatorio').not().isEmpty(),
    check('lastname', 'EL nombre es obligatorio').not().isEmpty(),
    check('email', 'correo no valido').isEmail(),
    check('email').custom(existe_email),
    check('password', 'Contraseña oblligatorio y debe ser más de 8 letras').notEmpty().isLength({ min: 8 }),
    Validar_campos
], postRegistro);

export default routerregis

