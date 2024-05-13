import { Card, CardDescription, CardTitle , CardFooter} from "@/components/ui/card";
import { Button } from "./components/ui/button";
type CustomCardProps = {
  title: string;
  icon: any;
  desc: string;
};
const CustomCard = ({ title, icon, desc }: CustomCardProps) => {
  return (
    <div className="hover:cursor-pointer hover:zoom-in-75">
      <Card className="w-[320px] p-4 flex items-center justify-center  flex-col relative shadow-md shadow-ring  ">
        <CardTitle className="text-lg">{title}</CardTitle>
        <img src={icon} className="w-[100px] m-4" alt={title} />
        <div className="w-[40px] bg-primary p-4 opacity-40 rounded-full absolute left-[40%] top-20"></div>
        <CardDescription className="text-center">{desc}</CardDescription>
        <CardFooter className="p-4">
          <Button variant={'custom'} size={'sm'} className="rounded-full">-----{">"}</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CustomCard;
