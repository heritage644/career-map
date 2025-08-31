import React, { useState,useEffect,  } from "react";
import { Link } from "react-router-dom"

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
function openSideBar () {
if (isOpen) {
      document.body.classList.add("no-scroll");
    
      
} else {
     document.body.classList.remove("no-scroll");

}

}
useEffect(() =>{
 openSideBar()

}, [isOpen] )

  return (
    <div>
      {/* Menu Icon */}
      <div
        className={`menu-icon ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Side Menu */}
      <nav className={`side-menu ${isOpen ? "show" : ""}`}>
        <ul>
          <li><Link to="/home" > Home</Link></li>
          <li><Link to="">About</Link></li>
          <li><Link to="">Services</Link></li>
          <li><Link to="">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;

