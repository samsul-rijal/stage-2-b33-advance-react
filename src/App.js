import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
// import component here
import DetailUser from './pages/DetailUser'
import Product from './pages/Product'
import DetailPerson from "./pages/DetailPerson";

function App() {
  return (
    <Router>
      <div>
        {/* Setup navigation element */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* define Route and component that will 
      render if the URL match by using Routes */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/signin" element={<SignIn />} />
        {/* define new route */}
        <Route exact path="/user/:id" element={<DetailUser />} />
        <Route exact path="/person" element={<Product />} />
        <Route exact path="/person/:id" element={<DetailPerson />} />
      </Routes>
    </Router>
  );
}

export default App;