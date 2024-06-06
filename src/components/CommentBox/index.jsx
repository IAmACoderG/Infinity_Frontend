import { Avatar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const CommnetBox = ({
  addComment,
  setAddComment,
  postOwnerName,
  postOwnerAvatar,
  caption,
  postOwnerId,
  comments = [],
  commentSubmitHandler,
}) => {
  return (
    <div className="bg-blue-900 text-white flex justify-center h-[90vh] w-[40vw] rounded-xl relative overflow-y-auto">
      <div className="fixed bg-blue-900 top-10 z-10 w-[38vw] flex justify-start items-center p-3 gap-3">
        <Link
          to={`/users/${postOwnerId}`}
          className="transition-all hover:scale-90 duration-300 flex items-center gap-2"
        >
          <Avatar
            src={postOwnerAvatar}
            alt="User"
            sx={{
              height: "3vmax",
              width: "3vmax",
            }}
          />
          <Typography fontWeight={500}>{postOwnerName}</Typography>
        </Link>
        <h2>{caption}</h2>
      </div>
      <div className="flex flex-col justify-start items-center p-3 gap-3 mt-16">
        {comments && comments.length > 0 ? (
          comments.map((eachComment) => (
            <div
              className="w-[37vw] flex justify-start items-center p-3 gap-3"
              key={eachComment._id}
            >
              <Link
                to={`/users/${eachComment.user._id}`}
                className="transition-all hover:scale-90 duration-300 flex items-center gap-2"
              >
                <Avatar
                  src={eachComment.user.avatar}
                  alt="User"
                  sx={{
                    height: "3vmax",
                    width: "3vmax",
                  }}
                />
                <Typography fontWeight={500}>
                  {eachComment.user.fullName}
                </Typography>
              </Link>
              <div>{eachComment.comment}</div>
            </div>
          ))
        ) : (
          <div>Be the First One to Comment this Post</div>
        )}
      </div>
      <div className="fixed bg-blue-900 bottom-10 w-[38vw]">
        <form
          onSubmit={commentSubmitHandler}
          className=" w-[35vw] flex justify-start p-3"
        >
          <input
            className="bg-transparent w-full outline-none"
            type="text"
            placeholder="Add a Comment... "
            value={addComment}
            onChange={(e) => setAddComment(e.target.value)}
          />
          {addComment.length > 0 && <button type="submit">Post</button>}
        </form>
      </div>
    </div>
  );
};
export default CommnetBox;
