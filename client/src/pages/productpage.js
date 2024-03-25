import React from "react";
// import { addToCart } from "../services/api";
 
const ProductPage = () => {
    const product = {
        _id: 1,
        name: "3D House Sample",
        product_image: "/house.jpg",
        description: "This is a 3D House"
    };

    // const handleAddToCart = ()  => {
    //     addToCart(product._id);
    // };
    return (
        <div>
    <h1>ProductPage</h1>
    <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
            <img src={product.product_image} alt="Product Image"/>
        </div>
        <div style={{ marginLeft: "10px" }}>
            <h2>3D House Product Sample</h2>
            <p>{product.description}</p>
            <button style={{ marginTop: "10px" }}>Add to Cart</button>
        </div>
    </div>
</div>
    

        
    );
};
 
export default ProductPage;