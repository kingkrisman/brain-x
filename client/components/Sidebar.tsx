import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  TrendingUp, 
  Layers, 
  Heart, 
  Briefcase, 
  Wallet, 
  Settings, 
  LogOut 
} from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "Market", icon: TrendingUp, path: "/market" },
  { name: "Active Bids", icon: Layers, path: "/active-bids" },
  { name: "Favorites", icon: Heart, path: "/favorites" },
  { name: "My Portfolio", icon: Briefcase, path: "/portfolio" },
  { name: "Wallet", icon: Wallet, path: "/wallet" },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white flex flex-col">
      <div className="flex flex-col items-center pt-10 pb-8 border-b border-gray-200">
        <div className="relative mb-6">
          <div className="w-20 h-20 rounded-full border-2 border-brand-green overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop" 
              alt="Admin" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-brand-green rounded-full border-2 border-white"></div>
        </div>
        <h2 className="text-xl font-semibold text-black">Admin</h2>
        <p className="text-sm text-gray-light">Prime Leonard</p>
      </div>

      <nav className="flex-1 py-8 px-6">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${
                    isActive 
                      ? "bg-brand-green/5 text-black font-normal border-r-4 border-black" 
                      : "text-gray-text hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-5 h-5" strokeWidth={isActive ? 2 : 1.5} />
                  <span className="text-base">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="px-6 pb-8">
        <div className="relative mb-6 rounded-2xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop" 
            alt="Balance background" 
            className="w-full h-40 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
          <div className="absolute inset-0 p-5 flex flex-col justify-between">
            <h3 className="text-white font-semibold text-base">My Balance</h3>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 bg-brand-yellow rounded-full flex items-center justify-center">
                  <div className="w-3 h-3">
                    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.69568 9L8.43086 3.13043L12.166 9L8.43086 11.1344L4.69568 9Z" fill="#7880E7"/>
                      <path d="M8.43084 3.13043L12.166 9L8.43084 11.1344V3.13043Z" fill="#5C64C7"/>
                      <path d="M4.69568 9.80042L8.43086 11.9348L12.166 9.80042L8.43086 14.8696L4.69568 9.80042Z" fill="#7880E7"/>
                      <path d="M8.43086 11.9348L12.166 9.80042L8.43086 14.8696V11.9348ZM4.69568 9.00002L8.43086 7.39923L12.166 9.00002L8.43086 11.1344L4.69568 9.00002Z" fill="#5C64C7"/>
                      <path d="M8.43084 7.39923L12.166 9.00002L8.43084 11.1344V7.39923Z" fill="#2A3192"/>
                    </svg>
                  </div>
                </div>
                <span className="text-white text-base font-medium">100.50</span>
              </div>
              <button className="px-4 py-1.5 bg-brand-yellow rounded-md text-black text-xs font-medium">
                Top up balance
              </button>
            </div>
          </div>
        </div>

        <button className="flex items-center gap-3 px-3 py-3 text-brand-red hover:bg-red-50 rounded-lg transition-colors w-full">
          <LogOut className="w-5 h-5" />
          <span className="text-base font-medium">LOGOUT</span>
        </button>

        <button className="flex items-center gap-3 px-3 py-3 text-gray-text hover:bg-gray-100 rounded-lg transition-colors w-full mt-2">
          <Settings className="w-5 h-5" />
          <span className="text-base">Setting</span>
        </button>
      </div>
    </aside>
  );
}
