import React from 'react';
import './Footer.css';


function Footer() {
  return (
    <div className='footer-container'>
    
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          <strong>Get Access To Exclusive Offers</strong>
        </p>
        <p className='footer-subscription-text'>
          Sign up for our newsletter below
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Enter your email address'
            />
            <button id='sign-up-footer'>Sign Up</button>
          </form>
        </div>
      </section>
   
           <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items-o'>
            <h2>Safari tours</h2> <br></br>
            <p>Safari Tours is a kenyan Company that provides Tours and Travel. We aim at providing you with the best safari experience in Kenya. Enjoy the great wildlife and marine parks kenya has to offer.Book with us today!</p>
                  </div>
          <div class='footer-link-items' id='contact-o'>
            <h2>Contact Us</h2>
            <ul class='cont-list'>
               <li>Contact</li>
               <li>Support</li>
               <li>Destination</li>
               </ul>
          </div>
        </div>
        <div className='footer-link-wrapper'>
       
       
          <div class='footer-link-items' id='contact-t'>
            <h2>Social Media</h2>
             <ul class='cont-list'>
               <li>Facebook</li>
               <li>Instagram</li>
               <li>Twitter</li>
               </ul>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <a className='social-logo'>
             SAFARI~TOURS
             </a>
          </div>
          <small class='website-rights'>Safari tours © 2022</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
                      target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link youtube'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </a>
            <a
              class='social-icon-link twitter'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
            <a
              class='social-icon-link twitter'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
       </section>
    </div>
  );
}

export default Footer;
