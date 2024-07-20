import React from 'react';
import '../Service/service.css';
import Footer from '../Footer/Footer';

const Service = () => {
  return (
  <>
    <div className="service">
      <h1>Services</h1>
      <div className="row offset-2">
        <div className='col col-md-11'>
      <div className="service-list">
        <div className="service-item">
          <h2>Web Development</h2>
          <p>Custom web development using the latest technologies. Responsive and mobile-friendly design.</p>
        </div>
        <div className="service-item">
          <h2>Front-End Development</h2>
          <p>Modern and user-friendly interfaces with HTML, CSS, and JavaScript. Frameworks like React, Angular, and Vue.js.</p>
        </div>
        <div className="service-item">
          <h2>Back-End Development</h2>
          <p>Server-side programming with Node.js, Express. Database design and management with MySQL, MongoDB.</p>
        </div>
        <div className="service-item">
          <h2>API Development</h2>
          <p>Creating RESTful APIs to connect front-end and back-end services.</p>
        </div>
        <div className="service-item">
          <h2>Version Control</h2>
          <p>Efficient project management and collaboration using Git and GitHub.</p>
        </div>
      </div>
      </div>
      </div>
    </div>
    <hr className='border-2 text-white' />
    <Footer/>
    </>
  );
};

export default Service;
