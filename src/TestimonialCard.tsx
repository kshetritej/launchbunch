import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Badge } from "./components/ui/badge";

const TestimonialCard = () => {
  return (
    <div className="flex w-[320px] flex-col text-left space-y-3 bg-secondary p-8">
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias reiciendis earum accusantium aspernatur laborum deleniti, iusto accusamus quidem. Cum, voluptatem dolor?</p>
      <div className="flex ">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="text-left px-2 tracking-tight">
          <p className="font-semibold">Author</p>
          <p>COO, X BRAND</p>
        </div>
        <div className="stars">
            <Badge variant="outline" className="bg-secondary">⭐️⭐️⭐️⭐️⭐️</Badge>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
