import { postDocument_I } from "@/models/post";
import React from "react";
import Post from "./Post";

const Posts = ({ posts }: { posts: postDocument_I[] }) => {
  return (
    <div>
      {posts?.map((post, ind: number) => {
        return <Post key={ind} post={post} />;
      })}
    </div>
  );
};

export default Posts;
