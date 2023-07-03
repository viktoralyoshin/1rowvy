import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </div>
      <ToastContainer position='bottom-right' theme="dark"/>
    </>
  );
}

export default App;
