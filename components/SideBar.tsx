import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { getAllPosts } from "@/lib/serverActions";

const SideBar = async ({ user }: { user: any }) => {
  const posts = await getAllPosts();
  return (
    <section className="w-[20%] border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-md h-fit hidden md:block">
      <div className="relative w-full">
        <div className="w-full h-18">
          <Image
            src={"/banner.jpeg"}
            width={200}
            height={200}
            alt="banner"
            className="w-full h-full rounded-t-md"
            priority
          />
        </div>
        {user?.imageUrl && (
          <div className="absolute top-[80%] left-[40%]">
            <Avatar>
              <AvatarImage
                src={user?.imageUrl || "/linkedin.png"}
                width={40}
                height={40}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        )}
      </div>
      <div className="w-full flex flex-col items-center justify-center pt-5">
        <p className="font-semibold text-lg dark:text-white">
          {user?.firstName || "firstname"}
        </p>
        <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 border-b border-gray-300 dark:border-gray-700 pb-3">
          @{user?.username || "username"}
        </p>
      </div>
      <div className="p-2 space-y-3">
        <div className="w-full flex items-center justify-between">
          <p className="font-semibold text-sm dark:text-gray-300">
            Post Impression
          </p>
          <p className="text-blue-400 text-sm font-bold">88</p>
        </div>
        <div className="w-full flex items-center justify-between">
          <p className="font-semibold text-sm dark:text-gray-300">Posts</p>
          <p className="text-blue-400 text-sm font-bold">{posts?.length}</p>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
