import React from 'react'

export default function Product(props) {
    const {Product,onAdd}=props;
  return (
    <div>
        <img className='small' src={Product.image} alt={Product.name}></img>
        <h3>{Product.name}</h3>
        <div>${Product.price}</div>
        <div>
            <button onClick={()=>onAdd(Product)} >Add to cart</button>
        </div>

    </div>
  )
}

