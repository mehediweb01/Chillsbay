import FindPlace from "./Drink-FindPlace";
import RestaurantsCard from "../common/Drink-RestaurantsCard";
import HeroArea from "./DrinkHeroArea";

const DrinkPage = () => {
  return (
    <>
      <div>
        <HeroArea />
        <FindPlace />
        <RestaurantsCard title="Popular restuarants in Lagos" />
      </div>
    </>
  );
};

export default DrinkPage;
