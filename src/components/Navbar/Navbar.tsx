import logo from "../../assets/icons/logo.png";
import card from "../../assets/icons/cart_icon.png";
import { TfiMenuAlt } from "react-icons/tfi";
import { RiCloseLine } from "react-icons/ri";
import "./Navbar.css";
import { useState } from "react";
import ClickingMenu from "../ClickingMenu/ClickingMenu";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar__container">
      <div className="navbar-logo">
        <img src={logo} alt="logo" />
        <h4>Organic</h4>
      </div>
      <div className="navbar-navigation">
        {isOpen ? (
          <RiCloseLine
            className="navbar-hamburger"
            size={46}
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <TfiMenuAlt
            className="navbar-hamburger"
            size={46}
            onClick={() => setIsOpen(true)}
          />
        )}
        <NavbarMenu />
        {isOpen && <ClickingMenu />}
      </div>
      <div className="navbar-store">
        <img src={card} alt=" store icon" />
        <span>Cart (0)</span>
      </div>
    </div>
  );
}

export default Navbar;
