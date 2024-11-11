import React from "react";
import Title from "../home/Title";
import {
  blogImgTwo,
  blogImgFour,
  blogImgOne,
  blogImgThree,
} from "../../assets/";

import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div>
      <Title title="Latest" subTitle="Posts" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <a
            href="https://youtu.be/PjQ2YSvC95E?si=u7ngtUMMLYRWMutg"
            target="_blank"
          >
            <BlogCard
              image={blogImgOne}
              title="Sep 21, 2023"
              subTitle="Why Exams?"
              category="Education & Documentary"
            />
          </a>
          <a
            href="https://youtu.be/86LX4gFbi0E?si=XoIkRC4xL2_Lnwyx"
            target="_blank"
          >
            <BlogCard
              image={blogImgTwo}
              title="December 28, 20231"
              subTitle="Experiencing Darsan's magic"
              category="Vlog & Entertainment"
            />
          </a>
        </div>
        <div className="px-6">
          <a
            href="https://youtu.be/R7NHeoM5Ou0?si=7Gyc7F3R1c6p34fa"
            target="_blank"
          >
            <BlogCard
              image={blogImgThree}
              title="July 17, 2024"
              subTitle="Education Trap?"
              category="Education & Documentary"
            />
          </a>
          <a
            href="https://youtu.be/_UnVDlBb8MM?si=Eu-3nkYQkAutfu1u"
            target="_blank"
          >
            <BlogCard
              image={blogImgFour}
              title="Jan 03, 2023"
              subTitle="My 1st ever vlog on Youtube"
              category="Entertainment"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
