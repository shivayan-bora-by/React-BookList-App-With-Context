import React from "react";
import BookList from "./components/BookList";
import Navbar from "./components/NavBar";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextProvider from "./context/AuthContext";
import ThemeContextProvider from "./context/ThemeContext";
import BookContextProvider from "./context/BookContext";

function App() {
  return (
    <div className="App">
      {/* Everytime the state of the context changes, then anything that's consuming the context will get re-rendered with the new value */}
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
