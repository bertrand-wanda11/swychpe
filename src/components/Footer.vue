<template>
    <div>

<!-- FOOTER SECTION (Swychr Branded) -->
<footer id="contact" class="swychpe-footer-section">
  <div class="footer-container">
    
    <!-- Top Contact Banner -->
    <div class="footer-contact-banner">
      <div class="contact-text-col">
        <h2 class="contact-title">Have questions? We're here to help</h2>
        <p class="contact-subtitle">Get in touch with the SwychPe support team anytime</p>
      </div>

      <div class="contact-buttons-col">
        <a href="tel:+237600000000" class="contact-pill-btn">
          <span class="pill-icon">📞</span>
          <span>+237 670126098</span>
        </a>
        <a href="mailto:support@swychr.com" class="contact-pill-btn">
          <span class="pill-icon">✉️</span>
          <span>support@swychpe.com</span>
        </a>
      </div>
    </div>

    <!-- Bottom Navigation & Legal Bar -->
    <div class="footer-bottom-bar">
      <div class="bottom-left">
        <!-- Logo Badge -->
        <router-link to="/" class="footer-logo-badge">
          <img src="@/assets/images/swychpe-logo.png" alt="SwychPe Logo" class="footer-logo-img" />
        </router-link>

        <span class="copyright-text">SwychPe All Rights Reserved 2026</span>
      </div>

      <!-- Legal Links -->
      <nav class="legal-links">
        <a href="#about">About SwychPe</a>
        <a href="#terms">Terms & Conditions</a>
        <a href="#privacy">Privacy Policy</a>
        <a href="#disclaimer">Disclaimer</a>
      </nav>

      <!-- Social Icons -->
      <div class="social-icons-group">
        <a href="#facebook" aria-label="Facebook">
          <svg viewBox="0 0 24 24" fill="currentColor" class="social-icon"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
        </a>
        <a href="#instagram" aria-label="Instagram">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="social-icon"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </a>
        <a href="#x" aria-label="X">
          <svg viewBox="0 0 24 24" fill="currentColor" class="social-icon"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
        <a href="#linkedin" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" fill="currentColor" class="social-icon"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
        <a href="#youtube" aria-label="YouTube">
          <svg viewBox="0 0 24 24" fill="currentColor" class="social-icon"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#150324"/></svg>
        </a>
      </div>
    </div>

  </div>
</footer>

    </div>
</template>    


<style scoped>

/* ==========================================================================
   FOOTER SECTION (Swychr Brand Purple Palette)
   ========================================================================== */
.swychpe-footer-section {
  width: 100%;
  background: linear-gradient(160deg, #1f072e 0%, #10021c 100%); /* Signature Swychr Deep Purple */
  color: #ffffff;
  padding: 5rem 4rem 3rem 4rem;
  display: flex;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.footer-container {
  max-width: 1250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
}

/* Contact Banner */
.footer-contact-banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 3.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.contact-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #E1BEE7; /* Signature Swychr Soft Lilac Highlight */
  margin-bottom: 0.8rem;
}

.contact-subtitle {
  font-size: 1.05rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
}

.contact-buttons-col {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Swychr Branded White/Purple Pill Buttons */
.contact-pill-btn {
  background-color: #ffffff;
  color: #4A148C;
  padding: 0.85rem 2.2rem;
  border-radius: 40px;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.25s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.contact-pill-btn:hover {
  background-color: #f3e5f5;
  color: #7B1FA2;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(123, 31, 162, 0.35);
}

.pill-icon {
  font-size: 1.1rem;
}

/* Bottom Legal & Nav Bar */
.footer-bottom-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.bottom-left {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.footer-logo-badge {
  background-color: #ffffff;
  padding: 6px 16px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.footer-logo-img {
  height: 24px;
  width: auto;
}

.copyright-text {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  white-space: nowrap;
}

.legal-links {
  display: flex;
  gap: 1.8rem;
}

.legal-links a {
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 600;
  transition: color 0.2s ease;
  white-space: nowrap;
}

.legal-links a:hover {
  color: #E1BEE7;
}

.social-icons-group {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.social-icon {
  width: 20px;
  height: 20px;
  color: rgba(255, 255, 255, 0.9);
  transition: all 0.2s ease;
  display: block;
}

.social-icons-group a:hover .social-icon {
  color: #E1BEE7;
  transform: translateY(-2px);
}

/* ==========================================================================
   RESPONSIVE BREAKPOINTS (Desktop, Tablet, Mobile)
   ========================================================================== */
@media (max-width: 1024px) {
  .swychpe-footer-section {
    padding: 4rem 2rem 2.5rem 2rem;
  }

  .footer-contact-banner {
    flex-direction: column;
    align-items: flex-start;
    gap: 2.5rem;
  }

  .contact-buttons-col {
    width: 100%;
  }

  .contact-pill-btn {
    justify-content: center;
  }

  .footer-bottom-bar {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }

  .legal-links {
    flex-wrap: wrap;
    gap: 1.2rem;
  }
}

@media (max-width: 600px) {
  .swychpe-footer-section {
    padding: 3rem 1.25rem 2rem 1.25rem;
  }

  .contact-title {
    font-size: 1.8rem;
  }

  .bottom-left {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
  }
}
</style>