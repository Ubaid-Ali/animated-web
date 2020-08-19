import React from 'react'

// animation library link
// https://github.com/michalsnik/aos
import AOS from 'aos';
AOS.init();

const Footer = () => {
    return (
        <div className='footer-div' 
        data-aos="fade-in"
        data-aos-delay="500"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
        >
            <div className='footer-div1'>
                <h3>Display</h3>
                <p>Ad eu sit minim </p>
                <p>Tempor Lorem sit  </p>
                <p>Nostrud </p>
                <p>Duis laboris irure  </p>
                <p>Proident laborum </p>
            </div>
            <div className='footer-div2'>
                <h3>Display</h3>
                <p>Ad eu sit minim </p>
                <p>Tempor Lorem sit  </p>
                <p>Nostrud </p>
                <p>Duis laboris irure  </p>
                <p>Proident laborum </p>
            </div>
            <div className='footer-div3'>
                <h3>Display</h3>
                <p>Ad eu sit minim </p>
                <p>Tempor Lorem sit  </p>
                <p>Nostrud </p>
                <p>Duis laboris irure  </p>
                <p>Proident laborum </p>
            </div>

            <div className='footer-div4'>
                <p>TermsFeed © 2012 - 2020</p>
                <p>Duis laboris irure  </p>
                <p>Proident laborum </p>
            </div>

        </div>
    )
}

export default Footer
