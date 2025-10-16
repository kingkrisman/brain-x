import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-bg-gray">
      <Sidebar />
      <Header />
      
      <main className="ml-64 pt-24 px-12 pb-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-white rounded-2xl p-12 text-center">
            <h1 className="text-4xl font-bold text-black mb-4">{title}</h1>
            <p className="text-gray-text text-lg mb-8">
              {description || "This page is coming soon. Continue prompting to fill in the content!"}
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-brand-green/10 rounded-lg">
              <span className="text-brand-green font-medium">🚧 Under Construction</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
