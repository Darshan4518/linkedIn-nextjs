"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";
import { PostDialog } from "./PostDialog";

const PostInput = ({ user }: { user: any }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="bg-white dark:bg-gray-800 p-3 flex items-center justify-between gap-x-4 rounded-lg shadow-md">
      <Avatar>
        <AvatarImage
          src={user?.imageUrl || "/linkedin.png"}
          width={40}
          height={40}
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <Input
        placeholder={`Start a post, ${user?.firstName || "User"}...`}
        className="rounded-3xl dark:bg-gray-700 dark:text-gray-200"
        onClick={() => setOpen(true)}
        aria-label="Start a post"
      />

      {open && (
        <PostDialog
          open={open}
          setOpen={setOpen}
          img={user?.imageUrl || "/linkedin.png"}
        />
      )}
    </div>
  );
};

export default PostInput;
