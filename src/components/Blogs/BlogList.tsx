import Blogs from "@/stack/blogs";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const BlogList = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const blogsPerPage = 10;
  const totalPages = Math.ceil(Blogs.length / blogsPerPage)
  //Get current blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = [...Blogs]
    .reverse()
    .slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <div className="my-20 flex flex-col items-center">
      <div className="mb-8 max-w-[800px] w-full flex gap-2 justify-end">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="rounded bg-gray-200 px-4 py-2 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2">
          {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="rounded bg-gray-200 px-4 py-2 disabled:opacity-50"
        >
          Next
        </button>
      </div>
      <div className="flex w-[80%] max-w-[800px] flex-col divide-y-2">
        {currentBlogs.map((blog) => {
          return (
            <NavLink key={blog.id} to={`/blogs/${blog.id}`}>
              <div className="my-5 grid grid-cols-3 items-center gap-10 lg:grid-cols-4">
                <div className="h-[124px] overflow-hidden max-sm:hidden">
                  <img
                    src={`/images/blogs/${blog.id}/1.webp`}
                    className="h-[124px] w-full rounded-xl border-4 object-cover object-center"
                  />
                </div>
                <div className="col-span-2 max-sm:col-span-3 lg:col-span-3">
                  <h1 className="mb-5 line-clamp-1 text-2xl font-bold">
                    {blog.title}
                  </h1>
                  <p className="line-clamp-3 text-justify">{blog.summary}</p>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
