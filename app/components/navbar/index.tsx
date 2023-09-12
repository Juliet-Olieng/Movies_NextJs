import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [query, setQuery] = useState("");

  const onSearch = (e) => {
    setQuery(e.target.value);
 
  };

  const headingStyle = {
    color: "blue",
    fontSize: "24px",
    textDecoration: "none", 
  };

  const searchInputStyle = {
    width: "400px",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px", 
  };

  const ulStyle = {
    listStyleType: "none", 
    padding: "0",
  };
  const navBarStyle={
    display:"flex",
    gap:"50px",
    padding:"1%"

  }

  return (
    <div>
      <div style={navBarStyle}>
        <h4 style={headingStyle}>
          <Link href="/">
            
              M<span style={{ color: "red" }}>oo</span>vie
          
          </Link>
        </h4>
        <label htmlFor="search">
          <input
            type="search"
            name="search-form"
            id="search-form"
            style={searchInputStyle}
            placeholder="Search for movies..."
            value={query}
            onChange={onSearch}
          />
        </label>
        <ul style={ulStyle}>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
        </ul>
        <h4>My list</h4>
        <button style={{ backgroundColor: "green", color: "white" ,padding:"20px",borderRadius:"20px"}}>
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
