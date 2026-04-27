import { resumeData, profileData, technicalSkills } from '../data/portfolioData';
import '../styles/Resume.css';

function Resume() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Yash_resume.pdf';
    link.download = 'Yash_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShareResume = () => {
    const resumeUrl = window.location.origin;
    if (navigator.share) {
      navigator.share({
        title: `${profileData.name} - Resume`,
        text: 'Check out my professional resume',
        url: resumeUrl,
      });
    } else {
      const tempUrl = `${resumeUrl}/resume`;
      const input = document.createElement('input');
      input.value = tempUrl;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      alert('Resume link copied to clipboard!');
    }
  };

  return (
    <section className="resume">
      <div className="resume-container">
        <h1>My Resume</h1>

        <div className="resume-actions">
          <button className="resume-btn download-btn" onClick={handleDownloadResume}>
            📥 Open Resume
          </button>
          <button className="resume-btn share-btn" onClick={handleShareResume}>
            📤 Share Resume
          </button>
        </div>

        <div className="resume-content">
          {/* Experience Section */}
          <div className="resume-section">
            <h2 className="section-title">💼 Experience</h2>
            <div className="experience-list">
              {resumeData.experience.length === 0 ? (
                <p style={{ color: 'var(--color-text-secondary)' }}>No experience added yet.</p>
              ) : (
                resumeData.experience.map((job, index) => (
                  <div key={index} className="experience-item">
                    <div className="experience-header">
                      <h3>{job.position}</h3>
                      <span className="duration">{job.duration}</span>
                    </div>
                    <p className="company">{job.company}</p>
                    <p className="description">{job.description}</p>
                    {job.details && (
                      <ul className="details-list">
                        {job.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Education Section */}
          <div className="resume-section">
            <h2 className="section-title">🎓 Education</h2>
            <div className="education-list">
              {resumeData.education.map((edu, index) => (
                <div key={index} className="education-item">
                  <h3>{edu.degree}</h3>
                  <p className="school">{edu.school}</p>
                  <div className="edu-footer">
                    <span className="year">{edu.year}</span>
                    {edu.gpa && <span className="gpa">{edu.gpa}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="resume-section">
            <h2 className="section-title">🏆 Certifications</h2>
            <div className="certifications-list">
              {resumeData.certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certification-item"
                >
                  <div className="cert-header">
                    <span className="cert-name">✓ {cert.name}</span>
                    <span className="cert-duration">{cert.duration}</span>
                  </div>
                  {cert.fileUrl && <span className="cert-link">📄 View Certificate</span>}
                </a>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="resume-section">
            <h2 className="section-title">🛠️ Technical Skills</h2>

            <div className="technical-skills">
              <div className="skill-category">
                <h3 className="category-title">Languages</h3>
                <div className="skills-grid">
                  {technicalSkills.languages.map((skill, index) => (
                    <span key={index} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3 className="category-title">Framework / Libraries</h3>
                <div className="skills-grid">
                  {technicalSkills.frameworks.map((skill, index) => (
                    <span key={index} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3 className="category-title">Databases</h3>
                <div className="skills-grid">
                  {technicalSkills.databases.map((skill, index) => (
                    <span key={index} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3 className="category-title">Tools</h3>
                <div className="skills-grid">
                  {technicalSkills.tools.map((skill, index) => (
                    <span key={index} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;