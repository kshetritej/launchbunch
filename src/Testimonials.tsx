import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-semibold">Testimonials</h2>
      <p>Don't take our word for it. Over 100+ people trust us.</p>
      <div className="flex gap-4 justify-center my-4">

      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
      </div>
    </div>
  );
};

export default Testimonials;
