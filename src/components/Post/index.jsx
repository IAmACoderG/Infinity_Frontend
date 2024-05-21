import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button, Typography, Dialog } from "@mui/material";
import { CommentBox, DotBox, LikeBox } from "../index";
import {
  MoreHoriz,
  Favorite,
  FavoriteBorder,
  ChatBubbleOutline,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { likePost } from "../../redux/actions/postActions";
import {
  getMyPosts,
  getPostFollowingUser,
} from "../../redux/actions/userActions";
const Post = ({
  postId,
  caption,
  postImage,
  likes = [],
  comments = [],
  postOwnerId,
  postOwnerName,
  postOwnerAvatar,
  isDelete = false,
  isAccount = false,
}) => {
  const [like, setLike] = useState(false);
  const [toggleLikedUser, setToggleLikedUser] = useState(false);
  const [commentToggle, setCommentToggle] = useState(false);
  const [dots, setDots] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleLike = () => {
    setLike(!like);
    dispatch(likePost(postId));
    !isAccount ? dispatch(getPostFollowingUser()) : dispatch(getMyPosts());
  };

  useEffect(() => {
    likes.forEach((preLike) => {
      if (preLike._id === user._id) setLike(true);
    });
  }, [likes, user._id]);

  return (
    <div className="bg-blue-950 shadow-md rounded-sm flex flex-col items-center justify-center">
      <div className="flex justify-between w-[60%] pb-3 pt-5">
        <div>
          <Link
            to={`/users/${postOwnerId}`}
            className="transition-all duration-300 flex items-center gap-2"
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
        </div>
        <button
          onClick={() => setDots(!dots)}
          className="flex items-center text-white"
        >
          <MoreHoriz />
        </button>
      </div>
      <img className="w-[60%] rounded-md" src={postImage} alt="Post" />
      <div className="flex justify-start w-[60%] py-2">
        <div className="transition-all duration-300 flex items-center gap-4">
          <button onClick={handleLike}>
            {like ? <Favorite className="text-red-500" /> : <FavoriteBorder />}
          </button>

          <button onClick={() => setCommentToggle(!commentToggle)}>
            <ChatBubbleOutline />
          </button>
        </div>
      </div>
      <button
        onClick={() => setToggleLikedUser(!toggleLikedUser)}
        className=" w-[60%] flex justify-start"
      >
        <Typography>{likes.length} Likes</Typography>
      </button>
      <div className=" w-[60%] flex justify-start gap-2 my-1">
        <Typography fontWeight={500}>{postOwnerName}</Typography>
        <p>{caption}</p>
      </div>
      <div className=" w-[60%] flex justify-start my-2">
        <Typography className="text-blue-100" fontWeight={500}>
          View all {comments.length} comments
        </Typography>
      </div>
      <Dialog open={dots} onClose={() => setDots(!dots)}>
        <div>
          <DotBox />
        </div>
      </Dialog>
      <Dialog
        open={toggleLikedUser}
        onClose={() => setToggleLikedUser(!toggleLikedUser)}
      >
        <div>
          <LikeBox likes={likes} />
        </div>
      </Dialog>
      <Dialog
        open={commentToggle}
        onClose={() => setCommentToggle(!commentToggle)}
      >
        <div>
          <CommentBox />
        </div>
      </Dialog>
      <div className=" w-[60%] h-[1px] bg-white my-4"></div>
    </div>
  );
};

export default Post;
