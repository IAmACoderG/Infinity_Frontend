import { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewPost } from "../../redux/actions/postActions";
const NewPost = () => {
  const dispatch = useDispatch();
  const [caption, setCaption] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handleImageFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(createNewPost(caption, imageFile));
    setCaption("");
    setImageFile(null);
  };
  return (
    <div
      className="h-[100vh] text-white w-full bg-gradient-to-r from-pink-900 to-blue-950
        flex justify-center items-center"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white w-[60vw] h-[60vh] shadow-2xl rounded-lg flex items-center flex-col gap-4"
      >
        <h2 className="text-black text-4xl font-semibold m-5">
          Create New Post
        </h2>
        <input
          className="bg-blue-800 m-5 px-5 py-3 rounded-md cursor-pointer"
          type="file"
          onChange={handleImageFileChange}
          required
        />
        <input
          className="p-3 outline-none border-2 border-pink-500 rounded-md text-blue-800"
          type="text"
          value={caption}
          onChange={handleCaptionChange}
          required
          placeholder="Caption ...."
        />
        <button type="submit" className="bg-pink-800 m-5 px-5 py-3 rounded-md">
          Post
        </button>
      </form>
      
    </div>
  );
};

export default NewPost;
