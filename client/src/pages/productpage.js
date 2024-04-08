import React, { useState } from "react";
import Rating from "../components/Rating";
import "../styles/Rating.css";
import ScrollMenu from "../components/ScrollMenu";
import "../styles/ScrollMenu.css";
import axios from 'axios';

const ProductPage = () => {
    const [showNotification, setShowNotification] = useState(false);


    function onSubmit() {
        const cart = {
            user_id: 1,
            designer: 'HackSmith Industries',
            product_id: 'HouseRandom',
            quantity: 1,
            total_cost: 2500,
            tags: ['house']
        };
        console.log(cart);

        axios.post('http://localhost:5000/addCart/add', cart)
            .then(res => {
                console.log(res.data);
                setShowNotification(true); 
                setTimeout(() => setShowNotification(false), 3000); // Hide notification after 3 seconds
            });
    }

    return (
        <div style={{ marginLeft: "10px" }}>
            <h1>ProductPage</h1>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div>
                    <img src="/house.jpg" alt="Product Image" style={{ padding: "50px" }} />
                    <h2>From the Designer</h2>
                </div>
                <div style={{ marginLeft: "10px" }}>
                    <h2>3D House Product Sample</h2>
                    <p> By: <a href="https://www.hacksmith.com/" target="_blank">HackSmith Industries Page</a> </p>
                    <Rating></Rating>
                    <br></br>
                    <div className="pricetag">$2500</div>
                    <button className="button" onClick={onSubmit}>Add to Cart</button>
                </div>
            </div>
            <div style={{ width: "50%" }}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo eu diam sit amet semper. In aliquam faucibus sem, sed vestibulum nunc rhoncus a. In fringilla magna sit amet consequat congue. Mauris quis maximus eros.
                     Aenean ultricies enim eu quam consequat tincidunt. Praesent luctus blandit quam nec condimentum.
                     Suspendisse fermentum libero nulla, id mollis urna commodo quis. Donec velit nunc, semper et porttitor nec, feugiat in felis.</p>
                <h2>Home Features</h2>
                <h2>Plan Details</h2>
                <h2>Contractors in Your Area for this Design</h2>
                <ScrollMenu></ScrollMenu>
                <h2>Compatible 3D Printers</h2>
            </div>
            <div style={{ display: "flex" }}>
                <div style={{ width: "25%" }}>
                    <h2>Virtual Walkthrough</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo eu diam sit amet semper. In aliquam faucibus sem, sed vestibulum nunc rhoncus a. In fringilla magna sit amet consequat congue. Mauris quis maximus eros. Aenean ultricies enim eu quam consequat tincidunt. Praesent luctus blandit quam nec condimentum. Suspendisse fermentum libero nulla, id mollis urna commodo quis. Donec velit nunc, semper et porttitor nec, feugiat in felis.</p>
                </div>
            </div>
            <div style={{display:"flex", flexDirection: "row"}}>
                <h2>SIMILAR PRODUCT</h2>
                
            </div>

            {showNotification && (
                <div className="notification">
                    Item added to cart!
                </div>
            )}
        </div>
    )
};

export default ProductPage;
