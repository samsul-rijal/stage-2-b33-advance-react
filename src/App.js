import "bootstrap/dist/css/bootstrap.min.css";

// import necessary object from react-router-dom
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// import "pages" component here
// import Home from './pages/Home'
// import About from './pages/About'
// import Profile from './pages/Profile'
// import SignIn from './pages/SignIn'
import Navbar from "./components/Navbar";
import { Home, About, Profile, SignIn } from "./pages";

function App() {
  return (
    // define <BrowserRouter> as parent element
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>

    </BrowserRouter>


  );
}

export default App;