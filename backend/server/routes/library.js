const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const Library = require('../models/library');

app.post('/library', function(req, res) {
    let body = req.body;

    let library = new Library({
        name: body.name,
        company: body.company
    });

    library.save((err, libraryDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            library: libraryDB
        });
    });
});

module.exports = app;