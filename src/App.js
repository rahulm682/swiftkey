import './App.css';
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from './components/Login';
import Signup from './components/SignUp';
import Home from './components/Home';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {

  const [alert, setAlert] = useState(null)

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }


  return (
      <BrowserRouter>
      <Navbar />
      <Alert alert={alert} />

        <div className="container">

          <Routes>
            <Route exact path="/" element={<Home showAlert={showAlert} />} />
            <Route exact path="/login" element={<Login showAlert={showAlert} />} />
            <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />
            <Route exact path="/about" element={<About showAlert={showAlert} />} />
          </Routes>
        </div>

      </BrowserRouter>
  );
}

export default App;
