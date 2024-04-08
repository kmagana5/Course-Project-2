import React, { useState, useEffect } from "react";
import axios from 'axios';
import ScrollMenu from "../components/ScrollMenu";
import "../styles/ScrollMenu.css";
import { useParams } from "react-router-dom"; 
import Rating from "../components/Rating";

const Structure = () => {
    const [showNotification, setShowNotification] = useState(false);
    const [structure, setStructure] = useState(null);
    const { structure_id } = useParams();

    const [quantity, setQuantity] = useState(1);
   
    const [bath, setBath] = useState(1);

    const [bed, setBed] = useState(1);

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
    console.log("Bruh:...", structure_id);
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
    useEffect(() => {
        async function fetchData() {
            axios.get(`http://localhost:5000/api/structures/${structure_id}`)
            .then(res => {
                console.log("Hello" , res.data);
                setStructure(res.data);
            })
            .catch(error => {
                console.error('Error fetching structure data:', error);
            });
        }

        fetchData();
    }, [structure_id]);

    if(structure === null) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ marginLeft: "10px" }}>

            <h1>Structure</h1>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div>
                    <img src={structure.image_urls} alt="Product Image" style={{ padding: "50px", height: "500px"}} />
                    <h2>From the Designer</h2>
                </div>
                <div style={{ marginLeft: "10px" }}>
                <h2>{ structure.structure_name }</h2>
                    <p> By: <a href="https://www.hacksmith.com/" target="_blank">HackSmith Industries Page</a> </p>
                    <Rating></Rating>
                    <div className="pricetag"> ${structure.price}</div>
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

            {showNotification && (
                <div className="notification">
                    Item added to cart!
                </div>
            )}
        </div>
    )
};

export default Structure;