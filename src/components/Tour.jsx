import React from "react";
import styled from "styled-components";
import { BsFillStarFill } from "react-icons/bs";

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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5rem;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;

    .tour {
      position: relative;

      .image {
        img {
          height: 28rem;
        }
      }

      .info {
        display: flex;
        align-items: center;
        gap: 1rem;
        position: absolute;
        bottom: -30px;
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
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0 2rem;

    h2 {
      font-size: 1.5rem;
    }

    .tours {
      grid-template-columns: 1fr;

      .tour {
        .image {
          img {
            max-inline-size: 100%;
            block-size: auto;
          }
        }

        .info {
          padding: 0.5rem;

          .details {
            font-size: 0.6rem;

            .price-details {
              flex-direction: column;
              gap: 0.5rem;
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
      image: "https://res.cloudinary.com/annysah/image/upload/v1656353645/place_a5v74c.avif",
      text: "Burj Khalifa, UAE",
      price: 4000,
    },
    {
      image: "https://res.cloudinary.com/annysah/image/upload/v1656353645/place2_bx0t5m.avif",
      text: "Venice, Italy",
      price: 6000,
    },
    {
      image: "https://res.cloudinary.com/annysah/image/upload/v1656353645/place3_irxxsj.avif",
      text: "Paris, France",
      price: 6000,
    },
    {
      image: "https://res.cloudinary.com/annysah/image/upload/v1656353645/place4_ekiv4o.avif",
      text: "Aurelian Walls, Rome",
      price: 5000,
    },
    {
      image: "https://res.cloudinary.com/annysah/image/upload/v1656353645/place5_kiwh74.avif",
      text: "Moscow, Russia",
      price: 9000,
    },
    {
      image: "https://res.cloudinary.com/annysah/image/upload/v1656353646/place6_dznbma.avif",
      text: "Tulum, Mexico",
      price: 7000,
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
