const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const Folder = require('../models/folder');

app.post('/folder', function(req, res) {
    let body = req.body;

    let folder = new Folder({
        name: body.name,
        description: body.description,
        library: body.library
    });

    folder.save((err, folderDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            folder: folderDB
        });
    });
});

module.exports = app;