import { Category } from "../model/Category";

interface ICreateCategoryDTO {
    name: string;
    description: string
}


export class CategoriesRepository {
    private categories: Array<Category> = [];

    constructor() {
        this.categories = [];
    };

    create({ name, description }: ICreateCategoryDTO): void {
        const category: Category = new Category();
        Object.assign(category, {
            name,
            description,
            created_at: new Date().toISOString()
        });
    
        this.categories.push(category);
    }
}