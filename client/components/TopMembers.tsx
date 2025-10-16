interface Member {
  name: string;
  username: string;
  avatar: string;
  isFollowing: boolean;
}

const members: Member[] = [
  {
    name: "Pomaline Yemare",
    username: "@Poma3",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    isFollowing: true,
  },
  {
    name: "Pomaline Sunny",
    username: "@Poma1",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    isFollowing: false,
  },
  {
    name: "Leinard Studio",
    username: "@Leinard",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
    isFollowing: false,
  },
  {
    name: "Okoro Pleple",
    username: "@Omope",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop",
    isFollowing: true,
  },
];

export function TopMembers() {
  return (
    <div className="bg-white rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold text-black">Top member</h3>
        <button className="text-brand-green text-base font-medium hover:underline">
          See more
        </button>
      </div>

      <div className="space-y-4">
        {members.map((member, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-gray-1 text-base font-medium">{member.name}</h4>
                <p className="text-gray-3 text-base">{member.username}</p>
              </div>
            </div>

            <button
              className={`px-6 py-2 rounded-lg text-base font-medium transition-colors ${
                member.isFollowing
                  ? "bg-brand-green text-white hover:bg-brand-green/90"
                  : "border border-brand-green text-gray-1 hover:bg-brand-green/5"
              }`}
            >
              Following
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
