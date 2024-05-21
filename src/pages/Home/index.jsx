import { User, Post, Loader } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getAllUsers,
  getPostFollowingUser,
} from "../../redux/actions/userActions";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, posts, error } = useSelector(
    (state) => state.postOfFollowing
  );
  const { users, loading: userLoading } = useSelector(
    (state) => state.allUsers
  );
  useEffect(() => {
    dispatch(getPostFollowingUser());
    dispatch(getAllUsers());
  }, []);
  return !loading || !userLoading ? (
    <div className="min-h-[100vh] ml-[257px] text-white w-[85vw] bg-blue-950 grid grid-cols-[1fr,25vw]">
      <div className="bg-gradient-to-r from-pink-300 to-blue-300 m-1 rounded-md">
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
            />
          ))
        ) : (
          <div className="flex justify-center items-center "> No Post Yet</div>
        )}
      </div>
      <div className="bg-blue-950 m-1 my-5 rounded-md">
        {users && users.length > 0 ? (
          users.map((user) => (
            <User
              key={user._id}
              name={user.fullName}
              userId={user._id}
              avatar={user.avatar}
            />
          ))
        ) : (
          <div className="text-black bg-gradient-to-r from-pink-300 to-blue-300 flex rounded-md m-1 justify-center items-center">
            {" "}
            No User Yet
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center">
      <Loader />
    </div>
  );
};

export default Home;
