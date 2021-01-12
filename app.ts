import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import authRouter from './routers/auth';
import tokenParser from './middlewares/tokenParser';

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('short'));
app.use(tokenParser);

app.get('/', (req: Request, res: Response) =>
  res.send('Express + TypeScript Server')
);

app.use('/auth', authRouter);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
