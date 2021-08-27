import "./pagefour.css";
import { TeamCard } from "./teamCard";
import { membarData } from "./memberData";
export const PageFour = () => {
  return (
    <div className="team-page-main-div">
      <p className="our-team-tag">OUT TEAM</p>
      <p className="our-team-tag-info">
        An incredible team of <br />
        amazing individuals
      </p>
      <div className="team-card-wrapper-div">
        {membarData.map((item) => {
          return <TeamCard item={item} />;
        })}
      </div>
    </div>
  );
};
