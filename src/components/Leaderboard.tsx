import Image from "next/image";

const Leaderboard = () => {
  const users = [
    { name: "Sudhir Patel", rank: 1, score: 10621, avatar: "/avatar.png" },
    { name: "Ramesh S.", rank: 2, score: 8756, avatar: "/avatar.png" },
  ];

  return (
    <div className="p-4 bg-white border rounded-lg shadow-sm w-72">
      <h2 className="font-semibold text-lg flex items-center space-x-2">
        <span>🏆</span> <span>Leaderboard</span>
      </h2>
      <div className="mt-3">
        <div className="flex justify-between text-gray-500 font-medium text-sm">
          <span>User</span> <span>Rank</span> <span>Score</span>
        </div>
        <ul className="mt-2">
          {users.map((user, index) => (
            <li key={index} className="flex justify-between items-center py-2 border-b">
              <div className="flex items-center space-x-2">
                <Image src={user.avatar} alt="avatar" width={30} height={30} className="rounded-full" />
                <span>{user.name}</span>
              </div>
              <span className="text-gray-600">{user.rank}</span>
              <span className="text-gray-800 font-semibold">{user.score}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Leaderboard;
