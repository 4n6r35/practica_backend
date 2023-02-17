import 'dotenv/config'
import Server from "./server/serve";

const server = new Server();

server.listen();