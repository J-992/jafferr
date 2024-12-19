import React, {useState} from 'react';
import './App.css';
import { projects, Project } from './projects'



const App: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  return (
    <div className="App">
      {/* Hero Section */}
      <div className="hero__container">
        <div className="hero__left">
          <div className="hero__title">
            <p>I'm Jaffer!</p>
          </div>
          <div className="hero__current">
            <h4>I'm currently...</h4>
            <ul>
              <li>studying mechanical engineering at the University of Waterloo</li>
              <li>on our varsity rowing team as a novice mens heavyweight</li>
              <li>pushing myself mentally and physically to acheive peak genetic performance</li>
              <li>building a sick prosthetic arm that i dreamt up on a 4h flight to banff to create a solution that's as empowering as it is revolutionary</li>
              <li>exploring the intersection of design and human impact aiming to contribute to solutions that make a meaningful difference in people's lives</li>
            </ul>
          </div>
          <div className="hero__about">
            <h4>I'm excited about...</h4>
            <ul>
              <li>the unknowns, combining atoms, and the universe. i love to figure out how stuff works</li>
              <li>storytelling through innovation, finding ways to bridge technical complexity with human connection in everything I create</li>
              <li>self-improvement and the grind, constantly testing my limits—whether in the gym, in the lab, or on the water</li>
              <li>creating things that just make the world a better, more fun place to live</li>
            </ul>
          </div>
        </div>
        <div className="hero__right">
          <div className="hero__top">
            <p>WEBSITE UNDER CONSTRIUCTION</p>
            <p>(not mobile-friendly just yet)</p>
          </div>
          <div className="hero__bottom">
            <a href='https://github.com/J-992'>github</a>
            <a href='https://www.linkedin.com/in/jafferr/'>linkedin</a>
            <a>email</a>
            <a href='/Jaffer_Razavi_Resume.pdf' target='_blank' rel='noopener norefferrer'>resume</a>
            <a href='https://x.com/jafferrrr'>twitter</a>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="details__container">
        <div className="left__content">
          <p className="number">00</p>
          <p className="number2">Engineering</p>

          {['Hardware', 'Software'].map((category) => (
            <div key={category} className="list__container">
              <h2>{category}</h2>
              <ul>
                {projects
                  .filter((project) => project.category === category)
                  .map((project) => (
                    <p
                    key={project.name}
                    className="list__item"
                    onMouseEnter={() => setHoveredProject(project)} // Set hovered project
                    onClick={() => window.open(project.href, '_blank')} // Open project link
                    //onMouseLeave={() => setHoveredProject(null)} // Reset to default
                  >
                      {project.name}
                      <span className="project-date">{project.date}</span>
                    </p>
                  ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right Container */}
        <div className="right__content">
          {hoveredProject ? (
            <div className="detail__box">
              <h2>{hoveredProject.category}</h2>
              <p className="project-name">{hoveredProject.name}:</p>
              <p className="project-description" style={{ whiteSpace: 'pre-line' }}>{hoveredProject.description}</p>

            </div>
          ) : (
            <div className="default__content">
              <h2>Hover over a project to see its details here.</h2>
            </div>
          )}
        </div>
        

      </div>


      {/* Footer */}
      <div className="footer__container">
        <p className="footer__left"> &copy; 2024 or something</p>
        <p className="footer__right">Built and designed by me</p>
      </div>
    </div>
  );
};

export default App;
