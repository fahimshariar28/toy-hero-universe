import { useEffect, useState } from "react";
import AllToyTableRow from "./AllToyTableRow";
import useTitle from "../../hooks/useTitle";

const AllToy = () => {
  const [toys, setToys] = useState([]);

  useTitle("All Toy");

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        // console.log(data)
      });
  }, []);

  // search toy

  const handleSearchToy = (e) => {
    const search = e.target.value;

    // console.log(search);

    fetch(`http://localhost:5000/search/${search}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        // console.log(data);
      });
  };

  return (
    <>
      <div className=" my-5 flex justify-center p-5">
        <input
          onChange={handleSearchToy}
          type="text"
          placeholder="search"
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <button className="ml-3  btn btn-success">Search</button>
      </div>

      {/* All-toy table start */}

      <div className="overflow-x-auto w-full my-10">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th className=" bg-red-300"></th>
              <th className=" bg-red-300">Image </th>
              <th className=" bg-red-300">Toy Name & Category </th>
              <th className=" bg-red-300">Seller Name </th>
              <th className=" bg-red-300">Price</th>
              <th className=" bg-red-300">Quantity</th>
              <th className=" bg-red-300">Details</th>
              <th className=" bg-red-300"></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {toys.map((toy, index) => (
              <AllToyTableRow
                index={index}
                toy={toy}
                key={toy._id}
              ></AllToyTableRow>
            ))}
          </tbody>
        </table>
      </div>

      {/* All-toy table end */}
    </>
  );
};

export default AllToy;
