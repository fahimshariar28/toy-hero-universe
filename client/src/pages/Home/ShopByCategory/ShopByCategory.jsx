import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryCard from "./CategoryCard";

const ShopByCategory = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const [activeTab, setActiveTab] = useState("Anime");
  const [toyData, setToyData] = useState([]);

  const categories = ["Anime", "Marvel", "Transformers"];
  console.log(activeTab);

  useEffect(() => {
    fetch(`https://toy-hero-universe-server-nine.vercel.app/toys/${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToyData(data);
      });
  }, [activeTab]);

  return (
    <>
      <div data-aos="fade-left" className="text-center my-10">
        <h2 className="text-4xl text-[#FFC107]  font-bold my-10">
          Shop By Category
        </h2>
      </div>

      {/* // tab start  */}

      <div className=" text-center mb-32">
        <Tabs>
          <TabList className=" text-2xl mb-3">
            {categories.map((category, index) => (
              <Tab key={index} onClick={() => setActiveTab(category)}>
                {category}
              </Tab>
            ))}
          </TabList>

          {categories.map((category, index) => (
            <TabPanel key={index}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8  m-5">
                {toyData.map((toy, index) => (
                  <CategoryCard key={index} toy={toy} />
                ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </>
  );
};

export default ShopByCategory;
