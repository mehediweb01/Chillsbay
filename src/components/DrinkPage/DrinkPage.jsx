import FindPlace from "./Drink-FindPlace";
import RestaurantsCard from "../common/RestaurantsCard";
import HeroArea from "./DrinkHeroArea";
import Carousel from "./Drink-Carousel";
import Map from "./Drink-Map";

const DrinkPage = () => {
  return (
    <>
      <div>
        <HeroArea />
        <FindPlace />
        <RestaurantsCard
          api="/data.json"
          title="Popular restuarants in Lagos"
        />
        <Carousel />
        <RestaurantsCard title="Resturants nearby" api={"/data.json"} />
        <Map />
      </div>
    </>
  );
};

export default DrinkPage;
