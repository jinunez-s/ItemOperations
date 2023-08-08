import { error } from "console";
import connectDatabase from "./db";
import { ItemModel } from "./Item";

async function main () {
    await connectDatabase();

    const newItem = await ItemModel.create({
        name: 'Item  1',
        description: 'Description for Item 1',
    });

    console.log('Created item', newItem);

    const foundItem = await ItemModel.findOne({ name: 'Item 1'})

    console.log('Found item:', foundItem)

    const updateItem = await ItemModel.findByIdAndUpdate(
        newItem._id,
        { description: 'Update description'},
        {new: true}
    )
    console.log('Updated item: ', updateItem);

    const deletedItem = await ItemModel.findByIdAndDelete(newItem._id);
    console.log('Deleted item:', deletedItem);
}

main().catch(error => console.error('Error: ', error));
