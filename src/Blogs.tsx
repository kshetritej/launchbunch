import BlogCard from "./BlogCard";
const Blogs = () => {
  return (
    <div className="text-center p-8 bg-secondary">
      <h2 className="text-3xl font-semibold">Blogs</h2>
      <p>
        Explore our curated articles for the latest trends, expert insights, and
        valuable tech tips to navigate innovation.
      </p>

      <div className="flex justify-center  cards mt-4 gap-4">
        <div className="highlighted-blog ">
          <div className="blog">
            <BlogCard cardWidth={"360px"} />
          </div>
        </div>

        <div className="secondary-blogs flex flex-col gap-2">
          <BlogCard cardWidth={"320px"} />
          <BlogCard cardWidth={"320px"} />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
