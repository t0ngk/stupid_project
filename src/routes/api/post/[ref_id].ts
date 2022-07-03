import type { RequestEvent, RequestHandler } from '@sveltejs/kit';
import Post from '$lib/db/post';
import IngredientsModel from '$lib/db/ingredients';

export const get: RequestHandler = async (event: RequestEvent) => {
	const getPosts = await Post.findOne({ ref_id: event.params.ref_id }).populate(
		'ingredients',
		'',
		IngredientsModel
	);
	if (getPosts) {
		return {
			status: 200,
			body: {
				data: getPosts
			}
		};
	} else {
		return {
			status: 404,
			body: {
				message: 'Post not found'
			}
		};
	}
};
