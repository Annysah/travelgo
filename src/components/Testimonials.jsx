import React from "react";
import styled from "styled-components";

const Section = styled.section`
  margin-top: 8rem;
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
        line-height: 2;
        color: #666;
        margin-top: 2rem;
        margin-bottom: 1.5rem;
      }

      .customer-details {
        display: flex;
        gap: 1rem;

        .travel-title {
          font-size: 0.9rem;
          font-weight: 100;
        }
      }
    }
  }

  .half-width {
    height: 22rem;
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 4rem 1rem;
    align-items: flex-start;

    .content {
      gap: 0.5rem;

      .title-container {

        h1 {
          font-size: 1.5rem;
          text-align: center;
        }
      }

      .text-content-wrapper {
        flex-direction: column;

        p {
          font-size: 0.8rem;
        }

        .customer-details {
          h4, .travel-title {
            font-size: 0.6rem;
          }
        }
      }

      .half-width {
        max-inline-size: 100%;
        block-size: auto;
      }
    }
  }
`;

const Testimonials = () => {
  return (
    <>
      <Section>
        <div className="content">
          <div className="title-container">
            <div>
              <h1>What Our Customers Say</h1>
            </div>
          </div>
          <div className="text-content-wrapper">
            <div>
              <p>What they say –</p>
              <p>
                "My whole experience with TravelGo was amazing. The customer
                support service was top notch, they attended swiftly to all of
                my enquiries. As a first time customer, I also enjoyed the
                benefit of a 30% discount on all my trips. I would definitely
                recommend TravelGo to my friends and family."
              </p>
              <div className="customer-details">
                <h4>Jane Doe</h4>
                <span className="travel-title">● Travel Enthusiast</span>
              </div>
            </div>
            <div className="image">
              <img src="https://res.cloudinary.com/annysah/image/upload/v1656353645/testimonial_dgqfc5.jpg" alt="testimonial" className="half-width" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Testimonials;
