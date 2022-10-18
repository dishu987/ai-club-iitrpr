import ai_image from "./IMAGES/ai-image.jpg";
import { Outlet, Link } from "react-router-dom";
import "./CSS/blog-card.css";
import { useEffect, useState, React } from "react";
import blog_data from "./DATA/blog-data";
import loader_gif from "./IMAGES/loader-gif.gif";
import { useLocation } from "react-router-dom";

const Blog_card = (props) => {
  const newData = blog_data.slice(
    (props.page - 1) * props.number_of_cards,
    (props.page - 1) * props.number_of_cards + props.number_of_cards
  );
  const { pathname } = useLocation();
  useEffect(() => {
    setTimeout(() => {
      let loaders = document.getElementsByClassName("card__image_loader");
      let imgs = document.getElementsByClassName("card__image_img");
      for (let i = 0; i < loaders.length; i++) {
        loaders[i].style.display = "none";
        imgs[i].style.display = "block";
      }
    }, 1000);
  }, [pathname]);
  return (
    <div className="Container">
      {newData.map((data) => (
        <div className="card" key={data.id}>
          <div className="card__header">
            <img
              srcSet={loader_gif}
              alt="card__image"
              className="card__image card__image_loader"
              width="600"
            />
            <img
              srcSet={data.image}
              alt="card__image"
              className="card__image card__image_img"
              width="600"
              style={{
                display: "none",
              }}
            />
          </div>{" "}
          <div className="card__body">
            <h4> {data.title} </h4> <p>{data.text}</p>{" "}
            <div className="link">
              <Link to={`${props.link}${data.id}`}> Open </Link> <Outlet />
            </div>{" "}
          </div>{" "}
        </div>
      ))}
    </div>
  );
};

export default Blog_card;
