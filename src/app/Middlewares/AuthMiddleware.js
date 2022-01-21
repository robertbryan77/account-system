module.exports = async (req, res, next  ) => {
    const auth = req.headers.authorization;

    if(!auth) {
        return res.status(130).json({
            erro: true,
            code: 130, 
            message: "O token de autenticação não existe!"
        })
    }

    console.log(auth)
}