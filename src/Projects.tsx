import { Button } from "./components/ui/button";

const Projects = () => {
  return (
    <div className=" p-8  h-[60vh] flex flex-col items-center justify-center">
      <div className="copy">
        <p className="text-3xl ">
          LaunchBunch has been passionate about serving clients 
          <b> exceeding exceptations</b>.
        </p>
      </div>

      <div className="stats flex gap-5">
        <div className="p-8 flex flex-col items-center">
          <div className="text-8xl font-semibold ">
            5<span className="font-normal text-primary ">0</span>
            <span className="font-thin">+</span>
          </div>
          <p className="opacity-85">Clients</p>
        </div>

        <div className="p-8 flex flex-col items-center">
          <div className="text-8xl font-semibold ">
            2<span className="font-normal text-primary ">0</span>
            <span className="font-thin">+</span>
          </div>
          <p className="opacity-85">Web Projects</p>
        </div>

        <div className="p-8 flex flex-col items-center">
          <div className="text-8xl font-semibold">
            2<span className="font-normal text-primary">5</span>
            <span className="font-thin">+</span>
          </div>
          <p className="opacity-85">Marketing Projects</p>
        </div>
      </div>
      <Button variant={'custom'} size={'lg'}>Explore Details</Button>
    </div>
  );
};

export default Projects;
