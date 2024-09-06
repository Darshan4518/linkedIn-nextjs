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
    <header className="w-full p-3 bg-white dark:bg-gray-900">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex gap-x-3 items-center xl:w-[30%]">
          <Image src={"/linkedin.png"} width={35} height={35} alt="logo" />
          <Input
            placeholder="Search..."
            className="px-3 bg-slate-200 dark:bg-gray-700 dark:text-white"
          />
        </div>
        <div className="hidden lg:flex justify-evenly w-[40%] items-center gap-x-2">
          {icons.map(({ name, Icon }) => (
            <div
              key={name}
              className="flex flex-col items-center cursor-pointer text-gray-600 dark:text-gray-300"
            >
              <Icon className="w-5 h-5" />
              <p className="text-[12px] font-semibold">{name}</p>
            </div>
          ))}
          <div>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </div>
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
