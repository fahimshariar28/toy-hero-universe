import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import LoadingSpinner from "../../../loader/LoadingSpinner";
import useTitle from "../../../hooks/useTitle";
import Banner from "./../Banner/Banner";
import Gallary from "../Gallary/Gallary";
import ShopByCategory from "./../shopByCategory/ShopByCategory";

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
      <Gallary></Gallary>
      <ShopByCategory></ShopByCategory>
    </>
  );
};

export default Home;
