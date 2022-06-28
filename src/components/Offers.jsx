import React from "react";
import styled from "styled-components";
import { BsPerson } from "react-icons/bs";
import { BiMoney, BiSupport } from "react-icons/bi";

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

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 5rem 1rem;
    flex-direction: column;
    gap: 1rem;

    .image {
      img {
        max-inline-size: 100%;
        block-size: auto;
      }
    }

    .content {
      .title {
        h1 {
          font-size: 1.5rem;
          text-align: center;
        }
      }

      .list {
        li {
          gap: 1rem;
          margin: 2rem 0;

          .text {
            h3 {
              font-size: 0.8rem;
            }
          }
        }
      }
    }
  }
`;

const Offers = () => {
  const data = [
    {
      text: "Best Tour Guide",
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
          <img src="https://res.cloudinary.com/annysah/image/upload/v1656433853/offer_xtmvyn.jpg" alt="" />
        </div>
        <div className="content">
          <div className="title">
            <h1>Our Offers</h1>
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
