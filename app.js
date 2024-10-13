import dotenv from 'dotenv'
dotenv.config()

import './src/database';

import expresss from 'express';
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/UserRoutes';

class App{
  constructor(){
    this.app = expresss();
    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.app.use(expresss.urlencoded({ extended: true}));
    this.app.use(expresss.json())
  }

  routes(){
    this.app.use('/', homeRoutes)
    this.app.use('/users/', userRoutes)
  }
}

export default new App().app;
