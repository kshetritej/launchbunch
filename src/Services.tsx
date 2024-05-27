import CustomCard from "./CustomCard";
import services from "@/data/services.json";

const Services = () => {
  return (
    <>
      <div className="space-y-6 bg-secondary h-[80vh] items-center justify-center ">
        <div className="flex items-center flex-col">
          <h1 className="text-3xl p-4 font-bold">Services Overview</h1>
          <p>we provide custom digital solutions to help your brand thrive</p>
        </div>
        <div className=" grid  grid-cols-3 gap-12  justify-items-center  ">
          {services.map((service) => (
            <CustomCard
              key={service.name}
              title={service.name}
              icon={service.icon}
              desc={service.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
