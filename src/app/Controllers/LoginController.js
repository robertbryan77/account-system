const User = require("../Models/User");
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../config/auth')

class LogiController {

    async index(req, res) {
        const { email, password } = req.body;

        const userExist = await User.finOne({ email })

        if (!userExist) {
            return res.status(400).json({
                error: true,
                message: "Usuário não existe!"
            })
        }

        if (!(await bcryptjs.compare(userExist.password, userExist))) {
            return res.status(400).json({
                error: true,
                message: "A senha está inválida"
            })
        }

        // retorna o token do usuário

        return res.status(200).json({
            user: {
                name: userExist.name,
                email: userExist.email,
            },
            token: jwt.sign(
                { id: userExist._id },
                config.secret,
                { expiresIn: config.expireIn })
        })

    }
}

module.exports = new LogiController();