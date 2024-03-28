import React from "react";
import axios from 'axios';

function onSubmit() {
    const cart = {
        user_id: 1,
        product_id: 'HouseRandom',
        quantity: 1,
        total_cost: 2500.00
      };

    axios.post('http://localhost:5000/addCart/add',cart)
    .then(res => console.log(res.data));
    

  }
 
const ProductPage = () => {
   

    return (
        <div>
    <h1>ProductPage</h1>
    <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
            <img src="/house.jpg" alt="Product Image"/>
        </div>
        <div style={{ marginLeft: "10px" }}>
            <h2>3D House Product Sample</h2>
            <p>This is a 3D house</p>
            <button style={{ marginTop: "10px" }} onClick={onSubmit}>Add to Cart</button>
        </div>
    </div>
</div>
    

        
    )
 
};
 
export default ProductPage;