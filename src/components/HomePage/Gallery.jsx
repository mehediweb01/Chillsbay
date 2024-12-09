const Gallery = () => {
  const galleries = [
    { image: "g1.png" },
    { image: "g2.png" },
    { image: "g3.png" },
    { image: "g4.png" },
    { image: "g5.png" },
    { image: "g6.png" },
  ];
  return (
    <section className="lg:mt-12 mt-8 p-4 border border-slate-200">
      <div className="w-[80%] mx-auto">
        <h2 className="text-[#26395C] font-bold font-RedHotDisplay lg:text-2xl text-xl leading-5 lg:leading-8 -tracking-[2%] md:text-start text-center">
          See How people are chilling on
          <span className="text-blue-500"> Chillsbay</span>
        </h2>
        <div className="mt-6 grid md:grid-cols-4 lg:grid-cols-6 md:space-y-0 space-y-3">
          {galleries.map(({ image }, index) => (
            <div key={index}>
              <img
                src={image}
                alt=""
                className="w-full md:rounded-none rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
