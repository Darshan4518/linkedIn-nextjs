import React, { useState } from "react";
import { Button } from "./ui/button";
import { MessageCircleMore, Repeat2Icon, Send, ThumbsUp } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import CommentInput from "./CommentInput";
import Comments from "./Comments";

const SocialOptions = ({ post }: { post: any }) => {
  const { user } = useUser();
  const [commentOpen, setCommentOpen] = useState<boolean>(false);
  const [liked, setLiked] = useState<boolean>(
    post?.likes?.includes(user?.id) || false
  );
  const [likes, setLikes] = useState(post?.likes || []);

  const likeOrDislikeHandler = async (postId: any) => {
    const tempLike = liked;
    const tempLikes = likes;

    const newLikes = liked
      ? likes?.filter((userId: any) => userId !== user?.id)
      : [...likes, user?.id];

    setLiked(!liked);
    setLikes(newLikes);

    try {
      const res = await fetch(
        `/api/posts/${postId}/${liked ? "/dislike" : "/like"}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId: user?.id }),
        }
      );

      if (!res.ok) {
        setLiked(tempLike);
        throw new Error("Failed to like or dislike post");
      }

      const fetchLikesData = await fetch(`/api/posts/${postId}/like`);

      if (!fetchLikesData.ok) {
        throw new Error("Failed to fetch like data");
      }

      const likeData = await fetchLikesData.json();
      setLikes(likeData);
    } catch (error) {
      setLiked(tempLike);
      setLikes(tempLikes);
    }
  };

  return (
    <div>
      <div className=" flex justify-between items-center">
        {likes.length > 0 && (
          <p className=" text-xs  text-gray-500 font-semibold">
            {likes.length} {likes.length > 0 ? "Like" : "Likes"}
          </p>
        )}
        {post.comments.length > 0 && (
          <p
            className=" text-xs  text-gray-500 font-semibold cursor-pointer underline"
            onClick={() => setCommentOpen(!commentOpen)}
          >
            {post.comments.length} comments
          </p>
        )}
      </div>
      <div className="py-2 my-2 flex items-center justify-between gap-y-2 border-t border-gray-400 dark:border-gray-600">
        <Button
          className="flex items-center gap-x-2"
          variant={"ghost"}
          aria-label="Like post"
          onClick={() => likeOrDislikeHandler(post?._id)}
        >
          <ThumbsUp className={`${liked ? "fill-blue-400" : ""}`} />
          <p
            className={`text-sm font-bold dark:text-gray-400 dark:hover:text-white hidden md:block 
            ${liked ? "text-blue-400" : " text-gray-500  hover:text-black"}`}
          >
            Like
          </p>
        </Button>
        <Button
          className="flex items-center gap-x-2"
          variant={"ghost"}
          aria-label="Message user"
          onClick={() => setCommentOpen(!commentOpen)}
        >
          <MessageCircleMore />
          <p className="text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hidden md:block">
            Message
          </p>
        </Button>
        <Button
          className="flex items-center gap-x-2"
          variant={"ghost"}
          aria-label="Send post"
        >
          <Send />
          <p className="text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hidden md:block">
            Send
          </p>
        </Button>
        <Button
          className="flex items-center gap-x-2"
          variant={"ghost"}
          aria-label="Repost"
        >
          <Repeat2Icon />
          <p className="text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hidden md:block">
            Repost
          </p>
        </Button>
      </div>
      {commentOpen && (
        <div>
          <CommentInput postId={post?._id} />
          <Comments post={post} />
        </div>
      )}
    </div>
  );
};

export default SocialOptions;
