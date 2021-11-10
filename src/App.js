import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
// import { ItemCount } from "./components/ItemCount/ItemCount";
//import { Title } from "./components/Title/Title";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { createContext, useState } from "react";

const ThemeContext = createContext();

function App() {
  // const alertName = () => alert("Yo");

  // const [title, setTitle] = useState("My E-commerce 2");

  // const handleTitle = () => setTitle("My e-Comm");
  const switchDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    console.log(isDarkMode);
  };

  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={isDarkMode}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <div className="App">
              <ItemListContainer greeting="Listado de todos los productos" />
            </div>
          </Route>
          <Route exact path="/item/:itemId">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/category/:categoryId">
            <ItemListContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
