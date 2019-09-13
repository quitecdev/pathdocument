require("./config/config");

const express = require("express");
const app = express();

const mongoose = require("mongoose");

//RUTAS
app.use(require("./routes/usuario"));

mongoose.connect(
  "mongodb://localhost:27017/pathdocument",
  {
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
