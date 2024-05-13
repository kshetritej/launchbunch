import { Link, Navigate } from "react-router-dom";
import { Button } from "./components/ui/button";

const Navbar = () => {
  const navItems = ["Home", "About", "Services", "Blogs", "Work", "FAQs"];
  return (
    <div className="flex justify-around shadow-sm p-4 place-items-center">
      <div className="logo font-bold text-3xl ">LaunchBunch</div>
      <ul className="flex gap-4 ">
        {navItems.map((item) => (
          <li key={item}>
            <Link to={"/"+item.toLowerCase()}>{item}</Link>
          </li>
        ))}
      </ul>

      <Button variant={'custom'} size={'lg'}>Contact</Button>
    </div>
  );
};

export default Navbar;
