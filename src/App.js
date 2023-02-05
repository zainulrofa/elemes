import "./App.css";

// images
import salad from "./assets/salad.png";
import product1 from "./assets/product1.png";
import product2 from "./assets/product2.png";
import product3 from "./assets/product3.png";
import product4 from "./assets/product4.png";
import product5 from "./assets/product5.png";
import product6 from "./assets/product6.png";
import product7 from "./assets/product7.png";
import product8 from "./assets/product8.png";

// icons
import cupcake from "./assets/cupcake.png";
import pizza from "./assets/pizza.png";
import kebab from "./assets/kebab.png";
import salmon from "./assets/salmon.png";
import doughnut from "./assets/doughnut.png";

// css
import style from "./styles/Main.module.css";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  // categories
  const categories = [
    {
      name: "Cupcake",
      stock: 22,
      icon: cupcake,
      color: "#F0FEEB",
    },
    {
      name: "Pizza",
      stock: 25,
      icon: pizza,
      color: "#E6F3F5",
    },
    {
      name: "Kebab",
      stock: 12,
      icon: kebab,
      color: "#EAEEFA",
    },
    {
      name: "Salmon",
      stock: 22,
      icon: salmon,
      color: "#F9EEF3",
    },
    {
      name: "Doughnut",
      stock: 11,
      icon: doughnut,
      color: "#F3F7D9",
    },
  ];

  // product
  const product = [
    {
      image: product1,
      name: "Pizza Paperoni",
      category: "Pizza",
      rating: 4,
      color: "#E6F3F5",
    },
    {
      image: product2,
      name: "Pizza Meat",
      category: "Pizza",
      rating: 3,
      color: "#E6F3F5",
    },
    {
      image: product3,
      name: "Doner Kebab",
      category: "Kebab",
      rating: 5,
      color: "#EAEEFA",
    },
    {
      image: product4,
      name: "Salmon Roll",
      category: "Salmon",
      rating: 4,
      color: "#F9EEF3",
    },
    {
      image: product5,
      name: "Cupcake Choco",
      category: "Cupcake",
      rating: 4,
      color: "#F0FEEB",
    },
    {
      image: product6,
      name: "Doughnut Milk",
      category: "Doughnut",
      rating: 5,
      color: "#F3F7D9",
    },
    {
      image: product7,
      name: "Doughnut Unicorn",
      category: "Doughnut",
      rating: 4,
      color: "#F3F7D9",
    },
    {
      image: product8,
      name: "Kathi Kebab",
      category: "Kebab",
      rating: 4,
      color: "#EAEEFA",
    },
  ];

  // let box = document.querySelector(".categoriesWrapper");

  // const btnpressprev = () => {
  //   let width = box.clientWidth;
  //   box.scrollLeft = box.scrollLeft - width;
  //   console.log(width);
  // };

  // const btnpressnext = () => {
  //   let width = box.clientWidth;
  //   box.scrollLeft = box.scrollLeft + width;
  //   console.log(width);
  // };

  return (
    <div className="App">
      <div className={style["background"]}>
        <Header />
        <div className="container px-lg-1 px-4">
          <div className="row">
            <div className={`col-lg-6 col-12 ${style["topLeft"]}`}>
              <h1 className={style["topLeft__title"]}>
                Good Food Us Good Mood
              </h1>
              <p className={style["topLeft__msg"]}>
                I would think that conserving our natural resources should be a
                conservative position: Not to waste food, and not to throw away
                a lot of the food that we buy.
              </p>
              <div className={style["topLeft__button"]}>
                <button className={style["topLeft__button--signup"]}>
                  Daftar Sekarang
                </button>
                <button className={style["topLeft__button--aboutus"]}>
                  About Us
                </button>
              </div>
            </div>
            <div
              className={`col-lg-6 col-12 my-lg-0 my-5 ${style["topRight"]}`}
            >
              <div className={style["topRight__imgWrapper"]}></div>
              <img src={salad} alt="salad" className={style["topRight__img"]} />
              <div className={style["cardTop"]}>
                <img src={salad} alt="" className={style["cardTop__img"]} />
                <div className={style["cardTop__content"]}>
                  <p className={style["cardTop__content--title"]}>
                    Green Salad Tomato
                  </p>
                  <p className={style["cardTop__content--ingredients"]}>
                    Tomato
                  </p>
                  <div className={style["cardTop__rating"]}>
                    <i
                      className={`fa-solid fa-star ${style["cardTop__rating--fulfilled"]}`}
                    ></i>
                    <i
                      className={`fa-solid fa-star ${style["cardTop__rating--fulfilled"]}`}
                    ></i>
                    <i
                      className={`fa-solid fa-star ${style["cardTop__rating--fulfilled"]}`}
                    ></i>
                    <i
                      className={`fa-solid fa-star ${style["cardTop__rating--fulfilled"]}`}
                    ></i>
                    <i
                      className={`fa-solid fa-star ${style["cardTop__rating--unfulfilled"]}`}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            {/* mobile responsive */}
            <div className="col-12 d-lg-none d-inline my-5">
              <p className={style["topLeft__msg--mobile"]}>
                I would think that conserving our natural resources should be a
                conservative position: Not to waste food, and not to throw away
                a lot of the food that we buy.
              </p>
              <div className={style["topLeft__buttonMobile"]}>
                <button className={style["topLeft__buttonMobile--signup"]}>
                  Daftar Sekarang
                </button>
                <button className={style["topLeft__buttonMobile--aboutus"]}>
                  About Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`container ${style["categoriesSlider"]}`}>
        <h1 className={style["content__title"]}>Browser Our Category</h1>
        <h2 className={style["content__receipt"]}>Receipt</h2>
        <div className={style["categoriesWrapper"]}>
          {categories.map((e) => (
            <div
              className={style["cardCategories"]}
              style={{
                background: `${e.color}`,
              }}
            >
              <img
                src={e.icon}
                alt="icon"
                className={style["cardCategories__icon"]}
              />
              <p className={style["cardCategories__name"]}>{e.name}</p>
              <p
                className={style["cardCategories__stock"]}
              >{`${e.stock} items`}</p>
            </div>
          ))}
        </div>
        <div className={style["categoriesButton"]}>
          <button
            className={style["categoriesButton__prev"]}
            // onClick={btnpressprev}
          >
            <div className={style["categoriesButton__prev--icon"]}>
              <i className="fa-solid fa-chevron-left"></i>
            </div>
            Prev
          </button>
          <button
            className={style["categoriesButton__next"]}
            // onClick={btnpressnext}
          >
            Next
            <div className={style["categoriesButton__prev--icon"]}>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </button>
        </div>
      </div>
      <div className="container">
        <h1 className={style["content__title"]}>Browser Our Trending</h1>
        <h2 className={style["content__receipt"]}>Receipt</h2>
        <div className={style["productWrapper"]}>
          {product.map((e) => (
            <div
              className={style["cardProduct"]}
              style={{
                background: `${e.color}`,
              }}
            >
              <img
                src={e.image}
                alt="product"
                className={style["cardProduct__image"]}
              />
              <p className={style["cardProduct__name"]}>{e.name}</p>
              <p className={style["cardProduct__categories"]}>{e.category}</p>
              <div className="cardProduct__rating">
                <i
                  className={`fa-solid fa-star ${style["cardProduct__rating--fulfilled"]}`}
                ></i>
                <i
                  className={`fa-solid fa-star ${style["cardProduct__rating--fulfilled"]}`}
                ></i>
                <i
                  className={`fa-solid fa-star ${style["cardProduct__rating--fulfilled"]}`}
                ></i>
                <i
                  className={`fa-solid fa-star ${style["cardProduct__rating--fulfilled"]}`}
                ></i>
                <i
                  className={`fa-solid fa-star ${style["cardProduct__rating--unfulfilled"]}`}
                ></i>
              </div>
            </div>
          ))}
          <div className={style["productBtn"]}>
            <button className={style["productBtn__all"]}>ALL Receipt</button>
          </div>
        </div>
      </div>
      <Footer />
      {/* mobile bar */}
      <div className={style["footerBar"]}>
        <div
          className={style["footerBar__wrapper"]}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <i
            className={`fa-solid fa-bars ${style["footerBar_wrapper--bar"]}`}
          ></i>
          <p className={style["footerBar__wrapper--title"]}>Home</p>
        </div>
        <div className={style["footerBar__wrapper"]}>
          <i
            className={`fa-solid fa-bars ${style["footerBar_wrapper--bar"]}`}
          ></i>
          <p className={style["footerBar__wrapper--title"]}>Promotions</p>
        </div>
        <div className={style["footerBar__wrapper"]}>
          <i
            className={`fa-solid fa-bars ${style["footerBar_wrapper--bar"]}`}
          ></i>
          <p className={style["footerBar__wrapper--title"]}>Others</p>
        </div>
      </div>
    </div>
  );
}

export default App;
