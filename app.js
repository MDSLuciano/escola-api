import dotenv from 'dotenv'
dotenv.config()

import './src/database';

import expresss from 'express';

import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/UserRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import alunoRoutes from './src/routes/alunoRoutes';
import photoRoutes from './src/routes/photoRoutes';

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
    this.app.use('/tokens/', tokenRoutes)
    this.app.use('/alunos/', alunoRoutes)
    this.app.use('/photos/', photoRoutes)
  }
}

export default new App().app;
