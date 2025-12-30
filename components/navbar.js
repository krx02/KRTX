class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: sticky;
          top: 0;
          z-index: 1000;
          backdrop-filter: blur(10px);
          background-color: rgba(10, 10, 10, 0.8);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.2rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-size: 1.4rem;
          font-weight: 800;
          background: linear-gradient(to right, #00f0ff, #bd00ff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-decoration: none;
        }

        /* DESKTOP LINKS */
        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          color: #f3f4f6;
          text-decoration: none;
          font-weight: 500;
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #00f0ff;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 0;
          height: 2px;
          background: linear-gradient(to right, #00f0ff, #bd00ff);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        /* HAMBURGER BUTTON */
        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: white;
        }

        .mobile-menu-button svg {
          width: 28px;
          height: 28px;
          stroke: #ffffff;
        }

        /* MOBILE MODE */
        @media (max-width: 768px) {
          .nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            flex-direction: column;
    align-items: center;   /* 🔹 RIGHT ALIGN */
    text-align: center;       /* 🔹 TEXT RIGHT */
            background: rgba(10, 10, 10, 0.95);
            padding: 1.5rem;
            gap: 1.2rem;
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }

          .nav-links.open {
            display: flex;
          }

          .mobile-menu-button {
            display: block;
          }
        }
      </style>

      <div class="navbar-container">
        <a href="index.html" class="logo">KRTX AGENCY</a>

        <nav class="nav-links">
          <a href="index.html" class="nav-link">Home</a>
          <a href="index.html#services" class="nav-link">Services</a>
          <a href="portfolio.html" class="nav-link">Work</a>
          <a href="index.html#about" class="nav-link">About</a>
          <a href="index.html#contact" class="nav-link">Contact</a>
        </nav>

        <button class="mobile-menu-button" aria-label="Open menu">
          <svg viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2.5"
               stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    `;

    const btn = this.shadowRoot.querySelector('.mobile-menu-button');
    const links = this.shadowRoot.querySelector('.nav-links');

    btn.addEventListener('click', () => {
      links.classList.toggle('open');
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);
