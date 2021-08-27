import { BrandRow } from "./barndrow";
import "./pagetwo.css";

export const PageTwo = () => {
  return (
    <div>
      <h3 className="brand-trust-tag">TRUSTED BY TOP-LEADING COMPANIES.</h3>
      <BrandRow />
      <div className="pagetow-boost-main-div">
        <div className="boost-img-div">
          <img src="https://cdn.discordapp.com/attachments/875276605365305394/880710869078646834/hightlight2.png" />
        </div>
        <div className="boost-info-siv">
          <h3>Boost Productivity</h3>
          <p>
            Build an atmosphere that creates productivity in <br /> your
            organization and your company culture
          </p>
          <ul>
            <li>
              <i class="fas fa-circle"></i>
              <span>Maximize productivity and growth</span>
            </li>
            <li>
              <i class="fas fa-circle"></i>
              <span>Speed past your competition</span>
            </li>
            <li>
              <i class="fas fa-circle"></i>
              <span>Learn the top techniques</span>
            </li>
          </ul>
        </div>
      </div>
      {/* 2 */}
      <div className="pagetow-boost-main-div">
        <div className="boost-info2-siv">
          <h3>Automated Tasks</h3>
          <p>
            Save time and money with our revolutionary <br /> services.We are
            the leaders in industry.
          </p>
          <ul>
            <li>
              <i class="fas fa-circle"></i>
              <span>Automated tesk management workflow</span>
            </li>
            <li>
              <i class="fas fa-circle"></i>
              <span>Detailed anaylytics for your data</span>
            </li>
            <li>
              <i class="fas fa-circle"></i>
              <span>Some awesome integrations</span>
            </li>
          </ul>
        </div>
        <div className="boost-img-div">
          <img src="https://cdn.discordapp.com/attachments/875276605365305394/880710865077276682/hightlight1.png" />
        </div>
      </div>
    </div>
  );
};
