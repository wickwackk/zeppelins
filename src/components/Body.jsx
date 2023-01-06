import "../styles/body.css";
import BlogHeader from "./subComponents/BlogHeader";
import BlogPosts from "./subComponents/BlogPosts";
import { data } from "./../data";

export default function Body() {
  console.log(data);
  return (
    <main>
      <BlogHeader />
      <BlogPosts posts={data} />
    </main>
  );
}
