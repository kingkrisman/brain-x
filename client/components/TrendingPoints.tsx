import { Users, Sparkles, Tag } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  bgColor: string;
  accentColor: string;
}

function StatCard({ icon, label, value, bgColor, accentColor }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg p-5 shadow-sm flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className={`w-8 h-8 rounded-lg ${bgColor} flex items-center justify-center`}>
          {icon}
        </div>
        <span className="text-type-dark text-base font-normal">{label}</span>
      </div>
      
      <div className="text-type-dark text-5xl font-bold" style={{ fontFamily: 'Lato' }}>{value}</div>
      
      <div className="flex gap-1">
        <div className={`w-1 h-20 rounded ${accentColor} opacity-30`}></div>
        <div className={`w-1 h-16 rounded ${accentColor}`}></div>
      </div>
    </div>
  );
}

export function TrendingPoints() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <h2 className="text-4xl font-bold text-black">TRENDING POINTS</h2>
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28.5 13.1C28.5 13.1 27 14.5 24.45 16.15C23.75 12.1 21.8 7.1 18 1C18 1 16.75 7.55 12.6 13.7C10.8 10.9 9.99998 8.7 9.99998 8.7C-3.00002 21.75 7.79998 31 14.6 31C23.3 31 30.95 26.8 28.5 13.1Z" fill="#FF9D33"/>
          <path d="M23.35 24.7C24.1 23.05 24.65 20.9 24.75 18.2C24.75 18.2 23.7 19.1 21.9 20.25C21.4 17.55 20.05 14.25 17.4 10.15C17.4 10.15 16.55 14.5 13.65 18.65C12.4 16.8 11.85 15.3 11.85 15.3C9.69998 18.7 8.84998 21.4 8.79998 23.55C7.59998 23.1 6.84998 22.75 6.84998 22.75C8.89998 28.85 13.15 30.2 15.05 30.2C18.45 30.2 21.9 29.2 25.3 24.35C25.3 24.3 24.55 24.5 23.35 24.7Z" fill="#FFCE31"/>
          <path d="M10.95 21.95C10.95 21.95 12.35 23.85 13.4 23.4C13.4 23.4 15.4 20.25 18.3 18.5C18.3 18.5 17.7 23.3 18.4 24.15C19.3 25.3 21.75 22.9 21.75 22.9C21.75 25.75 18.65 29.3 15.85 29.3C13.15 29.3 9.24999 26.2 10.95 21.95Z" fill="#FFDF85"/>
          <path d="M24.9 9.05C25.95 7.55 26.65 5.95 26.65 5.95C28.4 8.85 27.35 10.6 26.6 11.15C25.55 11.95 23.7 10.8 24.9 9.05ZM5.80003 8.55C4.75003 6.8 4.65003 4.6 4.65003 4.6C2.15003 8.35 3.10003 10.45 3.95003 11.05C5.05003 11.9 6.95003 10.6 5.80003 8.55ZM11.6 4.65C11.75 3.45 11.25 2.25 11.25 2.25C13.6 3.8 13.6 5.1 13.3 5.65C12.85 6.3 11.45 6 11.6 4.65Z" fill="#FF9D33"/>
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          icon={<Users className="w-5 h-5 text-brand-purple" />}
          label="Meeting Attended"
          value="44"
          bgColor="bg-brand-purple-light"
          accentColor="bg-brand-purple"
        />
        <StatCard
          icon={<Sparkles className="w-5 h-5 text-brand-purple-secondary" />}
          label="Level"
          value="Gold"
          bgColor="bg-green-100"
          accentColor="bg-brand-purple-secondary"
        />
        <StatCard
          icon={<Tag className="w-5 h-5 text-brand-red-danger" />}
          label="Sales"
          value="345₦"
          bgColor="bg-red-100"
          accentColor="bg-brand-red-danger"
        />
      </div>
    </div>
  );
}
