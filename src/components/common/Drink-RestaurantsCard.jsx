/* eslint-disable react/prop-types */
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";

const RestaurantsCard = ({ title }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => {
        return res.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      });
  });
  return (
    <section className="w-[85%] mx-auto bg-[#F5FAFF] my-6">
      <div>
        <div className="flex justify-between items-center">
          <h1 className="font-RedHotDisplay font-bold text-base sm:text-2xl md:text-[32px] text-[#26395C] sm:leading-9 leading-6">
            {title}
          </h1>
          <Button
            variant="outline"
            className="text-[#0E8BFF] text-base sm:text-2xl leading-5 sm:leading-9 font-semibold"
          >
            See More
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center sm:justify-items-start justify-items-center">
          {data.map((data) => (
            <div key={data.id} className="my-6 space-y-3">
              <img
                src={data.image}
                alt=""
                className="w-[400px] object-cover rounded-lg"
              />
              <div className="space-y-2">
                <h1 className="font-PlusJakartaSans font-bold text-[#26395C] text-2xl leading-8">
                  {data.title}
                </h1>
                <p className="font-RedHotDisplay font-medium text-[#26395C] text-[15px] leading-[15px] ">
                  {data.description}
                </p>
                <p className="font-RedHotDisplay text-[#26395C] text-[15px] leading-[15px]">
                  {data.tags}
                </p>
              </div>
              <Button variant="solid" color="primary" className="px-6">
                {data.btnText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantsCard;
