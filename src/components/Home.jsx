import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

import hero from "../assets/hero.avif";

const HomeSection = styled.section`
  margin-top: 1.7rem;
  position: relative;

  .background {
    background: url(${hero});
    background-size: cover;
    background-position: 85% 15%;
    background-repeat: no-repeat;
    width: 100%;
    height: 90vh;
  }

  .content {
    .info {
      position: absolute;
      top: 4.8rem;
      left: 10%;
      text-align: center;

      h1 {
        font-size: 5rem;
        color: var(--primary-text-color);
        margin-bottom: 1.3rem;
      }

      p {
        font-size: 1rem;
        color: var(--primary-text-color);
        margin-bottom: 1.5rem;
      }
    }

    .planner {
      position: absolute;
      right: 0;
      bottom: -2rem;
      background-color: #ffffff;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      padding: 2rem;
      box-shadow: 0px 7px 29px 0 rgba(100, 100, 111, 0.2);

      form {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3rem;

        .row {
          display: flex;
          flex-direction: column;
          text-align: start;

          label {
            font-size: 0.9rem;
            color: var(--secondary-text-color);
          }

          input,
          select {
            border: none;
            width: 100%;
            color: #777;
            font-size: 1rem;
            font-weight: 500;
            margin-top: 0.5rem;
            background-color: #fff;
            border-bottom: 1px solid #ccc;
            padding-bottom: 0.4rem;
          }

          input:focus {
            outline: none;
          }
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .background {
      height: 55vh;
    }
    .content {
      .info {
        top: 2.5rem;
        left: 5%;
        h1 {
          font-size: 1.4rem;
          margin-bottom: 0.3rem;
        }

        p {
          font-size: 0.8rem;
          font-weight: bold;
          margin-top: 1.5rem;
          margin-bottom: 1.1rem;
          padding: 0 1.2rem;
        }
      }
      .planner {
        position: initial;
        margin: 2rem;
        form {
          align-items: flex-start;
          flex-direction: column;
        }
      }
    }
  }
`;

const Home1 = () => {
  const [value, setValue] = useState("$1000 - $10000");
  return (
    <>
      <HomeSection>
        <div className="background"></div>
        <div className="content">
          <div className="info">
            <h1>Explore new places with </h1>
            <h1>TravelGo</h1>
            <p>
              With our unique offers you are sure to get the most unforgettable
              experience.
            </p>
            <Button text="Get Started" />
          </div>
          <div className="planner">
            <form>
              <div className="row">
                <label>Location</label>
                <select>
                  <option>Where are you going?</option>
                  <option>Abu Dhabi, UAE</option>
                  <option>Kigali, Rwanda</option>
                  <option>Santorini, Greece</option>
                </select>
              </div>
              <div className="row">
                <label>Check In</label>
                <input type="date" placeholder="Choose date" />
              </div>
              <div className="row">
                <label>Average Price</label>
                <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
              <div className="row">
                <Button text="Search" />
              </div>
            </form>
          </div>
        </div>
      </HomeSection>
    </>
  );
};

export default Home1;
