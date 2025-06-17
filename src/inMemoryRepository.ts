import { BaseEntity } from "./BaseEntity";
import { Repository } from "./repositoryGenerics";

export class InMemoryRepository<T extends BaseEntity> implements Repository<T> {
    constructor(
        private readonly items: T[] = [], 
        
    ){};
    
    create(item: T): void {
        for(let i = 0; i < this.items.length; i++){
            if(this.items[i].id === item.id) {
                throw new Error(`Item with id ${item.id} already exists.`);
            }
        }

        this.items.push(item);
    }

    read(id: string): T | undefined{
        for(let i = 0; i < this.items.length; i++){
            if(this.items[i].id === id) return this.items[i];
        }
    };

    update(item: T): void{
        for(let i = 0; i < this.items.length; i++){
            if(this.items[i].id === item.id) this.items[i] = item;
        }
    };

    list(): T[] {
        return this.items;
    };
}