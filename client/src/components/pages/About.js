import React from 'react';
import image from '../../images/LooksNice.jpg';
import nodejslogo from '../../images/nodejs.png';

const About = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>About this WebApp</h2>
      <div className='cardAbout'>
        <p>
          <strong>Contact-Keeper</strong> is a Full Stack App for storing
          contacts and searching them based on name and email. This site uses
          <a href='https://reactjs.org/'>
            {' '}
            <i class='fab fa-react'></i>
          </a>{' '}
          ReactJs at frontend and
          <a href='https://nodejs.org/en/'>
            <img
              src={nodejslogo}
              alt='Profile pic'
              className='nodejslogo'
              target='_blank'
              rel='noopener noreferrer'
            />{' '}
          </a>
          at backend and the database used is MonogoDB.
        </p>
        <p>
          <strong>Version:</strong> 1.0.0{'  '}
          <a
            href='https://github.com/meghrajfalle/contact-keeper'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fab fa-github' aria-hidden='true'></i>:
            <u>Visit this Project's Github Repo </u>{' '}
            <i class='fas fa-external-link-alt'></i>
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
              rel='noopener noreferrer'
            >
              Connect with me at Linkedin <i class='fab fa-linkedin'></i>
            </a>
            <a
              href='https://github.com/meghrajfalle'
              type='submit'
              class='btn btn-dark btn-responsive'
              target='_blank'
              rel='noopener noreferrer'
            >
              Visit Github Profile{' '}
              <i class='fab fa-github' aria-hidden='true'></i>
            </a>
            <a
              href=' https://www.facebook.com/meghraj.falle'
              type='submit'
              class='btn btn-dark btn-responsive'
              target='_blank'
              rel='noopener noreferrer'
            >
              Visit Facebook Profile <i class='fab fa-facebook'></i>
            </a>
            <a
              href=' https://twitter.com/meghraj_falle'
              type='submit'
              class='btn btn-dark btn-responsive'
              target='_blank'
              rel='noopener noreferrer'
            >
              Follow me at Twitter <i class='fab fa-twitter'></i>
            </a>
          </p>
        </div>
      </div>

      <h2 style={{ textAlign: 'center' }}>My other small projects</h2>
      <div className='cardAbout'>
        <p>
          <a href='#!' target='_blank' rel='noopener noreferrer'>
            <strong>
              My Porfolio Site <i class='fas fa-external-link-alt'></i>
            </strong>{' '}
          </a>
          : In this site you can find every details about me. My resume, my
          projects, my professional accounts, my Social links to connect with
          me. It's purely developed in ReactJs using react-mdl library. Click on
          the title to visit the site. <i class='far fa-smile'></i>
        </p>
        <p>
          <a
            href='https://github-findermegh.netlify.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <strong>
              Github Finder Project <i class='fas fa-external-link-alt'></i>
            </strong>{' '}
          </a>
          : In this site you can search for anybody's github profile and
          checkout their repos and profile information. It fetches results from
          githubs exposed APIs. Click on the title to visit the site.{' '}
          <i class='far fa-smile'></i>
        </p>
        <p>
          <a
            href='https://projectmanagement-app.herokuapp.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <strong>
              Personal Project Management Tool{' '}
              <i class='fas fa-external-link-alt'></i>
            </strong>{' '}
          </a>
          : In this site you can create and manage your own projects and the
          projects tasks inside it. Here you will have visibility of all the
          projects and its tasks, their statuses(Todo, InProgress, Done) and
          manage the deadlines and other details of your projects and its tasks.
          Click on the title to visit the site. <i class='far fa-smile'></i>
        </p>
      </div>
    </div>
  );
};

export default About;
