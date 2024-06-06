import { Post, Loader, FollowingBox, FollowerBox } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUserPosts, getUserProfile } from "../../redux/actions/userActions";
import { useParams } from "react-router-dom";
import { Avatar, Dialog } from "@mui/material";

const MyProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, posts } = useSelector((state) => state.userPosts);
  const { userProfile } = useSelector((state) => state.userProfile);
  const [followingToggle, setFollowingToggle] = useState(false);
  const [followerToggle, setFollowerToggle] = useState(false);

  const followingHandler = () => {
    setFollowingToggle(!followingToggle);
  };
  const followerHandler = () => {
    setFollowerToggle(!followerToggle);
  };

  useEffect(() => {
    dispatch(getUserProfile(id));
    dispatch(getUserPosts(id));
  }, [dispatch, id]);

  return !loading ? (
    <div className="min-h-[100vh] ml-[257px] text-white w-[85vw] bg-blue-950">
      <div className="h-[60vh] relative mt-[-15px]">
        <div className="w-[85vw] h-[30vh] rounded-md bg-gradient-to-r from-pink-900 from to-blue-950 border-2 border-cyan-900 m-auto my-4 relative">
          <div className="w-[70vw] absolute top-10 right-60 flex flex-col justify-start items-center">
            <div className="m-1 p-1 flex justify-start items-center">
              <div className="m-1 py-1 px-3 text-2xl font-semibold">
                {userProfile && userProfile.username}
              </div>
              <button className="m-1 py-1 px-4 bg-blue-950 rounded-md">
                Edit Profile
              </button>
              <button className="m-1 py-1 px-3 bg-blue-950 rounded-md">
                View Archive
              </button>
            </div>
            <div className="m-1 p-1 flex justify-start items-center">
              <button className="m-1 py-1 px-3 rounded-md">
                {userProfile && userProfile.posts.length} Post
              </button>
              <button
                onClick={followerHandler}
                className="m-1 py-1 px-3 rounded-md"
              >
                {userProfile && userProfile.follower.length} followers
              </button>
              <button
                onClick={followingHandler}
                className="m-1 py-1 px-3 rounded-md"
              >
                {userProfile && userProfile.following.length} following
              </button>
            </div>
            <div className="m-1 p-1 text-2xl font-thin flex justify-start">
              <button className="m-1 py-1 px-3 rounded-md">
                {userProfile && userProfile.fullName}
              </button>
            </div>
          </div>
        </div>
        <div className="w-60 h-60 rounded-full border-2 border-white relative left-20 bottom-36 bg-gradient-to-r from-pink-900 from to-blue-950 ">
          <Avatar
            className="transition-all hover:scale-105 duration-300 rounded-md"
            src={userProfile && userProfile.avatar}
            alt=""
            sx={{
              height: "31vh",
              width: "31vh",
            }}
          />
        </div>
      </div>
      <div className="bg-gradient-to-r from-pink-300 to-blue-300 m-1 rounded-md overflow-y-auto">
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <Post
              key={post._id}
              postId={post._id}
              caption={post.caption}
              postImage={post.imageFile}
              likes={post.likes}
              comments={post.comments}
              postOwnerId={post.owner._id}
              postOwnerName={post.owner.fullName}
              postOwnerAvatar={post.owner.avatar}
              isAccount={true}
              isDelete={true}
            />
          ))
        ) : (
          <div className="flex justify-center items-center "> No Post Yet</div>
        )}
      </div>
      <Dialog
        open={followingToggle}
        onClose={() => setFollowingToggle(!followingToggle)}
      >
        <FollowingBox followingData={userProfile && userProfile.following} />
      </Dialog>
      <Dialog
        open={followerToggle}
        onClose={() => setFollowerToggle(!followerToggle)}
      >
        <FollowerBox followerData={userProfile && userProfile.follower} />
      </Dialog>
    </div>
  ) : (
    <div className="flex justify-center items-center">
      <Loader />
    </div>
  );
};

export default MyProfile;
