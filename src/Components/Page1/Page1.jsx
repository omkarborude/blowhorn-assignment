import "./page1.css";

export const PageOne = () => {
  return (
    <div>
      <div className="top-black-tag">
        <h1>Start Crafting Your </h1>
      </div>
      <div className="top-second-blue-tag">
        <h1>Next Great Idea</h1>
      </div>
      <div className="top-third-small-tag">
        <p>
          Simplifying the creation of landing pages, blog pages, <br />{" "}
          application pages and so much more!
        </p>
      </div>
      <div className="btn-purchase-div">
        <button className="btn-purchase-now">
          {" "}
          Purchase Now<span className="purchase-btn-badge">only $15/mo</span>
        </button>
        <p>Learn More</p>
      </div>
    </div>
  );
};
