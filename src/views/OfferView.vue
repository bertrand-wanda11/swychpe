<template>
    <div class="swychpe-offer">
            <Navbar />
  <section class="offers-hero">

    <div class="offers-hero-container">
      
 
      <div class="offers-text-column">
        <h1 class="offers-title">SwychPe Offers</h1>
        
        <p class="offers-description">
          Discover exclusive privileges curated for all SwychPe Cardholders—ranging from 
          <span class="highlight-link">travel upgrades</span> and 
          <span class="highlight-link">hospitality discounts</span> to 
          <span class="highlight-link">premium retail cashbacks</span> and 
          <span class="highlight-link">everyday lifestyle rewards</span>. 
          Experience tailored benefits designed to enrich every transaction.
        </p>

        <router-link to="/card" class="btn-offers-apply">
          Apply now
        </router-link>

        <!-- Carousel / Slider Dots -->
        <div class="carousel-dots">
          <span class="dot active"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      </div>

      <!-- Right Visual Column (Floating Cards + Starburst) -->
      <div class="offers-visual-column">
        
        <!-- Background Starburst SVG Graphic -->
        <div class="starburst-bg">
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M200 0L220 180L400 200L220 220L200 400L180 220L0 200L180 180L200 0Z" fill="url(#purpleGlow)" opacity="0.35"/>
            <path d="M200 50L212 188L350 200L212 212L200 350L188 212L50 200L188 188L200 50Z" fill="url(#purpleGlow)" opacity="0.25" transform="rotate(45 200 200)"/>
            <defs>
              <radialGradient id="purpleGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(200 200) rotate(90) scale(200)">
                <stop stop-color="#7B1FA2"/>
                <stop offset="1" stop-color="#E1BEE7" stop-opacity="0"/>
              </radialGradient>
            </defs>
          </svg>
        </div>

        <!-- Floating Cards Container -->
        <div class="floating-cards-wrapper">
          
          <!-- Primary Dark Purple Card -->
          <div class="swychr-card card-front">
            <div class="card-header">
              <span class="card-tier">WORLD DEBIT</span>
              <span class="contactless-icon">📡</span>
            </div>
            <div class="card-chip"></div>
            <div class="card-logo-area">
              <span class="card-spark">✦</span>
              <span class="card-brand">SwychPe</span>
            </div>
            <div class="card-footer">
              <span class="card-network">mastercard</span>
            </div>
          </div>

          <!-- Secondary Light Purple Card (Tilted Behind) -->
          <div class="swychr-card card-back">
            <div class="card-header">
              <span class="card-tier">PLATINUM DEBIT</span>
              <span class="contactless-icon">📡</span>
            </div>
            <div class="card-chip"></div>
            <div class="card-logo-area">
              <span class="card-spark">✦</span>
              <span class="card-brand">SwychPe</span>
            </div>
            <div class="card-footer">
              <span class="card-network">VISA</span>
            </div>
          </div>

        </div>

        <!-- Circular Slider Navigation Arrows -->
        <div class="slider-controls">
          <button class="arrow-btn" aria-label="Next Offer">
            <span>›</span>
          </button>
          <button class="arrow-btn" aria-label="Previous Offer">
            <span>‹</span>
          </button>
        </div>

      </div>

    </div>
  </section>


<section class="offers-grid-section">
    <div class="offers-grid-container">
      
      <!-- Top Category Filter Tabs -->
      <div class="offers-filter-tabs">
        <button 
          v-for="tab in tabs" 
          :key="tab.id"
          :class="['filter-tab-btn', { active: currentTab === tab.id }]"
          @click="currentTab = tab.id"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- 3x3 Offers Grid -->
      <div class="offers-cards-grid">
        <div 
          v-for="offer in filteredOffers" 
          :key="offer.id" 
          class="offer-card"
        >
          <!-- Top White Partner Logo Badge -->
          <div class="partner-logo-container">
            <span class="partner-logo-text">{{ offer.partnerName }}</span>
          </div>

          <!-- Card Content Body -->
          <div class="offer-card-body">
            <h3 class="offer-card-title">{{ offer.title }}</h3>
            
            <router-link :to="offer.link" class="offer-learn-more">
              Learn more →
            </router-link>
          </div>
        </div>
      </div>

      <!-- Bottom Pagination Bar -->
      <div class="offers-pagination">
        <button class="pag-nav-btn" :disabled="currentPage === 1" @click="currentPage--">Prev</button>
        
        <div class="pag-numbers">
          <button 
            v-for="page in totalPages" 
            :key="page" 
            :class="['pag-num-btn', { active: currentPage === page }]"
            @click="currentPage = page"
          >
            {{ page }}
          </button>
        </div>

        <button class="pag-nav-btn" :disabled="currentPage === totalPages" @click="currentPage++">Next</button>
      </div>

    </div>
  </section>

  <Footer />  
</div>
</template>


<script setup>
import { ref, computed } from 'vue'
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

const currentTab = ref('all')
const currentPage = ref(1)
const totalPages = ref(3)

const tabs = [
  { id: 'all', label: 'All Cards' },
  { id: 'debit', label: 'Debit Cards' },
  { id: 'prepaid', label: 'Prepaid Cards' }
]

// Rephrased SwychPe Partner Offers
const allOffers = ref([
  {
    id: 1,
    category: 'debit',
    partnerName: 'DRAGONPASS',
    title: 'Platinum Airport Lounge Access',
    link: '/learn'
  },
  {
    id: 2,
    category: 'debit',
    partnerName: 'DRAGONPASS',
    title: 'World Airport Lounge Access',
    link: '/learn'
  },
  {
    id: 3,
    category: 'debit',
    partnerName: 'IHG HOTELS & RESORTS',
    title: 'Exclusive IHG Stay Rewards & Discounts',
    link: '/learn'
  },
  {
    id: 4,
    category: 'prepaid',
    partnerName: 'amazon prime',
    title: 'Complimentary Amazon Prime Membership (Prepaid)',
    link: '/learn'
  },
  {
    id: 5,
    category: 'debit',
    partnerName: 'amazon prime',
    title: 'Complementary 6 Months Amazon Prime Membership',
    link: '/learn'
  },
  {
    id: 6,
    category: 'debit',
    partnerName: 'COSTA',
    title: 'Complimentary Costa Food and Drink at Dubai Airports',
    link: '/learn'
  },
  {
    id: 7,
    category: 'prepaid', // also available for debit
    partnerName: 'Rentalcars.com',
    title: 'Rentalcars.com 10% Off Your Booking',
    link: '/learn'
  },
  {
    id: 8,
    category: 'prepaid',
    partnerName: 'Trip.com',
    title: 'Trip.com - Get 10% Off Flights and Hotels',
    link: '/learn'
  },
  {
    id: 9,
    category: 'debit',
    partnerName: 'Trip.com',
    title: 'Trip.com - Get 15% Off Flights and Hotels',
    link: '/learn'
  }
])

const filteredOffers = computed(() => {
  if (currentTab.value === 'all') {
    return allOffers.value
  }
  return allOffers.value.filter(offer => offer.category === currentTab.value)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');

.swychpe-offer {
   width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #7B1FA2 0%, #4A148C 100%);
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
}
/* Main Offers Section Wrapper */
.offers-hero {
  width: 100%;
  min-height: 85vh;
  background: linear-gradient(135deg, #10021c 0%, #150324 40%, #2b083e 100%);
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  overflow: hidden;
  position: relative;
}

.offers-hero-container {
  max-width: 1240px;
  width: 100%;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 4rem;
}

/* Left Content Column */
.offers-text-column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.offers-title {
  font-size: 3.2rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1.5rem;
  letter-spacing: -0.5px;
}

.offers-description {
  font-size: 1.05rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 580px;
}

.highlight-link {
  color: #E1BEE7;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 4px;
  cursor: pointer;
  transition: color 0.2s ease;
}

.highlight-link:hover {
  color: #ffffff;
}

/* Apply Now CTA Button */
.btn-offers-apply {
  background-color: #E1BEE7;
  color: #150324;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  padding: 0.85rem 2.2rem;
  border-radius: 50px;
  text-decoration: none !important;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(225, 190, 231, 0.25);
  margin-bottom: 3rem;
}

.btn-offers-apply:hover {
  background-color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(255, 255, 255, 0.35);
}

/* Carousel Dots */
.carousel-dots {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;
}

.dot.active {
  background-color: #E1BEE7;
  width: 10px;
  height: 10px;
}

/* Right Visual Column */
.offers-visual-column {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 420px;
}

.starburst-bg {
  position: absolute;
  width: 480px;
  height: 480px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 1;
}

/* Card Stacking & Styling */
.floating-cards-wrapper {
  position: relative;
  width: 320px;
  height: 400px;
  z-index: 2;
}

.swychr-card {
  width: 230px;
  height: 350px;
  border-radius: 20px;
  padding: 1.5rem;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.5);
  transition: all 0.4s ease;
}

/* Front Card (Primary Brand Dark) */
.card-front {
  background: linear-gradient(145deg, #2b083e 0%, #150324 100%);
  border: 1px solid rgba(225, 190, 231, 0.3);
  top: 20px;
  left: 0;
  z-index: 3;
  transform: rotate(-10deg);
}

.card-front:hover {
  transform: rotate(-5deg) scale(1.03);
}

/* Back Card (Tilted Behind) */
.card-back {
  background: linear-gradient(145deg, #1f0436 0%, #0d0117 100%);
  border: 1px solid rgba(123, 31, 162, 0.4);
  top: -10px;
  right: -20px;
  z-index: 2;
  transform: rotate(14deg);
  opacity: 0.9;
}

.card-back:hover {
  transform: rotate(18deg) scale(1.03);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-tier {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.7);
}

.contactless-icon {
  font-size: 0.9rem;
  opacity: 0.8;
}

.card-chip {
  width: 36px;
  height: 28px;
  background: linear-gradient(135deg, #e0e0e0 0%, #9e9e9e 100%);
  border-radius: 6px;
  margin-top: 1rem;
}

.card-logo-area {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: auto;
  margin-bottom: auto;
}

.card-spark {
  color: #E1BEE7;
  font-size: 1.4rem;
}

.card-brand {
  font-size: 1.4rem;
  font-weight: 800;
  color: #ffffff;
}

.card-footer {
  display: flex;
  justify-content: flex-end;
}

.card-network {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);
}

/* Circular Slider Arrows */
.slider-controls {
  position: absolute;
  bottom: 0px;
  right: 0px;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  z-index: 10;
}

.arrow-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(225, 190, 231, 0.3);
  background: rgba(43, 8, 62, 0.6);
  backdrop-filter: blur(8px);
  color: #ffffff;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.arrow-btn:hover {
  background-color: #7B1FA2;
  border-color: #E1BEE7;
  transform: scale(1.08);
}

/* ==========================================================================
   RESPONSIVE DESIGN (DESKTOP, TABLET, MOBILE)
   ========================================================================== */
@media (max-width: 1024px) {
  .offers-hero-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .offers-text-column {
    align-items: center;
    text-align: center;
  }

  .offers-description {
    max-width: 100%;
  }

  .offers-visual-column {
    min-height: 380px;
  }
}

@media (max-width: 600px) {
  .offers-hero {
    padding: 3rem 1.25rem;
  }

  .offers-title {
    font-size: 2.2rem;
  }

  .offers-description {
    font-size: 0.92rem;
  }

  .btn-offers-apply {
    width: 100%;
    padding: 0.9rem;
  }

  .floating-cards-wrapper {
    width: 260px;
    height: 340px;
  }

  .swychr-card {
    width: 190px;
    height: 290px;
    padding: 1.2rem;
  }

  .card-front {
    transform: rotate(-8deg);
  }

  .card-back {
    transform: rotate(10deg);
    right: -10px;
  }

  .slider-controls {
    bottom: -10px;
    right: 10px;
  }
}



.offers-grid-section {
  width: 100%;
  background-color: #f3ecf9;
  padding: 4rem 1.5rem 6rem 1.5rem;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  justify-content: center;
}

.offers-grid-container {
  max-width: 1100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Category Filter Tabs Header */
.offers-filter-tabs {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3.5rem;
  border-bottom: 2px solid rgba(123, 31, 162, 0.12);
  padding-bottom: 0.75rem;
  width: 100%;
  max-width: 500px;
}

.filter-tab-btn {
  background: none;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.92rem;
  font-weight: 600;
  color: #5c4468;
  cursor: pointer;
  position: relative;
  padding: 0.4rem 0.2rem;
  transition: all 0.25s ease;
}

.filter-tab-btn:hover {
  color: #7B1FA2;
}

.filter-tab-btn.active {
  color: #150324;
  font-weight: 700;
}

/* Active Underline Indicator */
.filter-tab-btn.active::after {
  content: '';
  position: absolute;
  bottom: -0.85rem;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #7B1FA2;
  border-radius: 2px;
}

/* 3x3 Grid Matrix Layout */
.offers-cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.8rem;
  width: 100%;
  margin-bottom: 4rem;
}

/* Individual Dark Purple Card Container */
.offer-card {
  background: linear-gradient(160deg, #2b083e 0%, #150324 100%);
  border-radius: 24px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 250px;
  box-shadow: 0 12px 30px rgba(21, 3, 36, 0.15);
  border: 1px solid rgba(123, 31, 162, 0.25);
  transition: all 0.3s ease;
}

.offer-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(123, 31, 162, 0.25);
  border-color: #E1BEE7;
}

/* Top Rounded White Partner Logo Header */
.partner-logo-container {
  background-color: #ffffff;
  border-radius: 16px;
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
}

.partner-logo-text {
  font-size: 0.85rem;
  font-weight: 800;
  color: #2b083e;
  text-align: center;
  letter-spacing: -0.2px;
}

/* Card Body Content */
.offer-card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  margin-top: 1.25rem;
}

.offer-card-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.4;
  margin-bottom: 1.5rem;
}

.offer-learn-more {
  font-size: 0.82rem;
  font-weight: 700;
  color: #E1BEE7;
  text-decoration: none !important;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  transition: color 0.2s ease;
}

.offer-learn-more:hover {
  color: #ffffff;
}

/* Pagination Bar Controls */
.offers-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.pag-nav-btn {
  background: none;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: #5c4468;
  cursor: pointer;
  transition: color 0.2s ease;
}

.pag-nav-btn:hover:not(:disabled) {
  color: #7B1FA2;
}

.pag-nav-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.pag-numbers {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.pag-num-btn {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: #150324;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.pag-num-btn.active {
  background-color: #150324;
  color: #ffffff;
}

/* ==========================================================================
   RESPONSIVE DESIGN (DESKTOP, TABLET, MOBILE)
   ========================================================================== */
@media (max-width: 992px) {
  .offers-cards-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 600px) {
  .offers-grid-section {
    padding: 3rem 1rem 4rem 1rem;
  }

  .offers-filter-tabs {
    gap: 1.2rem;
    margin-bottom: 2.5rem;
  }

  .filter-tab-btn {
    font-size: 0.85rem;
  }

  .offers-cards-grid {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }

  .offer-card {
    min-height: 220px;
    padding: 1.1rem;
  }

  .partner-logo-container {
    height: 55px;
  }

  .offer-card-title {
    font-size: 0.98rem;
  }
}
</style>