import React from "react";
import { Link } from "react-router-dom";

const ProductSelectionPage = () => {
    return (
        <div style={{ marginLeft: "10px" }}>
            <h1>Products</h1>
            <ul>
                <li><Link to="/product/1">Product 1</Link></li>
                <li><Link to="/product/2">Product 2</Link></li>
                <li><Link to="/product/3">Product 3</Link></li>
                <li><Link to="/product/4">Product 4</Link></li>
                <li><Link to="/product/5">Product 5</Link></li>
            </ul>
        </div>
    );
};

export default ProductSelectionPage;
