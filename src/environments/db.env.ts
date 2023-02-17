
import 'dotenv/config'

export const dbenv = {
    DB_DIALECT: process.env.DB_DIALECT as any,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_NAME: process.env.DB_NAME,
    REST_PORT: process.env.REST_PORT,
}

export const tokenenv = {
    SECRETKEYTOKEN: process.env.SECRETKEYTOKEN
}



