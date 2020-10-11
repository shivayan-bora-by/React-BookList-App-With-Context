import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';

class Navbar extends Component {
    // Used to consume context data
    // We need to specify whatever context we want to consume inside this component
    // This will look up the component tree and the first time it finds a provider for the mentioned context and then it will have access to the data specified in the context.
    static contextType = ThemeContext;
    render() { 
        // This is used to access the context data
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return ( 
            <nav style={{
                background: theme.ui,
                color: theme.syntax,
            }}>
                <h1>Context App</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
         );
    }
}
 
export default Navbar;