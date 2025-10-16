export function TransactionGraph() {
  const bars = [
    { height: 52, label: "" },
    { height: 33, label: "" },
    { height: 38, label: "" },
    { height: 38, label: "" },
    { height: 21, label: "" },
    { height: 38, label: "" },
    { height: 51, label: "" },
    { height: 32, label: "" },
    { height: 32, label: "" },
    { height: 38, label: "" },
    { height: 21, label: "" },
  ];

  return (
    <div className="bg-gradient-to-r from-[#9BF794] to-brand-green rounded-lg p-8 shadow-sm">
      <div className="flex gap-8">
        <div className="flex flex-col justify-between text-type-dark text-sm font-lato py-2">
          <span>300</span>
          <span>200</span>
          <span>100</span>
        </div>

        <div className="flex-1 relative">
          <div className="absolute inset-0 flex flex-col justify-between">
            <div className="border-t border-dashed border-brand-purple-light opacity-50"></div>
            <div className="border-t border-dashed border-brand-purple-light opacity-50"></div>
            <div className="border-t border-dashed border-brand-purple-light opacity-50"></div>
          </div>

          <div className="relative h-40 flex items-end justify-between gap-3 px-4">
            {bars.map((bar, index) => (
              <div key={index} className="flex flex-col items-center gap-1 flex-1">
                <div
                  className="w-1 bg-brand-purple rounded"
                  style={{ height: `${bar.height}px` }}
                ></div>
                <div
                  className="w-1 bg-white rounded"
                  style={{ height: `${100 - bar.height}px` }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
