import { ReactNode } from "react";
import Navbar from "./Navbar";

interface FixedNavbarProps {
  children: ReactNode;
}

// This is to make the navbar fixed
const FixedNavbar = ({ children }: FixedNavbarProps) => {
  return (
        <div className="fixed top-0 h-14 left-0 w-full bg-opacity-75 backdrop-filter backdrop-blur-lg z-50 border-b">
            {children}
        </div>
    );
};


// For this navbar Development I referred the shadcn ui navbar design 
// citation : https://github.com/shadcn-ui/ui/blob/main/apps/www/app/examples/dashboard/components/user-nav.tsx
// Also referred various tailwind css articles on making ui designs related to navbar


const Navigation = () => {
  return (
    <div>
        <FixedNavbar>
          <div className="px-4 lg:px-8 ">{<Navbar/>}</div>
        </FixedNavbar>
        
    </div>
  );
};



export default Navigation;
