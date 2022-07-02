import type { RequestHandler } from '@sveltejs/kit';

export const post: RequestHandler = async ({ request }) => {
	const body = await request.json();
	const { username, password } = body;

	console.log(body);
	return {
		status: 200,
		body: {
			body
		}
	};
};
