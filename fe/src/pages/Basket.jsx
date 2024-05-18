import React, { useContext } from "react";

import { BasketContext } from "../context/BasketProvider";

function Basket() {
  const { basket,addBasket,decBasket,removeProduct,getTotal } = useContext(BasketContext);
  return <div>{basket.map(x=>(
  <>
    <div>
      {x.title}------{x.price}$
      <p>{x.count}</p>
      <button onClick={()=>addBasket(x)}>+</button>
      <button onClick={()=>decBasket(x)}>-</button>
      <button onClick={()=>removeProduct(x)}>X</button>

    </div>




<h1>Total : {getTotal()} $ </h1>
  </>

  ))}</div>;
}

export default Basket;
