/* This file contains the code for the Reviews section of the Home page */

import ReviewCard from "./ReviewCard";
import Customer1 from "@assets/img/customer-1.jpeg";
import Customer2 from "@assets/img/customer-2.jpeg";
import Customer3 from "@assets/img/customer-3.jpeg";
import Customer4 from "@assets/img/customer-4.jpg";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
/**
 * @name Reviews
 * @summary Renders the Reviews section of the Home page
 * @returns HTML elements of the Reviews section
 */

interface ICustomer {
  image: string,
  name: string,
  date: string,
  content: string
}

//mock data, should fetch from BE
const mockData: ICustomer[] = [
  {
    image: Customer1,
    name: 'Millicent Gray',
    date: 'Feb 16, 2023',
    content: 'Came out so quickly, was very thorough also letting me know some other things about the car. Fixed it up super quick. Very lovely. Very honest. Highly recommend !!!'
  },
  {
    image: Customer2,
    name: 'Scott Mainey',
    date: 'Jan 17, 2023',
    content: 'Lachlan was an awesome help. Lachlan was able to diagnose the issue on an older vehicle and was able to fix the issue providing additional suggestions and advice for potential future issues. Lachlan was punctual and took the time to explain clearly what happened and why in easy to understand language. Great service and well priced. Will definitely use again.'
  },
  {
    image: Customer3,
    name: 'Lisa Elliott',
    date: 'Nov 17, 2022',
    content: 'Can’t recommend Kashy enough. After years of dreading interactions with mechanics who proved themselves to be sexist, rude and unexplainably expensive time and time again, it is such a relief to find a reliable mechanic with excellent customer service. As a queer woman, it feels safe and convenient that they come to me at home, speak with me politely and will answer my questions with patience and respect. If you are a woman, LGBTQIA+ or a member of any minority, here’s a mechanic you can feel safe with and respected by.'
  },
  {
    image: Customer4,
    name: 'Peter Clark',
    date: 'Sep 22, 2022',
    content: 'Yet again, Lachlan has exceeded expectations. I had dropped him an email regarding a small leak in the cooling system - he dropped in next morning to inspect between other jobs, diagnosed the issue and returned 2 days later with replacement seals and completed the repair in less than an hour, all for a very reasonable cost. Done & dusted inside 3 days, without leaving the garage or waiting weeks for an appointment. Great work and thanks again Lachlan.'
  },
  {
    image: Customer4,
    name: 'Peter Clark',
    date: 'Sep 22, 2022',
    content: 'Yet again, Lachlan has exceeded expectations. I had dropped him an email regarding a small leak in the cooling system - he dropped in next morning to inspect between other jobs, diagnosed the issue and returned 2 days later with replacement seals and completed the repair in less than an hour, all for a very reasonable cost. Done & dusted inside 3 days, without leaving the garage or waiting weeks for an appointment. Great work and thanks again Lachlan.'
  }
]
export default function Reviews() {
  const [customers, setCustomers] = useState<ICustomer[]>(mockData);
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 850,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="review">
      <div className="container">
        <Slider {...settings}>
          {
            customers.length ? 
              customers.map((customer: ICustomer, index) => {
                return(
                  <ReviewCard
                    key={index}
                    imageSrc={customer.image}
                    name={customer.name}
                    date={customer.date}
                    content={customer.content}
                  />
                )
              })
            : null
          }
        </Slider>
        <div className="review__list">
          {/* <!-- Review item 1 --> */}
          {/* <section className="review-item">
            <a
              href="https://www.google.com/maps/contrib/101665379278292988752/reviews"
              className="review-link"
              target="_blank"
              rel="noreferrer"
            >
              <div className="review-item__img-area">
                <img
                  src="../assets/img/customer-1.jpeg"
                  alt="Customer Img"
                  className="review-item__img-customer"
                />
              </div>

              <p className="review-link__name">Millicent Gray</p>
            </a>

            <a
              href="https://www.google.com/maps/contrib/101665379278292988752/place/ChIJW_JG5f5bkWsRpQirTgIMoig"
              className="review-link__date"
              target="_blank"
              rel="noreferrer"
            >
              <div className="date-icon">
                <span className="date-icon__date"> Feb 16, 2023 </span>
                <i className="fa fa-google"></i>
              </div>
            </a>

            <div className="review-item__content">
              Came out so quickly, was very thorough also letting me know some
              other things about the car. Fixed it up super quick. Very lovely.
              Very honest. Highly recommend !!!
            </div>
          </section> */}

          {/* <!-- Review item 2 --> */}
          {/* <section className="review-item">
            <a
              href="https://www.google.com/maps/contrib/101665379278292988752/reviews"
              className="review-link"
              target="_blank"
              rel="noreferrer"
            >
              <div className="review-item__img-area">
                <img
                  src="../assets/img/customer-2.jpeg"
                  alt="Customer Img"
                  className="review-item__img-customer"
                />
              </div>

              <p className="review-link__name">Scott Mainey</p>
            </a>

            <a
              href="https://www.google.com/maps/contrib/101665379278292988752/place/ChIJW_JG5f5bkWsRpQirTgIMoig"
              className="review-link__date"
              target="_blank"
              rel="noreferrer"
            >
              <div className="date-icon">
                <span className="date-icon__date"> Jan 17, 2023 </span>
                <i className="fa fa-google"></i>
              </div>
            </a>

            <div className="review-item__content">
              Lachlan was an awesome help. Lachlan was able to diagnose the
              issue on an older vehicle and was able to fix the issue providing
              additional suggestions and advice for potential future issues.
              Lachlan was punctual and took the time to explain clearly what
              happened and why in easy to understand language. Great service and
              well priced. Will definitely use again.
            </div>
          </section> */}

          {/* <!-- Review item 3 --> */}
          {/* <section className="review-item">
            <a
              href="https://www.google.com/maps/contrib/101665379278292988752/reviews"
              className="review-link"
              target="_blank"
              rel="noreferrer"
            >
              <div className="review-item__img-area">
                <img
                  src="../assets/img/customer-3.jpeg"
                  alt="Customer Img"
                  className="review-item__img-customer"
                />
              </div>

              <p className="review-link__name">Lisa Elliott</p>
            </a>

            <a
              href="https://www.google.com/maps/contrib/101665379278292988752/place/ChIJW_JG5f5bkWsRpQirTgIMoig"
              className="review-link__date"
              target="_blank"
              rel="noreferrer"
            >
              <div className="date-icon">
                <span className="date-icon__date"> Nov 17, 2022 </span>
                <i className="fa fa-google"></i>
              </div>
            </a>

            <div className="review-item__content">
              Can’t recommend Kashy enough. After years of dreading interactions
              with mechanics who proved themselves to be sexist, rude and
              unexplainably expensive time and time again, it is such a relief
              to find a reliable mechanic with excellent customer service. As a
              queer woman, it feels safe and convenient that they come to me at
              home, speak with me politely and will answer my questions with
              patience and respect. If you are a woman, LGBTQIA+ or a member of
              any minority, here’s a mechanic you can feel safe with and
              respected by.
            </div>
          </section> */}

          {/* <!-- Review item 4 --> */}
          {/* <section className="review-item">
              <a
                href="https://www.google.com/maps/contrib/101665379278292988752/reviews"
                className="review-link"
                target="_blank"
                rel="noreferrer"
              >
                <div className="review-item__img-area">
                  <img
                    src="../assets/img/customer-3.jpg"
                    alt="Customer Img"
                    className="review-item__img-customer"
                  />
                </div>

                <p className="review-link__name">Peter Clark</p>
              </a>

              <a
                href="https://www.google.com/maps/contrib/101665379278292988752/place/ChIJW_JG5f5bkWsRpQirTgIMoig"
                className="review-link__date"
                target="_blank"
                rel="noreferrer"
              >
                <div className="date-icon">
                  <span className="date-icon__date"> Sep 22, 2022 </span>
                  <i className="fa fa-google"></i>
                </div>
              </a>

              <div className="review-item__content">
                Yet again, Lachlan has exceeded expectations. I had dropped him
                an email regarding a small leak in the cooling system - he
                dropped in next morning to inspect between other jobs, diagnosed
                the issue and returned 2 days later with replacement seals and
                completed the repair in less than an hour, all for a very
                reasonable cost. Done & dusted inside 3 days, without leaving
                the garage or waiting weeks for an appointment. Great work and
                thanks again Lachlan.
              </div>
            </section> */}
            
          {/* <ReviewCard
            imageSrc={Customer1}
            name="Millicent Gray"
            date="Feb 16, 2023"
            content="Came out so quickly, was very thorough also letting me know some other things about the car. Fixed it up super quick. Very lovely. Very honest. Highly recommend !!!"
          />
          <ReviewCard
            imageSrc={Customer2}
            name="Scott Mainey"
            date="Jan 17, 2023"
            content="Lachlan was an awesome help. Lachlan was able to diagnose the issue on an older vehicle and was able to fix the issue providing additional suggestions and advice for potential future issues. Lachlan was punctual and took the time to explain clearly what happened and why in easy to understand language. Great service and well priced. Will definitely use again."
          />
          <ReviewCard
            imageSrc={Customer3}
            name="Lisa Elliott"
            date="Nov 17, 2022"
            content="Can’t recommend Kashy enough. After years of dreading interactions with mechanics who proved themselves to be sexist, rude and unexplainably expensive time and time again, it is such a relief to find a reliable mechanic with excellent customer service. As a queer woman, it feels safe and convenient that they come to me at home, speak with me politely and will answer my questions with patience and respect. If you are a woman, LGBTQIA+ or a member of any minority, here’s a mechanic you can feel safe with and respected by."
          />

          <ReviewCard
            imageSrc={Customer4}
            name="Peter Clark"
            date="Sep 22, 2022"
            content="Yet again, Lachlan has exceeded expectations. I had dropped him an email regarding a small leak in the cooling system - he dropped in next morning to inspect between other jobs, diagnosed the issue and returned 2 days later with replacement seals and completed the repair in less than an hour, all for a very reasonable cost. Done & dusted inside 3 days, without leaving the garage or waiting weeks for an appointment. Great work and thanks again Lachlan."
          /> */}

          {/* revert */}
          
        </div>
      </div>
    </section>
  );
}
