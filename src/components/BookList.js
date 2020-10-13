import React, { Component, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

// Class Component
// class BookList extends Component {
//     // Used to consume context data
//     // We need to specify whatever context we want to consume inside this component
//     // This will look up the component tree and the first time it finds a provider for the mentioned context and then it will have access to the data specified in the context.
//     // This is mainly used when we have class components
//     // Also, this way we can consume only one context
//     static contextType = ThemeContext;
//     render() {
//         // This is used to access the context data
//         const { isLightTheme, light, dark } = this.context;
//         const theme = isLightTheme ? light : dark;
//         return ( 
//             <div className='book-list' style={{
//                 color: theme.syntax,
//                 background: theme.bg,
//             }}>
//                 <ul>
//                     <li style={{ background:theme.ui }}>The Way of Kings</li>
//                     <li style={{ background:theme.ui }}>The Name of the Wind</li>
//                     <li style={{ background:theme.ui }}>The FInal Empire</li>
//                 </ul>
//             </div>
//          );
//     }
// }

// Functional Component
const BookList = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return ( <div className='book-list' style={{
                color: theme.syntax,
                background: theme.bg,
            }}>
                <ul>
                    <li style={{ background:theme.ui }}>The Way of Kings</li>
                    <li style={{ background:theme.ui }}>The Name of the Wind</li>
                    <li style={{ background:theme.ui }}>The FInal Empire</li>
                </ul>
            </div> );
}

 
export default BookList;