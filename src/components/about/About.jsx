import { useEffect } from 'react';

// https://www.youtube.com/watch?v=nfcQ18oxndI
import './about.scss';
import AOS from "aos";
import "aos/dist/aos.css";
import Study from '../../images/study.svg';

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='about my-5' id="about">
      <div className="container">
        <div className='text-center my-5'>
          <h2 data-aos="fade-up" data-aos-offset="200">About <span className='text-primary'>me</span></h2>
          <hr className='w-25 m-auto' />
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 col-12" data-aos="zoom-in" data-aos-offset="200">
            <h2>What do you want to know?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Vel tempore, voluptatem laborum magnam quos animi natus vero 
              alias iure similique rem illum aspernatur numquam, 
              odit porro dolores est quo ratione.
            </p>
            <button type="button" className="btn btn-light mb-5">More about me</button>

            <div className="accordion accordion-flush" id="accordionFlushExample" data-aos="zoom-in-left" data-aos-offset="200">
              <div className="accordion-item">
                <h3 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Skills
                  </button>
                </h3>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <strong>Placeholder content for this accordion,</strong> which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header" id="flush-headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Projects
                  </button>
                </h3>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <strong>Placeholder content for this accordion,</strong> which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header" id="flush-headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Volunteers
                  </button>
                </h3>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <strong>Placeholder content for this accordion,</strong> which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content.</div>
                </div>
              </div>
            </div>

          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-12 text-end p-4" data-aos="fade-right" data-aos-offset="200">
            <img src={Study} className='img-fluid img-thumbnail p-2' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About

