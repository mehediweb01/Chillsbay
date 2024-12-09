import {
  Autocomplete,
  AutocompleteItem,
  Button,
  DatePicker,
} from "@nextui-org/react";
const FindPlace = () => {
  return (
    <section className="w-[85%] mx-auto py-5">
      <h1 className="font-bold font-RedHotDisplay text-center sm:text-start text-[#26395C] text-xl sm:text-[28px] leading-9 sm:leading-[48px] -tracking-[2%]">
        Find the best places to eat and drink for any occasion
      </h1>
      <div className="bg-[#FBFCFF] rounded-lg py-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-10">
          <div>
            <Autocomplete
              placeholder="Oshodi, VI"
              label="Location"
              labelPlacement="outside"
              variant="bordered"
              className="text-black border-slate-400 w-[100%]"
            >
              <AutocompleteItem value="Oshodi, VI">Oshodi, VI</AutocompleteItem>
              <AutocompleteItem value="new file">new file</AutocompleteItem>
            </Autocomplete>
          </div>
          <div>
            <DatePicker
              className="text-black border-slate-400 w-[100%]"
              variant="bordered"
              labelPlacement="outside"
              label="Date"
            />
          </div>
          <div>
            <DatePicker
              hideTimeZone={false}
              label="Time"
              labelPlacement="outside"
              variant="bordered"
              hourCycle="12"
              granularity="minute"
              className="text-black border-slate-400 w-[100%]"
            />
          </div>
          <div>
            <Autocomplete
              placeholder="Chinese"
              label="Cuisine"
              labelPlacement="outside"
              variant="bordered"
              className="text-black border-slate-400 w-[100%]"
            >
              <AutocompleteItem value="Chinese">Chinese</AutocompleteItem>
              <AutocompleteItem value="new file">new file</AutocompleteItem>
            </Autocomplete>
          </div>
          <div>
            <Autocomplete
              placeholder="2"
              label="People"
              labelPlacement="outside"
              variant="bordered"
              className="text-black border-slate-400 w-[100%]"
            >
              <AutocompleteItem value="2">2</AutocompleteItem>
              <AutocompleteItem value="5">5</AutocompleteItem>
              <AutocompleteItem value="8">8</AutocompleteItem>
              <AutocompleteItem value="12">12</AutocompleteItem>
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
    </section>
  );
};

export default FindPlace;
