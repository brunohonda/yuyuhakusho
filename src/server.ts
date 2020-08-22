// eslint-disable-next-line no-unused-vars
import express, { Request, Response } from 'express';

const app = express();

app.get(
    '/',
    (request: Request, response: Response) => response.json({
      message: 'Hello world!!!'
    })
);

app.listen(3000);
