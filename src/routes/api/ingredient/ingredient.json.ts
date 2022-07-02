import type { RequestHandler } from '@sveltejs/kit';
import Ingredient from '$lib/db/ingredients';

const ALL_INGREDIENTS = [
	{
		name: 'Singha',
		category: 'Beer',
		image_path: '/Beer/Singha.jpg'
	},
	{
		name: 'Chang',
		category: 'Beer',
		image_path: '/Beer/Chang.png'
	},
	{
		name: 'Heineken',
		category: 'Beer',
		image_path: '/Beer/Heineken.png'
	},
	{
		name: 'Leo',
		category: 'Beer',
		image_path: '/Beer/Leo.jpg'
	},
	{
		name: "Gilbey's",
		category: 'Gin',
		image_path: '/Gin/Gilbey.jpg'
	},
	{
		name: 'Bombay Sapphire',
		category: 'Gin',
		image_path: '/Gin/Bombay.jpg'
	},
	{
		name: 'Regency',
		category: 'Brandy',
		image_path: '/Brandy/Regency.png'
	},
	{
		name: 'Meridian',
		category: 'Brandy',
		image_path: '/Brandy/Meridian.jpg'
	},
	{
		name: 'Johnnie Walker',
		category: 'Whisky',
		image_path: '/Whisky/Johnnie_Walker.png'
	},
	{
		name: 'Bacardi',
		category: 'Rum',
		image_path: '/RUM/Bacardi.jpg'
	},
	{
		name: 'Mekhong',
		category: 'Rum',
		image_path: '/RUM/Mekhong.jpeg'
	},
	{
		name: 'Jose Cuervo Especial',
		category: 'Tequila',
		image_path: '/Tequila/Jose_Cuervo_Especial.jpg'
	},
	{
		name: 'Sierra',
		category: 'Tequila',
		image_path: '/Tequila/Sierra.jpg'
	},
	{
		name: 'Baczewski',
		category: 'Vodka',
		image_path: '/Vodka/Baczewski.jpg'
	},
	{
		name: 'Kulov',
		category: 'Vodka',
		image_path: '/Vodka/Kulov.jpg'
	},
	{
		name: 'Absolut',
		category: 'Vodka',
		image_path: '/Vodka/Absolut.jpg'
	},
	{
		name: 'Gilbey’s 1857',
		category: 'Vodka',
		image_path: '/Vodka/Gilbey_1857.jpg'
	},
	{
		name: 'Baileys',
		category: 'Liqueur',
		image_path: '/Liqueur/Baileys.jpg'
	},
	{
		name: 'Carolans',
		category: 'Liqueur',
		image_path: '/Liqueur/Carolans.jpg'
	},
	{
		name: 'Romana Sambvca',
		category: 'Liqueur',
		image_path: '/Liqueur/Romana_Sambvca.png'
	},
	{
		name: 'Good Day',
		category: 'Soju',
		image_path: '/Soju/Good_Day.png'
	},
	{
		name: 'Jinro',
		category: 'Soju',
		image_path: '/Soju/Jinro.webp'
	},
	{
		name: 'The Nanda',
		category: 'Soju',
		image_path: '/Soju/The_Nanda.png'
	},
	{
		name: 'Chum Churum',
		category: 'Soju',
		image_path: '/Soju/Chum_Churum.png'
	},
	{
		name: 'Charm',
		category: 'Soju',
		image_path: '/Soju/Charm.png'
	},
	{
		name: 'Makkolli',
		category: 'Misc',
		image_path: '/Makkolli.jpg'
	},
	{
		name: 'Apple Juice',
		category: 'Fruit_Juice',
		image_path: '/Juice/Apple_Juice.jpg'
	},
	{
		name: 'Orange Juice',
		category: 'Fruit_Juice',
		image_path: '/Juice/Orange_Juice.jpg'
	},
	{
		name: 'Grape Juice',
		category: 'Fruit_Juice',
		image_path: '/Juice/Grape_Juice.jpg'
	},
	{
		name: 'Lemon Juice',
		category: 'Fruit_Juice',
		image_path: '/Juice/Lemon_Juice.jpg'
	},
	{
		name: 'Strawberry Juice',
		category: 'Fruit_Juice',
		image_path: '/Juice/Strawberry_Juice.jpg'
	},
	{
		name: 'Weed Juice',
		category: 'Fruit_Juice',
		image_path: '/Juice/Weed_Juice.jpg'
	},
	{
		name: 'Vanilla Syrup',
		category: 'Cocktail_Sweeteners',
		image_path: '/any/Vanilla_Syrup.jpg'
	},
	{
		name: 'Lemon Syrup',
		category: 'Cocktail_Sweeteners',
		image_path: '/any/Lemon_Syrup.webp'
	},
	{
		name: 'Blue Hawaii Syrup',
		category: 'Cocktail_Sweeteners',
		image_path: '/any/Blue_Hawaii_Syrup.jpg'
	},
	{
		name: 'Maple Syrup',
		category: 'Cocktail_Sweeteners',
		image_path: '/any/Maple_Syrup.jpg'
	},
	{
		name: 'Sugar Syrup',
		category: 'Cocktail_Sweeteners',
		image_path: '/any/Sugar_Syrup.jpg'
	},
	{
		name: 'Honey Syrup',
		category: 'Cocktail_Sweeteners',
		image_path: '/any/Honey_Syrup.jpg'
	},
	{
		name: 'Coke',
		category: 'Softdrink',
		image_path: '/any/Coke.jpg'
	},
	{
		name: 'Pepsi',
		category: 'Softdrink',
		image_path: '/any/Pepsi.jpg'
	},
	{
		name: 'Soda',
		category: 'Softdrink',
		image_path: '/any/Soda.jpg'
	},
	{
		name: 'Sprite',
		category: 'Softdrink',
		image_path: '/any/Sprite.png'
	},
	{
		name: 'Jelly',
		category: 'Misc',
		image_path: '/any/Jelly.jpg'
	},
	{
		name: 'Boba',
		category: 'Misc',
		image_path: '/any/Boba.jpg'
	},
	{
		name: 'Blend 285',
		category: 'Misc',
		image_path: 'Blend_285.jpg'
	},
	{
		name: 'Rice Whisky',
		category: 'Misc',
		image_path: 'Rice_Whisky.jpg'
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
