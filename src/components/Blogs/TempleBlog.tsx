import Blog1 from "@/blogs/Blog1";
import Blog10 from "@/blogs/Blog10";
import Blog11 from "@/blogs/Blog11";
import Blog12 from "@/blogs/Blog12";
import Blog13 from "@/blogs/Blog13";
import Blog14 from "@/blogs/Blog14";
import Blog15 from "@/blogs/Blog15";
import Blog16 from "@/blogs/Blog16";
import Blog2 from "@/blogs/Blog2";
import Blog3 from "@/blogs/Blog3";
import Blog4 from "@/blogs/Blog4";
import Blog5 from "@/blogs/Blog5";
import Blog6 from "@/blogs/Blog6";
import Blog7 from "@/blogs/Blog7";
import Blog8 from "@/blogs/Blog8";
import Blog9 from "@/blogs/Blog9";
import { Navigate, useParams } from "react-router";

const TempleBlog = () => {
  const { blogId = "" } = useParams();

  const blogs: Record<string, JSX.Element> = {
    "1": <Blog1 />,
    "2": <Blog2 />,
    "3": <Blog3 />,
    "4": <Blog4 />,
    "5": <Blog5 />,
    "6": <Blog6 />,
    "7": <Blog7 />,
    "8": <Blog8 />,
    "9": <Blog9 />,
    "10": <Blog10 />,
    "11": <Blog11 />,
    "12": <Blog12 />,
    "13": <Blog13 />,
    "14": <Blog14 />,
    "15": <Blog15 />,
    "16": <Blog16 />,
  };

  return blogs[blogId] || <Navigate to="/blogs" replace />;
};

export default TempleBlog;
