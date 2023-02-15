import { Router } from "express";
import { check } from "express-validator"
import login from "../middlewares/validar_info_auth";
import Validar_campos from '../middlewares/validar_campos';

const routeraut = Router();

routeraut.post('/login', [
    check('email', 'El correo es obligatorio').isEmail(),
    check('password', 'contraseña obligatorio').notEmpty(),
    Validar_campos
], login);

export default routeraut

