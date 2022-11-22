import Landing from './pages/Landing';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AboutUs from "./pages/Aboutus";
import Log from "./pages/Login";


export default function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="sobre-nosotros" element={<AboutUs />} />
          <Route path="iniciar-sesion" element={<Log />} />
          <Route path="*" element={<div>PROXIMAMENTE :D</div>} />
        </Route>
        {/* <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />

          
          <Route path="*" element={<NoMatch />} />
        </Route> */}
      </Routes>
    </div>
  );
}

