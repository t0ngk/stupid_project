import type { RequestHandler } from '@sveltejs/kit';
import Comment from '$lib/db/comments';
import Post from '$lib/db/post';

export const post: RequestHandler = async ({ request }) => {
	const body = await request.json();
	const { comment_rating, comment_by, comment_post_id, comment_content } = body;

	if (!comment_rating && !comment_by && !comment_post_id && !comment_content) {
		return {
			status: 400,
			body: {
				message: 'Missing some required information.'
			}
		};
	}

	if (!(await Post.findOne({ comment_post_id: comment_post_id }))) {
		return {
			status: 404,
			body: {
				message: 'Post Not Found!'
			}
		};
	}

	const payload = { created_at: new Date(), ...body };
	const comment = await Comment.create(payload);

	if (comment) {
		return {
			status: 200,
			body: {
				data: comment
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
