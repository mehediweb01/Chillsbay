import { Button } from "@nextui-org/react";

const Hero = () => {
  return (
    <section className="bg-[url('/club-hero-bg.png')] bg-no-repeat bg-cover w-full h-[90vh] p-6">
      <div className="bg-[#000000]/60 w-fit ms-2 sm:ms-20 mt-2 sm:mt-16 px-8 py-6 space-y-3 rounded-lg">
        <h1 className="font-bold font-RedHotDisplay text-center md:text-start text-[#F5FAFF] text-3xl md:text-[42px] leading-10 md:leading-[54px] -tracking-[2%]">
          Club Quilox
        </h1>
        <p className="font-bold font-RedHotDisplay text-center md:text-start text-[#F5FAFF] text-2xl md:text-[32px] leading-6 md:leading-[38px]">
          Amaarae & Tems on June 3rd
        </p>
        <div className="flex justify-center md:justify-end">
          <Button
            variant="solid"
            color="primary"
            className="text-[15px] leading-4 -tracking-[1%] font-bold text-white"
          >
            Book A Section Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
