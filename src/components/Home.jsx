import React from 'react'
import './style/home.css'
import bgMain from './style/bg_main.png';

export default function Home() {
  let bodyStyle={
    backgroundColor: "#111112",
    backgroundImage: `url(${bgMain})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed"
    }
  return (
    <div style={bodyStyle}>
      <div className=" center-screen container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4">
          <div className="card-body">
            <h4 className="card-title">Soumik</h4>
            <p className="card-subtitle fg-3"> &bull; IIT Madras - Data Science and Application</p>
            <p className="card-subtitle fg-3"> &bull; IIEST Shibpur - Aerospace Engineering</p>
            <p className="card-text">
              Myself Soumik Pal [alias: thyfrei], refining skills on React, PostgreSQL, and Cloud Platforms.
              Currently I am learing about foundation Models and Model Training.
            </p>
            <div className="card-link">
            <a href="https://www.linkedin.com/in/iitm-soumik/">LinkedIn</a>
            <a href="https://x.com/InteractSoumik">X</a>
            </div>
          </div>
        </div>
      </div>
    </div>

      )
}
