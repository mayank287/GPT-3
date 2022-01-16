import React from 'react'
import './footer.css'
import gpt3Logo from '../../Assets/logo.svg'

const footer = () => {
    return (
        <div className='gpt3__footer section__padding'>
           <div className='gpt3__footer-heading'>
               <h1 className='gradient__text'>A lot is happening, 
We are blogging about it.</h1>
           </div>
           <div className='gpt3__footer-btn'>
               <p>Request Early Access</p>
           </div>
           <div className='gpt3__footer-links'>
               <div className='gpt3__footer-links-logo'>
                   <img src={gpt3Logo} alt ="gpt3Logo"/>
                   <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
               </div>
               <div className='gpt3__footer-links_div'>
                   <h4>Links</h4>
                   <p>Overons</p>
                   <p>Social Media</p>
                   <p>Counters</p>
                   <p>Contact</p>
               </div>
               <div className='gpt3__footer-links_div'>
                   <h4>Company</h4>
                   <p>Terms & Conditions</p>
                   <p>Privacy and Policy</p>
                   <p>Contact</p>
                  
               </div>
               <div className='gpt3__footer-links_div'>
                   <h4>Get in touch</h4>
                   <p>Crechterwoord K12 182 DK Alknjkcb</p>
                   <p>085-132567</p>
                   <p>info@payme.net</p>
                  
               </div>
           </div>
           <div className='gpt3__footer-copyright'>
               <p>Made By Mayank Arora <a href='https://github.com/mayank287'> (Github Link)</a></p>
           </div>
        </div>
    )
}

export default footer;

