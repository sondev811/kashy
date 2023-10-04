/* This file contains the code for the information grid on the Contact Us page */

/**
 * @name ContactInfo
 * @summary Renders the information grid on the left of the Contact Us page
 * @returns HTML elements of the information grid
 */
export default function ContactInfo() {
    return (
        <section className="maps-and-info">
            <div className="google-maps" style={{ width: "100%", height: "680px" }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d62704.27495609538!2d106.69932917591841!3d10.809995444018838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1skfc!5e0!3m2!1sen!2s!4v1696423470463!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
            <div className="business-info">
                <div className="info-grid">
                    <div className="business-email">
                        <a id="kashy-email" href="mailto:info@kashy.com.au">
                        info@kashy.com.au
                        </a>
                    </div>
                    <div className="more-info">
                        <a id="learn-more" href="/about-us">
                        Learn More
                        </a>
                    </div>
                    <div className="business-phone">
                        <a id="kashy-phone" href="tel:+61404814806">
                        0404 814 806
                        </a>
                    </div>
                    <div className="call-to-action">
                        <a id="book-now" href="/">
                        Book Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}