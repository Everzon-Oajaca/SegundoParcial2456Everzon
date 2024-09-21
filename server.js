const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const ProductsRouter = require('./app/routers/transaction.router.js'); // Asegúrate de que el nombre del enrutador coincida
const db = require('./app/config/db.config.js');

// Sincronizar la base de datos y las tablas
db.sequelize.sync({ force: true }).then(() => {
  console.log('Se eliminaron y re-crearon las tablas con { force: true }');
});

const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use('/', ProductsRouter); // Cambia a ProductsRouter

app.get("/", (req, res) => {
  res.json({ message: "Bienvenido Estudiantes de UMG" });
});

const server = app.listen(8080, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log("App escuchando en http://%s:%s", host, port);
});
