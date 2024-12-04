import Hero from "./Hero";
import ImageCard from "./ImageCard";
import ThingsTodo from "./ThingsTodo";
import ChillsBayArea from "./ChillsBay";
import Carousel from "./Carousel";
import Gallery from "./Gallery";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <ImageCard />
      <ThingsTodo />
      <ChillsBayArea />
      <Carousel />
      <Gallery />
    </div>
  );
};

export default HomePage;
