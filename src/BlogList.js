//const BlogList = (props) => {
const BlogList = ({blogs, title, deleteBlog}) => {       // This is called destructuring ... take the value blogs out of props.

    // const blogs = props.blogs;     // Incase we are using props.
    // console.log(props, blogs);

    return ( 
        <div className = "blog-list">
            <h2>{title}</h2>
            {
                blogs.map( (blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>This is written by: {blog.author}</p>
                        <button onClick={() => deleteBlog(blog.id)}>Delete Blog</button>
                    </div>
                ))
            }
        </div> 
 );
}
 
export default BlogList;