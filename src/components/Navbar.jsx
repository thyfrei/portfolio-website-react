import React from 'react'
import { NavLink } from 'react-router-dom'
import './style/navbar.css'
import { useState } from 'react'

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const close = () => setOpen(false)
  return (
    <header className=" navbar sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--header-bg)] backdrop-blur-md">
      <NavLink to="/" className="navbar-brand" onClick={close}>
        Soumik
      </NavLink>

      <button
        className="navbar-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? '✕' : '☰'}
      </button>

      <nav className={`absolute left-0 right-0 top-16 flex-col gap-1 border-b border-[var(--line)] bg-[var(--page)] p-4 md:static md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0 ${
            open ? 'navbar-links open' : 'navbar-links'
          }`}>
        <NavLink to="/" end onClick={close}>Home</NavLink>
        <NavLink to="/Writeups" onClick={close}>WriteUps</NavLink>
        <NavLink to="/Projects" onClick={close}>Projects</NavLink>
        <NavLink to="/Cv" className="navbar-cv" onClick={close}>
          Curriculum Vitae
        </NavLink>
      </nav>
    </header>
  )
}
