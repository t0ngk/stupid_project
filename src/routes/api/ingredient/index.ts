import type { RequestHandler } from '@sveltejs/kit';
import Ingredient from '$lib/db/ingredients';

export const get: RequestHandler = async () => {
	const ingredients = await Ingredient.find({});
	if (ingredients) {
		return {
			status: 200,
			body: {
				data: ingredients
			}
		};
	} else {
		return {
			status: 500,
			body: {
				message: 'Error!'
			}
		};
	}
};

export const post: RequestHandler = async ({ request }) => {
	const body = await request.json();
	const { range } = body;

	if (!range) {
		return {
			status: 400,
			body: {
				message: 'Missing some required information.'
			}
		};
	}

	const ingredients = await Ingredient.find({});
	const result = [];

	for (let i = 0; i < ingredients.length; i++) {
		if (i === range) {
			break;
		}
		result.push(ingredients[i]);
	}

	if (!ingredients) {
		return {
			status: 500,
			body: {
				message: 'Error!'
			}
		};
	}

	return {
		status: 200,
		body: {
			data: result
		}
	};
};
