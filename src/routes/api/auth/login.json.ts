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
				message: 'Missing some required information, please try again.'
			}
		};
	}

	const user = await User.findOne({ username: username });
	if (!user) {
		return {
			status: 404,
			body: {
				message: 'User Not Found !'
			}
		};
	}

	const isValid = await bcrypt.compare(password, user.password);
	if (isValid) {
		return {
			status: 200,
			body: {
				body: {
					username: username
				}
			}
		};
	} else {
		return {
			status: 401,
			body: {
				message: 'Username or Password not valid, please try again.'
			}
		};
	}
};
