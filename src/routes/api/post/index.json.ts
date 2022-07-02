import type { RequestHandler } from '@sveltejs/kit';
import { customAlphabet } from 'nanoid';
import Post from '$lib/db/post';

const nanoid = customAlphabet('1234567890abcdef', 10);

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
	const { post_name, ingredients, post_by } = body;

	if (!ingredients && !post_by) {
		return {
			status: 400,
			body: {
				message: 'Missing some required information.'
			}
		};
	}

	let payload = { created_at: new Date(), ...body };
	let ref_id = nanoid(8);

	while (await Post.findOne({ ref_id: ref_id })) {
		ref_id = nanoid(8);
	}

	if (!post_name) {
		payload = { ref_id: ref_id, post_name: ref_id, ...payload };
	} else {
		payload = { ref_id: ref_id, ...payload };
	}

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
