import React from "react";

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsprice=cartItems.reduce((a,c)=>a+ c.price*c.qty,0);
  const taxprice=itemsprice*0.14;
  const shippingprice=itemsprice>2000?0:50;
  const totalprice=itemsprice+taxprice+shippingprice;

  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>{' '}
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(3)}
             </div>
          </div>
        ))}

    
      </div>
      {cartItems.length!== 0 &&(
        <>
        <hr></hr>
        <div className="row">
            <div className="col-2">itemsprice</div>
            <div className="col-1 text-right">${itemsprice.toFixed(2)}</div>

        </div>
        <div className="row">
            <div className="col-2">taxprice</div>
            <div className="col-1 text-right">${taxprice.toFixed(2)}</div>

        </div>
        <div className="row">
            <div className="col-2">shipping price</div>
            <div className="col-1 text-right">${shippingprice.toFixed(2)}</div>

        </div>
        <div className="row">
            <div className="col-2"><strong>Total price</strong></div>
            <div className="col-1 text-right">${totalprice.toFixed(2)}</div>

        </div>
        <hr/>
        <div className="row">
            <button onClick={()=>alert('implement checkout')}>
                checkout
                </button> 

        </div>
        </>
      )}
    </aside>
  );
}