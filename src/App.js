import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SchoolNavbar from "./components/SchoolNavbar/SchoolNavbar";
import Aboutus from "./components/Aboutus/Aboutus";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <SchoolNavbar />
        <div className="">
          <Routes>
            <Route path="/Aboutus" element={<Aboutus />} />
          </Routes>
        </div>
        {/* // <Footer /> Footer added here */}
      </div>
    </Router>

  );
}

export default App;