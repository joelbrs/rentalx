import { v4 as uuidv4 } from 'uuid';

export class Category {
    id?: string;
    name: string | undefined;
    description: string | undefined;
    created_at: string | undefined;

    constructor() {
        if (!this.id) this.id = uuidv4();
    }
}