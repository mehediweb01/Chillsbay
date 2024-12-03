const cardsInfo = [
  {
    image: "/checkout.png",
    title: "Your  entire  trip in one checkout!",
    des: "Add multiple experiences to your cart and checkout on one click.",
  },
  {
    image: "/pay.png",
    title: "Pay with Crypto on the go",
    des: "Enjoy the freedom of universal payments for a seamless marketplace experience",
  },
  {
    image: "/ticketTransfer.png",
    title: "Free Cancellation and ticket transfer",
    des: "Resell your tickets or cancel your reservations at zero cost 24 hours before.",
  },
];
const ChillsBayArea = () => {
  return (
    <section className="mt-12 mb-6">
      <div className="lg:container w-[80%] mx-auto">
        <h1 className="font-bold text-3xl lg:text-[42px] font-RedHotDisplay leading-7 lg:leading-10 text-[#26395C] text-center mb-3">
          Why Use Chillsbay?
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 shadow-2xl py-6 px-4 rounded-lg">
          {cardsInfo.map((info, index) => (
            <div key={index} className="mt-10">
              <img className="w-fit mx-auto" src={info.image} alt="" />
              <div className="w-[80%] mx-auto text-center space-y-3">
                <h3 className="w-[87%] mx-auto  font-bold text-[32px] leading-[38px] font-RedHotDisplay">
                  {info.title}
                </h3>
                <p className="w-full font-RedHotDisplay text-2xl ">
                  {info.des}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChillsBayArea;
