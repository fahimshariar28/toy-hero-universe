import { Link, useLocation } from "react-router-dom";

const AllToyTableRow = ({ toy, index }) => {
  const location = useLocation();
  const {
    toyName,
    _id,
    toyImg,
    price,
    sellerName,
    // email,
    // description,rating,
    toyCategory,
    Quantity,
  } = toy;
  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className=" rounded w-24 h-24">
                <img src={toyImg} alt="toy picture" />
              </div>
            </div>
          </div>
        </td>

        <td>
          <div>
            <div className="font-bold">{toyName}</div>
            <div className="text-sm opacity-50">category : {toyCategory} </div>
          </div>
        </td>
        <td>{sellerName}</td>
        <td>$ {price}</td>
        <td>{Quantity}</td>

        <td>
          <Link
            state={location}
            to={`/toydetails/${_id}`}
            className=" btn btn-main"
          >
            view Details
          </Link>
        </td>
      </tr>
    </>
  );
};

export default AllToyTableRow;
