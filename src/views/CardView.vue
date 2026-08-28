<template>
   
  <div class="swychpe-cards-page">
     <Navbar />
    <section class="cards-hero-section">
      <div class="cards-hero-container">
        <!-- Left Column: Copy & Primary CTA -->
        <div class="cards-hero-left">
          <h1 class="cards-hero-title">
            Your card, tailored to your lifestyle
          </h1>
          <p class="cards-hero-subtitle">
            One smart multi-currency card designed your way — ultra-low FX fees, VIP lounge privileges, and global spending rewards.
          </p>
     <router-link to="/request" class="btn-request-card">
  Request your card
</router-link>
        </div>

        <!-- Right Column: 3D Floating Cards -->
        <div class="cards-hero-right">
          <div class="cards-display-stage">
            <!-- Card 1: Black Premium -->
            <div class="floating-card-wrapper card-left-float">
              <div class="card-3d-body premium-dark-card">
                <div class="card-header-mini">
                  <span class="card-tier-label">WORLD DEBIT</span>
                  <span class="contactless-icon">📡</span>
                </div>
                <div class="card-chip-graphic"></div>
                <div class="card-brand-logo">
                  <span class="swychr-spark-icon">✦</span>
                  <strong class="card-brand-name">SwychPe</strong>
                </div>
                <div class="card-footer-mini">
                  <span class="card-network">mastercard</span>
                </div>
              </div>
              <div class="glowing-ring-base purple-glow"></div>
            </div>

            <!-- Card 2: Platinum Purple -->
            <div class="floating-card-wrapper card-right-float">
              <div class="card-3d-body platinum-purple-card">
                <div class="card-header-mini">
                  <span class="card-tier-label">PLATINUM DEBIT</span>
                  <span class="contactless-icon">📡</span>
                </div>
                <div class="card-chip-graphic"></div>
                <div class="card-brand-logo">
                  <span class="swychr-spark-icon">✦</span>
                  <strong class="card-brand-name">SwychPe</strong>
                </div>
                <div class="card-footer-mini">
                  <span class="card-network">VISA</span>
                </div>
              </div>
              <div class="glowing-ring-base lilac-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================================================================
         SECTION 2: CARD SELECTION & COMPARISON GRID (MATCHING SCREENSHOT)
         =================================================================== -->
    <section id="card-showcase" class="cards-grid-section">
      <div class="cards-grid-container">
        
        <!-- Category Filter Tabs -->
        <div class="filter-tabs-wrapper">
          <button 
            v-for="tab in filterTabs" 
            :key="tab.id"
            class="filter-tab-btn"
            :class="{ 'is-active': activeTab === tab.id }"
            @click="activeTab = tab.id"
          >
            {{ tab.label }}
          </button>
        </div>

        <!-- Floating Comparison Floating Bar (Appears when cards are checked) -->
        <div v-if="selectedCompareIds.length > 0" class="compare-bar-floating">
          <span>Comparing <strong>{{ selectedCompareIds.length }}</strong> cards</span>
          <button class="btn-compare-now" @click="openCompareModal">
            Compare Selected Cards
          </button>
          <button class="btn-clear-compare" @click="selectedCompareIds = []">
            ✕
          </button>
        </div>

        <!-- Cards Grid Container -->
        <div class="cards-grid">
          <div 
            v-for="card in filteredCards" 
            :key="card.id" 
            class="card-tile-container"
          >
            <!-- Checkbox Option -->
            <label class="compare-checkbox-label">
              <input 
                type="checkbox" 
                :value="card.id" 
                v-model="selectedCompareIds"
                class="compare-checkbox-input"
              />
              <span class="custom-checkbox-box"></span>
              <span class="checkbox-text">Compare</span>
            </label>

            <!-- Card Preview Graphic -->
            <div class="card-tile-preview">
              <div class="mini-card-graphic" :class="card.cardThemeClass">
                <div class="mini-card-header">
                  <span class="mini-card-logo">✦ SwychPe</span>
                  <span class="mini-card-chip"></span>
                </div>
                <div class="mini-card-footer">
                  <span class="mini-card-name">{{ card.title }}</span>
                  <span class="mini-card-network">{{ card.network }}</span>
                </div>
              </div>
            </div>

            <!-- Card Info Content -->
            <div class="card-tile-content">
              <h3 class="card-tile-title">{{ card.title }}</h3>

              <!-- Feature Bullets with Arrow Indicators -->
              <ul class="card-feature-list">
                <li v-for="(feature, fIndex) in card.features" :key="fIndex">
                  <span class="bullet-arrow">›</span>
                  <span class="feature-text">{{ feature }}</span>
                </li>
              </ul>

              <!-- Annual Fee Badge Pill -->
              <div class="card-fee-badge">
                <span class="fee-icon">🔒</span>
                <span>Annual Fee: <strong>{{ card.fee }}</strong></span>
              </div>

              <!-- Action Buttons Row -->
              <div class="card-tile-actions">
              <router-link 
  :to="{ path: '/request', query: { card: card.title } }" 
  class="btn-apply-now"
>
  Apply Now
</router-link>
                
                <a href="#card-details" class="link-learn-more" @click.prevent="handleLearnMore(card)">
                  Learn more <span class="arrow-icon">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>


    <!-- ===================================================================
         SECTION 3: CONTACTLESS & DIGITAL WALLETS (MATCHING SCREENSHOT)
         =================================================================== -->
    <section class="cards-contactless-section">
      <div class="cards-contactless-container">
        
        <!-- Left Column: Twin Overlapping Mobile Device Mockups -->
        <div class="contactless-graphic-left">
          <div class="mobile-mockups-wrapper">
            
            <!-- Floating 3D Coins/Tokens Top Overhead -->
            <div class="floating-tokens-group">
              <span class="token-chip token-1">✦</span>
              <span class="token-chip token-2">💳</span>
              <span class="token-chip token-3">✦</span>
            </div>

            <!-- Phone 1 (Left / Back Phone - Account Balance & Widgets) -->
            <div class="phone-mockup phone-left-back">
              <div class="phone-screen-content">
                <div class="app-header-mini">
                  <div class="user-avatar-badge">SP</div>
                  <div class="currency-tag">FCFA ▲</div>
                </div>
                <div class="balance-display-box">
                  <span class="balance-label">Total Balance</span>
                  <h3 class="balance-amount">2,300,800 <small>FCFA</small></h3>
                </div>
                <div class="quick-widgets-row">
                  <div class="widget-icon-pill">⚡ Transfer</div>
                  <div class="widget-icon-pill">➕ Top Up</div>
                </div>
                <div class="recent-trans-list">
                  <div class="trans-item">
                    <span>Card Payment</span>
                    <strong>- 15,000 FCFA</strong>
                  </div>
                  <div class="trans-item">
                    <span>Deposit Recv.</span>
                    <strong class="green-text">+ 120,000 FCFA</strong>
                  </div>
                </div>
              </div>
            </div>

            <!-- Phone 2 (Right / Front Phone - Card View & Wallet Badge) -->
            <div class="phone-mockup phone-right-front">
              <div class="phone-screen-content">
                <div class="app-header-title">SwychPe Sky</div>
                <div class="card-display-mini">
                  <span class="mini-brand">✦ SwychPe</span>
                  <span class="mini-chip"></span>
                </div>
                
                <!-- Digital Wallet Badge Option -->
                <div class="apple-wallet-badge">
                  <span> Add to Apple Wallet</span>
                </div>

                <div class="card-balance-card">
                  <span class="sub-label">Current Card Balance</span>
                  <strong class="amount-text">1,000.00 FCFA</strong>
                </div>

                <div class="card-action-link">
                  <span>Edit card nickname</span>
                  <span class="edit-icon">✏️</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- Right Column: Rephrased Copy & Request Button -->
        <div class="contactless-copy-right">
          <h2 class="contactless-title">
            Tap. Pay. Done.
          </h2>
          <p class="contactless-subtitle">
            Connect your SwychPe card instantly to Apple Pay, Google Pay, and Samsung Pay for effortless, lightning-fast contactless payments worldwide.
          </p>
  
   <router-link to="/request" class="btn-request-now">
  Request now!
</router-link>
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

const activeTab = ref('all')
const filterTabs = [
  { id: 'all', label: 'All Cards' },
  { id: 'debit', label: 'Debit Cards' },
  { id: 'prepaid', label: 'Prepaid Cards' }
]

// Compare Selection State
const selectedCompareIds = ref([])

// Card Data Array (Rephrased for SwychPe)
const cardsData = [
  {
    id: 1,
    category: 'debit',
    title: 'SwychPe Platinum Debit',
    network: 'VISA',
    cardThemeClass: 'theme-teal-dark',
    fee: 'Free',
    features: [
      'Premium cashback and exclusive travel rewards',
      'Complimentary airport lounge access across 25 destinations',
      'Exclusive partner offers across dining, shopping & lifestyle'
    ]
  },
  {
    id: 2,
    category: 'debit',
    title: 'SwychPe World Debit',
    network: 'mastercard',
    cardThemeClass: 'theme-black-gold',
    fee: '15,000 FCFA',
    features: [
      'Designed to make every global journey effortless',
      'Access 1,200+ airport lounges worldwide with priority entry',
      'Free Amazon Prime membership for 6 months'
    ]
  },
  {
    id: 3,
    category: 'prepaid',
    title: 'SwychPe Sky Travel',
    network: 'VISA',
    cardThemeClass: 'theme-deep-emerald',
    fee: 'Free',
    features: [
      'Complimentary airport lounge access across 25 destinations',
      'Zero international withdrawal fees at global ATMs',
      'Zero international FX markups & zero renewal fees'
    ]
  },
  {
    id: 4,
    category: 'prepaid',
    title: 'SwychPe Gamers Edition',
    network: 'mastercard',
    cardThemeClass: 'theme-purple-holographic',
    fee: '10,000 FCFA',
    features: [
      'Created specifically for gaming enthusiasts & creators',
      'Exclusive digital discounts on Steam, PlayStation & Xbox',
      'Bold holographic card design that represents your gamer identity'
    ]
  },
  {
    id: 5,
    category: 'debit',
    title: 'SwychPe Essential',
    network: 'VISA',
    cardThemeClass: 'theme-cyan-dark',
    fee: 'Free',
    features: [
      'Perfect for everyday spending and instant financial control',
      'Manage and split multi-currency finances effortlessly',
      'Real-time spending notifications & zero hidden monthly fees'
    ]
  }
]


const filteredCards = computed(() => {
  if (activeTab.value === 'all') return cardsData
  return cardsData.filter(card => card.category === activeTab.value)
})

const handleApply = (card) => {
  alert(`Application started for ${card.title}!`)
}

const handleLearnMore = (card) => {
  alert(`More details on ${card.title}`)
}

const openCompareModal = () => {
  const names = cardsData
    .filter(c => selectedCompareIds.value.includes(c.id))
    .map(c => c.title)
    .join(', ')
  alert(`Comparing: ${names}`)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');

/* ==========================================================================
   GLOBAL CONTAINER STYLES
   ========================================================================== */
.swychpe-cards-page {
   width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #7B1FA2 0%, #4A148C 100%);
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
}

/* ==========================================================================
   SECTION 1: HERO SECTION STYLES
   ========================================================================== */
.cards-hero-section {
  width: 100%;
  min-height: 82vh;
  background: linear-gradient(145deg, #150324 0%, #2b083e 55%, #120220 100%);
  color: #ffffff;
  padding: 5rem 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.cards-hero-container {
  max-width: 1250px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 4rem;
  align-items: center;
}

.cards-hero-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 2;
}

.cards-hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.18;
  color: #ffffff;
  margin-bottom: 1.5rem;
  letter-spacing: -0.5px;
}

.cards-hero-subtitle {
  font-size: 1.12rem;
  font-weight: 500;
  line-height: 1.65;
  color: #E1BEE7;
  margin-bottom: 2.5rem;
  max-width: 520px;
}

.btn-request-card {
  display: inline-block;
  background-color: #E1BEE7;
  color: #2b083e;
  font-weight: 800;
  font-size: 1rem;
  padding: 1rem 2.5rem;
  border-radius: 40px;
  text-decoration: none;
  box-shadow: 0 8px 24px rgba(225, 190, 231, 0.25);
  transition: all 0.3s ease;
}

.btn-request-card:hover {
  background-color: #ffffff;
  color: #7B1FA2;
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(255, 255, 255, 0.35);
}

.cards-hero-right {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.cards-display-stage {
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.floating-card-wrapper {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  perspective: 1000px;
}

.card-left-float {
  left: 10px;
  top: 10px;
  z-index: 2;
  animation: floatAnim1 5s ease-in-out infinite alternate;
}

.card-right-float {
  right: 10px;
  top: 50px;
  z-index: 1;
  animation: floatAnim2 6s ease-in-out infinite alternate;
}

.card-3d-body {
  width: 230px;
  height: 340px;
  border-radius: 22px;
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: rotate3d(1, 1, 0, 25deg) rotateZ(-12deg);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  transition: transform 0.4s ease;
}

.card-left-float:hover .card-3d-body,
.card-right-float:hover .card-3d-body {
  transform: rotate3d(0, 0, 0, 0deg) scale(1.05);
}

.premium-dark-card {
  background: linear-gradient(135deg, #2b083e 0%, #0d0218 100%);
}

.platinum-purple-card {
  background: linear-gradient(135deg, #7B1FA2 0%, #380a52 100%);
}

.card-header-mini {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.85);
}

.card-tier-label {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 1px;
}

.contactless-icon {
  font-size: 0.9rem;
}

.card-chip-graphic {
  width: 40px;
  height: 30px;
  background: linear-gradient(135deg, #e0e0e0 0%, #9e9e9e 100%);
  border-radius: 6px;
  margin-top: 1rem;
}

.card-brand-logo {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: #ffffff;
  margin-top: auto;
  margin-bottom: 1.5rem;
}

.swychr-spark-icon {
  color: #E1BEE7;
  font-size: 1.3rem;
}

.card-brand-name {
  font-size: 1.2rem;
  font-weight: 800;
}

.card-footer-mini {
  display: flex;
  justify-content: flex-end;
}

.card-network {
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.9);
}

.glowing-ring-base {
  width: 170px;
  height: 38px;
  border-radius: 50%;
  margin-top: -18px;
  transform: rotateX(75deg);
  filter: blur(12px);
  pointer-events: none;
}

.purple-glow { background: radial-gradient(circle, #7B1FA2 0%, transparent 70%); }
.lilac-glow { background: radial-gradient(circle, #E1BEE7 0%, transparent 70%); }

@keyframes floatAnim1 {
  0% { transform: translateY(0px); }
  100% { transform: translateY(-16px); }
}

@keyframes floatAnim2 {
  0% { transform: translateY(0px); }
  100% { transform: translateY(-20px); }
}

/* ==========================================================================
   SECTION 2: CARDS GRID & FILTER TABS (MATCHING SCREENSHOT)
   ========================================================================== */
.cards-grid-section {
  width: 100%;
  padding: 5rem 2rem 7rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3ecf9;
}

.cards-grid-container {
  max-width: 1240px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Filter Navigation Tabs */
.filter-tabs-wrapper {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 3.5rem;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 0.4rem;
  border-radius: 30px;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
}

.filter-tab-btn {
  background: transparent;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: #4A148C;
  padding: 0.6rem 1.6rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.25s ease;
}

.filter-tab-btn.is-active {
  background-color: #7B1FA2;
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(123, 31, 162, 0.25);
}

/* Floating Comparison Bar */
.compare-bar-floating {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: #1f072e;
  color: #ffffff;
  padding: 0.8rem 1.5rem;
  border-radius: 40px;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
  z-index: 100;
  border: 1px solid rgba(225, 190, 231, 0.3);
}

.btn-compare-now {
  background: #E1BEE7;
  color: #2b083e;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  padding: 0.5rem 1.2rem;
  border-radius: 20px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.btn-compare-now:hover {
  background: #ffffff;
}

.btn-clear-compare {
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 1.1rem;
  cursor: pointer;
}

/* Cards Grid Layout (Matching Screenshot Tile Placement) */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
}

/* Single Tile Container */
.card-tile-container {
  background: linear-gradient(175deg, #1b092a 0%, #10041d 100%);
  border-radius: 28px;
  padding: 1.8rem 1.5rem 1.6rem 1.5rem;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  box-shadow: 0 15px 35px rgba(35, 8, 62, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
}

.card-tile-container:hover {
  transform: translateY(-8px);
  box-shadow: 0 22px 45px rgba(35, 8, 62, 0.28);
  border-color: rgba(225, 190, 231, 0.25);
}

/* Compare Checkbox Header */
.compare-checkbox-label {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  margin-bottom: 1rem;
  user-select: none;
}

.compare-checkbox-input {
  display: none;
}

.custom-checkbox-box {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.compare-checkbox-input:checked + .custom-checkbox-box {
  background-color: #E1BEE7;
  border-color: #E1BEE7;
}

.compare-checkbox-input:checked + .custom-checkbox-box::after {
  content: '✓';
  color: #2b083e;
  font-size: 11px;
  font-weight: 900;
}

.checkbox-text {
  font-size: 0.78rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
}

/* Card Visual Graphic inside Tile */
.card-tile-preview {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 0.5rem 0;
}

.mini-card-graphic {
  width: 140px;
  height: 200px;
  border-radius: 16px;
  padding: 1rem 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transform: rotateZ(-2deg);
  transition: transform 0.3s ease;
}

.card-tile-container:hover .mini-card-graphic {
  transform: rotateZ(0deg) scale(1.04);
}

/* Mini Card Graphic Themes */
.theme-teal-dark {
  background: linear-gradient(135deg, #004d40 0%, #0d1e22 100%);
}

.theme-black-gold {
  background: linear-gradient(135deg, #212121 0%, #000000 100%);
}

.theme-deep-emerald {
  background: linear-gradient(135deg, #006064 0%, #00272b 100%);
}

.theme-purple-holographic {
  background: linear-gradient(135deg, #7B1FA2 0%, #1A237E 100%);
}

.theme-cyan-dark {
  background: linear-gradient(135deg, #00838f 0%, #00363a 100%);
}

.mini-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mini-card-logo {
  font-size: 0.6rem;
  font-weight: 800;
  color: #E1BEE7;
}

.mini-card-chip {
  width: 22px;
  height: 16px;
  background: #d4af37;
  border-radius: 3px;
}

.mini-card-footer {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.mini-card-name {
  font-size: 0.65rem;
  font-weight: 700;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mini-card-network {
  font-size: 0.6rem;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
}

/* Tile Content */
.card-tile-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.card-tile-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1.2rem;
  letter-spacing: -0.3px;
}

/* Feature Bullets */
.card-feature-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  flex-grow: 1;
}

.card-feature-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
}

.bullet-arrow {
  color: #E1BEE7;
  font-weight: 800;
  font-size: 1.1rem;
  line-height: 1;
  margin-top: 1px;
}

.feature-text {
  font-size: 0.82rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.45;
}

/* Annual Fee Pill Badge */
.card-fee-badge {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 0.55rem 0.9rem;
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.card-fee-badge strong {
  color: #E1BEE7;
}

/* Action Buttons (Apply Now & Learn More) */
.card-tile-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn-apply-now {
  background-color: #E1BEE7;
  color: #2b083e;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 0.82rem;
  padding: 0.65rem 1.2rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.25s ease;
  text-decoration: none;
}

.btn-apply-now:hover {
  background-color: #ffffff;
  color: #7B1FA2;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
  text-decoration: none;
}

.link-learn-more {
  color: #ffffff;
  text-decoration: none;
  font-size: 0.82rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  transition: color 0.2s ease;
}

.link-learn-more:hover {
  color: #E1BEE7;
}

.arrow-icon {
  transition: transform 0.2s ease;
}

.link-learn-more:hover .arrow-icon {
  transform: translateX(4px);
}

/* ==========================================================================
   RESPONSIVE DESIGN (DESKTOP, TABLET, MOBILE)
   ========================================================================== */
@media (max-width: 1024px) {
  /* Section 1 Hero Tablet */
  .cards-hero-section {
    padding: 4rem 2rem;
  }

  .cards-hero-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .cards-hero-left {
    align-items: center;
    text-align: center;
  }

  .cards-hero-title {
    font-size: 2.6rem;
  }

  /* Section 2 Grid Tablet: 2 Columns */
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 640px) {
  /* Section 1 Hero Mobile */
  .cards-hero-section {
    padding: 3rem 1.25rem;
  }

  .cards-hero-title {
    font-size: 2rem;
  }

  .cards-hero-subtitle {
    font-size: 0.95rem;
  }

  .btn-request-card {
    width: 100%;
    text-align: center;
  }

  .cards-display-stage {
    height: 300px;
  }

  .card-3d-body {
    width: 175px;
    height: 260px;
    padding: 1rem;
  }

  .card-left-float { left: -10px; }
  .card-right-float { right: -10px; }

  /* Section 2 Mobile: 1 Column */
  .cards-grid-section {
    padding: 3.5rem 1rem 5rem 1rem;
  }

  .filter-tabs-wrapper {
    width: 100%;
    justify-content: center;
    gap: 0.4rem;
  }

  .filter-tab-btn {
    font-size: 0.8rem;
    padding: 0.5rem 0.9rem;
  }

  .cards-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .card-tile-container {
    padding: 1.4rem 1.2rem;
  }
}


/* ==========================================================================
   SECTION 3: CONTACTLESS & DIGITAL WALLETS (SwychPe Branded)
   ========================================================================== */
.cards-contactless-section {
  width: 100%;
  padding: 6rem 2rem;
  background-color: #f3ecf9; /* Matching soft light purple backdrop from screenshot */
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  overflow: hidden;
}

.cards-contactless-container {
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 4rem;
  align-items: center;
}

/* Left Column: Mobile Graphics Stage */
.contactless-graphic-left {
  display: flex;
  justify-content: center;
  align-items: center;
}

.mobile-mockups-wrapper {
  position: relative;
  width: 100%;
  max-width: 480px;
  height: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Floating 3D Tokens Overhead */
.floating-tokens-group {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1.5rem;
  z-index: 10;
}

.token-chip {
  width: 38px;
  height: 38px;
  background: linear-gradient(135deg, #2b083e 0%, #10021c 100%);
  color: #E1BEE7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  box-shadow: 0 8px 20px rgba(43, 8, 62, 0.3);
  border: 1px solid rgba(225, 190, 231, 0.3);
  animation: tokenFloat 4s ease-in-out infinite alternate;
}

.token-2 { animation-delay: 0.6s; }
.token-3 { animation-delay: 1.2s; }

@keyframes tokenFloat {
  0% { transform: translateY(0px) rotate(0deg); }
  100% { transform: translateY(-12px) rotate(15deg); }
}

/* Phone Mockups Common Styles */
.phone-mockup {
  position: absolute;
  width: 230px;
  height: 430px;
  background-color: #0d0218;
  border-radius: 36px;
  padding: 10px;
  box-shadow: 0 25px 50px rgba(25, 3, 36, 0.35);
  border: 4px solid #23083e;
}

/* Back Left Phone */
.phone-left-back {
  left: 20px;
  top: 40px;
  transform: rotate(-6deg);
  z-index: 1;
}

/* Front Right Phone */
.phone-right-front {
  right: 20px;
  top: 10px;
  transform: rotate(4deg);
  z-index: 2;
  box-shadow: 0 30px 60px rgba(16, 2, 28, 0.45);
}

.phone-screen-content {
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #1f072e 0%, #0d0218 100%);
  border-radius: 28px;
  padding: 1.2rem 1rem;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Screen 1 Elements */
.user-avatar-badge {
  width: 28px;
  height: 28px;
  background: #7B1FA2;
  border-radius: 50%;
  font-size: 0.7rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
}

.currency-tag {
  font-size: 0.65rem;
  color: #E1BEE7;
}

.balance-display-box {
  background: rgba(255, 255, 255, 0.06);
  padding: 0.8rem;
  border-radius: 16px;
  margin: 0.8rem 0;
}

.balance-label {
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.6);
}

.balance-amount {
  font-size: 1.1rem;
  font-weight: 800;
  margin-top: 0.2rem;
}

.balance-amount small {
  font-size: 0.65rem;
  color: #E1BEE7;
}

.quick-widgets-row {
  display: flex;
  gap: 0.4rem;
  margin-bottom: 0.8rem;
}

.widget-icon-pill {
  font-size: 0.62rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.4rem 0.6rem;
  border-radius: 12px;
}

.recent-trans-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.trans-item {
  font-size: 0.62rem;
  display: flex;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.04);
  padding: 0.4rem 0.6rem;
  border-radius: 8px;
}

.green-text { color: #81c784; }

/* Screen 2 Elements */
.app-header-title {
  font-size: 0.85rem;
  font-weight: 800;
}

.card-display-mini {
  height: 100px;
  background: linear-gradient(135deg, #006064 0%, #00272b 100%);
  border-radius: 14px;
  padding: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0.6rem 0;
}

.mini-brand { font-size: 0.65rem; font-weight: 800; color: #ffffff; }
.mini-chip { width: 18px; height: 14px; background: #d4af37; border-radius: 3px; }

.apple-wallet-badge {
  background: #000000;
  color: #ffffff;
  border-radius: 12px;
  padding: 0.6rem;
  text-align: center;
  font-size: 0.68rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.card-balance-card {
  background: rgba(255, 255, 255, 0.08);
  padding: 0.8rem;
  border-radius: 14px;
}

.sub-label { font-size: 0.6rem; color: rgba(255, 255, 255, 0.6); display: block; }
.amount-text { font-size: 1rem; font-weight: 800; margin-top: 0.2rem; display: block; }

.card-action-link {
  font-size: 0.65rem;
  display: flex;
  justify-content: space-between;
  color: #E1BEE7;
  padding: 0.4rem 0.2rem;
}

/* Right Column: Copy & Actions */
.contactless-copy-right {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.contactless-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: #1f072e;
  line-height: 1.15;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
}

.contactless-subtitle {
  font-size: 1.1rem;
  font-weight: 500;
  color: #4a148c;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 480px;
}

.btn-request-now {
  display: inline-block;
  background-color: #1f072e;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 1rem;
  padding: 1rem 2.6rem;
  border-radius: 40px;
  text-decoration: none;
  box-shadow: 0 10px 25px rgba(31, 7, 46, 0.25);
  transition: all 0.3s ease;
}

.btn-request-now:hover {
  background-color: #7B1FA2;
  transform: translateY(-3px);
  box-shadow: 0 14px 30px rgba(123, 31, 162, 0.35);
}

/* ==========================================================================
   RESPONSIVE STYLES (DESKTOP, TABLET, MOBILE)
   ========================================================================== */
@media (max-width: 1024px) {
  .cards-contactless-container {
    grid-template-columns: 1fr;
    gap: 3.5rem;
  }

  .contactless-copy-right {
    align-items: center;
    text-align: center;
  }

  .contactless-title {
    font-size: 2.8rem;
  }
}

@media (max-width: 640px) {
  .cards-contactless-section {
    padding: 4rem 1.25rem;
  }

  .mobile-mockups-wrapper {
    height: 380px;
  }

  .phone-mockup {
    width: 180px;
    height: 340px;
  }

  .phone-left-back { left: 0px; }
  .phone-right-front { right: 0px; }

  .contactless-title {
    font-size: 2.2rem;
  }

  .contactless-subtitle {
    font-size: 0.95rem;
  }

  .btn-request-now {
    width: 100%;
    text-align: center;
  }
}
</style>