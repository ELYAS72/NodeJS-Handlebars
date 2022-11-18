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



// const url = 'https://api-football-v1.p.rapidapi.com/v3/timezone';

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '6e1aad90b0mshecd4198a099aa6bp1700f7jsn188f5edd4f42',
//     'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//   }
// };

// fetch(url, options)
// 	.then(res => res.json())
// 	.then(json => console.log(json))
// 	.catch(err => console.error('error:' + err));




app.listen(port, () => {
    console.log(`le serveur écoute sur http://localhost:${port}`);
})