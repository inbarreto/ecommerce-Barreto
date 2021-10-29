import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
// import { ItemCount } from "./components/ItemCount/ItemCount";
//import { Title } from "./components/Title/Title";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
function App() {
  // const alertName = () => alert("Yo");

  // const [title, setTitle] = useState("My E-commerce 2");

  // const handleTitle = () => setTitle("My e-Comm");

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <div className="App">
            <ItemListContainer greeting="Test Greeting" />
          </div>
        </Route>
        <Route exact path="/Detail">
          <ItemDetailContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
