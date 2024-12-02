const ThingsTodo = () => {
  const cards = [
    { image: "/Image5.png", title: "Sight Seeing" },
    { image: "/Image6.png", title: "Volley Ball Game" },
    { image: "/Image7.png", title: "Wizkid Show" },
    { image: "/Image7.png", title: "Wizkid Show" },
    { image: "/Image5.png", title: "Sight Seeing" },
    { image: "/Image6.png", title: "Volley Ball Game" },
    { image: "/Image7.png", title: "Wizkid Show" },
    { image: "/Image7.png", title: "Wizkid Show" },
  ];
  return (
    <section className="bg-[#F5FAFF] mt-12">
      <div className="lg:container w-[80%] mx-auto">
        <h2 className="font-RedHotDisplay font-bold text-[#26395C] text-3xl leading-10 lg:leading-[54px] text-center sm:text-start">
          Top things to do in Lagos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
          {cards.map((info, index) => (
            <div key={index}>
              <img
                className="sm:w-[295px] sm:h-[270px] w-full h-auto rounded-xl"
                src={info.image}
                alt=""
              />
              <div className="text-center mt-2 mb-4">
                <h3 className="font-RedHotDisplay font-bold text-[#26395C] text-2xl leading-7 -tracking-[1%]">
                  {info.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThingsTodo;
