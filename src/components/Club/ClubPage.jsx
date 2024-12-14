import Carousel from "../common/Carousel";
import RestaurantsCard from "../common/RestaurantsCard";
import Hero from "./Hero";

const ClubPage = () => {
  return (
    <>
      <Hero />
      <RestaurantsCard
        isDark
        api={"/clubData.json"}
        title="Popular Night Clubs"
      />
      <Carousel isDark />
      <RestaurantsCard
        isDark
        api={"/clubData.json"}
        title="Bars and Night clubs near you"
      />
    </>
  );
};

export default ClubPage;
