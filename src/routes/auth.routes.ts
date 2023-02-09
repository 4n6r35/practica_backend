import { Router } from "express";
import { check } from "express-validator"
import login from "../controller/auth";
import Validar_campos from '../middlewares/validar_campos';

const routeraut = Router();

routeraut.post('/login', [
    check('email', 'El correo es obligatorio').isEmail(),
    check('password', 'contraseña obligatorio').not().isEmpty(),
    Validar_campos
], login);

export default routeraut

