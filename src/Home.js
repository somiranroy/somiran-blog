import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title:'First Blog', detail:'This is my first Blog. Enjoying...', author:'Somiran Roy', id: 1},
        {title:'Second Blog', detail:'This is my second blog. I am enjoying too', author:'Viji Roy', id: 2},
        {title:'Third Blog', detail:'This is my third blog and boy what a great it is', author:'Tanishi Roy', id: 3},
    ]);

    const deleteBlog = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id != id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log("Data Refreshed");
    })
    // },[])  -> Use this second argument to input dependencies... like [valriable name]

    return (
        <div className="home">
            <BlogList blogs={blogs} title={"Recent Blogs"} deleteBlog={deleteBlog} ></BlogList>
            <BlogList blogs={blogs.filter( (blog) => blog.id < 3) } title={"Old Blogs"} deleteBlog = {deleteBlog}></BlogList>
        

        </div>
      );
}
 
export default Home;