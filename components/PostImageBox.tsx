import Image from "next/image";
import React from "react";

const PostImageBox = ({ post }: { post: any }) => {
  return (
    <div>
      {post?.description && (
        <div className="px-2 py-2 sm:px-5 break-words">
          <p className="font-bold text-gray-600 dark:text-gray-200 text-sm sm:text-base">
            {post?.description}
          </p>
        </div>
      )}

      {post?.imageUrl && (
        <div className="w-full my-3">
          <Image
            src={post?.imageUrl}
            width={800}
            height={800}
            alt="post image"
            className="w-full h-auto max-h-[300px] sm:max-h-[400px] object-fill  mx-auto rounded-lg"
            priority={true}
          />
        </div>
      )}
    </div>
  );
};

export default PostImageBox;
