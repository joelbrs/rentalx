import { Router, Request, Response } from 'express';
import { Category } from '../model/Category';

const categoriesRoutes = Router();

const categories: Array<Category> = [];

categoriesRoutes.post('/', (req: Request, res: Response) => {
    const { name, description } = req.body;

    const category: Category = new Category();
    Object.assign(category, {
        name,
        description,
        created_at: new Date().toISOString()
    });

    categories.push(category);

    return res.status(201).send();
})

export { categoriesRoutes };