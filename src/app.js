import express from 'express';
import memberRoute from './routes/member.route.js';

const app = express();

app.use('/members', memberRoute);

export default app;
