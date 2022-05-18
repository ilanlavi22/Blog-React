import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: 'Blog website post 1', body: 'lorem imp post 1', author: 'Mario', id: 1 },
    { title: 'Blog post 2', body: 'lorem imp post 2', author: 'Josh', id: 2 },
    { title: 'Blog post 3', body: 'lorem imp post 3', author: 'Mario', id: 3 }
  ])

  const handleDelete = ((id) => {
    const filteredBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(filteredBlogs);
  })

  useEffect(() => {
    console.log('use effect ran');
  }, []);


  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}></BlogList>
    </div>
  );
}

export default Home;