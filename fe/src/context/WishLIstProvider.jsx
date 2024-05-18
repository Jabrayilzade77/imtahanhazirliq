import React, { createContext, useState } from "react";
import useLocalStorage from "../assets/hooks/useLocalStorage";

export const WishListContext = createContext();

function WishListProvider({ children }) {
  const [wishList, setwishList] = useLocalStorage("basket",[]);

  function addwishList(item) {
    const index = wishList.findIndex((x) => x._id === item._id);

    if (index !== -1) {
     setwishList([...wishList.filter(x=>x._id !== item._id)])
    } else {
      setwishList([...wishList, { ...item }]);
    }
  }

  function isExitsAtwishList(item) {
    return wishList.find((x) => x._id === item._id);
  }

  return (
    <WishListContext.Provider
      value={{
        wishList,
        addwishList,
        isExitsAtwishList,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
}

export default WishListProvider;
