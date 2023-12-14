"use client";
import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch, 
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();

  return (
  
  <div className="flex items-center justify-between bg-green-700 mt-1 p-2 rounded">
      <div className=" capitalize font-bold text-gray-300">{pathname.split("/").pop()}</div> 

      <div className="flex items-center gap-5">

      

        <div className="flex gap-5">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>

      </div>
    </div>
  );
};

export default Navbar;
