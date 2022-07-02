import mongoose from 'mongoose';

export const ingredientsSchema = new mongoose.Schema({
	name: String,
	category_id: {
		type: String,
		enum: [
			'Beer',
			'Gin',
			'Brandy',
			'Whisky',
			'Rum',
			'Tequila',
			'Vodka',
			'Liqueur',
			'Soju',
			'Fruit_Juice',
			'Cocktail_Sweeteners',
			'Softdrink',
			'Misc'
		]
	},
	is_allowed: Boolean
});

const IngredientsModel = mongoose.model('Ingredients', ingredientsSchema);
export default IngredientsModel;
