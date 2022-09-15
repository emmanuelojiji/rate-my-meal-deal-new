import "./Feed.scss";
import { useState, useEffect } from "react";
import {
  doc,
  onSnapshot,
  getDocs,
  addDoc,
  collection,
} from "firebase/firestore";
import { db } from "../FirebaseConfig";
import NewPost from "../Components/NewPost";
import Post from "../Components/Post";
import ScrollFeed from "../Components/ScrollFeed";
import GridFeed from "../Components/GridFeed";
import Loader from "../Components/Loader";

const Feed = ({
  newPostVisible,
  setNewPostVisible,
  view,
  imagePreviewURL,
  setImageUpload,
  imageUpload,
}) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    const postsFromFirestore = [];
    querySnapshot.forEach((doc) => {
      postsFromFirestore.push(doc.data());
    });

    setPosts(postsFromFirestore);
  };

  useEffect(() => {
    getPosts();
  });

  return (
    <main>
      <NewPost
        newPostVisible={newPostVisible}
        setNewPostVisible={setNewPostVisible}
        imagePreviewURL={imagePreviewURL}
        imageUpload={imageUpload}
        setImageUpload={setImageUpload}
      />
      <div className="Feed">
        <ScrollFeed posts={posts} style={view === "scroll" && "flex"} />
        <GridFeed posts={posts} style={view === "grid" && "grid"} />
      </div>
    </main>
  );
};

export default Feed;
