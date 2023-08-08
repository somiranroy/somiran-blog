const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>This is Somiran blog</h1>
            <div>
                <a href="">Home</a>
                <a href="/create" style={{    // One brace to say, we have dynamic content and the other to import json data
                    color:'white',
                    backgroundColor:'#f1356d',
                    borderRadius: '8px'
                }}>Create New Blog</a>
            </div>
        </nav>
      );
}
 
export default Navbar;