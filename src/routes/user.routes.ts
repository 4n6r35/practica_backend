import { Router } from "express";
import {
    getUsers,
    getUser,
    postUser,
    putUser,
    deleteUser
} from "../controller/users";
import { check } from "express-validator";
import { ExistsUserbyID, existe_email } from "../helpers/validators_user";
import Validar_campos from "../middlewares/validar_campos";
import validarJWT from "../middlewares/validar_jwt";


const router = Router();
router.get('/', getUsers);

router.get('/:id', [
    check('id', 'id no valido').isNumeric(),
    check('id').custom(ExistsUserbyID),
    Validar_campos
], getUser);

router.post('/', [
    check('name', 'EL nombre es obligatorio').not().isEmpty(),
    check('email', 'correo no valido').isEmail(),
    check('email').custom(existe_email),
    Validar_campos
], postUser);

router.put('/:id', [
    check('id', 'id no valido').isNumeric(),
    check('id').custom(ExistsUserbyID),
    Validar_campos
], putUser);

router.delete('/:id', [
    validarJWT,
    check('id', 'id no valido').isNumeric(),
    check('id').custom(ExistsUserbyID),
    Validar_campos
], deleteUser)

export default router