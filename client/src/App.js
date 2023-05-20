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
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Edit from "./pages/Edit";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRecipes } from "./redux/features/recipesSlice";
import { fetchAllMenu } from "./redux/features/menuSlice";
import { fetchAllAte } from "./redux/features/ateSlice";
import AuthRequired from "./components/AuthRequired";

function App() {
  const dispatch = useDispatch();
  const { data: user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchRecipes());
    if (user) {
      dispatch(fetchAllMenu());
      dispatch(fetchAllAte());
    }
  }, [dispatch, user]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/meals/:tag" element={<Meals />} />
        <Route path="/meal/:id" element={<Meal />} />
        <Route element={<AuthRequired />}>
          <Route path="/journal" element={<Journal />} />
          <Route path="/add" element={<Add />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Route>
      </Routes>

      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
}
export default App;
