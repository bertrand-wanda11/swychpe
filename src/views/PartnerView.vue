<template>
    <div class="swychpe-partner">
           <Navbar />
  <section class="partners-hero">
    <div class="partners-hero-container">
      
      <!-- Left Hero Content Column -->
      <div class="partners-text-column">
        <h1 class="partners-title">Grow with SwychPe</h1>
        <p class="partners-subtitle">
          Strategic partnership solutions engineered to scale your customer reach and drive financial engagement.
        </p>
      </div>

      <!-- Right Visual Column (3D Phone Mockup + Floating Elements) -->
      <div class="partners-visual-column">
        
        <!-- Background Radial Pattern Graphic -->
        <div class="pattern-bg">
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="200" r="180" stroke="url(#purplePattern)" stroke-width="1.5" stroke-dasharray="6 6" opacity="0.4"/>
            <circle cx="200" cy="200" r="130" stroke="#7B1FA2" stroke-width="1" opacity="0.25"/>
            <defs>
              <radialGradient id="purplePattern" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(200 200) scale(200)">
                <stop stop-color="#E1BEE7"/>
                <stop offset="1" stop-color="#7B1FA2" stop-opacity="0.1"/>
              </radialGradient>
            </defs>
          </svg>
        </div>

        <!-- 3D Mobile Phone Frame -->
        <div class="phone-mockup-wrapper">
          <div class="phone-screen">
            <div class="phone-notch"></div>
            <div class="phone-brand-logo">
              <span class="logo-spark">✦</span>
              <span class="logo-text">SwychPe</span>
            </div>
          </div>
        </div>

        <!-- Floating 3D Financial Badges & Tokens -->
        <div class="floating-badge badge-top-left">
          <span>⚡</span>
        </div>
        <div class="floating-token token-right-1">FCFA</div>
        <div class="floating-token token-right-2">€</div>
        <div class="floating-badge badge-bottom-left">
          <span>🎟️</span>
        </div>
        <div class="floating-badge badge-bottom-right">
          <span>💳</span>
        </div>

      </div>

    </div>
  </section>



  <section class="partners-benefits-section">
    <div class="partners-benefits-container">
      
      <!-- TOP BLOCK: Why Partner with SwychPe? -->
      <div class="why-partner-block">
        
        <!-- Left Header Column -->
        <div class="why-header-column">
          <h2 class="section-title">Why Partner with SwychPe?</h2>
          <p class="section-subtitle">
            Adaptable collaboration frameworks designed to scale your brand visibility and accelerate business growth.
          </p>
        </div>

        <!-- Right Feature Cards Column (2 Tall Rounded Cards) -->
        <div class="why-cards-column">
          
          <!-- Card 1: Wider Reach -->
          <div class="feature-card-light">
            <div class="feature-icon-wrapper">
              <!-- Illustrative Graphic Container -->
              <div class="icon-graphic graphic-reach">
                <span class="user-avatar">👤</span>
                <div class="mini-app-window">
                  <span class="window-spark">✦</span>
                </div>
              </div>
            </div>
            <h3 class="feature-title">Expanded Reach</h3>
            <p class="feature-desc">
              Connect directly with a rapidly growing, active digital banking user base across global markets.
            </p>
          </div>

          <!-- Card 2: Flexible Solutions -->
          <div class="feature-card-light">
            <div class="feature-icon-wrapper">
              <!-- API 3D Gear Graphic Container -->
              <div class="icon-graphic graphic-api">
                <div class="api-gear">
                  <span class="api-badge">API</span>
                </div>
              </div>
            </div>
            <h3 class="feature-title">Custom Integrations</h3>
            <p class="feature-desc">
              Tailored API options and modular financial tools built to match your unique operational goals.
            </p>
          </div>

        </div>

      </div>

      <!-- BOTTOM BLOCK: Partnership Benefits -->
      <div class="benefits-grid-block">
        <h2 class="benefits-main-title">Partnership Benefits</h2>

        <!-- 4 Dark Rounded Cards Grid -->
        <div class="benefits-cards-grid">
          
          <!-- Benefit 1 -->
          <div class="benefit-card-dark">
            <div class="benefit-icon">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="28" stroke="#E1BEE7" stroke-width="2"/>
                <path d="M32 16V48M16 32H48M20 20L44 44M44 20L20 44" stroke="#7B1FA2" stroke-width="2"/>
                <circle cx="32" cy="32" r="8" fill="#E1BEE7"/>
              </svg>
            </div>
            <h4 class="benefit-card-heading">Drive Revenue</h4>
            <p class="benefit-card-text">
              Accelerate user conversion and transaction volume through innovative reward structures.
            </p>
          </div>

          <!-- Benefit 2 -->
          <div class="benefit-card-dark">
            <div class="benefit-icon">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 44L28 28L36 36L52 16" stroke="#E1BEE7" stroke-width="3" stroke-linecap="round"/>
                <path d="M40 16H52V28" stroke="#E1BEE7" stroke-width="3" stroke-linecap="round"/>
              </svg>
            </div>
            <h4 class="benefit-card-heading">Elevate Experience</h4>
            <p class="benefit-card-text">
              Provide your customers with a smooth, intuitive, and modern mobile payment ecosystem.
            </p>
          </div>

          <!-- Benefit 3 -->
          <div class="benefit-card-dark">
            <div class="benefit-icon">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="20" stroke="#E1BEE7" stroke-width="3"/>
                <path d="M22 32C22 24 42 24 42 32C42 40 22 40 22 48" stroke="#7B1FA2" stroke-width="3"/>
              </svg>
            </div>
            <h4 class="benefit-card-heading">Marketing Support</h4>
            <p class="benefit-card-text">
              Promote your services across SwychPe’s featured offer banners and in-app channels.
            </p>
          </div>

          <!-- Benefit 4 -->
          <div class="benefit-card-dark">
            <div class="benefit-icon">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="14" y="16" width="36" height="24" rx="4" stroke="#E1BEE7" stroke-width="2.5"/>
                <path d="M24 48H40M32 40V48" stroke="#7B1FA2" stroke-width="2.5"/>
                <path d="M20 28L26 34L44 22" stroke="#E1BEE7" stroke-width="2.5" stroke-linecap="round"/>
              </svg>
            </div>
            <h4 class="benefit-card-heading">Seamless Onboarding</h4>
            <p class="benefit-card-text">
              Quick and straightforward technical integration with continuous developer assistance.
            </p>
          </div>

        </div>
      </div>

    </div>
  </section>


  <section class="partners-logos-section">
    <div class="partners-logos-container">
      
      <h2 class="section-heading">Our Global Partners</h2>

      <!-- Infinite Marquee Ticker Container -->
      <div class="ticker-wrapper">
        
        <!-- Row 1: Scrolling Left -->
        <div class="ticker-row ticker-left">
          <div class="ticker-track">
            <div 
              v-for="(partner, index) in doubledRow1" 
              :key="'r1-' + index" 
              class="partner-logo-card"
            >
              <div class="logo-icon-box">
                <span class="logo-brand-name">{{ partner.name }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Row 2: Scrolling Right -->
        <div class="ticker-row ticker-right">
          <div class="ticker-track">
            <div 
              v-for="(partner, index) in doubledRow2" 
              :key="'r2-' + index" 
              class="partner-logo-card"
            >
              <div class="logo-icon-box">
                <span class="logo-brand-name">{{ partner.name }}</span>
              </div>
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
import { computed } from 'vue'
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

const row1Partners = [
  { name: 'Anghami' },
  { name: 'Huawei' },
  { name: 'Nahdi' },
  { name: 'Jawaker' },
  { name: 'Lebara' },
  { name: 'Mobily' },
  { name: 'STC' },
  { name: 'Nintendo Switch' },
  { name: 'Amazon' }
]

const row2Partners = [
  { name: 'Roblox' },
  { name: 'PlayStation' },
  { name: 'Zain' },
  { name: 'Shahid VIP' },
  { name: 'Spotify' },
  { name: 'StarzPlay' },
  { name: 'Steam' },
  { name: 'Uber' },
  { name: 'Razer Gold' }
]

// Duplicate arrays to create seamless infinite scrolling effect
const doubledRow1 = computed(() => [...row1Partners, ...row1Partners, ...row1Partners])
const doubledRow2 = computed(() => [...row2Partners, ...row2Partners, ...row2Partners])
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');


.swychpe-partner {
   width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #7B1FA2 0%, #4A148C 100%);
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
}

.partners-hero {
  width: 100%;
  min-height: 80vh;
  background: linear-gradient(135deg, #10021c 0%, #150324 40%, #2b083e 100%);
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 2rem;
  overflow: hidden;
  position: relative;
}

.partners-hero-container {
  max-width: 1240px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
}

/* Left Hero Text Column */
.partners-text-column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.partners-title {
  font-size: 3.8rem;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.15;
  margin-bottom: 1.25rem;
  letter-spacing: -1px;
}

.partners-subtitle {
  font-size: 1.15rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
  max-width: 500px;
}

/* Right Visual Column */
.partners-visual-column {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 450px;
}

/* Background Circular Pattern */
.pattern-bg {
  position: absolute;
  width: 480px;
  height: 480px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 1;
}

/* 3D Smartphone Frame Container */
.phone-mockup-wrapper {
  position: relative;
  width: 220px;
  height: 420px;
  background: linear-gradient(145deg, #2b083e 0%, #150324 100%);
  border-radius: 40px;
  padding: 10px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6),
              inset 0 0 0 2px rgba(225, 190, 231, 0.25);
  z-index: 3;
  transform: perspective(1000px) rotateY(-8deg) rotateX(4deg);
  transition: transform 0.4s ease;
}

.phone-mockup-wrapper:hover {
  transform: perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.02);
}

.phone-screen {
  width: 100%;
  height: 100%;
  background: #0d0117;
  border-radius: 32px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid rgba(123, 31, 162, 0.3);
}

.phone-notch {
  position: absolute;
  top: 12px;
  width: 70px;
  height: 16px;
  background-color: #150324;
  border-radius: 10px;
}

.phone-brand-logo {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.logo-spark {
  color: #E1BEE7;
  font-size: 1.4rem;
}

.logo-text {
  font-size: 1.3rem;
  font-weight: 800;
  color: #ffffff;
}

/* Floating Elements (Badges & Tokens) */
.floating-badge, .floating-token {
  position: absolute;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease;
}

.floating-badge {
  background: linear-gradient(135deg, #7B1FA2 0%, #2b083e 100%);
  border: 1px solid rgba(225, 190, 231, 0.4);
  border-radius: 18px;
  padding: 0.8rem;
  color: #ffffff;
  font-size: 1.2rem;
}

.floating-token {
  background: linear-gradient(135deg, #2b083e 0%, #150324 100%);
  border: 1.5px solid #E1BEE7;
  border-radius: 50%;
  color: #E1BEE7;
  font-weight: 800;
}

.badge-top-left { top: 40px; left: 60px; transform: rotate(-15deg); }
.token-right-1 { width: 48px; height: 48px; font-size: 0.65rem; top: 80px; right: 50px; }
.token-right-2 { width: 40px; height: 40px; font-size: 0.85rem; top: 220px; right: 30px; }
.badge-bottom-left { bottom: 30px; left: 40px; transform: rotate(-20deg); }
.badge-bottom-right { bottom: 60px; right: 70px; transform: rotate(15deg); }

/* ==========================================================================
   RESPONSIVE DESIGN (DESKTOP, TABLET, MOBILE)
   ========================================================================== */
@media (max-width: 1024px) {
  .partners-hero-container {
    grid-template-columns: 1fr;
    gap: 3.5rem;
    text-align: center;
  }

  .partners-text-column {
    align-items: center;
  }

  .partners-title {
    font-size: 3rem;
  }

  .partners-subtitle {
    max-width: 100%;
  }
}

@media (max-width: 600px) {
  .partners-hero {
    padding: 3.5rem 1.25rem;
  }

  .partners-title {
    font-size: 2.2rem;
  }

  .partners-subtitle {
    font-size: 0.95rem;
  }

  .phone-mockup-wrapper {
    width: 180px;
    height: 350px;
    transform: none;
  }

  .pattern-bg {
    width: 320px;
    height: 320px;
  }

  .badge-top-left { left: 10px; }
  .token-right-1 { right: 10px; }
  .token-right-2 { right: 0px; }
  .badge-bottom-left { left: 10px; }
  .badge-bottom-right { right: 20px; }
}


.partners-benefits-section {
  width: 100%;
  background-color: #f3ecf9;
  padding: 5rem 2rem 6rem 2rem;
  font-family: 'Montserrat', sans-serif;
  color: #150324;
  display: flex;
  justify-content: center;
}

.partners-benefits-container {
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6rem;
}

/* ==========================================================================
   TOP BLOCK: WHY PARTNER WITH SWYCHPE
   ========================================================================== */
.why-partner-block {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  align-items: center;
  gap: 3.5rem;
}

.why-header-column {
  display: flex;
  flex-direction: column;
}

.section-title {
  font-size: 2.8rem;
  font-weight: 800;
  color: #150324;
  line-height: 1.2;
  margin-bottom: 1.25rem;
  letter-spacing: -0.5px;
}

.section-subtitle {
  font-size: 1.05rem;
  font-weight: 400;
  color: #4a3855;
  line-height: 1.7;
  max-width: 440px;
}

/* 2 Tall Light Feature Cards */
.why-cards-column {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.feature-card-light {
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 36px;
  padding: 2.2rem 1.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid rgba(123, 31, 162, 0.12);
  box-shadow: 0 15px 35px rgba(21, 3, 36, 0.05);
  transition: all 0.3s ease;
}

.feature-card-light:hover {
  transform: translateY(-6px);
  background-color: #ffffff;
  box-shadow: 0 20px 45px rgba(123, 31, 162, 0.12);
  border-color: #E1BEE7;
}

.feature-icon-wrapper {
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

/* Custom 3D Graphics inside Light Cards */
.icon-graphic {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.graphic-reach {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #E1BEE7 0%, #ffffff 100%);
  border-radius: 28px;
  border: 1px solid rgba(123, 31, 162, 0.2);
}

.user-avatar {
  font-size: 2.2rem;
}

.mini-app-window {
  position: absolute;
  right: -15px;
  bottom: -10px;
  width: 48px;
  height: 60px;
  background: linear-gradient(145deg, #2b083e 0%, #150324 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
}

.window-spark {
  color: #E1BEE7;
  font-size: 1rem;
}

.graphic-api {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  border: 2px stroke-linecap;
  display: flex;
  align-items: center;
  justify-content: center;
}

.api-gear {
  width: 75px;
  height: 75px;
  background: linear-gradient(135deg, #7B1FA2 0%, #2b083e 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 25px rgba(123, 31, 162, 0.3);
}

.api-badge {
  color: #E1BEE7;
  font-weight: 800;
  font-size: 0.95rem;
  letter-spacing: 1px;
}

.feature-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #150324;
  margin-bottom: 0.75rem;
}

.feature-desc {
  font-size: 0.92rem;
  font-weight: 400;
  color: #4a3855;
  line-height: 1.6;
}

/* ==========================================================================
   BOTTOM BLOCK: PARTNERSHIP BENEFITS
   ========================================================================== */
.benefits-grid-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.benefits-main-title {
  font-size: 2.4rem;
  font-weight: 800;
  color: #150324;
  margin-bottom: 3rem;
  text-align: center;
  letter-spacing: -0.5px;
}

.benefits-cards-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  width: 100%;
}

.benefit-card-dark {
  background: linear-gradient(160deg, #2b083e 0%, #150324 100%);
  border-radius: 28px;
  padding: 2rem 1.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid rgba(123, 31, 162, 0.3);
  box-shadow: 0 15px 35px rgba(21, 3, 36, 0.2);
  transition: all 0.3s ease;
}

.benefit-card-dark:hover {
  transform: translateY(-6px);
  border-color: #E1BEE7;
  box-shadow: 0 20px 45px rgba(123, 31, 162, 0.3);
}

.benefit-icon {
  width: 58px;
  height: 58px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.benefit-card-heading {
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.75rem;
}

.benefit-card-text {
  font-size: 0.88rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

/* ==========================================================================
   RESPONSIVE DESIGN (DESKTOP, TABLET, MOBILE)
   ========================================================================== */
@media (max-width: 1024px) {
  .why-partner-block {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    text-align: center;
  }

  .why-header-column {
    align-items: center;
  }

  .section-subtitle {
    max-width: 100%;
  }

  .benefits-cards-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 600px) {
  .partners-benefits-section {
    padding: 3.5rem 1.25rem;
  }

  .partners-benefits-container {
    gap: 4rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .why-cards-column {
    grid-template-columns: 1fr;
  }

  .benefits-main-title {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  .benefits-cards-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  .feature-card-light,
  .benefit-card-dark {
    padding: 1.8rem 1.25rem;
    border-radius: 24px;
  }
}

.partners-logos-section {
  width: 100%;
  background-color: #f3ecf9;
  padding: 5rem 0;
  font-family: 'Montserrat', sans-serif;
  color: #150324;
  overflow: hidden;
  display: flex;
  justify-content: center;
}

.partners-logos-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Centered Section Heading */
.section-heading {
  font-size: 2.4rem;
  font-weight: 800;
  color: #150324;
  margin-bottom: 3rem;
  text-align: center;
  letter-spacing: -0.5px;
}

/* Marquee Ticker Container */
.ticker-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
}

/* Side Fade Gradients for Smooth In/Out Effect */
.ticker-wrapper::before,
.ticker-wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  width: 120px;
  height: 100%;
  z-index: 2;
  pointer-events: none;
}

.ticker-wrapper::before {
  left: 0;
  background: linear-gradient(to right, #f3ecf9 0%, rgba(243, 236, 249, 0) 100%);
}

.ticker-wrapper::after {
  right: 0;
  background: linear-gradient(to left, #f3ecf9 0%, rgba(243, 236, 249, 0) 100%);
}

/* Ticker Row Setup */
.ticker-row {
  display: flex;
  overflow: hidden;
  user-select: none;
  width: 100%;
}

.ticker-track {
  display: flex;
  gap: 1.25rem;
  width: max-content;
}

/* Animations */
.ticker-left .ticker-track {
  animation: scrollLeft 35s linear infinite;
}

.ticker-right .ticker-track {
  animation: scrollRight 35s linear infinite;
}

.ticker-wrapper:hover .ticker-track {
  animation-play-state: paused;
}

/* Individual Partner Card Badge */
.partner-logo-card {
  background: linear-gradient(160deg, #2b083e 0%, #150324 100%);
  border-radius: 20px;
  padding: 0.85rem 1.8rem;
  min-width: 160px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(123, 31, 162, 0.3);
  box-shadow: 0 10px 25px rgba(21, 3, 36, 0.15);
  transition: all 0.3s ease;
  cursor: pointer;
}

.partner-logo-card:hover {
  transform: translateY(-4px) scale(1.03);
  border-color: #E1BEE7;
  box-shadow: 0 15px 30px rgba(123, 31, 162, 0.25);
}

.logo-icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-brand-name {
  font-size: 0.95rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.2px;
  text-align: center;
  white-space: nowrap;
}

/* CSS Keyframes for Infinite Scroll */
@keyframes scrollLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-33.333%);
  }
}

@keyframes scrollRight {
  0% {
    transform: translateX(-33.333%);
  }
  100% {
    transform: translateX(0);
  }
}

/* ==========================================================================
   RESPONSIVE DESIGN (DESKTOP, TABLET, MOBILE)
   ========================================================================== */
@media (max-width: 992px) {
  .section-heading {
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }

  .partner-logo-card {
    min-width: 140px;
    height: 65px;
    padding: 0.75rem 1.4rem;
  }

  .logo-brand-name {
    font-size: 0.88rem;
  }
}

@media (max-width: 600px) {
  .partners-logos-section {
    padding: 3.5rem 0;
  }

  .section-heading {
    font-size: 1.7rem;
    margin-bottom: 2rem;
  }

  .ticker-wrapper::before,
  .ticker-wrapper::after {
    width: 50px;
  }

  .partner-logo-card {
    min-width: 120px;
    height: 58px;
    padding: 0.6rem 1rem;
    border-radius: 16px;
  }

  .logo-brand-name {
    font-size: 0.8rem;
  }
}
</style>