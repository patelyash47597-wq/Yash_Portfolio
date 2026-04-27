import { useState } from 'react';
import { profileData } from '../data/portfolioData';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');

    try {
      const formPayload = new FormData();
      formPayload.append('access_key', 'cc3cf5cf-90f6-4f83-be08-f27da659ee2c'); // 👉 Replace with your key from web3forms.com
      formPayload.append('name', formData.name);
      formPayload.append('email', formData.email);
      formPayload.append('subject', formData.subject);
      formPayload.append('message', formData.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formPayload,
      });

      const data = await response.json();

      if (data.success) {
        setStatusMessage('✅ Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatusMessage('❌ ' + (data.message || 'Failed to send. Please try again.'));
      }
    } catch (error) {
      console.error('Web3Forms error:', error);
      setStatusMessage('❌ Failed to send message. Please try again or email me directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <h1>Get In Touch</h1>
        <p className="contact-subtitle">Feel free to reach out for collaborations or just a friendly hello</p>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="info-items">
              <div className="contact-item">
                <span className="icon">📧</span>
                <div>
                  <h3>Email</h3>
                  <a href={`mailto:${profileData.email}`}>{profileData.email}</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">📱</span>
                <div>
                  <h3>Phone</h3>
                  <p>{profileData.phone}</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">📍</span>
                <div>
                  <h3>Location</h3>
                  <p>{profileData.location}</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">🔗</span>
                <div>
                  <h3>Social Media</h3>
                  <div className="social-links">
                    <a href={profileData.social.github} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                    <a href={profileData.social.linkedin} target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send Me a Message</h2>
            <div className="recipient-info">
              <p>✉️ Your message will be sent directly to: <strong>{profileData.email}</strong></p>
            </div>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Message Subject"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here..."
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {statusMessage && (
              <div className={`status-message ${statusMessage.includes('✅') ? 'success' : 'error'}`}>
                {statusMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;