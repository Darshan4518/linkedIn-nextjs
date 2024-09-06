import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useUser } from "@clerk/nextjs";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { createCommentAction } from "@/lib/serverActions";

const CommentInput = ({ postId }: { postId: string }) => {
  const { user } = useUser();

  const commentActionHandler = async (formData: FormData) => {
    try {
      await createCommentAction(postId, formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      action={(FormData) => {
        commentActionHandler(FormData);
      }}
    >
      <div className="flex items-center gap-x-3 dark:bg-gray-800 p-3 rounded-xl">
        <Avatar className="h-8 w-8">
          <AvatarImage src={user?.imageUrl || "/linkedin.png"} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Input
          placeholder={`Add a comment...`}
          name="inputText"
          className="rounded-3xl dark:bg-gray-700 dark:text-gray-200 focus-visible:ring-0 placeholder:text-xs placeholder:font-bold outline-none focus-visible:border-none"
          aria-label="Start a post"
        />
        <Button
          type="submit"
          variant={"outline"}
          className="rounded-xl dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
        >
          Send
        </Button>
      </div>
    </form>
  );
};

export default CommentInput;
