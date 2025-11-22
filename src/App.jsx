import profilePic2 from './assets/pic.png'
import profilePic from './assets/profile-pic.png'
import SocialLink from "./SocialLink";
import SocialLinks from './SocialLinks';
import './App.css'

function App() {

  return (
    <>
      <div className='social-media-links'>
        
        <img src={profilePic} className="profile-pic" alt="profile picture" />
        <h2>Roxanna Alburquerque</h2>
        <h4 className="location">Santo Domingo, Dominican Republic 🇩🇴</h4>
        <h4>christian, front-end developer, polyglot and archer. </h4>

        <SocialLinks/>

       </div>
    </>
  )
}

export default App
