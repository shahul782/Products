import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Main from './Component/Main';
import Basket from './Component/Basket';
import Data from  './Component/Data';
import { useState } from 'react';
import Product from './Component/Product';


function App() {
  const {products}=Data;
  const [cartItems,setcartitems]=useState([]);
  const onAdd=(Product)=>{
    const exist=cartItems.find(x=>x.id===Product.id)
    if(exist){
      setcartitems(cartItems.map(x=>x.id===Product.id?{...exist,qty:exist.qty+1}:x
        ))
    }
    else{
      setcartitems([...cartItems,{...Product,qty:1}]);
    }
  };
  const onRemove=(Product)=>{
    const exist=cartItems.find((x)=>x.id===Product.id);
    if(exist.qty===1){
      setcartitems(cartItems.filter((x)=>x.id!==Product.id));

    }
    else{
              setcartitems(
                cartItems.map((x)=>
                x.id===Product.id?{exist,qty:exist.qty-1}:x)
              )
    }
  }

  return (
    <div className="App">

      <Header cartItems={cartItems.length}></Header>

      <div className='container'>
      <Main onAdd={onAdd} products={products}/>
      <Basket onAdd={onAdd}
      onRemove={onRemove}
       cartItems={cartItems}></Basket>
      </div>
     
    
    </div>
  );
}

export default App;
