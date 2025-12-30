class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: relative;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    backdrop-filter: blur(10px);
                    background-color: rgba(10, 10, 10, 0.8);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                .navbar-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 1.5rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .logo {
                    font-size: 1.5rem;
                    font-weight: 800;
                    background: linear-gradient(to right, #00f0ff, #bd00ff);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    text-decoration: none;
                }
                
                .nav-links {
                    display: flex;
                    gap: 2rem;
                    align-items: center;
                }
                
                .nav-link {
                    color: #f3f4f6;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.3s ease;
                    position: relative;
                }
                
                .nav-link:hover {
                    color: #00f0ff;
                }
                
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: linear-gradient(to right, #00f0ff, #bd00ff);
                    transition: width 0.3s ease;
                }
                
                .nav-link:hover::after {
                    width: 100%;
                }
                
                .mobile-menu-button {
                    display: none;
                    background: none;
                    border: none;
                    color: white;
                    cursor: pointer;
                }

                .mobile-menu-button svg {
    stroke: #ffffff;
}

                
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }
                    
                    .mobile-menu-button {
                        display: block;
                    }
                }
            </style>
            
            <div class="navbar-container">
                <a href="#" class="logo">KRTX AGENCY</a>
                
                <div class="nav-links">
    <a href="index.html" class="nav-link">Home</a>
    <a href="index.html#services" class="nav-link">Services</a>
    <a href="portfolio.html" class="nav-link">Work</a>
    <a href="index.html#about" class="nav-link">About</a>
    <a href="index.html#contact" class="nav-link">Contact</a>
</div>

                
                <button class="mobile-menu-button">
                    <i data-feather="menu"></i>
                </button>
            </div>
        `;
        const current = window.location.pathname.split("/").pop();

this.shadowRoot.querySelectorAll(".nav-link").forEach(link => {
    const href = link.getAttribute("href");

    if (
        (current === "" || current === "index.html") && href === "index.html" ||
        current === "portfolio.html" && href === "portfolio.html"
    ) {
        link.classList.add("active");
    }
});

        // Initialize feather icons
        if (window.feather) {
            window.feather.replace();
        }
        
        // Mobile menu toggle
        const mobileMenuButton = this.shadowRoot.querySelector('.mobile-menu-button');
        const navLinks = this.shadowRoot.querySelector('.nav-links');
        
        mobileMenuButton.addEventListener('click', () => {
            const isOpen = navLinks.style.display === 'flex';
            navLinks.style.display = isOpen ? 'none' : 'flex';
            
            if (!isOpen) {
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
                navLinks.style.flexDirection = 'column';
                navLinks.style.padding = '2rem';
                navLinks.style.gap = '1.5rem';
                navLinks.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
            }
        });
    }
}

customElements.define('custom-navbar', CustomNavbar);