import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

// Class Component
// class Navbar extends Component {
//   render() {
//     // This is used to access the context data
//     return (
//       <AuthContext.Consumer>
//         {(authContext) => (
//           // This is used to consume the context of ThemeContext that we created
//           // This is mainly used when we have functional components
//           // Also, this way we can consume multiple contexts
//           <ThemeContext.Consumer>
//             {/* This takes in a context object as a parameter which contains the context state */}
//             {(themeContext) => {
//               const { isAuthenticated, toggleAuth } = authContext;
//               const { isLightTheme, light, dark } = themeContext;
//               const theme = isLightTheme ? light : dark;
//               return (
//                 <nav
//                   style={{
//                     background: theme.ui,
//                     color: theme.syntax,
//                   }}
//                 >
//                   <h1>Context App</h1>
//                   <div onClick={toggleAuth}>
//                     {isAuthenticated ? "Logged In" : "Logged Out"}
//                   </div>
//                   <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                   </ul>
//                 </nav>
//               );
//             }}
//           </ThemeContext.Consumer>
//         )}
//       </AuthContext.Consumer>
//     );
//   }
// }

// Functional Component
const Navbar = () => {
  const {isLightTheme, light, dark} = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  return ( <nav
                  style={{
                    background: theme.ui,
                    color: theme.syntax,
                  }}
                >
                  <h1>Context App</h1>
                  <div onClick={toggleAuth}>
                    {isAuthenticated ? "Logged In" : "Logged Out"}
                  </div>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav> );
}

export default Navbar;
