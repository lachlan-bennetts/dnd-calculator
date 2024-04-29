import express from 'express';
import CalculatorRoute from './app/routes/calculator/CalculatorController';
import CharacterRoute from './app/routes/character/CharacterController';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();


app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.use('/calculator', CalculatorRoute);

app.use('/character', CharacterRoute);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
