import { useState } from "react";
import ChevronLeft from "/ChevronLeft.png";
import ChevronRight from "/ChevronRight.png";
import { Button } from "@nextui-org/react";
// date format
let myDate = new Date();
let formattedDate = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "2-digit",
}).format(myDate);
// array of objects
const Carousels = [
  {
    id: 1,
    title: "Upcoming events this weekend",
    image: "/carouselImage.png",
    details: [
      {
        detailsTitle: "Wizkid made in lagos tour",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",

        sections: [
          { image: "/Calendar.png", title: `${formattedDate}` },
          { image: "/Mark.png", title: "TBS  Lagos" },
          { image: "/Clock.png", title: "9:00 PM " },
          { image: "/Tag.png", title: "N20,000" },
        ],
        btn: [{ label: "Add to cart" }, { label: "Book Now" }],
        connected: [
          {
            title: "Connect with us on:",
            image: ["/Twitter.png", "/Instagram.png"],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: " second Title now",
    image: "/carouselImage.png",
    details: [
      {
        detailsTitle: "Learning now front end web development",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias quidem neque perspiciatis cum assumenda recusandae impedit, corporis aliquid sint, delectus inventore animi. Quasi dolorem cum non omnis, dicta molestiae officiis aut id doloribus recusandae est.",

        sections: [
          { image: "/Calendar.png", title: `${new Date().toLocaleString()}` },
          { image: "/Mark.png", title: "TBS  Lagos" },
          { image: "/Clock.png", title: "9:00 PM " },
          { image: "/Tag.png", title: "N20,000" },
        ],
        btn: [{ label: "Add to cart" }, { label: "Book Now" }],
        connected: [
          {
            title: "Connect with us on:",
            image: ["/Twitter.png", "/Instagram.png"],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: " third Title now",
    image: "/carouselImage.png",
    details: [
      {
        detailsTitle: "Learning now full stack web development",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias quidem neque perspiciatis cum assumenda recusandae impedit, corporis aliquid sint, delectus inventore animi. Quasi dolorem cum non omnis, dicta molestiae officiis aut id doloribus recusandae est.",
        sections: [
          { image: "/Calendar.png", title: `${new Date().toLocaleString()}` },
          { image: "/Mark.png", title: "TBS  Lagos" },
          { image: "/Clock.png", title: "9:00 PM " },
          { image: "/Tag.png", title: "N20,000" },
        ],
        btn: [{ label: "Add to cart" }, { label: "Book Now" }],
        connected: [
          {
            title: "Connect with us on:",
            image: ["/Twitter.png", "/Instagram.png"],
          },
        ],
      },
    ],
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliders = Carousels[currentIndex];
  const { details } = sliders;
  const { detailsTitle, description, sections, btn, connected } = details[0];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Carousels.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === Carousels.length - 1 ? 0 : currentIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="lg:mt-20 mt-16 mb-6">
      <div className="w-[80%] mx-auto">
        <h2 className="font-bold text-[#26395C] font-RedHotDisplay text-3xl lg:text-[42px] lg:leading-10 md:text-start text-center">
          See How People are Chilling On Chillsbay
        </h2>
        <div className=" flex justify-between items-center">
          <div className=" absolute left-0 transform ">
            <button onClick={handlePrev} className="w-[45px] h-[45px]">
              <img src={ChevronLeft} alt="" />
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-6 mt-12">
            {/* left side */}
            <div>
              <h2 className="md:text-3xl text-xl lg:text-start text-center leading-6 md:leading-9 font-RedHotDisplay font-bold text-[#26395C] max-w-2xl mb-3">
                {sliders.title}
              </h2>
              <img
                src={sliders.image}
                alt=""
                className="w-full md:h-auto h-[250px]"
              />
            </div>
            {/* right side */}
            <div className="lg:mt-11 -mt-10 w-full mx-auto">
              <h2 className="lg:max-w-sm max-w-full text-base sm:text-2xl mg:text-[40px] -tracking-[2%] leading-6 sm:leading-10 md:leading-[54px] text-[#26395C] text-center sm:text-start font-bold mb-6 lg:mt-0 mt-5">
                {detailsTitle}
              </h2>
              <p className="lg:max-w-md sm:text-start text-center lg:text-xl text-base lg:leading-7 font-RedHotDisplay text-[#26395C]">
                {description}
              </p>
              <div className="grid grid-cols-2 gap-y-5 gap-x-1 mt-8">
                {sections.map((section, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <img src={section.image} alt="" />
                    <p className="font-RedHotDisplay text-sm md:text-xl text-[#26395C] leading-4 tracking-[5%]">
                      {section.title}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 lg:gap-12">
                {btn.map(({ label }, index) => (
                  <div key={index} className="mt-8">
                    <Button
                      variant={`${
                        label === "Add to cart" ? "bordered" : "solid"
                      }`}
                      color="primary"
                    >
                      {label}
                    </Button>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-6 mt-6">
                {connected.map(({ title, image }, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <p>{title}</p>
                    <div className="flex items-center gap-3">
                      {image.map((source, index) => (
                        <img key={index} src={source} alt="" />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className=" absolute right-0 transform ">
            <button onClick={handleNext} className="w-[45px] h-[45px]">
              <img src={ChevronRight} alt="" />
            </button>
          </div>
        </div>
        {/* dot */}
        <div>
          <div className="flex justify-center items-center gap-3 mt-12">
            {Carousels.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-black" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
