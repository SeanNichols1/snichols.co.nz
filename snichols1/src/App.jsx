import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const buttonStyle = {
    position: 'fixed',
    bottom: '2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '10px 20px',
    backgroundColor: '#242424',
    color: '#ffffffde',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    zIndex: 1000
};

function Home() {
    return (
        <div>
            <p>Welcome to SNichols.co.nz</p>
            <a href="/admin.html">
                <button style={buttonStyle}>
                    Login
                </button>
            </a>
        </div>
    );
}

function Portfolio() {
    return (
        <div>
            <p>Coming soon</p>
            <p>This website uses React</p>
        </div>
    );
}

function Contact() {
    return (
        <div>
            <br />
            <b>Email: </b><a href="mailto:postmaster@snichols.co.nz">postmaster@snichols.co.nz</a>
        </div>
    );
}

function App() {
  return (
      <BrowserRouter>
          <div id="main">
              <h1>Sean Nichols</h1>
              <nav>
                  <Link to="/">Home</Link> |{"  "}
                  <a href="https://www.linkedin.com/in/sean-nichols-nz/" target="_blank">LinkedIn</a> |{"  "}
                  <Link to="/Portfolio">Portfolio</Link> |{"  "}
                  <Link to="/Contact">Contact</Link>
                </nav>
          </div>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="Portfolio" element={<Portfolio />} />
              <Route path="Contact" element={<Contact />} />
          </Routes>
    </BrowserRouter>
  )
}

export default App
