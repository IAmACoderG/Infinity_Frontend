import User from "../User";

const LikeBox = ({ likes = [] }) => {
  return (
    <div className="bg-blue-900 text-white flex flex-col items-center p-6 h-[60vh] w-[25vw] rounded-xl">
      {likes && likes.length > 0 ? (
        likes.map((like) => (
          <User
            key={like._id}
            name={like.fullName}
            userId={like._id}
            avatar={like.avatar}
          />
        ))
      ) : (
        <div>No Likes Yet</div>
      )}
    </div>
  );
};
export default LikeBox;
