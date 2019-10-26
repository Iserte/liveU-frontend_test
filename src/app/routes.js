import { Router } from 'express';

import PagesController from './controllers/PagesController';

const routes = new Router();

routes.get('/', PagesController.index);
routes.post('/', PagesController.update);

export default routes;
