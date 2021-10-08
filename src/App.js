import "./App.css";

import { NavBar } from "./components/NavBar/NavBar";
import { useState } from "react";
import { Title } from "./components/Title/Title";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
function App() {
  const alertName = () => alert("Yo");

  const [title, setTitle] = useState("My E-commerce 2");

  const handleTitle = () => setTitle("My e-Comm");

  const [counter, setCounter] = useState(0);

  const add = () => setCounter(counter + 1);
  const rest = () => setCounter(counter - 1);

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      {/* <header className="App-header">
        <p>
          <Title text={title} onTitle={handleTitle} />
          <Title text="From Ignacio" />
        </p>

        <button onClick={alertName}> click me</button>
        <button onClick={add}> +</button>
        <Title text={counter} />
        <button onClick={rest}> -</button>
      </header> */}
    </div>
  );
}

export default App;
