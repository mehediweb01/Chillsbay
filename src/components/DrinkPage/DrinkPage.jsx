import FindPlace from "./Drink-FindPlace";
import RestaurantsCard from "../common/Drink-RestaurantsCard";
import HeroArea from "./DrinkHeroArea";
import Carousel from "./Drink-Carousel";
import Map from "./Drink-Map";

const DrinkPage = () => {
  return (
    <>
      <div>
        <HeroArea />
        <FindPlace />
        <RestaurantsCard title="Popular restuarants in Lagos" />
        <Carousel />
        <RestaurantsCard title="Resturants nearby" />
        <Map />
      </div>
    </>
  );
};

export default DrinkPage;
