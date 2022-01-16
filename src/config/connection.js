const mongoose = require('mongoose')

class Connection {
    constructor() {
        this.dataBaseConnectionMongoDB();

    }

    dataBaseConnectionMongoDB() {
        this.dataBaseConnection = mongoose.connect("mongodb://localhost/nodejs", {
            
        })
            .then(() => {
                console.log("Conexão estabelecida");
            }).catch((error) => {
                console.log(`Erro ao estabelecer conexão com o mongodb: ${error}`)
            })
    }

}

module.exports = new Connection();