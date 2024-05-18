import React, { useContext } from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import { BasketContext } from "../context/BasketProvider";
import { WishListContext } from "../context/WishLIstProvider";

function Navbar() {
  const {basket} = useContext(BasketContext)
  const {wishList} = useContext(WishListContext)
  return (
    <>
      <div className={styles.navbar_container}>
        <div className={styles.pulse_div}>
          <p>Pulse.</p>
        </div>
        <div className={styles.lists}>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/basket"}>Basket {basket.length}</Link>
          <Link to={"/wishList"}>WishList {wishList.length}</Link>
          <Link to={"/admin"}>Admin</Link>
        </div>
        <div className={styles.reservation_div}><p>Reservation</p></div>
      </div>
    </>
  );
}

export default Navbar;
