import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Switch } from "react-router";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PublicNavbar from "./components/PublicNavbar/PublicNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import HomePage from "./pages/HomePage/HomePage";
import CartPage from "./pages/CartPage/CartPage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";

function App() {
  return (
    <Router>
      <div clasName="wrapper">
        <PublicNavbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/profile" element={<ProfilePage />} />
          <Route exact path="/cart" element={<CartPage />} />
          <Route exact path="/products/categories/:id" element={<CategoriesPage/>}/>
          <Route exact path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;