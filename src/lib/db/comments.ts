import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
	comment_rating: Number,
	comment_by: String,
	comment_post_id: String,
	created_at: Date,
	comment_content: String
});

const CommentModel = new mongoose.model('Comments', commentSchema);
export default CommentModel;
