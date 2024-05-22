import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import "./footer.css"

const Footer =()=>{
return(
    <div >
        <hr style={{borderTop:'2px solid white', width:'80%', margin:'0 auto'}} />
<div className="Footer">  <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={50} />
    </a>
    <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaGithub size={50} />
    </a>
    <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={50} />
    </a>
</div>
</div>  )
}
export default Footer