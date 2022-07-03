import mongoose from 'mongoose';
import type { IIngredient } from './ingredients';

export interface IPost {
	ref_id: string;
	post_name: string;
	ingredients: IIngredient[];
	post_by: string;
	created_at: Date;
}

const postSchema = new mongoose.Schema<IPost>({
	ref_id: String,
	post_name: String,
	ingredients: {
		type: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Ingredients'
			}
		]
	},
	post_by: String,
	created_at: Date
});

const Post = mongoose.models.Posts || mongoose.model('Posts', postSchema);
export default Post;
