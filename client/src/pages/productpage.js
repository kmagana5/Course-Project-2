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
            <div>
                <img src={product.product_image} alt="Product Image"/>
                <h2>3D House Product Sample</h2>
                <p>{product.description}</p>
                {/* <button onClick={handleAddToCart}>Add to Cart</button> */}
            </div>

        </div>
    );
};
 
export default ProductPage;