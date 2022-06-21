import React from "react";
import styled from "styled-components";
import { BsFillStarFill } from "react-icons/bs";

import place from "../assets/place.avif";
import place2 from "../assets/place2.avif";
import place3 from "../assets/place3.avif";

const TourSection = styled.section`
  margin-top: 7rem;
  margin-bottom: 5rem;

  h2 {
    margin-bottom: 3rem;
    text-align: center;
    font-size: 2.5rem;
    color: var(--primary-text-color);
  }

  .tours {
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin-bottom: 3rem;
    align-items: center;

    .tour {
      position: relative;

      .image {
        img {
          height: 27rem;
        }
      }

      .info {
        display: flex;
        align-items: center;
        gap: 1rem;
        position: absolute;
        bottom: -30px;
        width: 100%;
        background-color: #fff;
        box-shadow: 0px 7px 29px 0 rgba(100, 100, 111, 0.2);
        padding: 1rem;

        .details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;

          .price-details {
            display: flex;
            gap: 7rem;

            .price {
                color: #ff7424;
                font-weight: bold;
            }

            .reviews {
                display: flex;
                gap: 0.5rem;

                .stars {
                    svg {
                        color: #fdda0d;
                    }
                }
            }      
          }
        }
     }
  }
`;

const Tour = () => {
  const data = [
    {
      image: place,
      text: "Burj Khalifa, UAE",
      price: 4000,
    },
    {
      image: place2,
      text: "Venice, Italy",
      price: 6000,
    },
    {
      image: place3,
      text: "Paris, France",
      price: 6000,
    },
  ];
  return (
    <>
      <TourSection id="tour">
        <h2>Top Destinations</h2>
        <div className="tours">
          {data.map(({ image, text, price }, index) => {
            return (
              <div className="tour" key={text}>
                <div className="image">
                  <img src={image} alt="Destination images" />
                </div>
                <div className="info">
                  <div className="details">
                    <h4>{text}</h4>
                    <div className="price-details">
                      <div className="price">${price}</div>
                      <div className="reviews">
                        <div className="stars">
                          <BsFillStarFill />
                          <BsFillStarFill />
                          <BsFillStarFill />
                          <BsFillStarFill />
                          <BsFillStarFill />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </TourSection>
    </>
  );
};

export default Tour;
