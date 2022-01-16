class userController {
    index(req, res){
        console.log(req.body);
    }

    show(req, res) {
        console.log(req, res); {
            var users = ["Robert", "Souza"]
            return res.status(200).json({
                error: false,
                users
            })
        }
    }
}

module.exports = new userController();