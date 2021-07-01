var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'),//cargamos modelo
  bodyParser = require('body-parser');

//coneccion de mongo DB
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require ('./api/routes/todoListRoutes');//importamos las rutas
routes(app);//registramos las rutas

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' ruta no encontrada'})
  });

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);