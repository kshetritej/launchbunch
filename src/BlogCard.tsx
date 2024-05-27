import {
  Card,
  CardDescription,
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
          <Badge
            variant="secondary"
            className="bg-secondary absolute top-5 left-5"
          >
            Marketing
          </Badge>
        <CardHeader className="p-16 "></CardHeader>
        <div className=" flex flex-col">
          <div className="flex text-left">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-left px-2 tracking-tight">
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
        </div>
      </Card>
    </div>
  );
};

export default BlogCard;
