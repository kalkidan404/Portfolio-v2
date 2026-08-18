function Hero() {
  return (
    <section className="hero">
      <div className="hero-photo">
        <img
  className="hero-photo-image"
  src="/kal.jpg"
  alt="Kalkidan Shewit"
/>
      </div>

      <div className="hero-content">
        <p className="hero-small">Hey, I am</p>

        <h1>
          Kalkidan
          <br />
          Shewit
        </h1>

        <h2>Fullstack Developer</h2>

        <p className="hero-location">
          Based in Addis Ababa, Ethiopia
        </p>

        <p className="hero-description">
          If you need an amazing frontend design
          <br />
          and a reliable backend, I am here for that.
        </p>

        <div className="hero-socials">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://x.com/"
            target="_blank"
            rel="noreferrer"
          >
            X
          </a>

          <a href="mailto:your-email@example.com">
            Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;