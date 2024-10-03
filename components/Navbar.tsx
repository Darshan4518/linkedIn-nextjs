import Image from "next/image";
import { Input } from "./ui/input";
import { IoHomeOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { MdOutlineWorkHistory } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IconType } from "react-icons";
import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";
import DarkModeToggle from "./darskModeToggle";
import { Button } from "./ui/button";

type ICONS = {
  name: string;
  Icon: IconType;
};

const Navbar = () => {
  const icons: ICONS[] = [
    { name: "Home", Icon: IoHomeOutline },
    { name: "My Network", Icon: LuUsers },
    { name: "Jobs", Icon: MdOutlineWorkHistory },
    { name: "Messaging", Icon: AiOutlineMessage },
    { name: "Notifications", Icon: IoMdNotificationsOutline },
  ];

  return (
    <header className="w-full py-3 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-6">
        {/* Left: Logo and Search */}
        <div className="flex items-center gap-x-3 xl:w-[30%]">
          <Image
            src={"/linkedin.png"}
            width={40}
            height={40}
            alt="LinkedIn Logo"
          />
          <Input
            placeholder="Search..."
            className="px-3 py-2 bg-slate-200 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          />
        </div>

        {/* Middle: Icons */}
        <div className="hidden lg:flex justify-evenly w-[40%] items-center gap-x-4">
          {icons.map(({ name, Icon }) => (
            <div
              key={name}
              className="flex flex-col items-center cursor-pointer text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 ease-in-out"
            >
              <Icon className="w-6 h-6 mb-1" />
              <p className="text-[12px] font-medium">{name}</p>
            </div>
          ))}
        </div>

        {/* Right: User & Dark Mode Toggle */}
        <div className="flex items-center gap-x-6">
          <SignedIn>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <Button variant={"destructive"}>
              <SignInButton />
            </Button>
          </SignedOut>
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
