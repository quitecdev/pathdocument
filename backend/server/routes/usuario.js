const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const Usuario = require("../models/usuario");

app.post("/user", function(req, res) {
  let body = req.body;

  let usuario = new Usuario({
    username: body.username,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
    role: body.role
  });

  usuario.save((err, usuarioDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err
      });
    }

    usuarioDB.password = null;

    res.json({
      ok: true,
      usuario: usuarioDB
    });
  });
});

app.put("/user/:id", function(req, res) {
  let id = req.params.id;
  let body = req.body;

  Usuario.findByIdAndUpdate(id, body, { new: true }, (err, usuarioDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err
      });
    }

    res.json({
      ok: true,
      usuario: usuarioDB
    });
  });
});

app.get("/user", function(req, res) {
  res.send("[GET]Saludos desde express");
});

module.exports = app;
