import React, { useContext } from 'react'
import { WishListContext } from '../context/WishLIstProvider'

function WishList() {

  const {wishList,addwishList,isExitsAtwishList} = useContext(WishListContext)
  return (
    <div>{wishList.map(x=>(
    <>
 <div onClick={() => addwishList(x)}>{isExitsAtwishList(x) ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>}</div>

      {x.title} --- {x.price}
    </>
    ))}</div>
  )
}

export default WishList