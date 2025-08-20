import { Routes, Route, NavLink, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import VotingPage from './pages/VotingPage.jsx';
import ResultsPage from './pages/ResultssPage.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { VotesProvider } from './context/VotesContext.jsx';
import ThemeToggle from './context/ThemeToggle.jsx';

export default function App() {
  return (
    <ThemeProvider>
      <VotesProvider>
        <header className="container">
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <nav>
              <NavLink to="/" end>Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/vote">Vote</NavLink>
              <NavLink to="/results">Results</NavLink>
            </nav>
            <ThemeToggle />
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vote" element={<VotingPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="*" element={
              <div className="container">
                <h2>404</h2>
                <p>Page not found. Go <Link to="/">home</Link>.</p>
              </div>
            } />
          </Routes>
        </main>
      </VotesProvider>
    </ThemeProvider>
  );
}
