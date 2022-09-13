import food from "../Media/food.jpeg";
import "../Components/Post.scss";
import ProfileCircle from "./ProfileCircle";

const Post = ({
  post,
  username,
  caption,
  height,
  width,
  marginBottom,
  textContainerDisplay,
}) => {
  return (
    <div class="post" style={{ marginBottom: marginBottom }}>
      <div className="post-user-info">
        <ProfileCircle height="40px" width="40px" />
        <span className="username">username</span>
      </div>
      <div className="image-container">
        <img src={post.image} style={{ height: height, width: width }}></img>
      </div>
      <div className="text-container" style={{ display: textContainerDisplay }}>
        <span className="username">username</span>
        <span className="caption">{post.caption}</span>
      </div>
    </div>
  );
};

export default Post;
