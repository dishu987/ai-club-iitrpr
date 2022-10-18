import { Outlet, Link } from "react-router-dom";
import Blog_card from "./blog_card";

function Hackathons_pages(props) {
  return (
    <>
      <div className="blog-section">
        <div className="section-title">
          <h1> Hackathons </h1>{" "}
        </div>{" "}
        <div className="blogs">
          <Blog_card
            number_of_cards={props.number_of_cards}
            page={props.page}
            link="/hackathon/view/"
          />{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}

export default Hackathons_pages;
