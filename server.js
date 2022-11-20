const express = require ('express');
require('dotenv').config();
const path = require ('path');
const { engine } = require ('express-handlebars');

const app = express();


app.engine('hbs', engine({defaultLayout: 'main', extname: 'hbs'}));
app.set('view engine', 'hbs');
app.set('views', './views');


app.use('/public', express.static(path.join(__dirname, 'assets')))

const port = 8000;



app.get('/', (req, res) => {
    res.render('index', {'index': true});
})

app.get('/equipe-nationale', (req, res) => {
    res.render('equipe-nationale', {'equipe-nationale': true});
})

app.get('/ligue-1', (req, res) => {
    res.render('ligue-1', {'ligue-1': true});
})

app.get('/laliga', (req, res) => {
    res.render('laliga', {'laliga': true});
})


app.get('/seria', (req, res) => {
    res.render('seria', {'seria': true});
})


app.get('/bundesliga', (req, res) => {
    res.render('bundesliga', {'bundesliga': true});
})





app.listen(port, () => {
    console.log(`le serveur écoute sur http://localhost:${port}`);
})