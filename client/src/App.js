import React from "react";

// Components
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Pages
import Home from "./pages";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";
import PageFramework from "./pages/framework";
import ProductPage from "./pages/productpage";
import Products from "./pages/productselectionpage";

 
function App() {
    return (
        <Router>
            <Routes>
                <Route 
                    exact path="/" 
                    element={<PageFramework component={<Home/>} />} />
                <Route 
                    path="/about" 
                    element={<PageFramework component={<About/>} />} />
                <Route
                    path="/contact"
                    element={<PageFramework component={<Contact/>} />} />
                <Route 
                    path="/blogs" 
                    element={<PageFramework component={<Blogs/>} />} />
                <Route
                    path="/sign-up"
                    element={<PageFramework component={<SignUp/>} />} />
                <Route
                    path="/productselectionpage"
                    element={<PageFramework component={<Products/>} />} />
                <Route
                    path="/productpage"
                    element={<PageFramework component={<ProductPage />} />} />
                <Route
                    path="/product/:structure_id"
                    element={<PageFramework component={<ProductPage />} />}
                />
            </Routes>
        </Router>
    );
}
 
export default App;