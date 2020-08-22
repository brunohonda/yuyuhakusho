// eslint-disable-next-line no-unused-vars
import express, { Request, Response } from 'express';
import { config } from 'dotenv';

config();

const app = express();

app.get(
    '/',
    (request: Request, response: Response) => response.json({
      message: 'Hello world!!!'
    })
);

app.listen(process.env.APP_PORT);
