const app = require('./app');

var PORT = process.env.PORT || 8080;
app.listen(PORT, (req, res) => {
    console.log(`App listen on port: ${PORT} `)
});
