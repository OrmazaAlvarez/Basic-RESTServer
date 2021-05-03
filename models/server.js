const express = require('express');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.userEndPoint = '/api/user';
    // middlewares
    this.Middlewares();
    // Routes of my applcation
    this.routes();
  }

  Middlewares() {
    // COrs
    this.app.use(cors());
    // Read and parsed for body 
    this.app.use(express.json());
    // Puclic directories
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.userEndPoint, require('../routes/user.router'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server running on port', this.port);
    });
  }
}

module.exports = Server;
