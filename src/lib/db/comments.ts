import mongoose, { Model } from 'mongoose';

interface IComment {
	comment_rating: number;
	comment_by: string;
	comment_post_id: string;
	created_at: Date;
	comment_content: string;
}

const commentSchema = new mongoose.Schema<IComment>({
	comment_rating: number,
	comment_by: String,
	comment_post_id: String,
	created_at: Date,
	comment_content: String
});

const CommentModel: Model<IComment> = mongoose.model('Comments', commentSchema);
export default CommentModel;
