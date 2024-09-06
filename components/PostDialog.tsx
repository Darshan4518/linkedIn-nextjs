import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Textarea } from "./ui/textarea";
import React, { useRef, useState } from "react";
import { readFileAsDataUrl } from "@/lib/utils";
import { ImageIcon, Loader2 } from "lucide-react";
import Image from "next/image";
import { createPostActions } from "@/lib/serverActions";

export function PostDialog({
  open,
  setOpen,
  img,
}: {
  open: boolean;
  setOpen: any;
  img: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [inputText, setInputText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const inputHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const dataUrl = await readFileAsDataUrl(file);
      setSelectedImage(dataUrl);
    }
  };

  const inputTextHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const postActionsHandler = async () => {
    setLoading(true);
    try {
      await createPostActions(inputText, selectedImage);
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
      setInputText("");
      setSelectedImage("");
      setOpen(false);
    }
  };

  const resetDialog = () => {
    setInputText("");
    setSelectedImage("");
    setOpen(false);
  };

  return (
    <Dialog open={open}>
      <DialogContent
        onInteractOutside={resetDialog}
        className="max-w-xl bg-white dark:bg-gray-800"
      >
        <DialogHeader>
          <DialogTitle className="flex items-center gap-x-3">
            <Avatar>
              <AvatarImage
                src={img || "/linkedin.png"}
                width={40}
                height={40}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="dark:text-white">Darshan Shetty</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                post to anyone
              </p>
            </div>
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            postActionsHandler();
          }}
        >
          <Textarea
            placeholder="Write something..."
            value={inputText}
            onChange={inputTextHandler}
            className="border-none outline-none focus-visible:ring-0 resize-none my-3 bg-gray-100 dark:bg-gray-700 dark:text-white"
          />
          {selectedImage && (
            <div className="w-full my-3">
              <Image
                src={selectedImage}
                width={800}
                height={800}
                alt="post"
                className="h-auto w-full max-h-[300px] object-fill rounded-md"
              />
            </div>
          )}
          <div className="w-full flex justify-end my-3">
            <Input
              type="file"
              className="hidden"
              ref={inputRef}
              onChange={inputHandler}
            />
            <Button
              variant={"ghost"}
              type="submit"
              className="bg-slate-300 dark:bg-slate-700"
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                "Post"
              )}
            </Button>
          </div>
        </form>
        <Button
          variant={"ghost"}
          onClick={() => inputRef?.current?.click()}
          className="w-full text-lg text-gray-700 dark:text-gray-300 font-semibold"
        >
          <ImageIcon color="blue" size={20} /> Media
        </Button>
      </DialogContent>
    </Dialog>
  );
}
