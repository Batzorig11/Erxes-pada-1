import "./App.css";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Profiles from "./Components/Profiles";
import Home from "./Components/Home";
import Form from "./Components/Form";
import Contact from "./Components/Contact";

function App() {
  const data = [
    { id: 1, name: "Bat", age: 18 },
    { id: 2, name: "Dorj", age: 19 },
    { id: 3, name: "Anu", age: 20 },
    { id: 4, name: "Naraa", age: 21 },
    { id: 5, name: "Gal", age: 22 },
  ];
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profiles" element={<Profiles data={data} />} />
        <Route path="/form" element={<Form />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
