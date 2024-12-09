const ImageCard = () => {
  const cards = [
    { image: "/Image1.png", title: "Eat & Drink" },
    { image: "/Image2.png", title: "Events" },
    { image: "/Image3.png", title: "Club" },
    { image: "/Image4.png", title: "Things to do" },
  ];
  return (
    <section className="mx-auto w-[80%]">
      <div className="mt-12">
        <h2 className="font-RedHotDisplay font-bold text-3xl lg:text-[42px] leading-10 lg:leading-[54px] -tracking-[2%] text-center mt-10 mb-5 text-[#26395C]">
          What are you in the mood for?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((cardInfo, index) => (
            <div key={index}>
              <img
                className="w-full h-[500px] lg:h-[650px]"
                src={cardInfo.image}
                alt={cardInfo.title}
              />
              <div className="mt-2 mb-6">
                <h3 className="text-[#26395C] font-bold font-RedHotDisplay text-center text-3xl leading-9">
                  {cardInfo.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCard;
