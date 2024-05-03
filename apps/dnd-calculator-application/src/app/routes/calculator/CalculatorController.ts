import express, { Request, Response, Router } from 'express';
import { postReqCalculate } from '../../middleware/calculator/postRequestCalculation'
import { CalculatorService } from './CalculatorService';

class CalculatorController {
    private router: Router;
    private calculatorService: CalculatorService;

    constructor() {
        this.router = express.Router();
        this.calculatorService = new CalculatorService()
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/', this.handleGetRequest);
        this.router.post('/', this.handleAtkCalcReq);
        // Add more routes as needed
    }

    private handleGetRequest(req: Request, res: Response) {
        // Handle GET request logic here
        res.send('GET request received from calculator');
    }

    private handleAtkCalcReq = (req: Request, res: Response) => {
        // Handle POST request logic here
        const { error, value } = postReqCalculate(req.body);

        if (error) {
            console.log('Error', error);
            return res.sendStatus(400);
        } else {
            console.log('Success', value);
        }

        // Assuming attackCalculator is a method of your CalculatorService class
        this.calculatorService.attackCalc();
        res.send('POST request received');
    }

    public getRouter(): Router {
        return this.router;
    }
}

export default CalculatorController;
