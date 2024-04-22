import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import ButtonComponent from "./components/ButtonComponent";
import ImgComponent from "./components/ImgComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <NavBar li1="Home" li2="About US" li3="Contacts"/>
      <ImgComponent src="https://images.unsplash.com/photo-1593353798398-6024b7444bb6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="brum brum" className="auto"/>
      <ButtonComponent txt="Comprami ti prego" id="btn" className="btn"/>
      
    </div>
  );
}

export default App;
