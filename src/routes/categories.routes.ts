import { Router, Request, Response } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (req: Request, res: Response) => {
    const { name, description } = req.body;
    categoriesRepository.create({ name, description });

    return res.status(201).send();
})

categoriesRoutes.get('/', (req: Request, res: Response) => {
    const categoriesList = categoriesRepository.list();

    if (!categoriesList.length) return res.status(204).send();

    return res.status(200).json(categoriesList);
})

export { categoriesRoutes };