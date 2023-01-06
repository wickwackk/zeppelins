import "../../styles/subStyles/blogHeader.css";

export default function UpperBody() {
  return (
    <div>
      <div className="container blogHeader">
        <div className="blogHeaderLeft">
          <h1>Blog Posts</h1>
          <h2>I think so, this is it.</h2>
          <p>
            Design begins after I begin to think about how to present an
            experience most successfully, whether a button I put in can solve a
            problem. The only point in design is not ui design, if the user does
            not have a good experience at the end of the product, the design
            will be considered unsuccessful in my opinion.
          </p>
          <button>Twitter</button>
          <button>linkedin</button>
          <button>medium</button>
        </div>
        <div className="blogHeaderRight">
          <img src="./Saly-16.png" alt="" />
        </div>
      </div>
    </div>
  );
}
