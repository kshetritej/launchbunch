import { Button } from "./components/ui/button";

const LevelUp = () => {
  return (
    <div className="bg-secondary p-12 flex flex-col items-center text-center space-y-8">
      <h2 className="flex flex-col text-4xl font-semibold">
        Want to know what's the process <br /> behind your success?
      </h2>
      <div>
        <Button variant={"custom"} size={'lg'} >
          Get a Demo
        </Button>
      </div>
    </div>
  );
};

export default LevelUp;
