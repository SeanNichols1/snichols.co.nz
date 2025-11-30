import './App.css'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
    return (
        <p>Welcome</p>
    );
}

function Portfolio() {
    return (
        <p>Coming soon</p>
    );
}

function Old() {
    return (
        <p>Coming soon</p>
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
                  <Link to="/Old">Old Site</Link>
                </nav>
          </div>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="Portfolio" element={<Portfolio />} />
              <Route path="Old" element={<Old />} />
          </Routes>
    </BrowserRouter>
  )
}

export default App
