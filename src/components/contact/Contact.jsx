import { useEffect } from 'react';
import './contact.scss';
import AOS from "aos";
import "aos/dist/aos.css";

import Photo from '../../images/programming.svg';

// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSign } from '@fortawesome/free-solid-svg-icons'
// import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <div className='contact' id="contact"> 
      {/* <Container className='d-grid h-100' id="contact-center">        
        <Form className='text-center w-100' id='contact-in-form'> 
          <FontAwesomeIcon icon={faSign} className='bootstrapLogo'/>  
          <FontAwesomeIcon icon={faLaptopCode} className='bootstrapLogo'/>
          <h2>Please Sign In</h2>
        </Form>
      </Container>      */}

      <div className="container">
        <div className='text-center my-5'>
          <h2>Contact <span className='text-primary'>me</span></h2>
          <hr className='w-25 m-auto' />
        </div>

        <div className="row" data-aos="fade-up-left" data-aos-offset="200">
          <div className="col-sm-12 col-md-6 col-lg-6 col-12">
            <form class="row g-3">
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Email</label>
                <input type="email" class="form-control" id="inputEmail4" />
              </div>
              <div class="col-md-6">
                <label for="inputPassword4" class="form-label">Password</label>
                <input type="password" class="form-control" id="inputPassword4" />
              </div>
              <div class="col-12">
                <label for="inputAddress" class="form-label">Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
              </div>
              <div class="col-md-6">
                <label for="inputCity" class="form-label">City</label>
                <input type="text" class="form-control" id="inputCity" />
              </div>
              <div class="col-md-4">
                <label for="inputState" class="form-label">State</label>
                <select id="inputState" class="form-select">
                  <option selected>Choose</option>
                  <option>NB</option>
                  <option>NF</option>
                  <option>NS</option>
                  <option>PEI</option>                  
                </select>
              </div>
              <div class="col-md-2">
                <label for="inputZip" class="form-label">Zip</label>
                <input type="text" class="form-control" id="inputZip" />
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="gridCheck" />
                  <label class="form-check-label" for="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary">Send</button>
              </div>
            </form> 
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-12 m-auto text-end p-4" data-aos="fade-up-right" data-aos-offset="200">
            <img src={Photo} className='img-fluid img-thumbnail p-2' alt=''/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
