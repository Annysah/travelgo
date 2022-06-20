import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { BsPerson, BsSearch } from "react-icons/bs";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    h2 {
      font-size: 2.5rem;
      cursor: pointer;
      color: var(--primary-text-color);
    }
  }

  .toggle {
    display: none;
  }

  .links {
    ul {
      display: flex;
      gap: 3rem;
      list-style-type: none;

      li {
        a {
          text-decoration: none;
          font-size: 1rem;
          color: var(--primary-text-color);
          cursor: pointer;
          transition: var(--transition);

          &:hover {
            color: #ff7424;
          }
        }
      }
    }
  }

  .account-info {
    display: flex;
    cursor: pointer;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <h2>TravelGo</h2>
      </div>
      <div className="toggle"></div>
      <div className="links">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#destinations">Offers</a>
          </li>
          <li>
            <a href="#pricing">Destinations</a>
          </li>
          <li>
            <a href="#tour">Tour</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
        </ul>
      </div>

      <div className="account-info">
        <Button text="Login" />
      </div>
    </Nav>
  );
};

export default Navbar;
