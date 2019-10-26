import express from 'express';
import { resolve } from 'path';

import routes from './app/routes';

class App {
  constructor() {
    this.server = express();

    this.config();
    this.middlewares();
    this.routes();
  }

  config() {
    this.server.set('views', resolve(__dirname, 'app', 'views'));
    this.server.set('view engine', 'ejs');
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(express.static(resolve(__dirname, '..', 'public')));
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
