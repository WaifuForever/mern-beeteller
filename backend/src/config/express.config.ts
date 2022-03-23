import express from 'express';
import cors from 'cors';

import corsOptionsDelegate from './cors.config';

import appRoute from '../routes/app.route';
import userRoute from '../routes/user.route';
import currencyRoute from '../routes/currency.route';

const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors(corsOptionsDelegate));

app.use(appRoute);
app.use(userRoute);
app.use(currencyRoute);

export { app };
