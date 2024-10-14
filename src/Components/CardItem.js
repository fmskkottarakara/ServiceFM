import React from 'react';
import { Link } from 'react-router-dom';

function CardItem({ id, product, src, text, label }) {
  // Logging the props received by the component
  console.log("id:", id);
  console.log("product:", product);
  console.log("src:", src);
  console.log("text:", text);
  console.log("label:", label);

  return (
    <li className='cards__item'>
      <Link
        className='cards__item__link'
        to={`/service`}
        state={{ product }}  // Passing product as state
      >
        <figure className='cards__item__pic-wrap' data-category={label}>
          <img
            className='cards__item__img'
            alt='Product Image'
            src={src}
          />
        </figure>
        <div className='cards__item__info'>
          <h5 className='cards__item__text'>{text}</h5>
        </div>
      </Link>
    </li>
  );
}

export default CardItem;
