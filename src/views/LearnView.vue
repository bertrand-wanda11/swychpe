<template>
    <div class="swychpe-learn">
       <Navbar />
  <section class="offer-detail-hero">
    <div class="offer-detail-container">
      
      <!-- Left Column: Content & CTA -->
      <div class="offer-text-column">
        <h1 class="offer-heading">Save 10% On Global Vehicle Rentals</h1>
        
        <p class="offer-subtext">
          Enjoy an exclusive 10% discount whenever you reserve your rental vehicle using your SwychPe Card. 
          Unlock premium savings across a global fleet of cars by completing your reservation through the direct link below.
        </p>

        <!-- Action & Metadata Row -->
        <div class="offer-action-row">
          <a href="#claim-offer" class="btn-get-offer">
            Get Offer
          </a>

          <div class="offer-metadata">
            <span class="meta-item">
              <span class="meta-icon">🌐</span> Worldwide
            </span>
            <span class="meta-divider">•</span>
            <span class="meta-item">
              Valid until Dec 31, 2026
            </span>
          </div>
        </div>
      </div>

      <!-- Right Column: White Rounded Partner Banner -->
      <div class="offer-banner-column">
        <div class="partner-banner-card">
          <span class="partner-logo-brand">Rentalcars.com</span>
        </div>
      </div>

    </div>
  </section>


  <section class="offer-body-section">
    <div class="offer-body-container">
      
      <!-- TOP BLOCK: How It Works -->
      <div class="how-it-works-block">
        
        <!-- Left Visual Illustration / Map Container -->
        <div class="works-visual-column">
          <div class="map-graphic-wrapper">
            <!-- Floating Orbit Rings & Tokens Graphic -->
            <svg class="orbit-bg" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="150" cy="150" rx="120" ry="45" stroke="#E1BEE7" stroke-width="1.5" stroke-dasharray="4 4" transform="rotate(-25 150 150)" />
              <ellipse cx="150" cy="150" rx="110" ry="40" stroke="#7B1FA2" stroke-width="1.5" transform="rotate(35 150 150)" opacity="0.4" />
            </svg>

            <!-- Map Pin Badge -->
            <div class="map-pin">
              <span>📍</span>
            </div>

            <!-- Floating Coins/Tokens -->
            <div class="coin coin-1">FCFA</div>
            <div class="coin coin-2">€</div>
            <div class="coin coin-3">$</div>

            <!-- 3D Map Silhouette -->
            <div class="map-silhouette"></div>
          </div>
        </div>

        <!-- Right Content Column -->
        <div class="works-content-column">
          <div class="works-header-row">
            <h2 class="section-heading">How it Works</h2>
            <router-link to="/get-app" class="btn-get-app">
              Get The App
            </router-link>
          </div>

          <p class="works-instruction">
            Simply follow the direct booking link below to reserve your vehicle, and input your active 
            <strong>SwychPe Card</strong> payment credentials at checkout to automatically apply your discount.
          </p>

          <a href="#claim-offer" class="link-get-offer">
            Get Offer
          </a>
        </div>

      </div>

      <!-- BOTTOM BLOCK: Terms and Conditions -->
      <div class="terms-conditions-block">
        
        <!-- Left Text Content Column -->
        <div class="terms-content-column">
          <h2 class="section-heading">Terms and Conditions</h2>

          <ul class="terms-list">
            <li>
              Discounts are exclusively valid when reservations are completed via the official promotional link. Bookings made directly on third-party homepages or external mobile apps are ineligible.
            </li>
            <li>
              Savings apply strictly to the base vehicle rental rate (excluding local taxes, mandatory insurance, fuel charges, and add-on extras).
            </li>
            <li>
              This offer cannot be combined with existing partner discounts, promotional vouchers, or loyalty points.
            </li>
          </ul>
        </div>

        <!-- Right Lifestyle Photo Banner -->
        <div class="terms-image-column">
          <div class="lifestyle-card">
            <div class="lifestyle-card-overlay">
              <div class="travel-badge">Family & Travel Perks</div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>


   <Footer />
    </div>
    </template>


<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');

.swychpe-learn {
   width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #7B1FA2 0%, #4A148C 100%);
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
}
/* Hero Outer Section Wrapper */
.offer-detail-hero {
  width: 100%;
  min-height: 70vh;
  background: linear-gradient(135deg, #10021c 0%, #150324 40%, #2b083e 100%);
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 2rem;
  overflow: hidden;
}

.offer-detail-container {
  max-width: 1240px;
  width: 100%;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 4rem;
}

/* Left Content Column Styling */
.offer-text-column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.offer-heading {
  font-size: 3.2rem;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  letter-spacing: -0.5px;
}

.offer-subtext {
  font-size: 1.05rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 580px;
}

/* Action Button & Metadata Styling */
.offer-action-row {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.btn-get-offer {
  background-color: #E1BEE7;
  color: #150324;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  padding: 0.9rem 2.4rem;
  border-radius: 50px;
  text-decoration: none !important;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(225, 190, 231, 0.25);
}

.btn-get-offer:hover {
  background-color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(255, 255, 255, 0.35);
}

.offer-metadata {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
}

.meta-item {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.meta-icon {
  font-size: 1rem;
}

.meta-divider {
  color: #E1BEE7;
  opacity: 0.6;
}

/* Right Partner Banner Card */
.offer-banner-column {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.partner-banner-card {
  background-color: #ffffff;
  width: 100%;
  max-width: 520px;
  height: 320px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(225, 190, 231, 0.2);
  transition: transform 0.3s ease;
}

.partner-banner-card:hover {
  transform: scale(1.02);
}

.partner-logo-brand {
  font-size: 2.4rem;
  font-weight: 800;
  color: #1a4fa0; /* Original brand accent color */
  letter-spacing: -0.5px;
  text-align: center;
}

/* ==========================================================================
   RESPONSIVE STYLING (DESKTOP, TABLET, MOBILE)
   ========================================================================== */
@media (max-width: 1024px) {
  .offer-detail-container {
    grid-template-columns: 1fr;
    gap: 3.5rem;
  }

  .offer-text-column {
    align-items: flex-start;
  }

  .offer-heading {
    font-size: 2.6rem;
  }

  .partner-banner-card {
    max-width: 100%;
    height: 260px;
  }
}

@media (max-width: 600px) {
  .offer-detail-hero {
    padding: 3rem 1.25rem;
  }

  .offer-heading {
    font-size: 2rem;
  }

  .offer-subtext {
    font-size: 0.92rem;
    margin-bottom: 2rem;
  }

  .offer-action-row {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    gap: 1.25rem;
  }

  .btn-get-offer {
    width: 100%;
    padding: 0.95rem;
  }

  .offer-metadata {
    justify-content: center;
    font-size: 0.85rem;
  }

  .partner-banner-card {
    height: 200px;
    border-radius: 28px;
  }

  .partner-logo-brand {
    font-size: 1.75rem;
  }
}


.offer-body-section {
  width: 100%;
  background-color: #ffffff;
  padding: 5rem 2rem 6rem 2rem;
  font-family: 'Montserrat', sans-serif;
  color: #150324;
  display: flex;
  justify-content: center;
}

.offer-body-container {
  max-width: 1140px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6rem;
}

/* Common Section Headings */
.section-heading {
  font-size: 2.2rem;
  font-weight: 800;
  color: #150324;
  letter-spacing: -0.5px;
  margin-bottom: 1.5rem;
}

/* ==========================================================================
   TOP BLOCK: HOW IT WORKS
   ========================================================================== */
.how-it-works-block {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  align-items: center;
  gap: 4rem;
}

/* Left Orbit/Map Graphic */
.works-visual-column {
  display: flex;
  justify-content: center;
  align-items: center;
}

.map-graphic-wrapper {
  position: relative;
  width: 300px;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.orbit-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.map-silhouette {
  width: 200px;
  height: 180px;
  background: linear-gradient(135deg, #2b083e 0%, #150324 100%);
  clip-path: polygon(25% 0%, 75% 15%, 100% 60%, 70% 100%, 15% 85%, 0% 40%);
  border-radius: 30px;
  box-shadow: 0 15px 35px rgba(43, 8, 62, 0.25);
}

.map-pin {
  position: absolute;
  top: 30px;
  right: 40px;
  width: 45px;
  height: 45px;
  background-color: #E1BEE7;
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(123, 31, 162, 0.3);
  z-index: 3;
}

.map-pin span {
  transform: rotate(45deg);
  font-size: 1.2rem;
}

.coin {
  position: absolute;
  background: linear-gradient(135deg, #7B1FA2 0%, #2b083e 100%);
  color: #E1BEE7;
  border: 1px solid rgba(225, 190, 231, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.2);
  z-index: 2;
}

.coin-1 { width: 42px; height: 42px; font-size: 0.65rem; top: 60px; left: 40px; }
.coin-2 { width: 36px; height: 36px; font-size: 0.85rem; bottom: 50px; left: 60px; }
.coin-3 { width: 38px; height: 38px; font-size: 0.85rem; bottom: 70px; right: 50px; }

/* Right Content Area */
.works-content-column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.works-header-row {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.btn-get-app {
  background-color: #E1BEE7;
  color: #150324;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  padding: 0.65rem 1.4rem;
  border-radius: 50px;
  text-decoration: none !important;
  transition: all 0.25s ease;
  box-shadow: 0 4px 15px rgba(225, 190, 231, 0.3);
}

.btn-get-app:hover {
  background-color: #7B1FA2;
  color: #ffffff;
}

.works-instruction {
  font-size: 1rem;
  font-weight: 400;
  color: #4a3855;
  line-height: 1.75;
  margin-bottom: 2rem;
  max-width: 540px;
}

.link-get-offer {
  font-size: 0.95rem;
  font-weight: 700;
  color: #7B1FA2;
  text-decoration: none !important;
  transition: color 0.2s ease;
}

.link-get-offer:hover {
  color: #150324;
}

/* ==========================================================================
   BOTTOM BLOCK: TERMS AND CONDITIONS
   ========================================================================== */
.terms-conditions-block {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 4rem;
}

.terms-content-column {
  display: flex;
  flex-direction: column;
}

.terms-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.terms-list li {
  font-size: 0.95rem;
  font-weight: 400;
  color: #4a3855;
  line-height: 1.75;
  position: relative;
  padding-left: 1.5rem;
}

.terms-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  top: -2px;
  color: #7B1FA2;
  font-size: 1.4rem;
  font-weight: bold;
}

/* Right Lifestyle Image Banner */
.terms-image-column {
  display: flex;
  justify-content: flex-end;
}

.lifestyle-card {
  width: 100%;
  height: 260px;
  border-radius: 32px;
  background: linear-gradient(135deg, #2b083e 0%, #150324 100%), 
              url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80') center/cover;
  background-blend-mode: overlay;
  box-shadow: 0 20px 40px rgba(21, 3, 36, 0.15);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(123, 31, 162, 0.15);
}

.lifestyle-card-overlay {
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
}

.travel-badge {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* ==========================================================================
   RESPONSIVE DESIGN (DESKTOP, TABLET, MOBILE)
   ========================================================================== */
@media (max-width: 992px) {
  .how-it-works-block,
  .terms-conditions-block {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .terms-image-column {
    order: -1; /* Place image above text on tablet/mobile if desired */
  }

  .lifestyle-card {
    height: 240px;
  }
}

@media (max-width: 600px) {
  .offer-body-section {
    padding: 3.5rem 1.25rem;
  }

  .offer-body-container {
    gap: 4rem;
  }

  .section-heading {
    font-size: 1.75rem;
  }

  .works-header-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.25rem;
  }

  .btn-get-app {
    width: 100%;
    text-align: center;
  }

  .works-instruction,
  .terms-list li {
    font-size: 0.9rem;
  }

  .lifestyle-card {
    height: 200px;
    border-radius: 24px;
  }
}
</style>