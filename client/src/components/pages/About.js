import React from 'react';
import image from '../../images/LooksNice.jpg';
const About = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>About this WebApp</h1>
      <div className='cardAbout'>
        <p>
          <strong>Purpose:</strong> This is Contact-Keeper is a full stack React
          App for keeping the contacts. It is powered by Node.js app at backend
          and the database used is MonogoDB.
        </p>
        <p>
          <strong>Version:</strong> 1.0.0
        </p>
        <p>
          <a
            href='https://github.com/meghrajfalle/contact-keeper'
            target='_blank'
          >
            <u>Visit this Project's Github Repo</u>
          </a>
        </p>
      </div>

      <h2 style={{ textAlign: 'center' }}>Brief info about Developer</h2>

      <div className='cardAbout'>
        <img
          src={image}
          alt='Meghraj'
          style={{
            width: '20%',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: '50%'
          }}
        ></img>{' '}
        <div>
          <h2>Meghraj Falle</h2>
          <p class='title' style={{ textAlign: 'center' }}>
            Software Engineer @ AppDirect | Java Developer | Full Stack
            Developer | ReactJS
          </p>
          <p style={{ textAlign: 'center' }}>
            Loves to develop sites using ReactJs. A fitness enthusiast, always
            trying to learn new technologies and believes that practice is the
            key to gain the expertise.
          </p>
          <p style={{ textAlign: 'center' }}>
            <div className='fas fa-envelope-open'> </div> For any queries mail
            me on id <strong>meghrajfalle@gmail.com</strong>
          </p>
          <br></br>
          <p style={{ textAlign: 'center' }}>
            <a
              href='https://www.linkedin.com/in/meghrajfalle/'
              type='submit'
              class='btn btn-dark btn-responsive'
              target='_blank'
            >
              Connect with me at Linkedin
            </a>
            <a
              href='https://github.com/meghrajfalle'
              type='submit'
              class='btn btn-dark btn-responsive'
              target='_blank'
            >
              Visit Github Profile
            </a>
            <a
              href=' https://www.facebook.com/meghraj.falle'
              type='submit'
              class='btn btn-dark btn-responsive'
              target='_blank'
            >
              Visit Facebook Profile
            </a>
            <a
              href=' https://twitter.com/meghraj_falle'
              type='submit'
              class='btn btn-dark btn-responsive'
              target='_blank'
            >
              Follow me at Twitter
            </a>
          </p>
        </div>
      </div>

      <h2 style={{ textAlign: 'center' }}>My other small projects</h2>
      <div className='cardAbout'>
        <p>
          <a href='https://github-findermegh.netlify.app/' target='_blank'>
            <strong>
              <u>Github Finder Project:</u>
            </strong>{' '}
          </a>
          In this site you can search for anybody's github profile and checkout
          their repos and profile information. It fetches results from githubs
          exposed APIs. Click on the title to visit the site.
        </p>
      </div>
    </div>
  );
};

export default About;
