import type { RequestHandler, RequestEvent } from '@sveltejs/kit';

export const post: RequestHandler = async (event: RequestEvent) => {
	const body = await event.request.json();
	console.log(body);
	return {
		status: 200,
		body: {
			body
		}
	};
};

export const patch: RequestHandler = async ({ request }) => {
	const body = await request.json();
	console.log(body);
	return {
		status: 200,
		body: {
			body
		}
	};
};
