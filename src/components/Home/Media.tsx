/* This file contains the code for the Media section of the Home page */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import thumb1 from "../../assets/gallery/thumb-1.jpeg";
import thumb2 from "../../assets/gallery/thumb-2.jpeg";
import thumb3 from "../../assets/gallery/thumb-3.jpeg";
import thumb4 from "../../assets/gallery/thumb-4.jpeg";
import thumb5 from "../../assets/gallery/thumb-5.jpeg";
import thumb6 from "../../assets/gallery/thumb-6.jpeg";
import thumb7 from "../../assets/gallery/thumb-7.jpeg";
import thumb8 from "../../assets/gallery/thumb-8.jpeg";

/**
 * @name Media
 * @summary Renders the Media section of the Home page
 * @return HTML elements of the Media section
 */
export default function Media() {
  return (
    <section className="media">
      <div className="container">
        <div className="media-inner">
          {/* <!-- Left side of body --> */}
          <figure className="media-inner__video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/qHeACpjOj5M"
              title="Should You Change Your Engine Oil"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </figure>

          {/* <!-- Right side --> */}
          <div className="media-photo">
            <p className="section-heading media-photo__heading">
              kashyaustralia
            </p>
            <div className="btn media-photo__btn">
              <a
                href="https://www.instagram.com/kashyaustralia/"
                className="media-photo__link"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="media-photo__icon"
                />
                <span className="media-photo__text-btn">Follow</span>
              </a>
            </div>

            <div className="media-photo__list">
              {/* <!-- Item 1 --> */}
              <div className="media-photo-item">
                <img src={thumb1} alt="" className="media-photo-item__thumb" />
              </div>

              {/* <!-- Item 2 --> */}
              <div className="media-photo-item">
                <img src={thumb2} alt="" className="media-photo-item__thumb" />
              </div>

              {/* <!-- Item 3 --> */}
              <div className="media-photo-item">
                <img src={thumb3} alt="" className="media-photo-item__thumb" />
              </div>

              {/* <!-- Item 4 --> */}
              <div className="media-photo-item">
                <img src={thumb4} alt="" className="media-photo-item__thumb" />
              </div>

              {/* <!-- Item 5 --> */}
              <div className="media-photo-item">
                <img src={thumb5} alt="" className="media-photo-item__thumb" />
              </div>

              {/* <!-- Item 6 --> */}
              <div className="media-photo-item">
                <img src={thumb6} alt="" className="media-photo-item__thumb" />
              </div>

              {/* <!-- Item 7 --> */}
              <div className="media-photo-item">
                <img src={thumb7} alt="" className="media-photo-item__thumb" />
              </div>

              {/* <!-- Item 8 --> */}
              <div className="media-photo-item">
                <img src={thumb8} alt="" className="media-photo-item__thumb" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
