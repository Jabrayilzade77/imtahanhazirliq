import React, { createContext, useState } from 'react'
import useLocalStorage from '../assets/hooks/useLocalStorage'

export const BasketContext = createContext()

function BasketProvider({children}) {

    const [basket, setBasket] = useLocalStorage("wishList",[])
    
    function addBasket(item) {
        const index = basket.findIndex(x=>x._id === item._id)
        
        if(index !== -1){
            basket[index].count++
            setBasket([...basket])
        }
        else{
            setBasket([...basket,{...item,count:1}])
        }
    }


    function decBasket(item) {
        const index = basket.findIndex(x=>x._id === item._id)
        
        if(basket[index].count > 1){
            basket[index].count--
            setBasket([...basket])
        }
      
    }

    function removeProduct(item) {
        setBasket([...basket.filter(x=>x._id !== item._id)])
    }

    function isExitsAtBasket(item) {
        return basket.find(x=>x._id === item._id)
        
    }
    function getCountFromBasket(item) {
        return basket.find(x=>x._id === item._id).count
        
    }

    function getTotal() {
        return basket.reduce((prev,initial) => (prev + (initial.count * initial.price)),0) 
    }
  return (
    <BasketContext.Provider value={{basket,addBasket,decBasket,removeProduct,isExitsAtBasket,getCountFromBasket,getTotal}}>{children}</BasketContext.Provider>
  )
}

export default BasketProvider