import express, { Request, Response } from 'express'
const app = express();

const HOST = '0.0.0.0'
const PORT = 3000

app.get('/', (req:Request, res:Response) => {
  res.status(200).json({ message: 'Hello World!' });
});

app.listen(PORT, HOST, () => {
  console.log(`Example app listening on port http://${HOST}:${PORT}`)
});