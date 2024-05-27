import Clients from "./Clients";
import { Button } from "./components/ui/button";

const Header = () => {
  return (
    <div>
      <div className="flex justify-around container h-[60vh] items-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold">
            Elevate your Digital Journey: <br />
            Innovate, Create and Captivate{" "}
          </h1>

          <p className="text-xl w-85">
            At launchbunch, we innovate, create, and captivate to empower your
            brand's digital journey. With dynamic solutions and creative
            prowess, we elevate your online presence.{" "}
          </p>

          <div className="btn-group flex gap-5">
            <Button variant={"custom"}>Get Started </Button>
            <Button variant={"outline"}>Explore </Button>
          </div>
        </div>

        <div className="image-placeholder w-100 p-4">
          <img
            src="src/assets/img/undraw_social_dashboard_re_ocbd.svg"
            alt="image"
          />
        </div>
      </div>
      <div className="clients">
        <Clients />
      </div>
    </div>
  );
};

export default Header;
