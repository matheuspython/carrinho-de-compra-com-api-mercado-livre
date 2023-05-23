import React from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import  propTypes  from 'prop-types';
import './index.css';
import { formatCurrency } from '../../Utils/formatCurrency';

function ProductCad({ data }) {
  const {
    title,
    thumbnail,
    price
  } = data;
  return (
    <section className="product-cart">
      <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="product" className="card__image" />

      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price,'BRL')}</h2>
        <h2 className="cart__title">{title}</h2>
      </div>

      <button type="button" className="button__add-cart">
        <BsFillCartFill />
      </button>
    </section>
  );
}

export default ProductCad;

ProductCad.propTypes = {
  data: propTypes.shape({})
}.isRequired;
