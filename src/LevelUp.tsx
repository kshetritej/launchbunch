import { Button } from "./components/ui/button";

const LevelUp = () => {
  return (
    <div className="bg-secondary p-8 flex flex-col items-center text-center space-y-10">
      <h2 className="flex flex-col text-9xl">
        Level <br /> <span className="text-primary font-bold">Up</span>
      </h2>
      <p className="text-3xl ">
        When you take actions, <br />
        you will be amaxxxed what <br />
        one can achieve!
      </p>
      <div className="btn-group flex flex-col w-[100%] items-center gap-4">
        <Button variant={"custom"} size={"lg"} className="w-[50%]">
          Get Started
        </Button>
        <Button variant={"default"} size={"lg"} className="w-[50%]">
          Get a Demo
        </Button>
      </div>
    </div>
  );
};

export default LevelUp;
