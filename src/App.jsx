import logo from './logo.png';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Writeups from './components/Writeups';
import Project from './components/Project';
import Cv from './components/Cv';
import Footer from './components/Footer';
import Archive from './components/Archive';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from "react-router";

export default function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/writeups" element={<Writeups />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/Archive" element={<Archive />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}


