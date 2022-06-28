import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 25rem;
  margin: 8rem 0;
  background: #ff5f6d;
  background: -webkit-linear-gradient(to right, #ffc371, #ff5f6d);
  background: linear-gradient(to right, #ffc371, #ff5f6d);
  padding: 0 10rem;
  position: relative;
  overflow: hidden;

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 0 8rem;
    color: #fff;

    h1 {
      font-size: 2.5rem;
      text-align: center;
    }

    p {
      font-size: 1.1rem;
      text-align: center;
      margin-bottom: 1.3rem;
    }

    .downloads {
      display: flex;
      gap: 1rem;

      img {
        height: 3rem;
        cursor: pointer;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem 0;
    height: 18rem;
    padding: 0 2rem;

    .info {
      margin: 0 1rem;
      gap: 2rem;

      h1 {
        font-size: 1rem;
      }

      p {
        display: none;
      }

      .downloads {
        flex-direction: column;

        img {
          max-inline-size: 100%;
          block-size: auto;
        }
      }
    }
  }
`;

const Download = () => {
  return (
    <>
      <Section>
        <div className="info">
          <h1>Download the TravelGo app today!</h1>
          <p>Get the latest updates about our services right on your mobile.</p>
          <div className="downloads">
            <img src="https://res.cloudinary.com/annysah/image/upload/v1656433849/android_teibdb.jpg" alt="android" />
            <img src="https://res.cloudinary.com/annysah/image/upload/v1656433849/ios_g6hks0.jpg" alt="ios" />
          </div>
        </div>
      </Section>
    </>
  );
};

export default Download;
