import type { RequestHandler, RequestEvent } from '@sveltejs/kit';

export const post: RequestHandler = async (event: RequestEvent) => {
	const body = await event.request.json();
	return {
		status: 200,
		body: {
			body
		}
	};
};
