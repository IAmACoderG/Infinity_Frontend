import User from "../User";

const FollowingBox = ({ followingData = [] }) => {
  return (
    <div className="bg-blue-900 text-white flex flex-col items-center p-6 h-[60vh] w-[25vw] rounded-xl">
      {followingData && followingData.length > 0 ? (
        followingData.map((following) => (
          <User
            key={following._id}
            name={following.fullName}
            userId={following._id}
            avatar={following.avatar}
          />
        ))
      ) : (
        <div>Know your Self Not Need To Follow AnyOne</div>
      )}
    </div>
  );
};
export default FollowingBox;
