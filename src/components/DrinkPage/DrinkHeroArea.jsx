import { Button } from "@nextui-org/react";
const HeroArea = () => {
  return (
    <section className="bg-[url('/drink-hero-bg.png')] bg-no-repeat bg-top lg:h-[70vh] h-[100vh] w-full my-6">
      <div className="flex flex-col justify-start md:items-start items-center lg:py-[100px] pt-6 p-4 w-[80%] mx-auto">
        <div className="flex flex-col gap-3 bg-[#FBFCFF] p-[18px] rounded-lg container w-full max-w-[330px] md:max-w-[600px] py-[30px] ">
          <h1 className="font-RedHotDisplay text-3xl sm:text-[42px] font-bold text-[#26395C]">
            Our top pick for the week!
          </h1>
          <h4 className="font-bold font-RedHotDisplay text-2xl sm:text-[32px] text-[#26395C] sm:leading-10 leading-6 ">
            Nok by Alara
          </h4>
          <p className="font-RedHotDisplay text-[20px] text-[#26395C] leading-7 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor .
          </p>

          <div className="flex sm:justify-end justify-center items-center">
            <Button
              variant="solid"
              color="primary"
              type="button"
              className="w-fit font-bold text-[15px] leading-4 -tracking-[1%] font-RedHotDisplay text-center px-6 py-2"
            >
              Reserve Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroArea;
