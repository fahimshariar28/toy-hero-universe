import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const UpdateToyData = () => {
  useTitle("Update Toy Data");
  const { id } = useParams();
  console.log(id);
  const [toy, setToy] = useState({});

  //  fetch single toy from database

  useEffect(() => {
    fetch(`http://localhost:5000/mytoys/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToy(data);
      });
  }, [id]);

  const { toyName, price, Quantity, description } = toy;

  // update toy

  const handleUpdateToy = (e) => {
    e.preventDefault();

    const from = e.target;
    const price = from.price.value;
    const Quantity = from.Quantity.value;
    const description = from.description.value;

    const updateToy = { price, Quantity, description };

    console.log(updateToy);

    fetch(`http://localhost:5000/mytoys/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Toy updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <>
      <h2 className="text-4xl text-[#FFC107] text-center font-bold my-10">
        {" "}
        Update Toy {toyName}
      </h2>

      {/* from start  */}

      <div className="  rounded-lg bg-emerald-200 my-20">
        <form onSubmit={handleUpdateToy} className="p-5">
          <div className="form-control p-5">
            <input
              type="number"
              name="price"
              defaultValue={price}
              placeholder="Price"
              className="input input-bordered"
            />
          </div>

          <div className="form-control p-5">
            <input
              type="number"
              name="Quantity"
              defaultValue={Quantity}
              placeholder="Available Quantity"
              className="input input-bordered"
            />
          </div>

          <div className="form-control p-5 ">
            <textarea
              name="description"
              defaultValue={description}
              placeholder="Toy description"
              className="textarea textarea-bordered textarea-lg w-full "
            ></textarea>
          </div>
          <div className="form-control mt-6 p-5">
            <input type="submit" className="btn btn-main" value="Update Toy" />
          </div>
        </form>
      </div>

      {/* from end  */}
    </>
  );
};

export default UpdateToyData;
