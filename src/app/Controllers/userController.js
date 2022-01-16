const User = require('../models/User');

class userController {
    show(req, res) {
        console.log(req, res); {
            var users = ["Robert", "Souza"]
            return res.status(200).json({
                error: false,
                users
            })
        }
    }

    async store(req, res) {

        //Validação

        const { name, email, password } = req.body;

        const data = {
            name,
            email,
            password
        }

        await User.create(data, (err) => {
            if (err)
                return res.statues(400).json({
                    error: true,
                    message: "Erro ao tentar inserir usuário no mongoDB"
                })

            return res.status(200).json({
                error: false,
                message: "Usuário cadastrado com sucesso"
            })
        })
    }

}

module.exports = new userController();