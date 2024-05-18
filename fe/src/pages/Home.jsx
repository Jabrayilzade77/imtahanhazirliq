import React, { useContext, useEffect, useState } from "react";
import styles from "./Home.module.scss";
import { BasketContext } from "../context/BasketProvider";
import { WishListContext } from "../context/WishLIstProvider";

function Home() {
  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("")
  

  const {
    addBasket,
    isExitsAtBasket,
    decBasket,
    removeProduct,
    getCountFromBasket,
  } = useContext(BasketContext);

  const { addwishList, isExitsAtwishList } = useContext(WishListContext);

  useEffect(() => {
    getAllProducts();
  }, []);

  async function getAllProducts() {
    const res = await fetch("http://localhost:3000/myapp");
    const data = await res.json();

    setProducts(data);
  }

  function decSorted() {
  return  setProducts([...products.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))])
  }

  function incSorted() {
    return  setProducts([...products.sort((a,b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0))])
    }
  return (
    <>
      <main>
        <section className={styles.special_section}>
          <div className={styles.special_container}>
            <div>
              <h1>Special Dish.</h1>

              <span>By Chef Francis Smith</span>
            </div>
          </div>
        </section>

        <section>
          <div className={styles.welcome_container}>
            <div className={styles.welcome_and_icon}>
              <i class="fa-solid fa-download" style={{ fontSize: "50px" }}></i>

              <h2>Welcome</h2>
            </div>

            <div className={styles.cards}>
              <div className={styles.cards_item}>
                <p>2002</p>
                <span>
                  In vitae nisi aliquam, scelerisque leo a, volutpat sem.
                  Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo
                  volutpat.
                </span>
              </div>
              <div className={styles.cards_item}>
                <p>2010</p>
                <span>
                  Stpat sem. Vivamus rutrum dui fermentum eros hendrerit, id
                  lobortis leo volutpat. Maecenas sollicitudin est in libero
                  pretium.
                </span>
              </div>
              <div className={styles.cards_item}>
                <p>2018</p>
                <span>
                  In vitae nisi aliquam, scelerisque leo a, volutpat sem.
                  Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo
                  volutpat.
                </span>
              </div>

              <div className={styles.signature}>
                <img
                  src="	https://preview.colorlib.com/theme/pulse/img/sign.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className={styles.testimonials_container}>
            <div className={styles.testimonials_and_icon}>
              <i
                className="fa-solid fa-ice-cream"
                style={{ fontSize: "40px", color: "white" }}
              ></i>

              <p>Testimonials</p>
            </div>

            <div className={styles.desc}>
              <p>
                " Integer sed facilisis eros. In iaculis rhoncus velit in
                malesuada. In hac habitasse platea dictumst. Fusce erat ex,
                consectetur sit amet ornare suscipit, porta et erat. Donec nec
                nisi in nibh commodo laoreet. Mauris dapibus justo ut feugiat
                malesuada. Fusce ultricies ante tortor, non vestibulum est
                feu-giat ut. "
              </p>
              <div className={styles.ted_p}>
                <p className={styles.ted_first}>Ted Chapman</p> <p>, Client</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className={styles.our_services_container}>
            <div className={styles.our_services_and_icon}>
              <i
                class="fa-solid fa-burger"
                style={{ fontSize: "40px", color: "black" }}
              ></i>
              <p>Our Services</p>
            </div>

            <div className={styles.our_services_cards_container}>
              <div className={styles.our_services_cards}>
                <i
                  class="fa-solid fa-mug-hot"
                  style={{ fontSize: "40px", color: "rgb(255, 174, 0)" }}
                ></i>
                <p>Breakfast</p>

                <span>
                  In vitae nisi aliquam, scelerisque leo a, volutpat sem.
                  Vivamus rutrum dui fermentum.
                </span>
              </div>
              <div className={styles.our_services_cards}>
                <i
                  class="fa-solid fa-cake-candles"
                  style={{ fontSize: "40px", color: "rgb(255, 174, 0)" }}
                ></i>
                <p>Brunch</p>

                <span>
                  Scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum
                  eros hendrerit, id lobortis.
                </span>
              </div>
              <div className={styles.our_services_cards}>
                <i
                  class="fa-solid fa-mug-saucer"
                  style={{ fontSize: "40px", color: "rgb(255, 174, 0)" }}
                ></i>
                <p>Lunch</p>
                <span>
                  In vitae nisi aliquam, scelerisque leo a, volutpat sem.
                  Vivamus rutrum dui fermentum.
                </span>
              </div>
              <div className={styles.our_services_cards}>
                <i
                  class="fa-solid fa-burger"
                  style={{ fontSize: "40px", color: "rgb(255, 174, 0)" }}
                ></i>
                <p>Dinner</p>
                <span>
                  Aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui
                  fermentum eros hendreri.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className={styles.our_menu_container}>

            <div className={styles.our_menu_and_icon}>
              <i
                class="fa-solid fa-burger"
                style={{ fontSize: "40px", color: "white" }}
              ></i>
              <p>Our Services</p>
            </div>

            <div>
              <ul className={styles.menu_items_list}>
                <li>Breakfast</li>
                <li>Brunch</li>
                <li>Lunch</li>
                <li>Dinner</li>
              </ul>
            <input type="text" name="" value={search} onChange={(e)=>setSearch(e.target.value)} id="" placeholder="search"/>

            <button onClick={()=>incSorted()}>a-z sort</button>
            <button onClick={()=>decSorted()}>z-a sort</button>

            </div>

            <div className={styles.api_menu}>
              {products
              .filter(x=>x.title.toLowerCase().includes(search.toLowerCase()))
              .map((x) => (
                <div className={styles.menu_item}>
                  <div onClick={() => addwishList(x)}>{isExitsAtwishList(x) ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>}</div>
                  <h2>{x.title}</h2>
                  <p>
                    with wild mushrooms and asparagus ----------------{" "}
                    <span>{x.price}$</span>
                  </p>
                  {isExitsAtBasket(x) ? (
                    <>
                      <p>count : {getCountFromBasket(x)}</p>
                     <div className={styles.buttons_basket}>
                     <button onClick={() => addBasket(x)}>+</button>
                      <button onClick={() => decBasket(x)}>-</button>
                      <button onClick={() => removeProduct(x)}>X</button>
                     </div>
                    </>
                  ) : (
                    <button onClick={() => addBasket(x)}>add basket</button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className={styles.contact_container}>
            <div className={styles.contact_map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d68716.05869918787!2d50.08914831670277!3d40.43433259069883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030606eefea1ed1%3A0x41cc40173c5f5edc!2zSGV5ZMmZciDGj2xpeWV2IEFkxLFuYSBCZXluyZlseGFscSBIYXZhIExpbWFuxLE!5e0!3m2!1saz!2saz!4v1716057239587!5m2!1saz!2saz"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className={styles.map}
              ></iframe>
              <div className={styles.contact_image}></div>
            </div>

            <div className={styles.contact_div}>
              <div className={styles.chicken_and_icon}>
                <i
                  class="fa-solid fa-drumstick-bite"
                  style={{ fontSize: "40px", color: "black" }}
                ></i>
                <p>Contact us</p>
              </div>
              <div className={styles.input_items}>
                <div className={styles.inputs_container}>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Name"
                    className={styles.inputs}
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Email"
                    className={styles.inputs}
                  />
                </div>
                <div className={styles.message_container}>
                  <textarea name="" id="" placeholder="Message"></textarea>
                </div>

                <div>
                  <button className={styles.button_send}>Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
