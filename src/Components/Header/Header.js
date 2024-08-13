import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { auth } from "../../Utility/firebase"; // Ensure correct path to firebase
import classes from "./Header.module.css";
import LowerHeader from "./LowerHeader"; // Ensure LowerHeader is correctly imported

function Header() {
  const [{ user, basket }] = useContext(DataContext);

  const totalItem = basket?.reduce((amount, item) => item.amount + amount, 0);

  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/small/amazon_PNG25.png"
                alt="amazon logo"
              />
            </Link>
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span>USA</span>
              </div>
            </div>
          </div>
          <div className={classes.search}>
            <select name="category" id="category">
              <option value="">All</option>
            </select>
            <input type="text" />
            <BsSearch size={38} />
          </div>
          <div className={classes.order_container}>
            <Link to="/" className={classes.language}>
              <img
                src="https://pngimg.com/uploads/flags/flags_PNG14592.png"
                alt="flag"
              />
              <select name="language" id="language">
                <option value="EN">EN</option>
              </select>
            </Link>
            <Link to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello {user?.email?.split("@")[0]}</p>
                    <span onClick={() => auth.signOut()}> Sign Out</span>
                  </>
                ) : (
                  <>
                    <p>Hello, Sign In</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </Link>
            <Link to="/orders">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>
            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header;


/*import React, { useContext } from "react";
import classes from"./Header.module.css";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import LowerHeader from "./LowerHeader"
import { BiCart } from "react-icons/bi";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";


function Header() {
  const [{ user, basket }, dispatch] = useContext(DataContext);

  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            <Link to="/">
              <img
                src='https://pngimg.com/uploads/amazon/small/amazon_PNG25.png'
                alt="amazon logo"
              />
            </Link>
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span>USA</span>
              </div>
            </div>
          </div>
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <BsSearch size={38} />
          </div>
          <div className={classes.order_container}>
            <Link to="/" className={classes.language}>
              <img
                src="https://pngimg.com/uploads/flags/flags_PNG14592.png"
                alt=""/>
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>
            <Link to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello {user?.email?.split("@")[0]}</p>
                    <span onClick={() => auth.signOut()}> Sign Out</span>
                  </>
                ) : (
                  <>
                    <p>Hello, Sign In</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </Link>
            <Link to="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
 
<LowerHeader/>
      </section>



  
  );
}

export default Header;*/