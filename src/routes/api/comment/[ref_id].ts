import type { RequestHandler, RequestEvent } from "@sveltejs/kit";
import CommentModel from "$lib/db/comments";

export const get: RequestHandler = async (event: RequestEvent) => {
  const getComment = await CommentModel.find({ comment_post_id: event.params.ref_id });
  if (getComment) {
    return {
      status: 200,
      body: {
        data: getComment
      }
    };
  } else {
    return {
      status: 404,
      body: {
        message: "Post not found"
      }
    };
  }
}
