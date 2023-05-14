import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Journal from "./pages/Journal";
import Add from "./pages/Add";
import Auth from "./pages/Auth";
import Meals from "./pages/Meals";
import Menu from "./pages/Menu";
import Meal from "./pages/Meal";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/add" element={<Add />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/meal/:id" element={<Meal />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
export default App;
