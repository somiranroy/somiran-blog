const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>This is Somiran blog</h1>
            <div>
                <a href="">Home</a>
                <a href="/create" style={{
                    color:'white',
                    backgroundColor:'#f1356d',
                    borderRadius: '8px'
                }}>Create New Blog</a>
            </div>
        </nav>
      );
}
 
export default Navbar;