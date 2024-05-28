import express from 'express';
import CalculatorController from './app/controllers/CalculatorController';
import CharacterRoute from './app/controllers/CharacterController';
import { AuthContoller } from './app/controllers/AuthController';
import CharacterController from './app/controllers/CharacterController';
import { CustomError } from './app/utils/CustomError';
import { globalErrorHandler } from './app/controllers/ErrorController';

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

app.all('*', (req, res, next) => {
  const err = new CustomError('Route not found', 404);
  next(err)
})
app.use(globalErrorHandler);


app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
