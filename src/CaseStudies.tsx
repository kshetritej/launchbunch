import { Button } from "./components/ui/button";

const CaseStudies = () => {
  return (
    <div className="bg-primary space-y-5 text-white  pl-20  h-[80vh] grid grid-cols-2 items-center">
      <div>
        <h2 className="text-3xl font-semibold">Case studies</h2>
        <p className="text-lg w-[90%]">
          Explore our transformative projects, epitomizing excellence and
          innovation, exceeding client expectations.
        </p>
        <div className="flex">
          <div className="flex flex-col items-center p-4 gap-2">
            <h3 className="text-3xl font-semibold">50+</h3>
            <p>No. of Clients</p>
          </div>
          <div className="flex flex-col items-center p-4 gap-2">
            <h3 className="text-3xl font-semibold">20+</h3>
            <p>Web Projects</p>
          </div>
          <div className="flex flex-col items-center p-4 gap-2">
            <h3 className="text-3xl font-semibold">30+</h3>
            <p>Marketing Project</p>
          </div>
        </div>
        <Button variant={"custom"} className="text-black">View Case Studies</Button>
      </div>
      <div></div>
    </div>
  );
};

export default CaseStudies;
