import { Router, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Categories } from '../../types/Categories';

const categoriesRoutes = Router();

const categories: Array<Categories> = [];

categoriesRoutes.post('/categories', (req: Request, res: Response) => {
    const { name, description } = req.body;

    categories.push({
        id: uuidv4(),
        name,
        description,
        created_at: new Date().toISOString()
    });

    return res.status(201).send();
})

export { categoriesRoutes }