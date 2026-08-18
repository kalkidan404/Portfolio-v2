function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-identity">
        <span className="nav-name">Kalkidan Shewit</span>
        <span className="nav-role">Fullstack Developer</span>
      </div>

      <nav className="nav-links">
        <a
          href="https://www.linkedin.com/in/kalkidan-shewit-9601a8367"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="https://x.com/Kalkidan404"
          target="_blank"
          rel="noreferrer"
        >
          X
        </a>

        <a href="mailto:kalrokal000@gmail.com">
          Email
        </a>
      </nav>
    </header>
  );
}

export default Navbar;