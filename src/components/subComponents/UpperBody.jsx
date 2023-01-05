import "../../styles/global.css";
import "../../styles/subStyles/upperBody.css";

export default function UpperBody() {
  return (
    <div className="upperBody">
      <div className="container">
        <div className="upperLeft">
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
        <div className="upperRight"></div>
      </div>
    </div>
  );
}
