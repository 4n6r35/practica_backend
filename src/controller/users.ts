import { Request, Response } from "express";
import User from "../models/user";
import { DataBase } from "../db/db.config";

const getUsers = async (req: Request, res: Response) => {
    const users = await User.findAll();
    res.json({ users });
}

const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await User.findByPk(id)
    if (user) {
        res.json(user)
    } else {
        res.status(400).json({
            msg: `No exsiste usuario con este ${id} id`
        })
    }
}

const postUser = async (req: Request, res: Response) => {
    const { email, name, cargo, status } = req.body;
    const transaction = await DataBase.transaction();

    try {
        const user = await User.create({
            name,
            status,
            cargo,
            email
        }, {
            transaction
        })

        //GUARDAR EN BASE DE DATOS
        transaction.commit();
        res.json(user)
    } catch (err) {
        transaction.rollback();
        console.log(err)
        res.status(500).json({
            msg: 'Hable con el administartivo'
        })
    }
}

const putUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    const transaction = await DataBase.transaction();
    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({
                msg: `No hay usuarios con id ${id}`
            })
        }
        await user.update(body, { transaction })
        transaction.commit()
        res.json(user)
    } catch (err) {
        transaction.rollback();
        console.log(err)
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const transaction = await DataBase.transaction()

    try {
        const user = await User.findByPk(id)
        if (!user) {
            return res.status(404).json({
                msg: `No existe usuario con id ${id}`
            })
        }
        await user.update({ status: false });
        // await user.destroy();
        res.json(user)
    } catch (err) {
        transaction.rollback();
        console.log(err)
        res.status(500).json({})
    }
}

export {
    getUsers,
    getUser,
    postUser,
    putUser,
    deleteUser
}

