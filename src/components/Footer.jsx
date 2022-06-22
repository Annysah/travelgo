import React from "react";
import styled from "styled-components";

import Button from "./Button";

const FooterSection = styled.footer`
  .upper-footer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
    border-bottom: 1px solid #ccc;
    padding-bottom: 2rem;
    gap: 5rem;
    .col {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      color: var(--secondary-text);
      h2 {
        color: black;
      }
      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          cursor: pointer;
          transition: var(--default-transition);
          &:hover {
            color: var(--primary-color);
          }
        }
      }
      .newsletter {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        input {
          padding: 1rem 2rem;
          border: none;
          font-size: 1.1rem;
          color: white;
          cursor: pointer;
          background-color: #f8f8f8;
        }
      }
    }
  }
  .lower-footer {
    padding: 2rem 0;
    text-align: center;
    a {
      text-decoration: none;
      color: #ff7424;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem;
    .upper-footer {
      grid-template-columns: 1fr;
    }
  }
`;

const Footer = () => {
  const quickLinks = [
    "About Us",
    "Destinations",
    "Blog",
    "Privacy Policy",
    "Contact Us",
  ];
  const supportLinks = [
    "Customer Support",
    "Terms & Condition",
    "FAQ",
    "Tour Guide",
  ];
  return (
    <FooterSection>
      <div className="upper-footer">
        <div className="col">
          <div className="brand">
            <div className="logo">
              <h2>TravelGo</h2>
            </div>
          </div>
          <ul>
            <li>
              <span>+234 802 000 0000 </span>
            </li>
            <li>
              <span>travelgo@email.com</span>
            </li>
          </ul>
        </div>
        <div className="col">
          <h2>Quick Links</h2>
          <ul>
            {quickLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h2>Support</h2>
          <ul>
            {supportLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h2>Newsletter</h2>
          <div className="newsletter">
            <input type="text" placeholder="Enter your email" />
            <Button text="Subscribe" />
          </div>
        </div>
      </div>
      <div className="lower-footer">
        <span>
          Designed by <a href="#">Annysah</a> &copy;2022 TravelGo.
        </span>
      </div>
    </FooterSection>
  );
};

export default Footer;