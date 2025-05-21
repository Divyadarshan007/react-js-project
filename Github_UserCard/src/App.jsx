import React, { useRef } from 'react';
import html2canvas from 'html2canvas';


const App = () => {
 const cardRef = useRef();

  const downloadCard = async () => {
    const canvas = await html2canvas(cardRef.current);
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = image;
    link.download = 'Profile Card.png';
    link.click();
  };

  return (
    <div className="" >
      <div className="container">
        <div className="profile-card" ref={cardRef}>
          <div className="card-content" >
            <div className="avatar-wrapper">
              <div className="avatar">
                <div className="avatar-inner" />
                <div className="avatar-glow" />
                <div className="avatar-border" />
                {/* <img src="" id="image" /> */}
              </div>
            </div>
            <div className="profile-info">
              <h2 className="name" id="userName">Sarah Anderson</h2>
              <p className="title" id="title">Senior Product Designer</p>
              <div className="stats">
                <div className="stat">
                  <span className="stat-value" id="stat-value">1.2k</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat">
                  <span className="stat-value" id="stat-follower">8.5k</span>
                  <span className="stat-label">Followers</span>
                </div>
                <div className="stat">
                  <span className="stat-value" id="stat-following">4.7k</span>
                  <span className="stat-label">Following</span>
                </div>
              </div>
              <div className="bio">
                Creative designer with 5+ years of experience in digital product design and brand identity.
              </div>
              <div className="skills">
                <span className="skill">UI/UX</span>
                <span className="skill">Branding</span>
                <span className="skill">Motion</span>
              </div>
              <div className="actions">
                <button className="action-btn primary" onClick={downloadCard}>
                  <span>Download</span>
                  <div className="btn-effect" />
                </button>

              </div>
            </div>
          </div>
          <div className="card-shine" />
          <div className="card-border" />
          <div className="card-glow" />
        </div>
      </div>






    </div>
  )
}

export default App