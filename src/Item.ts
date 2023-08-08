import mongoose, {Schema, Document, mongo} from "mongoose";

interface Item extends Document {
    name: string;
    description: string;
}

const itemSchema = new Schema <Item>({
    name: {type: String, required: true},
    description: { type: String, required: true},
});

const ItemModel = mongoose.model<Item>('Item', itemSchema);

export {ItemModel};
