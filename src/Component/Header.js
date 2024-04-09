import React from "react";

export default function Header (props){
    const {countcartitems}=props;
    return(
    <header className="row block center">
        <div>
            <a href="#/">
                <h1>small shopping cart</h1>
            </a>
        </div>
        <div>
            <a href="#/cart">
                cart{' '}
               
               {props.countcartItems ? (
                <button className="badge">{props.countcartItems}</button>
               ):(
                ''
               )}
                </a><a href="#/signin">signin</a>
               
        </div>
    </header>
    );
}

 
