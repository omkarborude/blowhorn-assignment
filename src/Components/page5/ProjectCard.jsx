import "./projectcard.css";

export const ProjectCard = () => {
  return (
    <div className="project-card-main-div">
      <div className="pr-card-div" style={{ backgroundColor: "#e508c3" }}>
        <div className="pr-card-img-div">
          <img src="https://i.ibb.co/jWNbK24/1.jpg" />
        </div>
        <div className="pr-card-info-div">
          <button style={{ color: "#e508c3" }}>RESOURCES</button>
          <h1>
            Refreshing
            <br />
            Designs
          </h1>
          <p>
            Quench satisfying designs to help you stir up emotion and tell a
            story.
          </p>
        </div>
      </div>
      {/* 2 */}
      <div className="pr-card-div" style={{ backgroundColor: "#ffd200" }}>
        <div className="pr-card-img-div">
          <img src="https://i.ibb.co/fHcyKSw/3.jpg" />
        </div>
        <div className="pr-card-info-div">
          <button style={{ color: "#ffd200" }}>RESOURCES</button>
          <h1>
            Gaming <br />
            Evolution
          </h1>
          <p>
            Quench satisfying designs to help you stir up emotion and tell a
            story.
          </p>
        </div>
      </div>
      {/* 3 */}
      <div className="pr-card-div" style={{ backgroundColor: "#00b4d8" }}>
        <div className="pr-card-img-div">
          <img src="https://i.ibb.co/YjT0WbJ/2.jpg" />
        </div>
        <div className="pr-card-info-div">
          <button style={{ color: "#00b4d8" }}>LIFESTYLE</button>
          <h1>
            Healthier
            <br />
            Lifestyle
          </h1>
          <p>
            Quench satisfying designs to help you stir up emotion and tell a
            story.
          </p>
        </div>
      </div>
    </div>
  );
};
