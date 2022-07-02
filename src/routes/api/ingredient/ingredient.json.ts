import type { RequestHandler } from '@sveltejs/kit';
import Ingredient from '$lib/db/ingredients';

export const post: RequestHandler = async ({ request }) => {
	const body = await request.json();
	const { name, category_id, is_allowed } = body;

	if (!name && !category_id && !is_allowed) {
		return {
			status: 400,
			body: {
				message: 'Missing some required information.'
			}
		};
	}

	const ingredient = await Ingredient.create(body);

	if (!ingredient) {
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
			data: post
		}
	};
};
