import express from 'express';
import CalculatorController from './app/routes/calculator/CalculatorController';
import CharacterRoute from './app/routes/character/CharacterController';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const calculatorController = new CalculatorController();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.use('/calculator', calculatorController.getRouter());

app.use('/character', CharacterRoute);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
