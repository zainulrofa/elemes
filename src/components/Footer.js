// image
import logo from "../assets/logo.png";

// css
import style from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={`container ${style["wrapper"]}`}>
        <div className="row">
          <div className="col-lg-5 col-12">
            <div className={style["logo"]}>
              <img src={logo} alt="" />
            </div>
            <div className={style["address"]}>
              <p>
                Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
                Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
                12950
              </p>
            </div>
            <div className={style["icon"]}>
              <div className={style["icon__wrapper"]}>
                <i className="fa-regular fa-envelope"></i>
              </div>
              <div className={style["icon__wrapper"]}>
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className={style["icon__wrapper"]}>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-12">
            <div className={style["categories"]}>
              <h1 className={style["categories__title"]}>Categories</h1>
              <ol>
                <li>Cupcake</li>
                <li>Pizza</li>
                <li>Kebab</li>
                <li>Salmon</li>
                <li>Dougnut</li>
              </ol>
            </div>
          </div>
          <div className="col-lg-2 col-12">
            <div className={style["aboutus"]}>
              <h1 className={style["aboutus__title"]}>About Us</h1>
              <ol>
                <li>About Us</li>
                <li>FAQ</li>
                <li>Report Problem</li>
              </ol>
            </div>
          </div>
          <div className="col-lg-3 col-12">
            <div className={style["newsletter"]}>
              <h1 className={style["newsletter__title"]}>Newsletter</h1>
              <div className={style["newsletter__promo"]}>
                <p>
                  Get now free 50% discount for alll products on your first
                  order
                </p>
              </div>
              <div className={style["newsletter__suggestion"]}>
                <input
                  type="text"
                  className={style["newsletter__suggestion--input"]}
                  placeholder="Your email address"
                />
                <button className={style["newsletter__suggestion--button"]}>
                  SEND
                </button>
              </div>
              <div className={style["newsletter__email"]}>
                <i className="fa-regular fa-envelope"></i>
                <p>elemesid@gmail.com</p>
              </div>
              <div className={style["newsletter__phone"]}>
                <i className="fa-solid fa-phone"></i>
                <p>0888 1111 2222 </p>
              </div>
            </div>
          </div>
        </div>
        <p className={style["copyright"]}>
          © 2021 Elemes id. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
