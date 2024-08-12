import express, { Express } from 'express';
import userRoute from './routes/userRoutes';

class App {
  readonly app: Express;
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.use('/users/', userRoute);
  }
}

export default new App().app;
