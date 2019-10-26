"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');

var _PagesController = require('./controllers/PagesController'); var _PagesController2 = _interopRequireDefault(_PagesController);

const routes = new (0, _express.Router)();

routes.get('/', _PagesController2.default.index);
routes.post('/', _PagesController2.default.update);

exports. default = routes;
