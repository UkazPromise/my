import React from 'react';
import './Project.css';
import Project1 from './images/ecommerce site.jpg';
import Project2 from './images/calculator.png';
import Project3 from './images/video conference app.jpg';
import Project4 from './images/whatsapp clone.jpg';
import Project5 from './images/eCommerce-Web-App.jpg';
import Project6 from './images/movie app.jpg';

function Project() {
  return (
    <div className="project component__space" id="Project">
        <div className="heading">
            <h1 className="heading">My Projects</h1>
            <p className="heading p__color">
            These are my personal projects, which
            </p>
            <p className="heading p__color">
            I undertook to build up myself. 
            </p>
        </div>
        <div className="container">
            <div className="row">

                <div className="col__3">
                    <div className="project__box relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__img__box">
                                <img src={Project1} alt="" className="project__img" />
                            </div>
                            <div className="mask__effect"></div>
                        </div>
                        <div className="project__meta absolute">
                        <h5 className="project__text">Development</h5>
                        <h4 className="project__text">Ecommerce site with HTML, CSS and JavaScript</h4>
                        <a href="#" className="project__btn">View Details</a>
                        </div>
                    </div>
                </div>

                <div className="col__3">
                    <div className="project__box relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__img__box">
                                <img src={Project2} alt="" className="project__img" />
                            </div>
                            <div className="mask__effect"></div>
                        </div>
                        <div className="project__meta absolute">
                        <h5 className="project__text">Development</h5>
                        <h4 className="project__text">Calculator with HTML, CSS and JavaScript</h4>
                        <a href="#" className="project__btn">View Details</a>
                        </div>
                    </div>
                </div>

                <div className="col__3">
                    <div className="project__box relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__img__box">
                                <img src={Project3} alt="" className="project__img" />
                            </div>
                            <div className="mask__effect"></div>
                        </div>
                        <div className="project__meta absolute">
                        <h5 className="project__text">Development</h5>
                        <h4 className="project__text">Video Conference app with HTML, CSS and JavaScript</h4>
                        <a href="#" className="project__btn">View Details</a>
                        </div>
                    </div>
                </div>

                <div className="col__3">
                    <div className="project__box relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__img__box">
                                <img src={Project4} alt="" className="project__img" />
                            </div>
                            <div className="mask__effect"></div>
                        </div>
                        <div className="project__meta absolute">
                        <h5 className="project__text">Development</h5>
                        <h4 className="project__text">WhatsApp clone with MERN</h4>
                        <a href="#" className="project__btn">View Details</a>
                        </div>
                    </div>
                </div>

                <div className="col__3">
                    <div className="project__box relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__img__box">
                                <img src={Project5} alt="" className="project__img" />
                            </div>
                            <div className="mask__effect"></div>
                        </div>
                        <div className="project__meta absolute">
                        <h5 className="project__text">Development</h5>
                        <h4 className="project__text">Ecommerce site with Nodejs, RestApi, ShoppingApi</h4>
                        <a href="#" className="project__btn">View Details</a>
                        </div>
                    </div>
                </div>

                <div className="col__3">
                    <div className="project__box relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__img__box">
                                <img src={Project6} alt="" className="project__img" />
                            </div>
                            <div className="mask__effect"></div>
                        </div>
                        <div className="project__meta absolute">
                        <h5 className="project__text">Development</h5>
                        <h4 className="project__text">Movie streaming app with Reactjs, Nodejs</h4>
                        <a href="#" className="project__btn">View Details</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
}

export default Project;
