// eslint-disable-next-line no-unused-vars
import express, { Request, Response } from 'express';
import { config } from 'dotenv';

config();

const app = express();

app.get(
    '/',
    (request: Request, response: Response) => {
      const message = 'Hello world!!!';

      return response.json({ message });
    }
);

app.listen(process.env.APP_PORT);
