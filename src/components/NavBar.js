import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";

class Navbar extends Component {
  render() {
    // This is used to access the context data
    return (
        // This is used to consume the context of ThemeContext that we created
        // This is mainly used when we have functional components
        // Also, this way we can consume multiple contexts
        <ThemeContext.Consumer>
        {/* This takes in a context object as a parameter which contains the context state */}
        {(context) => {
          const { isLightTheme, light, dark } = context;
          const theme = isLightTheme ? light : dark;
          return (
            <nav
              style={{
                background: theme.ui,
                color: theme.syntax,
              }}
            >
              <h1>Context App</h1>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Navbar;
