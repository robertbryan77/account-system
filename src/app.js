const express = require("express")
const cors = require("cors")
const routes = require("./routes")

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.json());

        this.app.use((req, res, next) => {
            res.header("Access-controll-Allow-Origin", "*");
            res.header("Access-controll-Allow-Methods","Get, POST, PUT, DELETE");
            res.header("Access-controll-Allow-Headers", "Acess, Content-type, Authorization, Acept, Origin, X-Requested-with");

            this.app.use(cors());
            next();
        })
    }

    routes() {
        this.app.use(routes);

    }

}

module.exports = new App().app;