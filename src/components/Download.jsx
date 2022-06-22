import React from "react";
import styled from "styled-components";

import android from "../assets/android.jpg";
import ios from "../assets/ios.jfif";

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 25rem;
  margin: 8rem 0;
  background: #FF5F6D;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #FFC371, #FF5F6D);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #FFC371, #FF5F6D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

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
      //color: var(--primary-text-color);
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
`;

const Download = () => {
  return (
    <>
      <Section>
        <div className="info">
          <h1>Download the TravelGo app today!</h1>
          <p>
            Get the latest updates about our services right on your mobile.
          </p>
          <div className="downloads">
            <img src={android} alt="android" />
            <img src={ios} alt="ios" />
          </div>
        </div>
      </Section>
    </>
  );
};

export default Download;
