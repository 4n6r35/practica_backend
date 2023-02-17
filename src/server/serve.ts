import cors from "cors";
import express, { Application } from "express";
import connect from "../db/db.config";
import { dbenv } from '../environments/db.env';
import router from "../routes/user.routes";
import routeraut from "../routes/auth.routes";
import routerregis from "../routes/registro.routes";
import path from "path"

class Server {
    private app: Application;
    private paths = {
        user: '/api/user',
        auth: '/api'
    }
    constructor() {
        this.app = express();
        this.middlewares();
        this.TheConnection()
        this.routes()
    }
    async TheConnection() {
        await connect();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static(path.resolve(process.cwd(), 'public')))
    }

    routes() {
        this.app.use(this.paths.user, router)
        this.app.use(this.paths.auth, routeraut)
        this.app.use(this.paths.user, routerregis)

    }

    public listen() {
        this.app.listen(dbenv.REST_PORT, () => {
            console.log('Servidor corriendo en puerto ' + dbenv.REST_PORT);
        });
    }
}

export default Server