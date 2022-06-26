import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

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

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: relative;
    padding: 1rem 0.5rem;
    z-index: 10;

    .logo {
      h2 {
        font-size: 1.5rem;
      }
    }

    .account-info {
      display: none;
    }

    .toggle {
      color: var(--primary-text-color);
      padding-right: 1rem;
      display: block;
      z-index: 1;
    }
    
    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }

    .links {
      position: absolute;
      overflow-x: hidden;
      top: 0;
      right: 0;
      width: ${({ state }) => (state ? "60%" : "0%")};
      height: 100vh;
      background-color: #ffcd9b;
      opacity: 0;
      visibility: hidden;
      transition: 0.4s ease-in-out;

      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;

        li {
          a {
            color: var(--primary-text-color);
            font-size: 0.8rem;
          }
        }
      }
    }
  }
`;

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", (e) => setIsNavOpen(false));
  return (
    <Nav state={isNavOpen ? 1 : 0}>
      <div className="logo">
        <h2>TravelGo</h2>
      </div>
      <div className="toggle">
        {isNavOpen ? (
          <MdClose onClick={() => setIsNavOpen(false)} />
        ) : (
          <GiHamburgerMenu
            onClick={(e) => {
              e.stopPropagation();
              setIsNavOpen(true);
            }}
          />
        )}
      </div>
      <div className={`links ${isNavOpen ? "show" : ""}`}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#offers">Offers</a>
          </li>
          <li>
            <a href="#destination">Destinations</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
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
