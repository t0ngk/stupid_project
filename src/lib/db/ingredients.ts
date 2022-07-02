import mongoose from 'mongoose';

export const ingredientsSchema = new mongoose.Schema({
	name: String,
	category_id: Number,
	is_allowed: Boolean
});

const IngredientsModel = mongoose.model('Ingredients', ingredientsSchema);
export default IngredientsModel;
