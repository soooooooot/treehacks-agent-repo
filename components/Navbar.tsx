import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link href="/">MyApp</Link>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link href="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link href="/about" className="navbar-link">
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link href="/services" className="navbar-link">
              Services
            </Link>
          </li>
          <li className="navbar-item">
            <Link href="/contact" className="navbar-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .navbar {
          background-color: #333;
          padding: 1rem 0;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .navbar-logo a {
          color: #fff;
          font-size: 1.5rem;
          font-weight: bold;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .navbar-logo a:hover {
          color: #61dafb;
        }

        .navbar-menu {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 2rem;
        }

        .navbar-item {
          margin: 0;
        }

        .navbar-link {
          color: #fff;
          text-decoration: none;
          font-size: 1rem;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          transition: background-color 0.3s ease, color 0.3s ease;
          display: block;
        }

        .navbar-link:hover {
          background-color: #555;
          color: #61dafb;
        }

        @media (max-width: 768px) {
          .navbar-container {
            flex-direction: column;
            gap: 1rem;
          }

          .navbar-menu {
            flex-direction: column;
            gap: 0.5rem;
            width: 100%;
            text-align: center;
          }

          .navbar-link {
            width: 100%;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
