import "./App.css";
import About from "./components/About/About";
import Account from "./components/Account/Account";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/account" Component={Account} />
            <Route path="/contact" Component={Contact} />
            <Route path="*" Component={NotFound} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
