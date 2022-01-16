class userController {
    index(req, res){
        console.log(req.body);
    }
}

module.exports = new userController();