import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import useTitle from "../../hooks/useTitle";

const ToyDetails = () => {
  useTitle("Toy Details");
  const { id } = useParams();
  console.log(id);
  const [toy, setToy] = useState({});

  //  fetch single toy from database

  useEffect(() => {
    fetch(`https://toy-hero-universe-server-nine.vercel.app/mytoys/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToy(data);
      });
  }, [id]);

  const {
    sellerName,
    toyName,
    toyImg,
    price,
    email,
    description,
    rating,

    Quantity,
  } = toy;

  return (
    <>
      <div className="hero min-h-screen bg-base-100 my-10">
        <div className="hero-content flex-col  ">
          <img
            src={toyImg}
            className=" max-w-xs  md:max-w-lg rounded-lg shadow-2xl"
          />
          <div className="my-3 space-y-4">
            <h1 className="text-4xl text-[#FFC107] font-bold">
              Toy Name: <span className="text-red-400">{toyName}</span>
            </h1>
            <h1 className="text-xl ">
              {" "}
              <span className="font-bold text-[#FFC107] ">
                {" "}
                Seller Name:
              </span>{" "}
              {sellerName}
            </h1>
            <h1 className="text-xl ">
              {" "}
              <span className="font-bold text-[#FFC107] ">
                {" "}
                Seller Email:
              </span>{" "}
              {email}
            </h1>
            <h1 className="text-xl ">
              {" "}
              <span className="font-bold text-[#FFC107] "> Price:</span> {price}{" "}
              $
            </h1>
            <h1 className="text-xl flex items-center gap-3 ">
              {" "}
              <span className="font-bold  text-[#FFC107] "> Rating:</span>{" "}
              <span>
                <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
              </span>
            </h1>
            <h1 className="text-xl ">
              {" "}
              <span className="font-bold text-[#FFC107] ">
                {" "}
                Available Quantity:
              </span>{" "}
              {Quantity}
            </h1>
            <p className="">
              {" "}
              <span className="font-bold text-[#FFC107]">
                {" "}
                Toy description:{" "}
              </span>{" "}
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToyDetails;
