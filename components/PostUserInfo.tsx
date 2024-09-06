import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import ReactTimeago from "react-timeago";
import { useUser } from "@clerk/nextjs";
import { Trash2 } from "lucide-react";
import { deletePost } from "@/lib/serverActions";

const PostUserInfo = ({ post }: { post: any }) => {
  const { user } = useUser();
  const fullName = `${post?.user?.firstName} ${post?.user?.lastName}`;
  const isCurrentUser = post?.user?.userID === user?.id;
  return (
    <div className="flex justify-between items-start">
      <div className="flex gap-x-3 mb-3 sm:mb-0">
        <Avatar className="w-10 h-10">
          <AvatarImage src={post.user.profilePhoto || "/default-avatar.png"} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="sm:text-sm text-xs font-bold capitalize text-gray-700 dark:text-gray-300">
            {fullName}
            {isCurrentUser && (
              <Badge
                variant="outline"
                className="bg-gray-100 dark:bg-gray-700 mx-2"
              >
                You
              </Badge>
            )}
          </h3>
          <p className="text-xs font-bold text-gray-500 dark:text-gray-400">
            @{post?.user?.username}
          </p>
          <p className="sm:text-xs text-[10px] font-bold text-gray-500 dark:text-gray-400">
            <ReactTimeago date={new Date(post?.createdAt)} />
          </p>
        </div>
      </div>

      {isCurrentUser && (
        <Trash2
          className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer dark:text-gray-300"
          aria-label="Delete post"
          onClick={() => {
            deletePost(post?._id);
          }}
        />
      )}
    </div>
  );
};

export default PostUserInfo;
