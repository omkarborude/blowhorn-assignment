import { blogData } from "../Page4/BlogData";
import "./blogsrow.css";

export const BlogsRow = () => {
  return (
    <div className="blog-row-main-div">
      {blogData.map((item) => {
        return (
          <div className="blog-card-div">
            <div className="blog-card-img-div">
              <img src={item.image} />
            </div>
            <div className="blog-card-info-div">
              <button style={{ backgroundColor: item.color }}>
                {item.button}
              </button>
              <h1>{item.tag}</h1>
              <p>{item.info}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
