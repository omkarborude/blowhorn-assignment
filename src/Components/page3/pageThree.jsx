import "./pagethree.css";
import { FeatureCard } from "./featurCard";
import { FeaturData } from "./data";

export const PageThree = () => {
  return (
    <div className="pagethree-main-div">
      <h1>Our Features</h1>
      <p>Check out our list of awesome features below.</p>
      <div className="feat-wrap-div">
        {FeaturData.map((key) => {
          console.log(key);
          return <FeatureCard item={key} />;
        })}
      </div>
    </div>
  );
};
