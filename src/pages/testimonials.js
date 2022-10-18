import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./CSS/blogs.css";
import "./CSS/testimonial.css";

function Testimonial() {
  return (
    <>
      <figure className="snip1157">
        <blockquote>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
          facere accusantium dignissimos aperiam impedit dolores necessitatibus
          atque quasi consequatur quam ex odit est rem fuga, exercitationem
          placeat cumque nulla obcaecati?
          <div className="arrow"></div>
        </blockquote>
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample3.jpg"
          alt="sq-sample3"
        />
        <div className="author">
          <h5>
            ABCD <span> XYZ.iotaCluster</span>
          </h5>
        </div>
      </figure>
    </>
  );
}

export default Testimonial;
