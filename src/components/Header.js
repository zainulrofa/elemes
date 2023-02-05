import { useState } from "react";

// image
import logo from "../assets/logo.png";

// css
import style from "../styles/Header.module.css";

function Header() {
  // authentication state
  const [user, setUser] = useState(false);

  return (
    <header className="container-fluid ">
      <div className="container">
        <div className="row my-4">
          <div className="col-lg-3 col-6">
            <div className={style["logo"]}>
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className={`col-lg-6 ${style["navbar"]}`}>
            <ol>
              <li>Home</li>
              <li>About</li>
              <li className={style["navbar__promotions"]}>Promotions</li>
              <li>Blogs</li>
              <li>Contact Us</li>
              <div className={style["navbar__promotions--notif"]}>HOT</div>
            </ol>
          </div>
          <div className={`col-lg-3 col-6 ${style["button"]}`}>
            <button className={style["button__signin"]}>
              {user ? `` : `Masuk`}
            </button>
            <button className={style["button__signup"]}>
              {!user ? `Daftar Sekarang` : `Masuk`}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
