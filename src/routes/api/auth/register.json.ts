import type { RequestHandler } from '@sveltejs/kit';
import * as bcrypt from 'bcryptjs';
import User from '$lib/db/user';

export const post: RequestHandler = async ({ request }) => {
	const body = await request.json();
	const { username, password } = body;

	if (!username && !password) {
		return {
			status: 400,
			body: {
				message: 'Missing some required information.'
			}
		};
	}

	const encrypted_password = await bcrypt.hash(password, 10);

	const user = await User.create({ username: username, password: encrypted_password });

	if (user) {
		return {
			status: 200,
			body: {
				data: user
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
