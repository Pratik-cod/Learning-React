import React from "react";
import { Bookmark } from "lucide-react";
import "./Card.css";   // Import CSS file

const Card = (props) => {
  return (
    <div className="container">

      <div className="Top">
        <img
        src={props.companyLogo}
          alt="error"
        />
        <button className="btn">
          Save <Bookmark size={12} />
        </button>
      </div>

      <div className="center">
        <h3 className="heading">
          {props.companyName}<span className="nEW">{props.daysAgo}</span>
        </h3>
        <h2>{props.position}</h2>
        <h4>{props.jobType}</h4>
        <h4>{props.jobType}</h4>
      </div>

      <div className="footer">
        <div>
          <h3>$120/hr</h3>
          <p>Mumbai, India</p>
        </div>
        <button>Apply Now</button>
      </div>

    </div>
  );
};

export default Card;
