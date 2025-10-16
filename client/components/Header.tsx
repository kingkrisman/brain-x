import { Search, Sun, Moon, Bell, ChevronDown, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isDark, setIsDark] = useState(false);

  return (
    <header className="fixed top-0 left-0 md:left-64 right-0 h-20 md:h-24 bg-white z-40 px-4 md:px-12 flex items-center justify-between">
      <div className="flex items-center gap-4 flex-1 max-w-2xl">
        <div className="flex-1 flex items-center gap-3 md:gap-4 bg-gray-200/60 rounded-lg px-3 md:px-5 py-2.5 md:py-3.5">
          <Search className="w-5 h-5 md:w-6 md:h-6 text-gray-text" />
          <input
            type="text"
            placeholder="Search items, collections, and users"
            className="flex-1 bg-transparent outline-none text-xs md:text-sm text-gray-1 placeholder:text-gray-text"
          />
          <SlidersHorizontal className="w-4 h-4 md:w-5 md:h-5 text-gray-text" />
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        <button
          onClick={() => setIsDark(!isDark)}
          className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gray-200/60 flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          {isDark ? (
            <Moon className="w-5 h-5 md:w-6 md:h-6 text-gray-4 rotate-90" />
          ) : (
            <Sun className="w-5 h-5 md:w-6 md:h-6 text-gray-1" />
          )}
        </button>

        <button className="relative w-10 h-10 md:w-14 md:h-14 rounded-full bg-gray-200/60 flex items-center justify-center hover:bg-gray-200 transition-colors">
          <Bell className="w-4 h-4 md:w-5 md:h-5 text-gray-1" />
          <div className="absolute top-1.5 right-1.5 md:top-2 md:right-2 w-3 h-3 md:w-3.5 md:h-3.5 bg-red-600 rounded-full flex items-center justify-center">
            <span className="text-white text-[6px] font-bold">5</span>
          </div>
        </button>

        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-3 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop"
              alt="Leonard"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="text-gray-1 font-medium">Leonard</span>
            <ChevronDown className="w-6 h-6 text-gray-1" />
          </div>
        </div>
      </div>
    </header>
  );
}
