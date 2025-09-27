import express from 'express';
import path from 'path';

const app=express();

app.use(express.static('src/public'))

export default app;