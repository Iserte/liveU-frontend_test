"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _path = require('path');

var _routes = require('./app/routes'); var _routes2 = _interopRequireDefault(_routes);

class App {
  constructor() {
    this.server = _express2.default.call(void 0, );

    this.config();
    this.middlewares();
    this.routes();
  }

  config() {
    this.server.set('views', _path.resolve.call(void 0, __dirname, 'app', 'views'));
    this.server.set('view engine', 'ejs');
  }

  middlewares() {
    this.server.use(_express2.default.json());
    this.server.use(_express2.default.urlencoded({ extended: true }));
    this.server.use(_express2.default.static(_path.resolve.call(void 0, __dirname, '..', 'public')));
  }

  routes() {
    this.server.use(_routes2.default);
  }
}

exports. default = new App().server;
