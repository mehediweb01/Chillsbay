import RestaurantsCard from "../common/RestaurantsCard";
import Hero from "./Hero";

const ClubPage = () => {
  return (
    <>
      <Hero />
      <RestaurantsCard
        isDark
        api={"/clubData.json"}
        title={"Popular Night Clubs"}
      />
    </>
  );
};

export default ClubPage;
