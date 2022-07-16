// import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import Header from './Snips/header';
import Home from './Pages/Home';
import './App.css';
import Cards from './Pages/Cards'
import Login from './Pages/Login';
import Builds from './Pages/Builds';

// function Home() {
//   return (
//     <>
//       <main>
//         <h2>Welcome to the homepage!</h2>
//         <p>You can do this, I believe in you.</p>
//       </main>
//       <nav>
//         <Link to="/about">About</Link>
//       </nav>
//     </>
//   );
// }

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card-index" element={<Cards />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Builds" element={<Builds />} />
      </Routes>
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
