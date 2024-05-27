import { Dribbble, Facebook, Instagram, PinIcon, Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";

const Footer = () => {
  return (
    <div className="h-[60vh] p-8  grid grid-cols-2 justify-items-center  content-center bg-[#263238] text-white">
      <div className="grid-cols-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="text-lg">Copyright &copy; launchbunch 2024</p>
        <p className="text-lg">All rights reserved.</p>
        <div className="socials flex gap-4 py-4">
          <div className="rounded-full p-2 bg-secondary/50">
            <Facebook />
          </div>
          <div className="rounded-full p-2 bg-secondary/50">
            <Dribbble />
          </div>
          <div className="rounded-full p-2 bg-secondary/50">
            <PinIcon />
          </div>
          <div className="rounded-full p-2 bg-secondary/50">
            <Instagram />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3">
        <div>
          <h2 className="font-semibold">Company</h2>
          <ul>
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Pricing</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold">Support</h2>
          <ul>
            <li>Help Center</li>
            <li>Terms of Service</li>
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Status</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold mb-4">Stay up to date</h2>
          <div className="flex gap-2">
            <Input placeholder="your email address" />{" "}
            <Button>
              <Send />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
