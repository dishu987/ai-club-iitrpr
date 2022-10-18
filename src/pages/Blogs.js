import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog_pages from "./blog_pages.js";
import { Outlet, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import blog_data from "./DATA/blog-data";
import _ from "lodash";
import { useEffect, useState, React } from "react";
import "./CSS/blogs.css";
import Loader from "./loader-line";

const Blogs = () => {
  const params = useParams();
  const [topLoader, setTopLoader] = useState(true);
  const tot_pages = Math.ceil(blog_data.length / 6);
  useEffect(() => {
    setTimeout(() => {
      setTopLoader(false);
    }, 1000);
    setTopLoader(true);
  }, [params.page]);
  return (
    <>
      {(() => {
        if (topLoader) {
          return <Loader />;
        }
      })()}
      {(() => {
        if (!topLoader) {
          return <Blog_pages page={params.page} number_of_cards={6} />;
        }
      })()}
      <div className="pag">
        <div className="pag_blogs">
          <ul>
            <li className="pag-li">
              <Link data-title="Home">
                {" "}
                Page: {params.page}/{tot_pages}{" "}
              </Link>{" "}
            </li>
            {(() => {
              if (params.page - 1 > 0) {
                return (
                  <li className="pag-li">
                    <Link to={`/blogs/${Number(params.page) - 1}`}> Prev </Link>
                  </li>
                );
              }
            })()}
            {(() => {
              if (params.page < tot_pages) {
                return (
                  <li className="pag-li">
                    <Link to={`/blogs/${Number(params.page) + 1}`}> Next </Link>
                  </li>
                );
              }
            })()}
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Blogs;
