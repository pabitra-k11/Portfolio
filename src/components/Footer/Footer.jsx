import React from 'react'
import'../Footer/footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <div className='footer text-white'>
        <div className='footer-first '>
          <h5 className='text-sm'> Pabitra's Developer Portfolio</h5>
         <div className='gmail d-flex'>
            <p><EmailIcon/></p>
           <p className='g-text'>pabitrapanda421@gmail.com</p>
        </div> 
        </div>
      
        <div>
            <ul>
               <Link to="/"> <li>Home</li></Link>
               <Link to="/about"><li>About</li></Link>
              <Link to="/service"><li>Services</li></Link>
              <Link to="/project"><li>Project</li></Link>
               <Link to="/contact"> <li>Contact</li></Link>

            </ul>
        </div>

       

        <div>
            <ul className=''>
                <div>
                    <h4 className='text-sm'>Follow Us</h4>
                    <hr className='line2 m-0'/>
                </div>
                <div className='icons d-flex '>
              <a href="https://github.com/@Pabitra-panda2002" target="_blank" rel="noopener noreferrer"> <li className=''><GitHubIcon  /></li> </a>
               <a href="https://www.linkedin.com/in/pabitra-panda-aa5730304" target="_blank" rel="noopener noreferrer"><li className=''><LinkedInIcon/></li></a>
               <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"> <li><InstagramIcon/></li></a>
                <li><TwitterIcon/></li>
                </div>

            </ul>
        </div>
    </div>
    <div className='footer-texts mb-2'>
           Copyrights &copy; PabitraProtfolio.com | All Right Reserved!
        </div>
    </>
  )
}

export default Footer