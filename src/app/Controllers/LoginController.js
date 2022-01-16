const User = require("../Models/User");
const bcryptjs = require('bcryptjs')

class LogiController {

    async index(req, res) {
        const { email, password } = req.body;

        const userExist = await User.findOne({ email })

        if(!userExist){
            return res.status(400).json({
                error: true,
                message: "Usuário não existe!"
            })
        }

       await bcryptjs.compare(userExist.password, userExist)
    }
}

module.exports = new LogiController();