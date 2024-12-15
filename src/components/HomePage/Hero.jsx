import { Autocomplete, AutocompleteItem, Button } from "@nextui-org/react";
const Hero = () => {
  return (
    <section className="bg-[url('/hero.png')] w-full py-14 bg-no-repeat bg-cover bg-center mt-4 overflow-hidden mx-auto">
      <div className="mt-10 w-[80%] mx-auto">
        <h1 className="text-white font-bold text-3xl lg:text-[62px] leading-10 lg:leading-[74px] lg:w-[60%] w-full text-center lg:text-start  font-RedHotDisplay">
          Find amazing things to do anytime, anywhere in Lagos.
        </h1>

        <div className="bg-[#FBFCFF] w-[80%] lg:mx-0 mx-auto lg:w-[726px] h-auto rounded-lg mt-5 px-4 md:px-8 py-7">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
            <div>
              <Autocomplete
                placeholder="Oshodi"
                label="Location"
                labelPlacement="outside"
                variant="bordered"
                className="text-black border-slate-400 w-[100%]"
              >
                <AutocompleteItem value="Oshodi">Oshodi</AutocompleteItem>
                <AutocompleteItem value="new file">new file</AutocompleteItem>
              </Autocomplete>
            </div>
            <div>
              <Autocomplete
                placeholder="Date"
                label="Date"
                labelPlacement="outside"
                variant="bordered"
                className="text-black border-slate-400 w-[100%]"
              >
                <AutocompleteItem value="Date">Date</AutocompleteItem>
                <AutocompleteItem value="new file">new file</AutocompleteItem>
              </Autocomplete>
            </div>
            <div>
              <Autocomplete
                placeholder="Night Clubs"
                label="Activities"
                labelPlacement="outside"
                variant="bordered"
                className="text-black border-slate-400 w-[100%]"
              >
                <AutocompleteItem value="Night Clubs">
                  Night Clubs
                </AutocompleteItem>
                <AutocompleteItem value="new file">new file</AutocompleteItem>
              </Autocomplete>
            </div>
            <div>
              <Button
                variant="solid"
                color="primary"
                size="lg"
                className="lg:mt-4 w-[100%]"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
