import { FaHome, FaWpexplorer, FaUser, FaWallet, FaUserPlus, FaCheckCircle } from "react-icons/fa";
import { IoIosNotifications, IoIosSettings } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const Sidebar = ({ sidebarOpen }) => {
  const pathname = usePathname();

  const links = [
    { href: "/", icon: <FaHome size={23} />, label: "Home" },
    { href: "/explore", icon: <FaWpexplorer size={23} />, label: "Explore" },
    { href: "/profile", icon: <FaUser size={23} />, label: "Profile" },
    { href: "/notifications", icon: <IoIosNotifications size={28} />, label: "Notifications" },
    { href: "/wallet", icon: <FaWallet size={22} />, label: "Wallet" },
    { href: "/circle", icon: <FaUserPlus size={23} />, label: "Your Circle" },
    { href: "/verified", icon: <FaCheckCircle size={22} />, label: "Get Verified" },
    { href: "/settings", icon: <IoIosSettings size={28} />, label: "Settings" },
  ];

  return (
    <div
      className={`fixed inset-y-0 left-0 bg-gray-100 shadow-md py-4 transition-transform transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 lg:static lg:inset-0 lg:w-72 h-screen`}
    >
      <div className="mt-20">
        {links.map(({ href, icon, label }) => {
          const isActive = pathname === href;
          return (
            <Link key={href} href={href}>
              <div
                className={`flex items-center px-4 py-3 mb-3 rounded ${
                  isActive ? "bg-[#E3E2E2]" : "hover:bg-gray-200"
                }`}
              >
                {icon}
                <h3 className="ml-3 text-[16px] font-[500] hidden lg:block">{label}</h3>
              </div>
            </Link>
          );
        })}
      </div>
      <Link href={''} className="flex items-center mt-10 justify-center w-1/2 mx-auto text-white py-1 rounded bg-[#FA6C6C]">
        <CiLogout size={21} className="mx-1" />
        <h3 className="hidden lg:block">Log Out</h3>
      </Link>
    </div>
  );
};

export default Sidebar;
