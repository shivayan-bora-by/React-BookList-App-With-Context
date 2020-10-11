import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/NavBar';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <div className="App">
      {/* Everytime the state of the context changes, then anything that's consuming the context will get re-rendered with the new value */}
      <ThemeContextProvider>
        <Navbar />
        <BookList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
