import { getAllPosts } from "@/lib/serverActions";
import PostInput from "./PostInput";
import Posts from "./Posts";

async function Feeds({ user }: { user: any }) {
  const User = JSON.parse(JSON.stringify(user));
  const posts = await getAllPosts();
  return (
    <section className="flex-1 mx-2 md:mx-0">
      <PostInput user={User} />
      <Posts posts={posts} />
    </section>
  );
}

export default Feeds;
