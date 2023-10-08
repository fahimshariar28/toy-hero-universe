import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import LoadingSpinner from "../../../loader/LoadingSpinner";
import useTitle from "../../../hooks/useTitle";
import Banner from "./../Banner/Banner";
import Gallary from "../Gallary/Gallary";
import ShopByCategory from "./../shopByCategory/ShopByCategory";
import Brand from "../Brand/Brand";
import OurServices from "../OurServices/OurServices";

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
      <Brand></Brand>
      <OurServices></OurServices>
    </>
  );
};

export default Home;
