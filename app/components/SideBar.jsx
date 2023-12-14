
import Image from "next/image";
//import MenuLink from "./menuLink/menuLink";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import MenuLink from "./menuLink";
import { auth, signOut } from "../auth";
import { useMyContext } from "../lib/MyContext";
//import { auth, signOut } from "@/app/auth";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = async () => {
 const { user } = await auth();

 



  return (
    <div className=" sticky top-[40] py-5 px-3 bg-green-700">
      <div className='flex items-center gap-3 mb-5'>
        <Image
          className=' rounded-full object-cover'
          src={"/noavatar.png"}
          alt=""
          width="50"
          height="50"
        />
        <div className='flex flex-col'>
          <span className='font-bold'>{'wisdom micheal'}</span>
          <span className='text-[12px] text-gray-300'>Administrator</span>
        </div>

        <div className="">
          <button>side</button>
        </div>
      </div>
      <ul className="">
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className="text-gray-300 text-[13px] font-bold">{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <form
        action={async () => {
          "use server";
         await signOut();
        }}
      >
        <button className="flex items-center gap-2 cursor-pointer p-5">
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
