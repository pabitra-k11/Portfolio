import React from 'react';
import '../About/about.css';
import Footer from '../Footer/Footer';

const About = () => {
  return (
    <>
    <div className="about">
      <h1>About Me</h1>
      <p>Hi, I'm Pabitra, a passionate and dedicated full-stack web developer. With a very interest in both front-end and back-end development, I love creating dynamic and responsive web applications that provide a seamless user experience.</p>
      
      <h2>Education</h2>
      <p>I recently graduated with a degree in BCA(Bacholer of Computer Application) from Veer Narmada South Gujrat University. During my studies, I gained a solid foundation in computer science principles and practical experience in various programming languages and technologies.</p>
      
      <h2>Skills</h2>
      <ul>
        <li><strong>Front-end Development:</strong> HTML, CSS, Bootsrat, JavaScript, ReactJs</li>
        <li><strong>Back-end Development:</strong> Node.js, Express.Js</li>
        <li><strong>Databases:</strong> MySQL, MongoDB</li>
        <li><strong>Version Control:</strong> Git, GitHub</li>
        <li><strong>Other Tools:</strong>  RESTful APIs</li>
        <li><strong>Programing languages:</strong> Java(Data Structure & Algorithm), C, C++</li>
      </ul>
      
      <h2>Projects</h2>
      <ul>
        <li><strong>FoodKidda:(Nearby Stall & Food Ordering System)</strong> Collaborated with team to develop
         FoodKidda, It is designed to streamline process of ordering street food from nearby stall and user can access nearby.
         Using technologies such as, Firebase, React.Js, JavaScript, HTML, CSS3, Tailwind CSS.
          Include links if available.</li>
        <li><strong>Wanderlust:(User ability to search booking accommodations)</strong> This project focused on providing the user add new accommodation, 
        user ability to search, book & manage accommodations.Using technologies such as, Node.Js, MongoDB, Expres.Js, JavaScript, CSS,
        BootStrap,HTML.(link:- https://majorproject-3-7jq2.onrender.com/listings).</li>
        
      </ul>
      
      <h2>Interests</h2>
      <p>When I'm not coding, I enjoy [playing Cricket]. I am always eager to learn new technologies and improve my skills by working on challenging projects.</p>
      
      <h2>Contact</h2>
      <p>Feel free to get in touch with me at [pabitrapanda421@gmail.com] or connect with me on [LinkedIn:Pabitra-Panda /GitHub:@Pabitra-Panda2002].</p>
    </div>
    <hr className='border-2 text-white'/>
    <Footer/>
    </>
  );
};

export default About;
