import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";
const CategoryCard = ({ toy }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const location = useLocation();
  const { user } = useContext(AuthContext);

  const handleNotifaction = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You have to log in first to view details!",
    });
  };

  const { toyName, toyImg, price, rating, _id } = toy;
  return (
    <>
      <div
        data-aos="fade-left"
        className="card card-side bg-[#dbeafe] shadow-xl "
      >
        <figure>
          <img className=" w-96 object-cover" src={toyImg} alt="toy" />
        </figure>
        <div className="card-body space-y-3">
          <h2 className=" font-bold text-2xl">{toyName}</h2>
          <h1 className="text-xl ">
            {" "}
            <span className="font-bold text-[#FFC107] "> Price:</span> {price}$
          </h1>
          {/* <h1 className="text-xl flex items-center gap-3 ">  <span className="font-bold  text-[#FFC107] "> Rating:</span> */}
          <span>
            <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
          </span>

          {/* </h1> */}
          {user?.email ? (
            <div className="">
              <Link
                state={location}
                to={`/toydetails/${_id}`}
                className="btn btn-sm bg-[#DC143C] border-none text-white "
              >
                View-Details
              </Link>
            </div>
          ) : (
            <div className="">
              <Link
                onClick={handleNotifaction}
                state={location}
                to={`/toydetails/${_id}`}
                className="btn btn-sm bg-[#DC143C] border-none text-white "
              >
                View-Details
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
