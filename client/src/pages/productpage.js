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
<<<<<<< HEAD
            <img src={product.product_image} alt="Product Image"/>
            <h2>From the Designer</h2>
        </div>
        <div style={{ marginLeft: "10px" }}>
            <h2>3D House Product Sample</h2>
            <p>{product.description}</p>
            <p> By: <a href="https://www.hacksmith.com/" target="_blank">HackSmith Industries Page</a> </p>
            <br></br>
            <button style={{ marginTop: "10px" }}>Add to Cart</button>
=======
            <img src="/house.jpg" alt="Product Image"/>
        </div>
        <div style={{ marginLeft: "10px" }}>
            <h2>3D House Product Sample</h2>
            <p>This is a 3D house</p>
            <button style={{ marginTop: "10px" }} onClick={onSubmit}>Add to Cart</button>
>>>>>>> Seb_insert
        </div>
    </div>
    <div style={{width: "50%"}}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo eu diam sit amet semper. In aliquam faucibus sem, sed vestibulum nunc rhoncus a. In fringilla magna sit amet consequat congue. Mauris quis maximus eros.
             Aenean ultricies enim eu quam consequat tincidunt. Praesent luctus blandit quam nec condimentum. 
             Suspendisse fermentum libero nulla, id mollis urna commodo quis. Donec velit nunc, semper et porttitor nec, feugiat in felis.</p>
        <h2>Home Features</h2>
        <h2>Plan Details</h2>
        <h2>Contractors in Your Area for this Design</h2>
        <h2>Compatible 3D Printers</h2>
    </div>
    <div style={{display:"flex"}}>
        <div style={{width:"25%"}}>
            <h2>Virtual Walkthrough</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo eu diam sit amet semper. In aliquam faucibus sem, sed vestibulum nunc rhoncus a. In fringilla magna sit amet consequat congue. Mauris quis maximus eros. Aenean ultricies enim eu quam consequat tincidunt. Praesent luctus blandit quam nec condimentum. Suspendisse fermentum libero nulla, id mollis urna commodo quis. Donec velit nunc, semper et porttitor nec, feugiat in felis.</p>
        </div>
        <img src={product.product_image} alt="Product Image" style={{padding:"50px"}}/>

    </div>
    </div>
    

        
    )
 
};
 
export default ProductPage;