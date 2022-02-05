import React from 'react';
import './home.scss';
import Main from '../../components/main/Main';
import Contact from '../../components/contact/Contact';
import Layout from '../../components/layout/Layout';
import About from '../../components/about/About';
import Project from '../../components/projects/Project';
// import Team from '../../components/team/Team';

const Home = () => {
  return (
    <div className='home'>
      <Layout>
        <Main />
        <About />
        <Project />
        {/* <Team /> */}
        <Contact />        
      </Layout>      
    </div>
  );
};

export default Home;