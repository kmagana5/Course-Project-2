import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ScrollMenu from '../components/ScrollMenu';
import '../styles/ScrollMenu.css';
import RelatedContent from '../components/RelatedContent';
import '../styles/RelatedContent.css';
import { useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import ReactImageMagnify from 'react-image-magnify';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Structure = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [structure, setStructure] = useState(null);
  const [relatedStructures, setRelatedStructures] = useState([]);
  const { structure_id } = useParams();

  const [quantity, setQuantity] = useState(1);
  const [bath, setBath] = useState(1);
  const [bed, setBed] = useState(1);

  const incrementBed = () => {
    setBed((prev) => prev + 1);
  };

  const decrementBed = () => {
    if (bed > 1) {
      setBed((prev) => prev - 1);
    }
  };

  const incrementBath = () => {
    setBath((prev) => prev + 1);
  };

  const decrementBath = () => {
    if (bath > 1) {
      setBath((prev) => prev - 1);
    }
  };

  const incrementQuant = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuant = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const toggleSection = (section) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const [collapsedSections, setCollapsedSections] = useState({
    homeFeatures: true,
    planDetails: true,
    contractors: true,
    compatible3DPrinters: true,
    virtualWalkthrough: true,
  });

  const onSubmit = () => {
    const cart = {
      user_id: structure.user_id,
      designer: 'HackSmith Industries',
      product_id: structure_id,
      numBed: bed,
      numBath: bath,
      q: quantity,
      total_cost: structure.price * quantity,
    };

    axios
      .post('http://localhost:5000/addCart/add', cart)
      .then((res) => {
        console.log(res.data);
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 7000); // Hide notification after 7 seconds
      })
      .catch((error) => {
        console.error('Error adding to cart:', error);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/Structures/${structure_id}`)
      .then((res) => {
        setStructure(res.data);
      })
      .catch((error) => {
        console.error('Error fetching structure data:', error);
      });
  }, [structure_id]);

  useEffect(() => {
    if (!structure) return;

    axios
      .post(`http://localhost:5000/api/Structures/related`, {
        structure_id: structure.structure_id,
        structure_type: structure.structure_type,
        tags: structure.tags,
      })
      .then((res) => {
        setRelatedStructures(res.data);
      })
      .catch((error) => {
        console.error('Error fetching related structures:', error);
      });
  }, [structure]);

  if (structure === null) {
    return <div>Loading...</div>;
  }

  const imageSrc = structure.image_urls; // Source of the image

  return (
    <div style={{ marginLeft: '10px' }}>
      <h1>Structure</h1>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ padding: '30px' }}>
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: 'Product Image',
                height: 500,
                width: 750,
                src: imageSrc,
              },
              largeImage: {
                src: imageSrc,
                width: 1200,
                height: 1800,
              },
            }}
          />
        </div>

        <div style={{ marginLeft: '10px' }}>
          <h2>{structure.structure_name}</h2>
          <p>
            By: <a href={structure.designer_link} target="_blank" rel="noreferrer">
              {structure.designer}
            </a>
          </p>
          <Rating />

          <div className="pricetag">${structure.price}</div>

          {structure.numBeds && (
            <p>
              Number of Beds:{' '}
              <input style={{ width: '15%' }} type="number" value={bed} readOnly />
              <button onClick={decrementBed}>-</button>
              <button onClick={incrementBed}>+</button>
            </p>
          )}

          {structure.numBaths && (
            <p>
              Number of Baths:{' '}
              <input style={{ width: '15%' }} type="number" value={bath} readOnly />
              <button onClick={decrementBath}>-</button>
              <button onClick={incrementBath}>+</button>
            </p>
          )}

          <p>
            Quantity:{' '}
            <input style={{ width: '15%' }} type="number" value={quantity} readOnly />
            <button onClick={decrementQuant}>-</button>
            <button onClick={incrementQuant}>+</button>
          </p>

          <button onClick={onSubmit}>Add to Cart</button>
        </div>
      </div>

      {/* Collapsible sections */}
      <div style={{ width: '50%' }}>
      <h2>From the Designer</h2>
                <p>{structure.description}</p>
        <h2 onClick={() => toggleSection('homeFeatures')} className="collapsible-title">
          {collapsedSections.homeFeatures ? <FaPlus /> : <FaMinus />} Home Features
        </h2>
        {collapsedSections.homeFeatures && (
          <div className="collapsible-content">
            Content for Home Features goes here.
          </div>
        )}

        <h2 onClick={() => toggleSection('planDetails')} className="collapsible-title">
          {collapsedSections.planDetails ? <FaPlus /> : <FaMinus />} Plan Details
        </h2>
        {collapsedSections.planDetails && (
          <div className="collapsible-content">
            Content for Plan Details goes here.
          </div>
        )}

        <h2 onClick={() => toggleSection('contractors')} className="collapsible-title">
          {collapsedSections.contractors ? <FaPlus /> : <FaMinus />} Contractors in Your Area for this Design
        </h2>
        {collapsedSections.contractors && <ScrollMenu />}

        <h2 onClick={() => toggleSection('compatible3DPrinters')} className="collapsible-title">
          {collapsedSections.compatible3DPrinters ? <FaPlus /> : <FaMinus />} Compatible 3D Printers
        </h2>
        {collapsedSections.compatible3DPrinters && (
          <div className="collapsible-content">
            Content for Compatible 3D Printers goes here.
          </div>
        )}

        <h2 onClick={() => toggleSection('virtualWalkthrough')} className="collapsible-title">
          {collapsedSections.virtualWalkthrough ? <FaPlus /> : <FaMinus />} Virtual Walkthrough
        </h2>
        {collapsedSections.virtualWalkthrough && (
          <div className="collapsible-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        )}
      </div>

      {/* Related content and notification */}
      {relatedStructures.length > 0 && (
        <RelatedContent category="Related Structures" products={relatedStructures} />
      )}

      {showNotification && (
        <div className="notification">
          <h2>Item added to cart!</h2>
          <span className="item-name">Item Name: {structure.structure_name}</span>
          <span className="item-quantity">Quantity: {quantity}</span>
          <span className="item-subtotal">Subtotal: ${structure.price * quantity}</span>
        </div>
      )}
    </div>
  );
};

export default Structure;
