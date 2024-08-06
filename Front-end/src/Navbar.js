import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MenuService from "./MenuService";
import { MenuItems } from "./Components/MenuItems";
import Profile from "./Assests/profile.jpg";
import "./Navbar.css";

const Navbar = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for menu visibility
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const data = await MenuItems();
        setMenuItems(data.menuItems);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };
    fetchMenuItems();
  }, []);

  const handleNavigate = () => {
    navigate("/Contact");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  return (
    <nav className={`NavbarContainer ${sticky ? "dark-nav" : ""}`}>
      <div className="Profile">
        <img src={Profile} alt="Rajesh Gosula" className="logo" />
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776; 
      </div>
      <ul className={menuOpen ? "show" : ""}>
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            <MenuService menuItem={menuItem} />
          </li>
        ))}
        <button className="btn" onClick={handleNavigate}>Let's Talk</button>
      </ul>
    </nav>
  );
};

export default Navbar;
