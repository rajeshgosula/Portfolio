import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MenuService from "./MenuService";
import { MenuItems } from "./Components/MenuItems";
import Profile from "./Assests/profile.jpg"
import "./Navbar.css";


const Navbar = () => {
  const [menuItems, setMenuItems] = useState([]);
 const [sticky, setSticky]=useState(false)
 const navigate = useNavigate()
 useEffect(()=>{
  window.addEventListener('scroll',()=>{
window.scrollY > 50? setSticky(true):setSticky(false)
  })
},[])
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

const handleNavigate=()=>{
  navigate("/Contact")
}
  return (
    <nav className={`NavbarContainer ${sticky ?'dark-nav':''}`}>
      <div className="Profile">
        <img src={Profile}  alt="Rajesh Gosula" className="logo">  
        </img>
        </div>
        <ul>
            <li>
          {menuItems.map((menuItem, index) => (
            <MenuService key={index} menuItem={menuItem} />
          ))}
          </li>
          <button className="btn" onClick={handleNavigate}>Let's Talk</button>
        </ul>
      </nav>
  );
};

export default Navbar;
