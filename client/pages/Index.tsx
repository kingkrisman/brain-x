import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TrendingPoints } from "@/components/TrendingPoints";
import { LiveMarket } from "@/components/LiveMarket";
import { TopMembers } from "@/components/TopMembers";
import { TransactionGraph } from "@/components/TransactionGraph";

export default function Index() {
  return (
    <div className="min-h-screen bg-bg-gray">
      <Sidebar />
      <Header />

      <main className="ml-0 md:ml-64 pt-24 px-4 md:px-12 pb-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            <div className="lg:col-span-2">
              <HeroSection />
            </div>
            <div className="lg:col-span-1">
              <LiveMarket />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            <div className="lg:col-span-2">
              <TrendingPoints />
            </div>
            <div className="lg:col-span-1">
              <TopMembers />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="lg:col-span-2">
              <TransactionGraph />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
