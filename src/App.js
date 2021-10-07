import "./App.css";
import { Title } from "./components/title/Title";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  const alertName = () => alert("Yo");

  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <p>
          <Title text="My E-commerce App" />
          <Title text="From Ignacio" />
        </p>

        <button onClick={alertName}> click me</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React With Ignacio
        </a>
      </header>
    </div>
  );
}

export default App;
