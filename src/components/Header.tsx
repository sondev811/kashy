/* This file contains the code for the web app's header */
// Import components
import Navigation from '@components/Nav';
import '@styles/Header.css'; // Import style sheet
import KashyLogo from "@assets/img/logo-icon.svg";
import KashyPartner from "@assets/img/MTAQ-Transparent-Logo.webp";
import { useEffect, useRef } from 'react';
import FullSizeLogo from "@assets/img/logo-icon-large.png";
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

/**
 * @name Header
 * @summary Renders the Header of the application when it is called
 * @param activePage string value to check which page is currently active
 * @returns HTML element of the Header
 */
// The activePage variable are passed down from App.tsx, then it is continued to be passed down to Navigation.
export default function Header({ activePage }: { activePage: any }) {
  const fullSizeLogoInner = useRef<HTMLDivElement | null>(null);
  const largeLogo = useRef<HTMLImageElement | null>(null);
  const headerTop = useRef<HTMLImageElement | null>(null);
  const header = useRef<HTMLImageElement | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const fullSizeLogoInnerElem = fullSizeLogoInner.current;
    if(pathname === '/') {
      const heroHeading = document.getElementById('heroHeading');
      const heroIntroduction = document.getElementById('heroIntroduction');
      const largeLogoElem = largeLogo.current;
      const marginHeroHeading = 24; // margin của header hero so với thành phần trên(dựa theo file hero.css, class hero-introduction__heading)
      
      if (
        heroHeading && 
        heroIntroduction && 
        largeLogoElem &&
        fullSizeLogoInnerElem
      ) {
        fullSizeLogoInnerElem.classList.remove('hideLogo');

        const heroIntroductionWidth = heroIntroduction.clientWidth; // chiều rộng của hero introduction
        const largeLogoWidth = largeLogoElem.naturalWidth; // chiều rộng của logo
        const { offsetTop, clientHeight } = heroHeading; // vị trí của heading cách top và chiều cao của heading
  
        const translateX = 
          (heroIntroductionWidth / 2) - (largeLogoWidth / 2); // vị trí giữa của logo so với hero introduction
        const translateY = 
          offsetTop - clientHeight - marginHeroHeading; //vị trí trên của heading
        
          largeLogoElem.style.transform = `translate(${translateX}px,${translateY}px)`;
      }
      
      const onScroll = () => {
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
  
        const shouldShowHeader = scrollTop > 10;
  
        fullSizeLogoInnerElem?.classList.toggle('activeScroll', shouldShowHeader);
        headerTop.current?.classList.toggle('hide-header-top', shouldShowHeader);
  
        if (header.current?.style) {
          header.current.style.boxShadow = shouldShowHeader
            ? '0 5px 5px rgba(0, 0, 0, .2)'
            : 'unset';
        }
      };
    
      document.addEventListener('scroll', onScroll);
    
      return () => {
        document.removeEventListener('scroll', onScroll);
      };
    } else {
      fullSizeLogoInner.current?.classList.add('hideLogo');
    }
  }, [pathname]);

  return (
    <header className="header header--fixed" ref={header}>
      <div className='header__top' ref={headerTop}>
        <p>Call Now: 
        <span>
          <FontAwesomeIcon icon={faPhone} />
        </span>0404 814 806</p>
        <p>Email: 
        <span>
          <FontAwesomeIcon icon={faEnvelope} />
        </span>info@kashy.com.au</p>
      </div>
      <div className="container">
        <div className="header___inner">
          {/* <!-- Logo --> */}
          <div className='header__logo'>
            <div ref={fullSizeLogoInner} className="logo-inner">
              <img src={FullSizeLogo} ref={largeLogo} alt="" />
            </div>
            <img src={KashyLogo} alt="Kashy" className="logo" id='smallLogo'/>
          </div>
          {/* <!-- Nav bar --> */}
          <Navigation activePage={activePage} />
          <div className="kashy-partner">
            <a
              href="https://www.mtaq.com.au/"
              className="kashy-partner__link"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={KashyPartner}
                alt="MTA Queensland Website"
                className="kashy-partner__img"
              />
            </a>
            
          </div>
        </div>
      </div>
    </header>
  );
}
