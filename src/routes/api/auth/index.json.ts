import type { RequestHandler, RequestEvent } from '@sveltejs/kit';

export const get: RequestHandler = async (event: RequestEvent) => {
	const req = await event.request.json();
	console.log(req);
	return {
		status: 200,
		body: {
			message: 'this is Login'
		}
	};
};

export const post: RequestHandler = async (event: RequestEvent) => {
	return {
		status: 200,
		body: {
			message: 'this is Reg'
		}
	};
};

export const patch: RequestHandler = async (event: RequestEvent) => {
	return {
		status: 200,
		body: {
			message: 'this is Update'
		}
	};
};
