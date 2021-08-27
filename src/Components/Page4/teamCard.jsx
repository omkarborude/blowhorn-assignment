import "./teamcard.css";

export const TeamCard = ({ item }) => {
  return (
    <div className="team-card-main-div">
      <div className="card-photo-div" style={{ backgroundColor: item.bgc }}>
        <img src={item.image} />
      </div>
      <div className="card-member-info">
        <p className="team-m-name">{item.name}</p>
        <p className="team-m-post">{item.post}</p>
        <div className="t-g-logo-div">
          <i class="fab fa-twitter"></i>
          <i class="fab fa-github"></i>
        </div>
      </div>
    </div>
  );
};
