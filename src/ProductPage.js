import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Colors from './Components/Colors';
import DetailsThumb from './Components/DetailsThumb';
import './App.css';

function ProductPage() {
  const { state } = useLocation(); // Use state to get product data
  const product = state?.product; // Access the product data from state
  const [index, setIndex] = useState(0);
  const smImgsRef = useRef(null);

  const handleImgChange = (newIndex) => {
    setIndex(newIndex);
    const images = smImgsRef.current.children;
    // remove all img active class 
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace('active', '');
    }
    // set current img active class 
    images[newIndex].className = 'active';
  };

  useEffect(() => {
    if (smImgsRef.current && smImgsRef.current.children[index]) {
      smImgsRef.current.children[index].className = 'active';
    }
  }, [index]);

  if (!product) return <div>Loading...</div>; // In case no product is found

  return (
    <section className='app'>
      <div className="details">
        <div className='large-img-wrapper'>
          <img src={product.src[index]} alt="Product" className='large-img' />
        </div>

        <div className='box'>
          <div className='row'>
            <h2>{product.title}</h2>
            <span>{product.price} $</span>
          </div>
          <Colors colors={product.colors} />
          <p>{product.description}</p>
          <p>{product.content}</p>
          <DetailsThumb
            images={product.src}
            handleImgChange={handleImgChange}  // Passing the function here
            myRef={smImgsRef}
          />
          <button className='add-to-cart'>Add to cart</button>
        </div>
      </div>
    </section>
  );
}

export default ProductPage;
