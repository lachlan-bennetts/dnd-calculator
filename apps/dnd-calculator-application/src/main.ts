import express from 'express';
import CalculatorController from './app/controllers/CalculatorController';
import CharacterRoute from './app/controllers/CharacterController';
import { AuthContoller } from './app/controllers/AuthController';
import CharacterController from './app/controllers/CharacterController';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const calculatorController = new CalculatorController();
const characterController = new CharacterController();
const authContoller = new AuthContoller();


const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.use('/calculator', calculatorController.getRouter());
app.use('/auth', authContoller.getRouter());
app.use('/character', characterController.getRouter());

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
