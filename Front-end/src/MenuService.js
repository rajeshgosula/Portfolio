import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuService = ({ menuItem }) => {
    const { title, submenus, path } = menuItem;
    const hasSubmenus = submenus && submenus.length > 0;
    const [submenuOpen, setSubmenuOpen] = useState(false);

    const toggleSubmenu = () => {
        setSubmenuOpen(!submenuOpen);
    };

    return (
        <li className={`nav-item ${hasSubmenus ? 'dropdown' : ''}`}>
            {hasSubmenus ? (
                <a className="nav-link" href="#" onClick={toggleSubmenu}>
                    {title}
                    {hasSubmenus && <span className="caret"></span>}
                </a>
            ) : (
                <Link className="nav-link" to={path}>
                    {title}
                </Link>
            )}
            {hasSubmenus && (
                <ul className={`dropdown-menu ${submenuOpen ? 'show' : ''}`} onMouseEnter={() => setSubmenuOpen(true)} onMouseLeave={() => setSubmenuOpen(false)}>
                    {submenus.map((submenu, index) => (
                        <li key={index}>
                            <Link className="dropdown-item" to={submenu.path}>
                                {submenu.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default MenuService;
