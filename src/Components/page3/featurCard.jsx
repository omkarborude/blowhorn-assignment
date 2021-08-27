import "./card.css";

export const FeatureCard = ({ item }) => {
  return (
    <div className="feat-card-div">
      <div className="feat-cart-logo-div">
        <a>{item.logo} </a>
      </div>
      <div className="feat-cart-tag-div">
        <h3>{item.tag}</h3>
      </div>
      <div className="feat-cart-info-div">
        <p>{item.info}</p>
      </div>
    </div>
  );
};
