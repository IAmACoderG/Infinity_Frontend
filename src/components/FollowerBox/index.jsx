import User from "../User";

const FollowerBox = ({ followerData = [] }) => {
  return (
    <div className="bg-blue-900 text-white flex flex-col items-center p-6 h-[60vh] w-[25vw] rounded-xl">
      {followerData && followerData.length > 0 ? (
        followerData.map((follower) => (
          <User
            key={follower._id}
            name={follower.fullName}
            userId={follower._id}
            avatar={follower.avatar}
          />
        ))
      ) : (
        <div>You Are a Alone Warior</div>
      )}
    </div>
  );
};
export default FollowerBox;
