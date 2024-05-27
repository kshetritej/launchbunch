import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const BlogCard = ({ cardWidth }) => {
  return (
    <div>
      <Card
        className={`w-[${cardWidth}] p-4 flex text-left flex-col relative shadow-md bg-[url(src/assets/img/blogimage.webp)] backdrop-blur-lg bg-cover text-white`}
      >
        <CardHeader></CardHeader>
        <CardFooter className=" flex flex-col">
          <div className="flex text-left">
            <Badge variant="secondary" className="bg-secondary absolute top-5 left-5" >Marketing</Badge>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-left mx-2">
              <p className="font-semibold">Author</p>
              <p>Read Time</p>
            </div>
          </div>

          <CardTitle className="text-lg">
            Mastering Personalized Marketing: Boosting engagement in the digital
            sphere.
          </CardTitle>
          <CardDescription>
            Discover how personalized digital marketing strategies can elevate
            engagement levels and drive conversions like never before.
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BlogCard;
