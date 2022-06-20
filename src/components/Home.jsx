import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

import hero from "../assets/hero2.avif";

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
        top: 4.5rem;
        left: 22%;
        //margin-left: 4rem;

        h1 {
            text-align: left;
            font-size: 5rem;
            color: var(--primary-text-color);
            margin-bottom: 1.3rem;
        }

        p {
            text-align: left;
            font-size: 1.1rem;
            color: var(--primary-text-color);
            margin-bottom: 1.5rem;
        }
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

          input, select {
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
`;

const Home = () => {
  const [value, setValue] = useState("$1000 - $10000");
  return (
    <>
      <HomeSection>
        <div className="background">
          {/*<img src={hero} alt="The hero section image" />*/}
        </div>
        <div className="content">
          <div className="info">
            <h1>Explore new places</h1>
            <h1>with TravelGo</h1>
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
                <Button text="Discover More" />
              </div>
            </form>
          </div>
        </div>
      </HomeSection>
    </>
  );
};

export default Home;
