import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: 'Blog website post 1', body: 'lorem imp post 1', author: 'Mario', id: 1 },
    { title: 'Blog post 2', body: 'lorem imp post 2', author: 'Josh', id: 2 },
    { title: 'Blog post 3', body: 'lorem imp post 3', author: 'Mario', id: 3 }
  ])

  const authorFilter = blogs.filter(function (blog) {
    return blog.author === 'Mario';
  });

  const wordIncludes = blogs.filter(function (blog) {
    return blog.title.includes('website');
  });



  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs"></BlogList>
      <BlogList blogs={blogs.filter((blog) => blog.author === 'Mario')} title='FilterByAuthor'></BlogList>
      <BlogList blogs={blogs.filter((blog) => blog.title.includes('2'))} title='FilterByTitle'></BlogList>

      <BlogList blogs={authorFilter} title='Filter By Author'></BlogList>
      <BlogList blogs={wordIncludes} title='Filter By title'></BlogList>
    </div >
  );
}

export default Home;