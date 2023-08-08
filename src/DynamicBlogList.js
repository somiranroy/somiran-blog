    const DynamicBlogList = ({blogs, title, deleteBlog}) => {       // This is called destructuring ... take the value blogs out of props.
        return ( 
            <div className = "blog-list">
                <h2>{title}</h2>
                {
                    blogs.map( (blog) => (
                        <div className="blog-preview" key={blog.id}>
                            <h2>{blog.title}</h2>
                            <p>This is written by: {blog.author}</p>
                        </div>
                    ))
                }
            </div> 
     );
    }
     
    export default DynamicBlogList;