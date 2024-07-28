import React from "react";
import Typed from "typed.js";
import "../Home/home.css";
import webDev from "../images/webDev.jpg";
import Footer from "../Footer/Footer";
import SecondSects from "../Sections/SecondSects";
const Home = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer."],
      typeSpeed: 100,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="home d-flex justify-content-around row-cols-md row-cols-sm ">
        <div className="left row-cols-md">
          Hi, My name is <span className="span1">Pabitra</span>
          <div> and I am a passionate</div>
          <div className="type1">
            <span ref={el} />
            <div className="buttons row-cols-md row-cols-sm">
            <a href="https://drive.google.com/file/d/1V41oTQQVtB6if5VLn3UQchchxkBrtNdi/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button className="btns">Download Resume</button></a>
            <a href="https://github.com/pabitra-k11" target="_blank" rel="noopener noreferrer"> <button className="btns">Visit Github</button></a>
            </div>
            
          </div>
        </div>
        <div className="right row-cols-md">
          <img src={webDev} alt="" />
        </div>
      </div>

      <hr className="border-2 text-white " />
      <div className="second-section ">
        <SecondSects />
      </div>

      <hr className="border-2 text-white " />
      <Footer />
    </>
  );
};

export default Home;
