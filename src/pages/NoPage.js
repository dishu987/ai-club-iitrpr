import { useEffect } from "react";
import { Link } from "react-router-dom";

function NoPage(props) {
  useEffect(() => {
    document.getElementById("err_link").click();
  }, []);
  return (
    <>
      <Link to={"/"} id="err_link" hidden></Link>
    </>
  );
}
export default NoPage;
