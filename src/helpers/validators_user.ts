import User from "../models/user";


const existe_email = async (email = '') => {
    //Verificar si email existe_email
    const verfEmail = await User.findOne({ where: { email } })
    if (verfEmail) {
        throw new Error(`El correo ${email} ya se encuentra registrado`)
    }
}

const ExistsUserbyID = async (id = '') => {
    //Verificar si el id usuario existe
    const exist_user = await User.findByPk(id);
    if (!exist_user) {
        throw new Error(`El id ${id} no existe`)
    }
}

export {
    existe_email,
    ExistsUserbyID
}