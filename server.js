let express = require('express');
let app = express();
app.listen(8080);

app.use(express.static(__dirname));

app.get('/randomNumber', (req, res) => {
    let randomNumber = Math.floor(Math.random() * 10);
    res.send(`${randomNumber}`);
});