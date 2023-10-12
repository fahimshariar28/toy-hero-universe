import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";
import MyToyTableRow from "./MyToyTableRow";

const MyToys = () => {
  useTitle("My Toys");

  const { user } = useContext(AuthContext);

  const [myToys, setMyToys] = useState([]);

  //fetch my toys data by email

  useEffect(() => {
    fetch(
      `https://toy-hero-universe-server-nine.vercel.app/mytoys?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        console.log(data);
      });
  }, [user?.email]);

  // delete toy

  const handleDeleteToy = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-hero-universe-server-nine.vercel.app/mytoys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Toy deleted Successfully",
                showConfirmButton: false,
                timer: 1500,
              });

              const remainingToys = myToys.filter((toy) => toy._id !== id);
              setMyToys(remainingToys);
            }
          });
      }
    });
  };

  return (
    <>
      {/* All-toy table start */}

      <div className="overflow-x-auto  w-full my-10">
        <table className="table w-full ">
          {/* head */}
          <thead>
            <tr>
              <th className=" bg-amber-100"></th>
              <th className=" bg-amber-100">Image </th>
              <th className=" bg-amber-100">Toy Name & Category </th>
              <th className=" bg-amber-100">Seller Name </th>
              <th className=" bg-amber-100">Email </th>
              <th className=" bg-amber-100">Price</th>
              <th className=" bg-amber-100">Details</th>
              <th className=" bg-amber-100">Quantity</th>
              <th className=" bg-amber-100">Update</th>
              <th className=" bg-amber-100">Delete</th>

              <th className=" bg-amber-100"></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {myToys.map((toy, index) => (
              <MyToyTableRow
                index={index}
                toy={toy}
                key={toy._id}
                handleDeleteToy={handleDeleteToy}
              ></MyToyTableRow>
            ))}
          </tbody>
        </table>
      </div>

      {/* All-toy table end */}
    </>
  );
};

export default MyToys;
