import type { RequestHandler } from '@sveltejs/kit';
import Tag from '$lib/db/tags';

export const get: RequestHandler = async () => {
	const tags = [
		{
			title: 'Pure Shit'
		},
		{
			title: 'Straight to hell'
		},
		{
			title: 'Relaxing'
		},
		{
			title: 'Daredevil'
		},
		{
			title: 'Must try'
		},
		{
			title: 'Low %'
		},
		{
			title: 'High %'
		},
		{
			title: 'Deadly'
		},
		{
			title: 'Challenging'
		},
		{
			title: 'WIth Friends'
		},
		{
			title: 'With Family'
		},
		{
			title: 'With Children'
		}
	];
	tags.forEach(async (tag) => await Tag.create(tag));
	return {
		status: 200,
		body: {
			message: 'All tags are now successfully added to database.'
		}
	};
};
