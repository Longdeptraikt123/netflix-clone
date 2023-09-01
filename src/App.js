import './App.css';
import Home from './components/home';
import Navbar from './components/navbar';
import SignIn from './components/sign-in';
import SignUp from './components/sign-up';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='/sign-in' element={<SignIn />}></Route>
        <Route path='/sign-up' element={<SignUp />}></Route>

      </Routes>

    </Router>
  );
}

export default App;
