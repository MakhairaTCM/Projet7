import React from 'react';
import { useLocation } from 'react-router-dom';
import bannerHome from "../../assets/images/bannerHome.svg"
import bannerAPropos from "../../assets/images/bannerAPropos.svg"
import "./_banner.scss"


function Banner() {
    const location = useLocation();
    const bannerImage = location.pathname === "/APropos" ? bannerAPropos : bannerHome;

    return (
      <section aria-label="Bannière" className="banner">
        <img src={bannerImage} alt="Bannière Kasa" title="Bannière Kasa" className='bannerImg'/>
      </section>
    );
  }
  
export default Banner;