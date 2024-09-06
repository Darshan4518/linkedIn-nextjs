import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { commentDocument_I } from "@/models/comment";
import ReactTimeago from "react-timeago";

const Comment = ({ comment }: { comment: commentDocument_I }) => {
  return (
    <div className="flex gap-x-2 my-2 w-full">
      <Avatar className="h-8 w-8">
        <AvatarImage src={comment?.user?.profilePhoto || "/linkedin.png"} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="w-full p-3 rounded-lg bg-slate-200 dark:bg-gray-900 shadow">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs font-bold text-gray-600 dark:text-gray-300">
              {comment?.user?.firstName} {comment?.user?.lastName}
            </p>
            <p className="text-xs font-bold text-gray-600 dark:text-gray-400">
              @{comment?.user?.username}
            </p>
          </div>
          <p className="sm:text-xs text-[10px] font-bold text-gray-400 dark:text-gray-500">
            <ReactTimeago date={new Date(comment?.createdAt)} />
          </p>
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-200 font-semibold my-2">
          {comment?.textMessage}
        </p>
      </div>
    </div>
  );
};

export default Comment;
