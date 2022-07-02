import type { RequestHandler } from '@sveltejs/kit';
import { customAlphabet } from 'nanoid';
import Post from '$lib/db/post';

export const get: RequestHandler = async () => {
	const posts = await Post.find({});
	return {
		status: 200,
		body: {
			data: posts
		}
	};
};

export const post: RequestHandler = async ({ request }) => {
	const body = await request.json();
	const nanoid = customAlphabet('1234567890abcdef', 10);

	const { review_rating, post_by, review_stars, ingredients, comments } = body;

	if (!review_rating && !post_by && !review_stars && !ingredients && !comments) {
		return {
			status: 400,
			body: {
				message: 'Missing some required information, please try again!'
			}
		};
	}

	let id = nanoid(8);
	while (await Post.find({ id: id })) {
		id = nanoid(8);
	}

	const payload = {
		id: nanoid(8),
		...body
	};
	const post = await Post.create(payload);

	if (post) {
		return {
			status: 200,
			body: {
				data: post
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

export const patch: RequestHandler = async ({ request }) => {
	const body = await request.json();
	const { comment, review_rating, id } = body;

	if (!id) {
		return {
			status: 400,
			body: {
				message: 'Missing post_id in order to find specific post to update.'
			}
		};
	}

	const post = await Post.find({ id: id });

	if (!post) {
		return {
			status: 404,
			body: {
				message: 'Post ID not found!'
			}
		};
	}

	let payload = {};

	if (comment) {
	}
};
