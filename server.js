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

app.get('/une-autre-page', (req, res) => {
    res.render('une-autre-page', {'une': true});
})

app.get('/et-de-trois', (req, res) => {
    res.render('et-de-trois', {'et': true});
})

app.get('/quatrieme-page', (req, res) => {
    res.render('quatrieme-page', {'quatrieme-page': true});
})


app.get('/cinquieme-page', (req, res) => {
    res.render('cinquieme-page', {'cinquieme-page': true});
})


app.get('/bundesliga', (req, res) => {
    res.render('bundesliga', {'bundesliga': true});
})





app.listen(port, () => {
    console.log(`le serveur écoute sur http://localhost:${port}`);
})