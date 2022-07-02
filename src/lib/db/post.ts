import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
	ref_id: String,
	post_name: String,
	ingredients: String,
	post_by: String,
	created_at: Date
});

const Post = mongoose.model('Posts', postSchema);
export default Post;
