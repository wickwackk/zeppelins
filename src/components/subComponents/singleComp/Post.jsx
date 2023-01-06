import "../../../styles/subStyles/post.css";

export default function Post(prop) {
  const { detail } = prop;
  return (
    <div className="post">
      <img src={detail.image} alt="" />
      <h1>{detail.title}</h1>
      <p>{detail.description.slice(0, 250)}...</p>
      <a href="#">READ MORE</a>
    </div>
  );
}
