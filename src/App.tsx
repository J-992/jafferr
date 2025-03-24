import React, { useState, useEffect } from 'react';
import './App.css';
import { projects, Project } from './projects';
import { experiences, Experience } from './experiences';

const App: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [highlightedProjects, setHighlightedProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const [showDetails, setShowDetails] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const [highlightedExperience, setHighlightedExperience] = useState<Experience[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [hoveredExperience, setHoveredExperience] = useState<Experience | null>(null);

  // Check if device is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Select featured projects for highlights section
  useEffect(() => {
    // You can customize which projects to highlight based on your preferences
    // For now, I'm selecting a few interesting ones from both categories
    const featured = [
      projects.find(p => p.name === 'NeuroFlex'),
      projects.find(p => p.name === 'Terminal'),
      projects.find(p => p.name === 'EMG chip'),
      projects.find(p => p.name === 'Bruce Power Refurb')
    ].filter((p): p is Project => !!p);

    const featuredExperience = [
      experiences.find(p => p.name === 'NeuroFlex'),
    ].filter((p): p is Experience => !!p);

    setHighlightedProjects(featured);
    setHighlightedExperience(featuredExperience);
  }, []);

  const toggleView = () => {
    setShowDetails(!showDetails);
  };

  const handleProjectClick = (project: Project) => {
    if (isMobile) {
      setSelectedProject(project);
    } else {
      window.open(project.href, '_blank');
    }
  };

  const handleExperienceClick = (experience: Experience) => {
    if (isMobile) {
      setSelectedExperience(experience);
    } else {
      window.open(experience.href, '_blank');
    }
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  const closeExperienceDetails = () => {
    setSelectedExperience(null);
  };

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
              <li className="about__list">studying mechanical engineering at the University of Waterloo</li>
              <li className="about__list">on our varsity rowing team as a novice mens heavyweight</li>
              <li className="about__list">pushing myself mentally and physically to acheive peak genetic performance</li>
              <li className="about__list">building a sick prosthetic arm that i dreamt up on a 4h flight to banff to create a solution that's as empowering as it is revolutionary</li>
              <li className="about__list">exploring the intersection of design and human impact aiming to contribute to solutions that make a meaningful difference in people's lives</li>
            </ul>
          </div>
          <div className="hero__about">
            <h4>I'm excited about...</h4>
            <ul>
              <li className="about__list">the unknowns, combining atoms, and the universe. i love to figure out how stuff works</li>
              <li className="about__list">storytelling through innovation, finding ways to bridge technical complexity with human connection in everything I create</li>
              <li className="about__list">self-improvement and the grind, constantly testing my limits—whether in the gym, in the lab, or on the water</li>
              <li className="about__list">creating things that just make the world a better, more fun place to live</li>
            </ul>
          </div>
        </div>
        <div className="hero__right">
          <div className="hero__top">
            <p>WEBSITE UNDER CONSTRUCTION</p>
            {!isMobile && <p>(not mobile-friendly just yet)</p>}
          </div>
          <div className="hero__bottom">
            <a href='https://github.com/J-992'>github</a>
            <a href='https://www.linkedin.com/in/jafferr/'>linkedin</a>
            <a>email</a>
            <a href='/Jaffer_Razavi_Resume.pdf' target='_blank' rel='noopener noreferrer'>resume</a>
            <a href='https://x.com/jafferrrr'>twitter</a>
          </div>
        </div>
      </div>

      {/* Mobile Project Details Modal */}
      {isMobile && selectedProject && (
        <div className="mobile-project-modal">
          <div className="mobile-project-modal-content">
            <div className="mobile-modal-close" onClick={closeProjectDetails}>×</div>
            <h2>{selectedProject.category}</h2>
            <p className="project-name">
              {selectedProject.name}
              {selectedProject.icon && <img src={selectedProject.icon} className="project-icon-img" alt="" />}
            </p>
            <p className="project-description" style={{ whiteSpace: 'pre-line' }}>{selectedProject.description}</p>


            {selectedProject.img ? (
              <img className="mobile-project-image" src={selectedProject.img} alt={selectedProject.name} />
            ) : (
              <p>no image found</p>
            )}

            {selectedProject.href && (
              <a
                href={selectedProject.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-project-link"
              >
                View Project
              </a>
            )}
          </div>
        </div>
      )}

      {/* Details Section */}
      <div className="details__container">

        {/* Left Container */}
        <div className="left__content">
          <p className="number">00</p>
          <p className="number2">Engineering</p>
          <p className="number3">little things that make you go 'wow'! I love making the most random of ideas come to life (but unfotunately many remain incomplete)</p>

          <div className="view-toggle">
            <button
              className={`view-btn ${showDetails ? 'active' : ''}`}
              onClick={() => setShowDetails(true)}
            >
              Project Details
            </button>
            <button
              className={`view-btn ${!showDetails ? 'active' : ''}`}
              onClick={() => setShowDetails(false)}
            >
              Highlights
            </button>
          </div>

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
                      onMouseEnter={() => !isMobile && setHoveredProject(project)}
                      onClick={() => handleProjectClick(project)}
                    >
                      {project.name}
                      <span className="project-date">
                        {project.icon && <img src={project.icon} className="project-icon-img" alt="" />}
                        {project.date}
                      </span>
                    </p>
                  ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right Container */}
        <div className="right__content">
          {!showDetails ? (
            <div className="highlights-container">
              <h2 className="highlights-title">Project Highlights</h2>
              <div className="highlights-grid">
                {highlightedProjects.map((project) => (
                  <div
                    key={project.name}
                    className="highlight-card"
                    onClick={() => handleProjectClick(project)}
                  >
                    <div className="highlight-category">{project.category}</div>
                    <h3 className="highlight-name">
                      {project.name}
                      {project.icon && <img src={project.icon} className="highlight-icon-img" alt="" />}
                    </h3>
                    <div className="highlight-date">{project.date}</div>


                    <p className="highlight-description">
                      {project.description.substring(0, 120)}
                      {project.description.length > 120 ? '...' : ''}
                    </p>
                    <div className="highlight-cta">Learn more →</div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            hoveredProject && !isMobile ? (
              <div className="detail__box">
                <h2>{hoveredProject.category}</h2>
                <p className="project-name">{hoveredProject.name}:</p>
                <p className="project-description" style={{ whiteSpace: 'pre-line' }}>{hoveredProject.description}</p>

                {hoveredProject.img ? (
                  <img id="img__container" src={hoveredProject.img} alt={hoveredProject.name} />
                ) : (
                  <p>no image found</p>
                )}
              </div>
            ) : (
              <div className={`default__content ${isMobile ? 'mobile-default-content' : ''}`}>
                <h2>{isMobile ? 'tap a project to view details' : 'hover over a project on the left to see its details!'}</h2>
              </div>
            )
          )}
        </div>
      </div>

      {/* Hobbies Section */}
      <div className="details__container">

        {/* Left Container */}
        <div className="left__content">
          <p className="number">01</p>
          <p className="number2">People</p>

          <div className="view-toggle">
            <button
              className={`view-btn ${showDetails ? 'active' : ''}`}
              onClick={() => setShowDetails(true)}
            >
              Experience Details
            </button>
            <button
              className={`view-btn ${!showDetails ? 'active' : ''}`}
              onClick={() => setShowDetails(false)}
            >
              Highlights
            </button>
          </div>

            <div  className="list__container">
              <ul>
                    {experiences.map((experience) => (
                        <p
                          key={experience.name}
                          className="list__item"
                          onMouseEnter={() => !isMobile && setHoveredExperience(experience)}
                          onClick={() => handleExperienceClick(experience)}
                        >
                          {experience.name}
                          <span className="project-date">
                            {experience.icon && <img src={experience.icon} className="project-icon-img" alt="" />}
                            {experience.date}
                          </span>
                        </p>
                    ))}
              </ul>
            </div>
        </div>

        {/* Right Container */}
        <div className="right__content">
          {!showDetails ? (
            <div className="highlights-container">
              <h2 className="highlights-title">Experience Highlights</h2>
              <div className="highlights-grid">
                {highlightedExperience.map((experience) => (
                  <div
                    key={experience.name}
                    className="highlight-card"
                    onClick={() => handleExperienceClick(experience)}
                  >
                    <h3 className="highlight-name">
                      {experience.name}
                      {experience.icon && <img src={experience.icon} className="highlight-icon-img" alt="" />}
                    </h3>
                    <div className="highlight-date">{experience.date}</div>


                    <p className="highlight-description">
                      {experience.description.substring(0, 120)}
                      {experience.description.length > 120 ? '...' : ''}
                    </p>
                    <div className="highlight-cta">Learn more →</div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            hoveredExperience && !isMobile ? (
              <div className="detail__box">
                <p className="project-name">{hoveredExperience.name}:</p>
                <p className="project-description" style={{ whiteSpace: 'pre-line' }}>{hoveredExperience.description}</p>

                {hoveredExperience.img ? (
                  <img id="img__container" src={hoveredExperience.img} alt={hoveredExperience.name} />
                ) : (
                  <p>no image found</p>
                )}
              </div>
            ) : (
              <div className={`default__content ${isMobile ? 'mobile-default-content' : ''}`}>
                <h2>{isMobile ? 'tap a project to view details' : 'hover over a project on the left to see its details!'}</h2>
              </div>
            )
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