import Nav from "./components/Nav";
import FilterSec from "./components/FilterSec";
import Footer from "./components/Footer";
import MainListing from "./components/MainListing";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
function App() {
  return (
    <>
      <Router>
        <Nav />
        <FilterSec />
        <main>
          <Routes>
            <Route path="/" element={<MainListing />} />
            <Route path="/rings" element={<MainListing />} />
            <Route path="/necklaces" element={<MainListing />} />
            <Route path="/watches" element={<MainListing />} />
            <Route path="/earrings" element={<MainListing />} />
            <Route path="/braceletes" element={<MainListing />} />
            <Route path="/anklet" element={<MainListing />} />
            <Route path="/noseraings" element={<MainListing />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
