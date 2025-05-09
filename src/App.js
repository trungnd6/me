import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    // Listen for dark mode changes from the landing page
    const observer = new MutationObserver(() => {
      const isDark = document.body.classList.contains('dark-mode');
      const root = document.getElementById('root');
      if (root) {
        if (isDark) {
          root.classList.add('dark-mode');
        } else {
          root.classList.remove('dark-mode');
        }
      }
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    // Initial sync
    if (document.body.classList.contains('dark-mode')) {
      document.getElementById('root')?.classList.add('dark-mode');
    } else {
      document.getElementById('root')?.classList.remove('dark-mode');
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
