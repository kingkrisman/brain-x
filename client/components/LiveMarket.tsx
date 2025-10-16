export function LiveMarket() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden">
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 flex justify-center -mt-4 z-10">
          <div className="bg-brand-green rounded-xl px-8 py-4 flex items-center gap-3 shadow-lg">
            <span className="text-white text-3xl font-medium">Live Market</span>
            <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.5 13.1C28.5 13.1 27 14.5 24.45 16.15C23.75 12.1 21.8 7.1 18 1C18 1 16.75 7.55 12.6 13.7C10.8 10.9 9.99998 8.7 9.99998 8.7C-3.00002 21.75 7.79998 31 14.6 31C23.3 31 30.95 26.8 28.5 13.1Z" fill="#FF9D33"/>
              <path d="M23.35 24.7C24.1 23.05 24.65 20.9 24.75 18.2C24.75 18.2 23.7 19.1 21.9 20.25C21.4 17.55 20.05 14.25 17.4 10.15C17.4 10.15 16.55 14.5 13.65 18.65C12.4 16.8 11.85 15.3 11.85 15.3C9.69998 18.7 8.84998 21.4 8.79998 23.55C7.59998 23.1 6.84998 22.75 6.84998 22.75C8.89998 28.85 13.15 30.2 15.05 30.2C18.45 30.2 21.9 29.2 25.3 24.35C25.3 24.3 24.55 24.5 23.35 24.7Z" fill="#FFCE31"/>
              <path d="M10.95 21.95C10.95 21.95 12.35 23.85 13.4 23.4C13.4 23.4 15.4 20.25 18.3 18.5C18.3 18.5 17.7 23.3 18.4 24.15C19.3 25.3 21.75 22.9 21.75 22.9C21.75 25.75 18.65 29.3 15.85 29.3C13.15 29.3 9.24999 26.2 10.95 21.95Z" fill="#FFDF85"/>
              <path d="M24.9 9.05C25.95 7.55 26.65 5.95 26.65 5.95C28.4 8.85 27.35 10.6 26.6 11.15C25.55 11.95 23.7 10.8 24.9 9.05ZM5.80003 8.55C4.75003 6.8 4.65003 4.6 4.65003 4.6C2.15003 8.35 3.10003 10.45 3.95003 11.05C5.05003 11.9 6.95003 10.6 5.80003 8.55ZM11.6 4.65C11.75 3.45 11.25 2.25 11.25 2.25C13.6 3.8 13.6 5.1 13.3 5.65C12.85 6.3 11.45 6 11.6 4.65Z" fill="#FF9D33"/>
            </svg>
          </div>
        </div>

        <div className="pt-16 pb-6 px-6">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/6a19fd4e1af5dce8884f0c1389903ce31837f642?width=808"
              alt="Black #4645"
              className="w-full h-72 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent rounded-br-2xl px-8 py-6">
              <div className="bg-gradient-to-r from-black to-transparent rounded-tr-2xl px-8 py-3 inline-block">
                <span className="text-white text-2xl font-semibold">5 days left</span>
              </div>
            </div>
          </div>

          <div className="mt-4 px-2">
            <h3 className="text-2xl font-normal text-black mb-1">Black #4645</h3>
            <div className="flex items-center gap-2 text-gray-text text-base mb-1">
              <span>20.22 ETH</span>
              <span>1/1</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-brand-green text-base font-medium">Highest bid 3 WEIGHT</span>
              <button className="px-4 py-2 border border-brand-green rounded-lg text-black text-base hover:bg-brand-green/5 transition-colors">
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
