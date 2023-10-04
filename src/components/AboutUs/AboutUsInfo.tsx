/* This file contains the code for the information on the About Us page */

/**
 * @name AboutUsInfo
 * @summary Renders the information on the About Us page
 * @returns HTML elements contains the info on the About Us page
 */
export default function AboutUsInfo() {
    return (
      <section className="about-us-section">
        <div className="about-us">
          <div className="container">
            <div className="about-us__content">
            {/* <!-- Left side --> */}
            <img src="https://static.wixstatic.com/media/5d5476_0d5a52f0bcba4e5abb2ccfde255a1f61~mv2_d_2304_1536_s_2.jpg/v1/fill/w_1440,h_698,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5d5476_0d5a52f0bcba4e5abb2ccfde255a1f61~mv2_d_2304_1536_s_2.jpg" alt="" className="about-us__img" />
            <div className="about-us__content__more">
                <p>ABOUT US
                Kashy is a groundbreaking startup revolutionizing the auto industry with its convenient mobile mechanics service. Our unique approach prioritizes exceptional customer experience, streamlining the process of car maintenance and repairs.
                
                ​
                
                At Kashy, we understand the value of effective communication. That's why we facilitate direct interaction between our customers and hand-selected mobile mechanics. This ensures your concerns and needs are understood and addressed accurately, eliminating any uncertainties.
                
                ​
                
                With a strong commitment to innovation, Kashy was selected for the QUT (Queensland University of Technology) Bluebox Accelerator to drive positive change within the industry. By actively addressing industry issues (such as honesty and convenience) and prioritizing the well-being of our customers and mechanics, we're making auto care better for all. 
                
                ​
                
                Experience the convenience and honesty of a Kashy mechanic today. Say goodbye to traditional mechanics and embrace a new era of hassle-free car maintenance and repairs. Contact us now to discover the difference Kashy can make for all your automotive needs.</p>
            </div>

            </div>
          </div>
        </div>
      </section>
    )
}