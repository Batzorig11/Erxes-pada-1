import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import Works from "./Pages/works";
import Wallpaper from "./Pages/wallpaper";
import Posts from "./Pages/posts";
import Uses from "./Pages/uses";
import Source from "./Pages/source";
import Header from "./Components/Header";
// import { Footer } from "./Components/Footer";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/wallpaper" element={<Wallpaper />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/uses" element={<Uses />} />
        <Route path="/source" element={<Source />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
