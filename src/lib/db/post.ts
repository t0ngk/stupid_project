import mongoose from 'mongoose';

// const commentSchema = new mongoose.Schema({
// 	comment_tag: Array,
// 	comment_creator: String,
// 	comment_time: Number,
// 	comment_description: String
// });

const postSchema = new mongoose.Schema({
	ref_id: String,
	post_name: String,
	review_rating: Array,
	ingredients: String,
	post_by: String,
	created_at: String
});

const Post = mongoose.model('Posts', postSchema);
export default Post;
