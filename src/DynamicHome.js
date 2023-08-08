import { useState, useEffect } from "react";
import DynamicBlogList from "./DynamicBlogList";

const DynamicHome = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const deleteBlog = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id != id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        setTimeout( () => {
            fetch("http://localhost:8000/blogs")
            .then( (res) => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
            });
        console.log("Data Refreshed");
        }, 2000)
    },[]);   // Empty dependency means loaded only when the page is reloaded.

    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {blogs && <DynamicBlogList blogs={blogs} title={"Recent Blogs"} deleteBlog={deleteBlog} ></DynamicBlogList>}
        </div>
      );
}
 
export default DynamicHome;