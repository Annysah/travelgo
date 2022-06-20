import React from "react";
import styled from "styled-components";
import { BsPerson } from "react-icons/bs";
import { BiMoney, BiSupport } from "react-icons/bi";

import offer from "../assets/offer.avif";

const OfferSection = styled.section`
  display: flex;
  gap: 8rem;
  margin-top: 8rem;
  

  .image {
    img {
      width: 520px;
      height: 32rem;
    }
  }

  .content {
    .title {
      margin: 3rem 0;

      h1 {
        font-size: 2.5rem;
        color: var(--primary-text-color);
      }
    }

    .list {
      list-style-type: none;

      li {
        display: flex;
        align-items: center;
        gap: 4rem;
        margin: 4rem 0;

        .icon {
          padding: 0.5rem;
          border-radius: 1rem;
          font-size: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .pink {
          background-color: #ffc2cd;
          color: #ff084a;
        }

        .green {
          background-color: #abd5ab;
          color: #007f00;
        }

        .yellow {
          background-color: #fff9c4;
          color: #ffd600;
        }
      }
    }
  }
`;

const Offers = () => {
  const data = [
    {
      text: "Best Travel Guide",
      icon: <BsPerson />,
      color: "pink",
    },
    {
      text: "Lots of Discounts",
      icon: <BiMoney />,
      color: "green",
    },
    {
      text: "Customer Support ",
      icon: <BiSupport />,
      color: "yellow",
    },
  ];
  return (
    <>
      <OfferSection>
        <div className="image">
          <img src={offer} alt="" />
        </div>
        <div className="content">
          <div className="title">
            <h1>
              Our Offers
            </h1>
          </div>
          <ul className="list">
            {data.map(({ text, icon, color }) => {
              return (
                <li key={text}>
                  <div className={`icon ${color}`}>{icon}</div>
                  <div className="text">
                    <h3>{text}</h3>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </OfferSection>
    </>
  );
};

export default Offers;