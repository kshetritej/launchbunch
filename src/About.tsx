import { Button } from "./components/ui/button";

const About = () => {
  return (
    <div className="container flex gap-2 text-center justify-center items-center h-[60vh]">
      <div className="who-are-we   text-left space-y-6">
        <h2 className="text-5xl font-semibold ">Who are we?</h2>
        <p className=" text-xl  tracking-wide w-[60%]">
          LaunchBunch, we're a dynamic team driven by innovation and creativity. With expertise in IT and marketing, we're dedicated to helping businesses thrive in the digital landscape. Our transparent approach and commitment to excellence ensure that we deliver results that exceed expectations. <b>Ready to elevate your brand? Let's get started.</b>
        </p>
        <Button variant={'custom'}>Get Started</Button>
      </div>

      <div className="imag">
        <img
          src="src/assets/img/undraw_social_dashboard_re_ocbd.svg"
          alt="image"
          className="w-100 p-4"
         
        />
      </div>
    </div>
  );
};

export default About;
