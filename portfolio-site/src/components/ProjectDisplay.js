export default function ProjectDisplay() {
  return (
    <div id='projects' class='projects'>
      <h3>Projects</h3>
      <div class='project-box'>
        <img
          class='project-img'
          src='img/fynp-img.png'
          alt='Find Your National Park Image'
        />
        <div class='info-box'>
          <h4>
            <a
              href='https://find-your-national-parks.netlify.app/'
              target='_blank'
            >
              Find Your National Parks!
            </a>
          </h4>
          <p>
            A tool that provides users a streamlined way to find information
            about parks managed by the National Park Service
          </p>
        </div>
      </div>
      <div class='project-box'>
        <img
          class='project-img'
          src='img/tag-masters-img.png'
          alt='Disc Golf Tag Masters Image'
        />
        <div class='info-box'>
          <h4>
            <a
              href='http://disc-golf-tag-master.herokuapp.com/'
              target='_blank'
            >
              Disc Golf Tag Masters
            </a>
          </h4>
          <p>
            A mobile focused web application to help run disc golf tag matches
          </p>
        </div>
      </div>
      <div class='project-box'>
        <img
          class='project-img'
          src='img/redundant-img.png'
          alt='Redundant Image'
        />
        <div class='info-box'>
          <h4>
            <a href='https://redundant.netlify.app/' target='_blank'>
              Redundant
            </a>
          </h4>
          <p>A MERN stack social media application</p>
        </div>
      </div>
      <div class='project-box'>
        <img
          class='project-img'
          src='img/swordle-img.png'
          alt='Swordle Image'
        />
        <div class='info-box'>
          <a href='http://swordle-75.herokuapp.com/' target='_blank'>
            <h4>Swordle</h4>
            <p>A spelling and word guessing game</p>
          </a>
        </div>
      </div>
    </div>
  );
}
