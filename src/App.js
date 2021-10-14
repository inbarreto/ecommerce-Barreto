import "./App.css";

import { NavBar } from "./components/NavBar/NavBar";
import { ItemCount } from "./components/ItemCount/ItemCount";
//import { Title } from "./components/Title/Title";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
function App() {
  // const alertName = () => alert("Yo");

  // const [title, setTitle] = useState("My E-commerce 2");

  // const handleTitle = () => setTitle("My e-Comm");

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Test Greeting" />
    </div>
  );
}

export default App;
