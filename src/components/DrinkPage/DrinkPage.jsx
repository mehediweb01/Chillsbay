import FindPlace from "./Drink-FindPlace";
import RestaurantsCard from "../common/RestaurantsCard";
import HeroArea from "./DrinkHeroArea";
import Carousel from "../common/Carousel";
import MyMap from "../common/Map";

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
        <MyMap />
      </div>
    </>
  );
};

export default DrinkPage;
