import React, { useEffect, useState } from "react";
import Rating from "../components/Rating";
import "../styles/Rating.css";
import ScrollMenu from "../components/ScrollMenu";
import "../styles/ScrollMenu.css";
import ReactImageMagnify from 'react-image-magnify';
import axios from 'axios';

const ProductPage = () => {
    const [showNotification, setShowNotification] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);

    const [quantity, setQuantity] = useState(1);
   
    const [bath, setBath] = useState(1);

    const [bed, setBed] = useState(1);

    const cost = 2500;

    const incrementBed = () => {
      setBed(prevNumber => prevNumber + 1);
    };
  
    const decrementBed = () => {
      if (bed > 1) {
        setBed(prevNumber => prevNumber - 1);
      }
    };

    const incrementBath = () => {
        setBath(prevNumber => prevNumber + 1);
      };
    
      const decrementBath = () => {
        if (bath > 1) {
          setBath(prevNumber => prevNumber - 1);
        }
      };

      const incrementQuant = () => {
        setQuantity(prevNumber => prevNumber + 1);
      };
    
      const decrementQuant = () => {
        if (setQuantity > 1) {
          setBed(prevNumber => prevNumber - 1);
        }
      };

    function onSubmit() {

        const convertQuantity = parseInt(quantity,10);
        const convertBed = parseInt(bed,10);
        const convertBath = parseInt(bath,10);

        const cart = {
            user_id: 1,
            designer: 'HackSmith Industries',
            product_id: 'HouseRandom',
            numBed:convertBed,
            numBath: convertBath,
            q: convertQuantity,
            total_cost: cost * convertQuantity,
        };
        console.log(cart);

        axios.post('http://localhost:5000/addCart/add', cart)
            .then(res => {
                console.log(res.data);
                setShowNotification(true); 
                setTimeout(() => setShowNotification(false), 10000); // Hide notification after 3 seconds
            });
    }
    

    return (
        <div style={{ marginLeft: "10px" }}>
            <h1>ProductPage</h1>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div>
                  <ReactImageMagnify {...{
                    smallImage: {
                      alt: "Product Image",
                      isFluidWidth: true,
                      src: "/house.jpg"
                    },
                    largeImage: {
                      src: "/house1200.jpg",
                      width: 1200,
                      height: 1800
                      }
                    }} />
                    <h2>From the Designer</h2>
                </div>
                <div style={{ marginLeft: "10px" }}>
                    <h2>3D House Product Sample</h2>
                    <p> By: <a href="https://www.hacksmith.com/" target="_blank">HackSmith Industries Page</a> </p>
                    <Rating></Rating>
                    <br></br>
                    <div className="pricetag">$2500</div>
                    <p>Number of Beds: <input style={{width:"15%"}} type="number" value={bed} readOnly/>
                    <button onClick={decrementBed}>-</button>
                    <button onClick={incrementBed}>+</button>
                    
                    </p>

                    <p>Number of Baths: <input style={{width:"15%"}} type="number" value={bath} readOnly/>
                    <button onClick={decrementBath}>-</button>
                    <button onClick={incrementBath}>+</button>
                    
                    </p>

                    <p>Quantity: <input style={{width:"15%"}} type="number" value={quantity} readOnly/>
                    <button onClick={decrementQuant}>-</button>
                    <button onClick={incrementQuant}>+</button>
                    
                    </p>

                    <button className="button" onClick={onSubmit}>Add to Cart</button>
                </div>
            </div>
            <div style={{ width: "50%" }}>
                <p 
                  style={isOpen ? null : {
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    display: '-webkit-box',
                  }}
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo eu diam sit amet semper. In aliquam faucibus sem, sed vestibulum nunc rhoncus a. In fringilla magna sit amet consequat congue. Mauris quis maximus eros.
                     Aenean ultricies enim eu quam consequat tincidunt. Praesent luctus blandit quam nec condimentum.
                     Suspendisse fermentum libero nulla, id mollis urna commodo quis. Donec velit nunc, semper et porttitor nec, feugiat in felis.</p>
                <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Show less...' : 'Show more...' }</button>
                <h2>Home Features</h2>
                <h2>Plan Details</h2>
                <h2>Contractors in Your Area for this Design</h2>
                <ScrollMenu></ScrollMenu>
                <h2>Compatible 3D Printers</h2>
            </div>
            <div style={{ display: "flex" }}>
                <div style={{ width: "50%" }}>
                    <h2>Virtual Walkthrough</h2>
                    <p 
                      style={isOpen1 ? null : {
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        display: '-webkit-box',
                      }}
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo eu diam sit amet semper. In aliquam faucibus sem, sed vestibulum nunc rhoncus a. In fringilla magna sit amet consequat congue. Mauris quis maximus eros. Aenean ultricies enim eu quam consequat tincidunt. Praesent luctus blandit quam nec condimentum. Suspendisse fermentum libero nulla, id mollis urna commodo quis. Donec velit nunc, semper et porttitor nec, feugiat in felis.</p>
                    <button onClick={() => setIsOpen1(!isOpen1)}>{isOpen1 ? 'Show less...' : 'Show more...' }</button>
                </div>
            </div>

            {showNotification && (
                <div className="notification">
                    Item(s) added to cart!
                    

                </div>
            )}
        </div>
    )
};

export default ProductPage;
