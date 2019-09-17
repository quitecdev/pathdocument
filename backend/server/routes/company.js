const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const Company = require('../models/company');

app.post('/company', function(req, res) {
    let body = req.body;

    let company = new Company({
        name: body.name,
    });

    company.save((err, companyDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            company: companyDB
        });
    });
});

module.exports = app;