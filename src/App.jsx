import "./App.css";
import { Button } from "@nextui-org/button";

function App() {
  return (
    <>
      <div>
        <h1 className="text-center font-bold bg-gray-600 text-white text-4xl py-2">
          welcome to my chillsBay website
        </h1>
        <div className="flex justify-center mt-5">
          <Button variant="solid" color="danger" size="md">
            click me
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
