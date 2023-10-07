import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import LoadingSpinner from "../../../loader/LoadingSpinner";
import useTitle from "../../../hooks/useTitle";

const Home = () => {
  useTitle("Home");

  const { loader } = useContext(AuthContext);

  // loader

  if (loader) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <>
      <h1 className="text-center text-4xl font-bold my-5">Home</h1>
    </>
  );
};

export default Home;
