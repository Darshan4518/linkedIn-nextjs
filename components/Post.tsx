"use client";
import React from "react";

import SocialOptions from "./SocialOptions";
import PostUserInfo from "./PostUserInfo";
import PostImageBox from "./PostImageBox";

const Post = ({ post }: { post: any }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-3 my-3 sm:p-5 rounded-lg shadow-md">
      <PostUserInfo post={post} />
      <PostImageBox post={post} />
      <SocialOptions post={post} />
    </div>
  );
};

export default Post;
