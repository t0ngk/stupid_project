import mongoose, { Model } from 'mongoose';

interface IPost {
	ref_id: string;
	post_name: string;
	ingredients: string;
	post_by: string;
	created_at: Date;
}

const postSchema = new mongoose.Schema<IPost>({
	ref_id: String,
	post_name: String,
	ingredients: String,
	post_by: String,
	created_at: Date
});

const Post: Model<IPost> = mongoose.model('Posts', postSchema);
export default Post;
