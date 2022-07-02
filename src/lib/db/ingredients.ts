import mongoose, { Model } from 'mongoose';

interface IIngredient {
	name: string;
	category: string;
	is_allowed: boolean;
}

export const ingredientsSchema = new mongoose.Schema<IIngredient>({
	name: String,
	category: {
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
	is_allowed: {
		type: Boolean,
		default: true
	}
});

const IngredientsModel: Model<IIngredient> = mongoose.model('Ingredients', ingredientsSchema);
export default IngredientsModel;
