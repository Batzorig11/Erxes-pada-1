import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/home";
import { About } from "./Pages/about";
import { Layout } from "./Layout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route>
            <Route element={<Layout />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
