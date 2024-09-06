import React from "react";
import Comment from "./Comment";
import { postDocument_I } from "@/models/post";

const Comments = ({ post }: { post: postDocument_I }) => {
  return (
    <div className="  my-3">
      {post?.comments?.map((comment: any) => {
        return (
          <div key={comment?._id}>
            <Comment comment={comment} />
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
