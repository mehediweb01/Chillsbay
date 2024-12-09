import FindPlace from "./Drink-FindPlace";
import RestaurantsCard from "../common/Drink-RestaurantsCard";
import HeroArea from "./DrinkHeroArea";
import Carousel from "./Drink-Carousel";

const DrinkPage = () => {
  return (
    <>
      <div>
        <HeroArea />
        <FindPlace />
        <RestaurantsCard title="Popular restuarants in Lagos" />
        <Carousel />
        <RestaurantsCard title="Resturants nearby" />
      </div>
    </>
  );
};

export default DrinkPage;
