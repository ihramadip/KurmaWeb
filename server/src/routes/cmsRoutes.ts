import { Router, Request, Response } from 'express';
import { GoogleSheetService } from '../services/GoogleSheetService';

const router = Router();

router.get('/cms-data', async (req: Request, res: Response) => {
  try {
    const data = await GoogleSheetService.getAllData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch CMS data' });
  }
});

export default router;
