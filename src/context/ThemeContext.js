import React, {createContext, Component} from 'react';

// Creates a context for us
export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    // Global state
    state = { 
        isLightTheme: true,        
        light: {
            syntax: '#555',
            ui: '#ddd',
            bg: '#eee'
        },
        dark: {
            syntax: '#ddd',
            ui: '#333',
            bg: '#555'
        }
     }

    // An updater function to update the state of the context
    toggleTheme = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme });
    } 

    render() { 
        return (
            // This JSX tag is used to wrap around the components which needs a global state
            // value property specifies the global state and any update functions for the context state
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
         );
    }
}
 
export default ThemeContextProvider;