import express from 'express';
import cors from 'cors';
import { routes } from './routes/routes';
import dotenv from 'dotenv';

const app = express();

dotenv.config({ path: '.env.test' });
app.use(express.json());
app.use(cors());
app.use(routes);

export { app };
