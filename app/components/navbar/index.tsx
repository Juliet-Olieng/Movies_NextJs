// 'use Client';
// import { useState } from "react";
// import Link from "next/link";

// const Navbar = ({ onFilter }) => {
//   const [query, setQuery] = useState("");

//   const onSearch = (e) => {
//     setQuery(e.target.value);
//     onFilter(e.target.value);
//   };

//   // Define inline styles as JavaScript objects
//   const headingStyle = {
//     color: "blue",
//     fontSize: "24px",
//   };

//   const searchInputStyle = {
//     width: "200px",
//     padding: "8px",
//     border: "1px solid #ccc",
//     borderRadius: "4px",
//   };

//   return (
//     <div>
//       <div>
//         <h4 style={headingStyle}>
//           <Link href="/">
//             <a>
//               M<span>oo</span>vie
//             </a>
//           </Link>
//         </h4>
//         <label htmlFor="search">
//           <input
//             type="search"
//             name="search-form"
//             id="search-form"
//             style={searchInputStyle}
//             placeholder="Search for movies..."
//             value={query}
//             onChange={onSearch}
//           />
//         </label>
//         <ul>
//           <li>
//             <Link href="/">
//               <a>Home</a>
//             </Link>
//           </li>
//         </ul>
//         <h4>My list</h4>
//         <button>Sign in</button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
