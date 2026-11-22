import React from 'react'
import './style/cv.css'

export default function Cv() {
  return (
    <div>
      <div className="cv-page">
        <main className="cv-main">
          <article className="cv-card">

            {/* Personal Information */}
            <section className="cv-header">
              <h1>Soumik Pal</h1>
              <p>Kolkata, West Bengal, India</p>

              <div className="contact-links">
                <a href="mailto:interact.soumik@gmail.com">
                  interact.soumik@gmail.com
                </a>

                <a href="tel:+919153134751">
                  +91 9153134751
                </a>
              </div>

              <div className="profile-links">
                <a href="https://github.com/thyfrei" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>

                <a href="https://www.linkedin.com/in/iitm-soumik/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>

                <a href="https://thyfrei.github.io/Soumik/" target="_blank" rel="noopener noreferrer">
                  Portfolio
                </a>
              </div>
            </section>

            {/* Education */}
            <section className="cv-section">
              <h2>Education</h2>

              <div className="cv-entry">
                <div className="entry-heading">
                  <h3>Indian Institute of Technology, Madras</h3>
                  <span>India</span>
                </div>

                <p>
                  Bachelor of Science in Data Science and Applications
                  <time>2026 – 2030</time>
                </p>
              </div>

              <div className="cv-entry">
                <div className="entry-heading">
                  <h3>
                    Indian Institute of Engineering Science and Technology, Shibpur
                  </h3>
                  <span>Howrah, India</span>
                </div>

                <p>
                  Bachelor of Technology in Aerospace Engineering
                  <time>2026 – 2030</time>
                </p>
              </div>

              <div className="cv-entry">
                <div className="entry-heading">
                  <h3>Raghunathganj High School</h3>
                  <span>Murshidabad, West Bengal</span>
                </div>

                <p>
                  Higher Secondary Education (PCMB) – A+ Overall
                  <time>2025</time>
                </p>
              </div>
            </section>

            {/* Projects */}
            <section className="cv-section">
              <h2>Projects</h2>

              <div className="cv-entry">
                <div className="entry-heading">
                  <h3>2D Physics Engine</h3>
                  <span>
                    Python, Pygame ·{" "}
                    <a
                      href="https://github.com/thyfrei/2D-Physics-Engine"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </span>
                </div>

                <ul>
                  <li>
                    Developing a 2D physics simulation engine implementing
                    gravitational motion through semi-implicit Euler integration.
                  </li>

                  <li>
                    Implemented collision detection, impulse-based collision
                    response, restitution, friction and positional correction.
                  </li>

                  <li>
                    Refining collision behaviour and numerical stability;
                    rotational dynamics and spring mechanics remain future
                    additions.
                  </li>
                </ul>
              </div>

              <div className="cv-entry">
                <div className="entry-heading">
                  <h3>Personal Portfolio Website</h3>
                  <span>
                    HTML5, CSS3, JavaScript ·{" "}
                    <a
                      href="https://github.com/thyfrei/Soumik"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </span>
                </div>

                <ul>
                  <li>
                    Designed and developed a responsive personal website featuring
                    a portfolio, CV, technical write-ups and blog.
                  </li>

                  <li>
                    Integrated the GitHub REST API to dynamically retrieve and
                    display public repository information.
                  </li>

                  <li>Deployed through GitHub Pages.</li>
                </ul>
              </div>
            </section>

            {/* Academic Achievements */}
            <section className="cv-section">
              <h2>Academic Achievements</h2>

              <ul>
                <li>Higher Secondary Education (PCMB) – A+ Overall.</li>
                <li>JEE Main 2026: 99.01 percentile in Physics.</li>
              </ul>
            </section>

            {/* Leadership */}
            <section className="cv-section">
              <h2>Leadership &amp; Activities</h2>

              <ul>
                <li>
                  <strong>Co-Producer &amp; Management Lead, School Rock Band:</strong>{" "}
                  Co-led production and management during the school’s Platinum
                  Jubilee celebrations.
                </li>

                <li>
                  <strong>School Wall Magazine:</strong> Co-designed and managed
                  the magazine, contributing to its creative direction and
                  vintage-inspired aesthetics.
                </li>

                <li>
                  <strong>Physics Practical Student Guide:</strong> Assisted
                  Group 1 peers in conducting Class XII laboratory experiments.
                </li>
              </ul>
            </section>

            {/* Skills */}
            <section className="cv-section">
              <h2>Skills &amp; Interests</h2>

              <ul className="skills-list">
                <li>
                  <strong>Programming:</strong> Python, C++
                </li>

                <li>
                  <strong>Web Technologies:</strong> HTML5, CSS3, JavaScript
                </li>

                <li>
                  <strong>Libraries:</strong> Pygame, PyAutoGUI, Math
                </li>

                <li>
                  <strong>Tools:</strong> Git, GitHub, VS Code
                </li>

                <li>
                  <strong>Academic Interests:</strong> Computational Physics,
                  Algorithms, AI/ML, Web Development
                </li>

                <li>
                  <strong>Interests:</strong> Electric Guitar, Music, Badminton
                </li>
              </ul>
            </section>

          </article>

          {/* CV Download */}
          <div className="cv-actions">
            <a
              className="cv-button"
              href="/Soumik_CV.pdf"
              download="Soumik_CV.pdf"
            >
              Download
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height="24px"
                width="24px"
                fill="currentColor"
              >
                <path d="M12,16L7,11L8.4,9.55l2.6,2.6V4h2v8.15l2.6-2.6L17,11l-5,5ZM6,20q-0.82,0-1.41-.59T4,18V15H6v3H18V15h2v3q0,0.82-.59,1.41T18,20H6Z" />
              </svg>
            </a>
          </div>
        </main>
      </div>
    </div>
  )
}
