import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

// Import images for each product
import recent1 from '../images/recent1.jpg';
import recent2 from '../images/recent2.jpg';
import recent3 from '../images/recent3.jpg';
import recent4 from '../images/recent4.jpg';

import recent5 from '../images/recent5.jpg';
import recent6 from '../images/recent6.jpg';


// Define the product data, each product with its specific images
const productData = [
  {
    _id: '1',
    title: 'Maintenance',
    src: [recent1], // Array of Nike images
    description: 'Maintenance work at Kollam',
    content: 'Nike Shoes are perfect for sports...',
    price: 25,
    colors: ['red', 'black', 'crimson', 'teal'],
    count: 1,
  },
  {
    _id: '2',
    title: 'Roofing',
    src: [recent2], // Array of Adidas images
    description: 'Roofing work at Kottiyam',
    content: 'Adidas Shoes are perfect for casual wear...',
    price: 30,
    colors: ['blue', 'white', 'green', 'gray'],
    count: 1,
  },
  {
    _id: '3',
    title: 'Roofing',
    src: [recent3], // Array of Adidas images
    description: 'Roofing work at Kottarakkara',
    content: 'Adidas Shoes are perfect for casual wear...',
    price: 30,
    colors: ['blue', 'white', 'green', 'gray'],
    count: 1,
  },
  {
    _id: '4',
    title: 'Cupboard',
    src: [recent4], // Array of Adidas images
    description: 'Cupboard work near Chinakkada',
    content: 'Adidas Shoes are perfect for casual wear...',
    price: 30,
    colors: ['blue', 'white', 'green', 'gray'],
    count: 1,
  },
//   {
//     _id: '4',
//     title: 'Adidas Shoes',
//     src: [recent4, adidas1_2, adidas1_3, adidas1_4], // Array of Adidas images
//     description: 'Technologies Used: HTML, CSS, ReactJS',
//     content: 'Adidas Shoes are perfect for casual wear...',
//     price: 30,
//     colors: ['blue', 'white', 'green', 'gray'],
//     count: 1,
//   },
  {
    _id: '5',
    title: 'Kitchen Table',
    src: [recent5], // Array of Adidas images
    description: 'Kitchen Table work near Beach Road',
    content: 'Adidas Shoes are perfect for casual wear...',
    price: 30,
    colors: ['blue', 'white', 'green', 'gray'],
    count: 1,
  },
  {
    _id: '6',
    title: 'Aluminium Fabrication',
    src: [recent6], // Array of Adidas images
    description: 'Aluminium Fabrication work at Pooyappally',
    content: 'Adidas Shoes are perfect for casual wear...',
    price: 30,
    colors: ['blue', 'white', 'green', 'gray'],
    count: 1,
  },
  // Add more products similarly if needed
];

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out recent services!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        {productData.map((product) => (
                            <CardItem
                                id={product._id}
                                src={product.src[0]} // First image as the card thumbnail
                                text={product.description}
                                label={product.title}
                                path={`/product/${product._id}`} // Pass the product ID in the URL
                                product={product} // Passing product data as a prop
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
