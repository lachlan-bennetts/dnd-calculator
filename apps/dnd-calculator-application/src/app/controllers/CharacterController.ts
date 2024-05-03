import express, { Request, Response } from 'express';


const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  // Handle GET request logic here
  res.send('GET request received from character');
});

router.post('/create', (req: Request, res: Response) => {
  // Handle POST request logic here
  res.send('GET request received');
});


// Add more routes as needed

export default router;