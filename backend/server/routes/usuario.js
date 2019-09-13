const express = require("express");
var bodyParser = require('body-parser')
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const Usuario = require("../models/usuario");

app.post("/user", function(req, res) {
  let body = req.body;

  let usuario = new Usuario({
    username: body.username,
    email: body.email,
    password: body.password,
    role: body.role
  });

  usuario.save((err, usuarioDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err
      });
    }

    res.json({
        ok:true,
        usuario:usuarioDB
    });
  });
});

app.get("/user", function(req, res) {
  res.send("[GET]Saludos desde express");
});

module.exports = app;
