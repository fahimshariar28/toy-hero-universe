import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import LoadingSpinner from "../../../loader/LoadingSpinner";
import useTitle from "../../../hooks/useTitle";
import Banner from "./../Banner/Banner";

const Home = () => {
  useTitle("Home");

  const { loader } = useContext(AuthContext);

  // loader

  if (loader) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <>
      <Banner></Banner>
    </>
  );
};

export default Home;
