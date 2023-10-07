import error from "../../assets/error.svg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="text-center h-full">
        <div className="text-7xl font-bold">
          Back to home-page <br />{" "}
          <Link className="btn btn-main mb-3" to="/">
            Home-page
          </Link>{" "}
        </div>
        <div className="  flex justify-center">
          <img src={error} alt="" />
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
