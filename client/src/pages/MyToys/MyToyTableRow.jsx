import { Link } from "react-router-dom";

const MyToyTableRow = ({ toy, index, handleDeleteToy }) => {
  const {
    _id,
    toyName,
    toyImg,
    price,
    sellerName,
    email,
    description,
    // rating,
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
        <td>{email}</td>
        <td>$ {price}</td>

        <td>
          <div>
            <p className="">{description.slice(0, 15)}....</p>
          </div>
        </td>

        <td>{Quantity}</td>
        <td>
          <Link to={`/update/${_id}`} className=" btn btn-success ">
            Update
          </Link>
        </td>
        <td>
          <button
            onClick={() => handleDeleteToy(_id)}
            className=" btn btn-warning btn-circle btn-outline "
          >
            X
          </button>
        </td>
      </tr>
    </>
  );
};

export default MyToyTableRow;
