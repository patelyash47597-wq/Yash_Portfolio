import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import '../styles/NavBar.css';

function NavBar() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">
          Yash 💼
        </NavLink>

        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink 
              to="/projects" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Projects
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink 
              to="/resume" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Resume
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Contact
            </NavLink>
          </li>

          <li className="nav-item theme-toggle-item">
            <button 
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label="Toggle dark/light mode"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;