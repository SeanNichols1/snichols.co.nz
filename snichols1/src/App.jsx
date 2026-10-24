import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
    return (
        <section className="page-section">
            <p className="eyebrow">PERSONAL WEBSITE</p>
            <p className="home-welcome">Welcome to SNichols.co.nz</p>
            <a className="home-login-link" href="/admin.html">
                Login
            </a>
        </section>
    );
}

function Portfolio() {
    return (
        <section className="page-section">
            <p className="eyebrow">SELECTED WORK</p>
            <h2 className="page-title">Portfolio</h2>
            <p>This website uses React</p>
        </section>
    );
}

function Contact() {
    return (
        <section className="page-section">
            <p className="eyebrow">GET IN TOUCH</p>
            <h2 className="page-title">Contact</h2>
            <br />
            <b>Email: </b><a href="mailto:postmaster@snichols.co.nz">postmaster@snichols.co.nz</a>
        </section>
    );
}

function App() {
    const [copilotMode, setCopilotMode] = useState(false);

    return (
        <BrowserRouter>
            <div className={`app-shell${copilotMode ? ' app-shell--copilot' : ''}`}>
                <header id="main" className="site-header">
                    <h1>Sean Nichols</h1>
                    <nav aria-label="Main navigation">
                        <Link to="/">Home</Link>
                        <span className="nav-separator"> | </span>
                        <a href="https://www.linkedin.com/in/sean-nichols-nz/" target="_blank" rel="noreferrer">LinkedIn</a>
                        <span className="nav-separator"> | </span>
                        <Link to="/Portfolio">Portfolio</Link>
                        <span className="nav-separator"> | </span>
                        <Link to="/Contact">Contact</Link>
                    </nav>
                </header>
                <main className="page-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="Portfolio" element={<Portfolio />} />
                        <Route path="Contact" element={<Contact />} />
                    </Routes>
                </main>
            </div>
            <button
                className={`copilot-toggle${copilotMode ? ' copilot-toggle--active' : ''}`}
                type="button"
                aria-pressed={copilotMode}
                aria-label={`${copilotMode ? 'Turn off' : 'Turn on'} Copilot visual changes`}
                onClick={() => setCopilotMode((enabled) => !enabled)}
            >
                Copilot
            </button>
        </BrowserRouter>
    );
}

export default App;
