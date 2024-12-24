import { Outlet } from "react-router";

const BlogLayout = () => {
  return (
    <div className="flex justify-center">
      <div className="my-20 w-full max-w-[1200px]">
        <Outlet />
      </div>
    </div>
  );
};

export default BlogLayout;
