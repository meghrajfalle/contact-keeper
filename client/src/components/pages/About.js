import React from 'react';
import image from '../../images/LooksNice.jpg';
const About = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>About this WebApp</h1>
      <div className='card'>
        <p>
          <strong>Purpose:</strong> This is a full stack React App for keeping
          contacts. It has Node.js app at backend.
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
      <div className='row'>
        <div className='column'>
          <div className='card'>
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
                Loves to develop sites using ReactJs. A fitness enthusiast,
                always trying to learn new technologies and believes that
                practice is the key to gain the expertise.
              </p>
              <p style={{ textAlign: 'center' }}>
                For any queries email me at meghrajfalle@gmail.com
              </p>
              <br></br>
              <p style={{ textAlign: 'center' }}>
                <a
                  href='https://www.linkedin.com/in/meghrajfalle/'
                  type='submit'
                  class='btn btn-dark'
                  target='_blank'
                >
                  Connect with at Linkedin
                </a>
                <a
                  href='https://github.com/meghrajfalle'
                  type='submit'
                  class='btn btn-dark'
                  target='_blank'
                >
                  Visit Github Profile
                </a>
                <a
                  href=' https://www.facebook.com/meghraj.falle'
                  type='submit'
                  class='btn btn-dark'
                  target='_blank'
                >
                  Visit Facebook Profile
                </a>
                <a
                  href=' https://twitter.com/meghraj_falle'
                  type='submit'
                  class='btn btn-dark'
                  target='_blank'
                >
                  Follow me at Twitter
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
