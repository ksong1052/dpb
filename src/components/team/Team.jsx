import './team.scss';
import Person1 from '../../images/s2.jpg';
import Person2 from '../../images/s4.jpg';
import Person3 from '../../images/s3.jpg';

const Team = () => {
  return (
    <div className='team my-5 text-center'>
      <div className="container">
        <div className='text-center my-5'>
          <h2>My <span className='text-primary'>Team</span></h2>
          <hr className='w-25 m-auto' />
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4 col-12">
            <div class="card">
              <div class="card-body">
                <img src={Person1} className='img-fluid rounded-circle border border-primary p-2' alt="" />
                <h5 class="card-title mt-4">Andrew</h5>
                <p class="card-text">Front-end Developer</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-12">
            <div class="card">
              <div class="card-body">
                <img src={Person2} className='img-fluid rounded-circle border border-primary p-2' alt="" />
                <h5 class="card-title mt-4">Matthew</h5>
                <p class="card-text">Back-end Developer</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-12">
            <div class="card">
              <div class="card-body">
                <img src={Person3} className='img-fluid rounded-circle border border-primary p-2' alt="" />
                <h5 class="card-title mt-4">Julie</h5>
                <p class="card-text">Web Designer</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Team;
