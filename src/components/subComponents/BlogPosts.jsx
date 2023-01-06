import "../../styles/subStyles/blogPosts.css";
import Product from "./singleComp/Post";
import Navbar from "./singleComp/Navbar";

export default function BlogPosts(prop) {
  const { posts } = prop;
  return (
    <div className="container posts">
      <Navbar />
      {posts.map((post, index) => {
        return <Product detail={post} key={index} />;
      })}
    </div>
  );
}
