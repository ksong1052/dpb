import { useEffect } from 'react';
// https://www.youtube.com/watch?v=nfcQ18oxndI
import './project.scss';
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faCode, faUserFriends } from '@fortawesome/free-solid-svg-icons'

const Project = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='projects py-5 bg-light' id="projects">
      <div className="container">
        <div className='text-center my-5'>
          <h2>My <span className='text-primary'>Projects</span></h2>
          <hr className='w-25 m-auto' />
        </div>
        
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4 col-12">
            <div class="card" data-aos="flip-left" data-aos-offset="200">
              <div class="card-body">
                <FontAwesomeIcon icon={faLaptopCode} className="fa-1x mb-1" />                
                <h5 class="card-title">iTzYours</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="https://priceless-rosalind-8d39ff.netlify.app/" class="btn btn-primary">Details</a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-12">
            <div class="card bg-primary text-white" data-aos="zoom-in-up" data-aos-offset="200">
              <div class="card-body">
                <FontAwesomeIcon icon={faCode} className="fa-2x p-2 bg-white text-dark rounded mb-2" />
                <h5 class="card-title">Starbucks</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="https://confident-volhard-50cf2d.netlify.app/" class="btn btn-primary bg-white text-dark">Details</a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-12">
            <div class="card" data-aos="flip-right" data-aos-offset="200">
              <div class="card-body">
                <FontAwesomeIcon icon={faUserFriends} className="fa-1x mb-1" />
                <h5 class="card-title">Expressive Cafe</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="https://www.expressivecafe.com/" class="btn btn-primary">Details</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-12 col-md-4 col-lg-4 col-12">
            <div class="card" data-aos="flip-left" data-aos-offset="200">
              <div class="card-body">
                <FontAwesomeIcon icon={faLaptopCode} className="fa-1x mb-1" />
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Details</a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-12">
            <div class="card bg-primary text-white" data-aos="zoom-in-down" data-aos-offset="200">
              <div class="card-body">
                <FontAwesomeIcon icon={faCode} className="fa-2x p-2 bg-white text-dark rounded mb-2" />
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary bg-white text-dark">Details</a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-12">
            <div class="card" data-aos="flip-right" data-aos-offset="200">
              <div class="card-body">
                <FontAwesomeIcon icon={faUserFriends} className="fa-1x mb-1" />
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Details</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Project