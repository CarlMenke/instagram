import logo from './logo.svg';
import './App.css';
import { SideBar } from './components/SideBar/SideBar';
import { Post } from './components/MainFeed/Post';
import { User, Palette } from 'lucide-react';
import { useState } from 'react'
import { MainFeed } from './components/MainFeed/MainFeed';

function App() {
  const [currentTheme, setCurrentTheme] = useState('default');
  const [showThemeSelector, setShowThemeSelector] = useState(false);

  const themes = [
    { id: 'default', name: 'Default', color: '#303a3b' },
    { id: 'dark', name: 'Dark', color: '#1a1a1a' },
    { id: 'light', name: 'Light', color: '#ffffff' },
    { id: 'ocean', name: 'Ocean', color: '#0f1419' },
    { id: 'sunset', name: 'Sunset', color: '#2d1b69' },
    { id: 'forest', name: 'Forest', color: '#1a202c' },
    { id: 'cyber', name: 'Cyber', color: '#0a0a0a' },
    { id: 'warm', name: 'Warm', color: '#2d1810' },
    { id: 'cool', name: 'Cool', color: '#1a1a2e' },
    { id: 'minimal', name: 'Minimal', color: '#fafafa' },
    { id: 'neon', name: 'Neon', color: '#000000' }
  ];

  const handleThemeChange = (themeId) => {
    setCurrentTheme(themeId);
    setShowThemeSelector(false);
  };

  const getThemeClass = () => {
    return currentTheme === 'default' ? '' : `theme-${currentTheme}`;
  };

  return (
    <div className={`rootContainer ${getThemeClass()}`}>
      <SideBar logotext="Instagram" />

      {/* Theme Selector */}
      <div className="theme-selector-container">
        <button
          className="theme-toggle-button"
          onClick={() => setShowThemeSelector(!showThemeSelector)}
          aria-label="Toggle theme selector"
        >
          <Palette size={20} />
        </button>

        {showThemeSelector && (
          <div className="theme-selector-dropdown">
            <div className="theme-selector-header">
              <h3>Choose Theme</h3>
              <button
                className="theme-selector-close"
                onClick={() => setShowThemeSelector(false)}
                aria-label="Close theme selector"
              >
                ×
              </button>
            </div>
            <div className="theme-grid">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  className={`theme-option ${currentTheme === theme.id ? 'active' : ''}`}
                  onClick={() => handleThemeChange(theme.id)}
                  style={{ '--theme-color': theme.color }}
                  aria-label={`Switch to ${theme.name} theme`}
                >
                  <div className="theme-color-preview" style={{ backgroundColor: theme.color }}></div>
                  <span className="theme-name">{theme.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <MainFeed/>
    </div>
  );
}

export default App;
