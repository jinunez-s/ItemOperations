import mongoose from "mongoose";

interface Item {
    id: number;
    name: string;
    description?: string;
}

class Database {
    private data: Item[] = [];
    private idCounter: number = 1;

    //Create
    createItem(item: Item): Item {
        const newItem = {...item, id: this.idCounter++};
        this.data.push(newItem);
        return newItem;
    }
    //Read
    getItem(id: number): Item | undefined {
        return this.data.find(item => item.id === id);
    }
    getAllItems (): Item[] {
        return this.data;
    }

    //update
    updateItem(id:number, updatedItem: Item): Item | undefined {
        const index = this.data.findIndex(item => item.id === id);
        if(index !== -1){
            this.data[index] = { ... updatedItem, id};
            return this.data[index];
        }
        return undefined;
    }

    //Delete
    deleteItem(id: number): boolean{
        const index = this.data.findIndex(item => item.id === id);
        if(index !== -1){
            this.data.splice(index, 1);
            return true;
        }
        return false;
    }
}
//Example usage
const db = new Database();

const item1 = db.createItem({name: "Item 1", description: "Description for Item 1"});