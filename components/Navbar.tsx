import React from 'react';
import './Navbar.css';

interface NavItem {
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">MyWebsite</a>
        </div>
        <ul className="navbar-menu">
          {navItems.map((item) => (
            <li key={item.label} className="navbar-item">
              <a href={item.href} className="navbar-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
