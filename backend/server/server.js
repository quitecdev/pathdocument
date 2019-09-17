require("./config/config");

const express = require("express");
const app = express();

const mongoose = require("mongoose");

//RUTAS

//Usuario
app.use(require("./routes/usuario"));

//Company
app.use(require("./routes/company"));

//Library
app.use(require("./routes/library"));

//Folder
app.use(require("./routes/folder"));

mongoose.connect(
    "mongodb://localhost:27017/pathdocument", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err, res) => {
        if (err) throw err;
        console.log("Base de Datos OK");
    }
);

app.listen(process.env.PORT, () => {
    console.log("El servidor esta inicializado en el puerto", process.env.PORT);
});