import React from "react";
import Title from "../home/Title";
import { blogImgOne, blogImgTwo, blogImgThree } from "../../assets/";
import { blogImgFour } from "../../assets/";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div>
      <Title title="Latest" subTitle="Posts" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <BlogCard
            image={blogImgOne}
            title="May 24, 2023"
            subTitle="1st Live Concert Experience"
            category="Entertainment"
          />
          <BlogCard
            image={blogImgTwo}
            title="December 28, 20231"
            subTitle="Nahi Milta Cover Song"
            category="Music"
          />
        </div>
        <div className="px-6">
          <BlogCard
            image={blogImgThree}
            title="Jan 03, 2023"
            subTitle="My 1st Vlog On YouTube"
            category="Vlog & Entertainment"
          />
          <BlogCard
            image={blogImgFour}
            title="Jan 14, 2023"
            subTitle="My Cameraman Works With 0 Salary"
            category="Entertainment"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
