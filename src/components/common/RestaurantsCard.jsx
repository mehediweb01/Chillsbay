/* eslint-disable react/prop-types */
import { Button, cn } from "@nextui-org/react";
import { useEffect, useState } from "react";

const RestaurantsCard = ({ title, api, isDark }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(api)
      .then((res) => {
        return res.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      });
  });
  return (
    <section
      className={cn(
        "w-[85%] mx-auto bg-[#F5FAFF] my-6",
        isDark && "bg-black my-16"
      )}
    >
      <div>
        <div className="flex justify-between items-center">
          <h1
            className={cn(
              "font-RedHotDisplay font-bold text-base sm:text-2xl md:text-[32px] text-[#26395C] sm:leading-9 leading-6",
              isDark && "text-white"
            )}
          >
            {title}
          </h1>
          <Button
            variant="outline"
            className={cn(
              "text-[#0E8BFF] text-base sm:text-2xl leading-5 sm:leading-9 font-semibold",
              isDark && "text-white "
            )}
          >
            See More
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center sm:justify-items-start justify-items-center">
          {data.map((data) => (
            <div key={data.id} className="my-6 space-y-3">
              <div key={data.id} className="relative">
                {isDark && (
                  <Button
                    className="text-[#26395C] bg-white absolute top-2.5 lg:top-4 right-2.5 lg:right-4 font-bold"
                    size="sm"
                  >
                    {data.date}
                  </Button>
                )}

                <img
                  src={data.image}
                  alt=""
                  className="w-[400px] object-cover rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <h1
                  className={cn(
                    "font-PlusJakartaSans font-bold text-[#26395C] text-2xl leading-8",
                    isDark && "text-white"
                  )}
                >
                  {data.title}
                </h1>
                <p
                  className={cn(
                    "font-RedHotDisplay font-medium text-[#26395C] text-[15px] leading-[15px] ",
                    isDark && "text-white"
                  )}
                >
                  {data.description}
                </p>
                <div
                  className={cn(
                    "font-RedHotDisplay text-[#26395C] text-[15px] leading-[15px]",
                    isDark && "text-white"
                  )}
                >
                  {isDark ? (
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <img src={data.tagImage1} alt="" className="w-4" />
                        <p>{data.calendar}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <img src={data.tagImage2} alt="" className="w-4" />
                        <p>{data.clock}</p>
                      </div>
                    </div>
                  ) : (
                    <p>{data.tags}</p>
                  )}
                </div>
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
