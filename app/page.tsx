import Feeds from "@/components/Feeds";
import NewsSection from "@/components/NewsSection";
import SideBar from "@/components/SideBar";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  return (
    <main className=" flex max-w-6xl mx-auto justify-between mt-5 gap-x-6">
      <SideBar user={user} />
      <Feeds user={user} />
      <NewsSection />
    </main>
  );
}
