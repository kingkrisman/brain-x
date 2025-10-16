export function HeroSection() {
  return (
    <div className="relative h-64 rounded-3xl overflow-hidden">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/40984639c675845e6136307357dc8a987c901ab0?width=1186"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
      
      <div className="relative h-full flex flex-col justify-center px-8">
        <h1 className="text-white text-4xl font-medium max-w-xs leading-tight mb-6">
          THE MOVEMENT<br />
          WITH A SOLID<br />
          FOUNDATION
        </h1>
        <button className="w-fit px-6 py-2.5 bg-brand-green rounded-lg text-white text-base font-medium hover:bg-brand-green/90 transition-colors">
          Explore now
        </button>
      </div>

      <div className="absolute bottom-8 right-8">
        <svg className="w-32 h-16" viewBox="0 0 126 68" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.99997 9.03151C29.1666 2.19817 106.058 -4.9685 118.558 9.03151C132.985 25.1901 121.558 66.5315 94.0575 64.0315C66.5575 61.5315 11 73 2.99999 61C-2.40314 52.8953 8.99997 51.0315 8.99997 46.0315" stroke="#0CBA00" strokeWidth="2"/>
        </svg>
      </div>
    </div>
  );
}
