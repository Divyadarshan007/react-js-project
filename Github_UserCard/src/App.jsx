import React, { useEffect, useRef, useState } from 'react';
import domtoimage from 'dom-to-image';

const App = () => {
  const captureRef = useRef(null);
  const handleCaptureClick = () => {
    if (captureRef.current) {
      domtoimage.toPng(captureRef.current)
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = 'dom-image.png';
          link.click();
        })
        .catch((error) => {
          console.error('Error capturing image:', error);
        });
    }
  }
  const [value, setValue] = useState('');
  const [userData, setUserData] = useState('');
  const [dataObj, setDataObj] = useState({});

  useEffect(() => {
    if (!userData) {
      return;
    }
    const fetchData = async () => {
      const URL = `https://api.github.com/users/${userData}`
      const res = await fetch(URL);
      const data = await res.json();
      setDataObj(data);
    }

    fetchData();
  }, [userData])
  console.log(dataObj);

  return (
    <div>
      <div className='my-8 flex items-center'>
        <input type="text" className='border w-70 px-3 rounded-bl-md rounded-tl-md h-10' onChange={(e) => {
          setValue(e.target.value);
        }} />
        <button className='border searchButton w-30 rounded-br-md rounded-tr-md h-10' onClick={() => {
          setUserData(value)

        }}>Search</button>
      </div>
      <div className="" ref={captureRef}>
        <div className="container">
          <div className="profile-card" >
            <div className="card-content" >
              <div className="avatar-wrapper">
                <div className="avatar">
                  {/* <div className="avatar-inner" />
                  <div className="avatar-glow" />
                  <div className="avatar-border" /> */}
                  <img src={Object.keys(dataObj) == 0 ? "https://avatars.githubusercontent.com/u/156925779?v=4" : dataObj.avatar_url} id="image" />
                </div>
              </div>
              <div className="profile-info">
                <h2 className="name" id="userName">{Object.keys(dataObj) == 0 ? "Divyadarshan Das" : dataObj.name}</h2>
                <p className="title" id="title">{dataObj.bio}</p>
                <div className="stats">
                  <div className="stat">
                    <span className="stat-value" id="stat-value">{Object.keys(dataObj) == 0 ? "31" : dataObj.public_repos}</span>
                    <span className="stat-label">Repositories</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value" id="stat-follower">{Object.keys(dataObj) == 0 ? "9": dataObj.followers}</span>
                    <span className="stat-label">Followers</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value" id="stat-following">{Object.keys(dataObj) == 0 ? "8": dataObj.following}</span>
                    <span className="stat-label">Following</span>
                  </div>
                </div>
                <div className="bio">
                  Creative designer with 5+ years of experience in digital product design and brand identity.
                </div>
                <div className="skills">
                  <span className="skill">HTML & CSS</span>
                  <span className="skill">JavaScript</span>
                  <span className="skill">Reactjs</span>
                </div>
              </div>
            </div>
            <div className="card-shine" />
            <div className="card-border" />
            <div className="card-glow" />
          </div>
        </div>
      </div>
                <div className="actions">
                  <button className="action-btn primary" onClick={handleCaptureClick}>
                    <span>Download</span>
                    <div className="btn-effect" />
                  </button>
                </div>
    </div>
  )
}

export default App