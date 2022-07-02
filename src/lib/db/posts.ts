import mongoose from "mongoose";
const schema = mongoose.Schema;

const postSchema = new schema({
  post_id: String,
  review_rating: Number,
  comments: Array,
  reviewStars: Array,
  ingredients: Array,
});

const Post = mongoose.model("Post", postSchema);
export default Post;
