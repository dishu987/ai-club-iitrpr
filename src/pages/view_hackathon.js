import "./CSS/view_blog.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import blog_data from "./DATA/blog-data";
import loader_gif from "./IMAGES/loader-gif.gif";

const View_Hackathon = (props) => {
  const params = useParams();
  let blog = blog_data.find((b) => {
    if (Number(params.id) < 1 || Number(params.id) > blog_data.length) {
      return blog_data[0];
    }
    return Number(b.id) === Number(params.id);
  });
  useEffect(() => {
    setTimeout(() => {
      document.getElementById(`blog__image_loader${blog.id}`).style.display =
        "none";
      document.getElementById(`blog_img${blog.id}`).style.display = "block";
    }, 2000);
  }, [blog.image]);
  return (
    <>
      <div className="blog_view_container">
        <div className="blog_view_image">
          <img
            src={blog.image}
            alt="UnSuplash"
            id={`blog_img${blog.id}`}
            style={{ display: "none" }}
          />
          <img
            srcSet={loader_gif}
            alt="card__image"
            id={`blog__image_loader${blog.id}`}
          />
        </div>
        <div className="blog_view_main">
          <div className="blog_view_title">
            {blog.title} {blog.id}
          </div>
          <div className="blog_view_subtitle">#{blog.subtitle}</div>
          <div className="blog_view_text">{blog.text}</div>
        </div>
        <div className="pag">
          <Link to={`/hackathons/1`}> Back to Hackathons</Link>
          {(() => {
            if (params.id - 1 > 0) {
              return (
                <Link to={`/hackathon/view/${Number(params.id) - 1}`}>
                  Prev{" "}
                </Link>
              );
            }
          })()}
          {(() => {
            if (params.id < blog_data.length) {
              return (
                <Link to={`/hackathon/view/${Number(params.id) + 1}`}>
                  {" "}
                  Next{" "}
                </Link>
              );
            }
          })()}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default View_Hackathon;
