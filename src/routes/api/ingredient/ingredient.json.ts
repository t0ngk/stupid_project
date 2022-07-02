import type { RequestHandler } from '@sveltejs/kit';
import Ingredient from '$lib/db/ingredients';

const ALL_INGREDIENTS = [
	{
		name: 'Singha',
		category: 'Beer'
	},
	{
		name: 'Chang',
		category: 'Beer'
	},
	{
		name: 'Heineken',
		category: 'Beer'
	},
	{
		name: 'Leo',
		category: 'Beer'
	},
	{
		name: "Gilbey's",
		category: 'Gin'
	},
	{
		name: 'Bombay Sapphire',
		category: 'Gin'
	},
	{
		name: 'Regency',
		category: 'Brandy'
	},
	{
		name: 'Meridian',
		category: 'Brandy'
	},
	{
		name: 'Johnnie Walker',
		category: 'Whisky'
	},
	{
		name: 'Bacardi',
		category: 'Rum'
	},
	{
		name: 'Mekhong',
		category: 'Rum'
	},
	{
		name: 'Jose Cuervo Especial',
		category: 'Tequila'
	},
	{
		name: 'Sierra',
		category: 'Tequila'
	},
	{
		name: 'Baczewski',
		category: 'Vodka'
	},
	{
		name: 'Kulov',
		category: 'Vodka'
	},
	{
		name: 'Absolut',
		category: 'Vodka'
	},
	{
		name: 'Gilbey’s 1857',
		category: 'Vodka'
	},
	{
		name: 'Baileys',
		category: 'Liqueur'
	},
	{
		name: 'Carolans',
		category: 'Liqueur'
	},
	{
		name: 'Romana Sambvca',
		category: 'Liqueur'
	},
	{
		name: 'Good Day',
		category: 'Soju'
	},
	{
		name: 'Jinro',
		category: 'Soju'
	},
	{
		name: 'The Nanda',
		category: 'Soju'
	},
	{
		name: 'Chum Churum',
		category: 'Soju'
	},
	{
		name: 'Charm',
		category: 'Soju'
	},
	{
		name: 'Makkolli',
		category: 'Misc'
	},
	{
		name: 'Apple Juice',
		category: 'Fruit_Juice'
	},
	{
		name: 'Orange Juice',
		category: 'Fruit_Juice'
	},
	{
		name: 'Watermelon Juice',
		category: 'Fruit_Juice'
	},
	{
		name: 'Grape Juice',
		category: 'Fruit_Juice'
	},
	{
		name: 'Lemon Juice',
		category: 'Fruit_Juice'
	},
	{
		name: 'Strawberry Juice',
		category: 'Fruit_Juice'
	},
	{
		name: 'Weed Juice',
		category: 'Fruit_Juice'
	},
	{
		name: 'Vanilla Syrup',
		category: 'Cocktail_Sweeteners'
	},
	{
		name: 'Lemon Syrup',
		category: 'Cocktail_Sweeteners'
	},
	{
		name: 'Blue Hawaii Syrup',
		category: 'Cocktail_Sweeteners'
	},
	{
		name: 'Maple Syrup',
		category: 'Cocktail_Sweeteners'
	},
	{
		name: 'Sugar Syrup',
		category: 'Cocktail_Sweeteners'
	},
	{
		name: 'Honey Syrup',
		category: 'Cocktail_Sweeteners'
	},
	{
		name: 'Coke',
		category: 'Softdrink'
	},
	{
		name: 'Pepsi',
		category: 'Softdrink'
	},
	{
		name: 'Soda',
		category: 'Softdrink'
	},
	{
		name: 'Sprite',
		category: 'Softdrink'
	},
	{
		name: 'Jelly',
		category: 'Misc'
	},
	{
		name: 'Boba',
		category: 'Misc'
	},
	{
		name: 'Blend 285',
		category: 'Misc'
	},
	{
		name: 'Wort',
		category: 'Misc'
	},
	{
		name: 'rice whiskya',
		category: 'Misc'
	}
];

export const post: RequestHandler = async ({ request }) => {
	ALL_INGREDIENTS.forEach(async (drink) => await Ingredient.create(drink));
	return {
		status: 200,
		body: {
			message: 'All ingredients has been added to database successfully!'
		}
	};
};
