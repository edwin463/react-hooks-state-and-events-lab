import React, { useState } from 'react';
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle dark mode toggle
  function handleDarkModeClick() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  // Determine the CSS class for the app
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
