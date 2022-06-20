import React from "react";
import styled from "styled-components";

import Button from "./Button";
import about from "../assets/about2.avif";

const Section = styled.section`
  margin-top: 7rem;
  display: flex;
  align-items: center;
  gap: 3rem;

  .content {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    .title-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 3rem;
      gap: 0.5rem;

      h1 {
        font-size: 2.5rem;
        color: var(--primary-text-color);
      }
    }

    .text-content-wrapper {
      display: flex;
      gap: 3rem;

      p {
        font-size: 1.1rem;
        line-height: 1.5;
        color: #666;
        margin-top: 2.2rem;
        margin-bottom: 1.3rem;
      }
    }
  }

  .half-width {
    height: 55vh;
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .title-container {
      text-align: center;
    }
  }
`;

const About = () => {
  return (
    <Section>
      <div className="content">
        <div className="title-container">
          <div>
            <h1>Why TravelGo?</h1>
          </div>
        </div>
        <div className="text-content-wrapper">
          <div>
            <p>Flexible Offers –</p>
            <p>
              We always ensure customers satifaction by providing as many travel
              destinations as possible all at very affordable prices. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur.
            </p>
            <Button text="Learn More" />
          </div>
          <div className="image">
            <img src={about} alt="about" className="half-width" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
