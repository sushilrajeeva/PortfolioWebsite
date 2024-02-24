import { NavLink } from "react-router-dom";


import { Icons } from "@/components/ui/icons"

import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  

  return (
    // <div className="fixed top-0 h-14 left-0 w-full bg-opacity-75 backdrop-filter backdrop-blur-lg z-50 border-b">
    <nav className="flex items-center justify-between bg-transparent">
      <div className="flex space-x-4 lg:space-x-6">
        <NavLink
          to="/home"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          Home
        </NavLink>
        <NavLink
          to="/dashboard"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          Dashboard
        </NavLink>
      </div>

      <div className="ml-auto">
        <ModeToggle /> {/* Add ModeToggle here */}
      </div>
      <div className="p-2">
        <Icons.gitHub className="mr-2 h-4 w-4" />
      </div>
    </nav>
    //   </div>
  );
};
export default Navbar;