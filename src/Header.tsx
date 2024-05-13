import { Button } from "./components/ui/button";
const Header = () => {
  return (
    <div className="h-[80vh] flex flex-col items-center justify-center">
      <div className="space-y-8 p-8  text-center">
        <h1 className="text-8xl font-semibold">
          <span className="font-normal">
            Elevate your{"  "}
            <span className="primary ">Digital</span>{" "}
            Journey
          </span>
          <br />
          Innovate, create and captivate
        </h1>
        <p className="text-2xl tracking-wide">
          At launchbunch, we innovate, create, and captivate to empower your
          brand's digital journey. <br /> With dynamic solutions and creative
          prowess, we elevate your online presence.
        </p>
      </div>
      <div className="btns flex gap-5">
        <Button variant={"custom"} size={'lg'}>Get Started</Button>
        <Button variant={"outline"} size={'lg'}>Explore</Button>
      </div>
    </div>
  );
};

export default Header;
