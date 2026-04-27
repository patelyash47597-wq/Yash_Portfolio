import { profileData, technicalSkills } from '../data/portfolioData';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import '../styles/Profile.css';
function Profile() {
    return (
        <section className="profile">
            <div className="profile-container">
                <div className="profile-header">
                    <div className="profile-avatar">
                        <img src="/projects/Profilepic.jpeg" alt={profileData.name} className="avatar-image" />
                    </div>
                   
                    <h1 className="profile-name">{profileData.name}</h1>
                    <p className="profile-title">{profileData.title}</p>
                   
                </div>
                

                <div className="profile-content">
                    <div className="profile-bio">
                        <h2>About Me</h2>
                        <h3>Bio :</h3>
                        <p>{profileData.bio}</p>
                        <p>{profileData.about}</p>
                    </div>

                    <div className="profile-info">
                        <div className="info-item">
                            <span className="info-label">📧 Email:</span>
                            <a href={`mailto:${profileData.email}`}>{profileData.email}</a>
                        </div>
                        <div className="info-item">
                            <span className="info-label">📱 Phone:</span>
                            <p>{profileData.phone}</p>
                        </div>
                        <div className="info-item">
                            <span className="info-label">📍 Location:</span>
                            <p>{profileData.location}</p>
                        </div>
                    </div>

                    <div className="profile-social">
                        <h3>Connect With Me</h3>
                        <div className="social-links">
                            <a
                                href={profileData.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-btn"
                            >
                                <FaGithub /> : Git Hub
                            </a>

                            <a
                                href={profileData.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-btn"
                            >
                                <FaLinkedin /> : Linkedin
                            </a>

                            <a
                                href={profileData.social.leetcode}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-btn"
                            >
                                <SiLeetcode /> : Leetcode
                            </a>
                        </div>
                    </div>

                    <div className="profile-skills">
                        <h3>Programming Languages</h3>
                        <div className="skills-grid">
                            {technicalSkills.languages.map((skill, index) => (
                                <span key={index} className="skill-tag">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Profile;
