/* This file contains the code for the Quoting Form section of the Home page */

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@styles/Home/QuotingForm.css";
import Button from "@components/Button";
import { useEffect, useRef, useState } from "react";
import { scrollDirection } from '@constants/Constant';
/**
 * @name QuotingForm
 * @summary Renders the Quoting Form section of the Home page when it is called
 * @returns HTML elements of the Quoting Form section
 */

interface IProps {
  isActiveForm: boolean,
  setIsActiveForm: React.Dispatch<React.SetStateAction<boolean>>
}

export default function QuotingForm(props: IProps) {
  const { isActiveForm, setIsActiveForm } = props;
  
  const formRef = useRef<HTMLDivElement | null>(null);
  const scrollDirectionRef = useRef<string | null>(null);
  const [isShowBtn, setIsShowBtn] = useState(false);
  const [isShowScrollForm, setIsShowScrollForm] = useState(false)

  useEffect(() => {
    const scrollContainer = formRef.current;

    const handleScroll = () => {
      const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;

          if (scrollContainer) {
            const { offsetTop } = scrollContainer;
            const isScrollingDown = scrollTop > offsetTop;
    
            if (scrollDirectionRef.current === null) {
              scrollDirectionRef.current = isScrollingDown ? scrollDirection.down : scrollDirection.up;
            }
    
            if (isScrollingDown && scrollDirectionRef.current !== scrollDirection.down) {
              setIsShowBtn(true);
              scrollDirectionRef.current = scrollDirection.down;
            }
            if (!isScrollingDown && scrollDirectionRef.current !== scrollDirection.up) {
              setIsShowBtn(false);
              setIsShowScrollForm(false);
              scrollDirectionRef.current = scrollDirection.up;
            }
          }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onCloseForm = () => {
    setIsActiveForm(false);
  }

  const submitForm = () => console.log('submit form');
  
  return (
    <>
      <div className={`form ${isActiveForm ? 'activeForm' : ''} ${isShowBtn ? 'formScroll' : ''} ${isShowScrollForm ? 'activeFormScroll' : ''}`}>
        <span 
          className={`close-form--mobile ${isShowScrollForm ? 'closeFormScroll' : ''}`} 
          onClick={() => {
            onCloseForm();
            setIsShowScrollForm(false);
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </span>
        <form id="form" autoComplete="off">
          {/* Form Group 1: Full Name */}
          <div className="form-group">
            <label htmlFor="full-name" className="form-group__label">
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="fullname"
              className="form-group__input"
              placeholder="Enter full name"
            />
          </div>

          {/* Form Group 2: Address */}
          <div className="form-group">
            <label htmlFor="address" className="form-group__label">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="form-group__input"
              placeholder="Enter address"
            />
          </div>

          {/* Form Group 3: Email */}
          <div className="form-group">
            <label htmlFor="email" className="form-group__label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-group__input"
              placeholder="Enter email"
              value="info@kashy.com.au"
            />
          </div>

          {/* Form Group 4: Phone */}
          <div className="form-group">
            <label htmlFor="phone" className="form-group__label">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phonenumber"
              className="form-group__input"
              placeholder="Enter phone"
            />
          </div>

          {/* Form Group 5: Rego/VIN */}
          <div className="form-group">
            <label htmlFor="rego-vin" className="form-group__label">
              Rego/VIN
            </label>
            <input
              type="text"
              id="registration"
              name="registration"
              className="form-group__input"
              placeholder="Enter Rego/VIN"
            />
          </div>

          {/* Form Group 6: Service Selecting */}
          <div className="form-group">
            <div className="form-group__label">What does your car need?</div>
            <select
              className="form-group__serivces"
              name="serviceType"
              id="service-type"
              placeholder="serviceType"
            >
              <option id="0" hidden>
                What does your car need?
              </option>
              <option id="1">Fixed Price Service</option>
              <option id="2">Logbook Service</option>
              <option id="3">Diagnosis</option>
              <option id="4">Repairs</option>
              <option id="5">Other</option>
            </select>
          </div>

          {/* Form Group 7: Text Area for Comment */}
          <div className="form-group">
            <label htmlFor="comment" className="form-group__label">
              Comments
            </label>
            <textarea
              id="comments"
              className="form-group__textarea"
              name="comments"
              placeholder="Write your comments..."
            ></textarea>
          </div>

          {/* Form Group 8: Terms & Conditions */}
          <div className="form-group">
            <div className="checkbox">
              <input type="checkbox" className="checkbox__tick" />
              <p className="checkbox__desc">
                <span> I accept the </span>
                <a
                  className="checkbox__files"
                  href="https://www.kashy.com.au/_files/ugd/5d5476_6590e3a0ab7e49ac8b648620e99e100f.pdf"
                  rel="noreferrer"
                  target="_blank"
                >
                  terms & conditions
                </a>
              </p>
            </div>
          </div>

          {/* Submit btn */}
          <div className='form-group submit-box' ref={formRef}>
            <Button 
              type='button'
              buttonName={isActiveForm ? 'Submit' : 'Request A Quote' }
              size='small' 
              rounded='half' 
              onClick={submitForm}
            />
          </div>
        </form>
      </div>
      <div className={`scroll-button-container ${isShowBtn ? 'showBtn' : ''}`} id='scrollBtn'>
        <Button 
          type='button'
          buttonName='Request A Quote'
          size='small'
          extendsClass='scroll-button-container--btn'
          rounded='half' 
          onClick={() => {
            setIsShowScrollForm(true); 
            setIsActiveForm(true);
          }}
        />
      </div>
    </>
  );
}
