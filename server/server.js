const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pool = require('./modules/pool');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.post('/feedback', (req, res) => {
    console.log('in POST route')
    let feeling = String(req.body.feeling);
    let understanding = String(req.body.understanding);
    let support = String(req.body.support);
    let comment = String(req.body.comment);
    console.log(feeling, understanding, support, comment)
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comment") VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [feeling, understanding, support, comment]).then((result) => {
        console.log('cool')
        }).catch((error) => {
        console.log('Error GET', error)
        res.sendStatus(500);
    });
})

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});