<template>
    <div class="swychpe-contact">
         <Navbar />
      <section class="contact-hero">
    <div class="contact-hero-container">
      
      <!-- Left Hero Content Column -->
      <div class="contact-text-column">
        <h1 class="contact-title">Contact Us</h1>
        
        <p class="contact-description">
          Our dedicated Customer Experience Specialists are available around the clock to assist you, 
          answering any inquiries regarding the features, security, and exclusive benefits of SwychPe products and financial services.
        </p>
      </div>

      <!-- Right Visual Column (3D Smartphone + Stacked Cards) -->
      <div class="contact-visual-column">
        
        <!-- Stacked SwychPe Cards Fan Container -->
        <div class="cards-fan-stack">
          <!-- Card 1 (Far Right Tilted) -->
          <div class="fan-card card-3">
            <div class="card-chip"></div>
            <div class="card-footer-logo">SwychPe</div>
          </div>

          <!-- Card 2 (Middle Tilted) -->
          <div class="fan-card card-2">
            <div class="card-chip"></div>
            <div class="card-footer-logo">SwychPe</div>
          </div>

          <!-- Card 3 (Front Teal/Purple Tilted) -->
          <div class="fan-card card-1">
            <div class="card-chip"></div>
            <div class="card-footer-logo">SwychPe</div>
          </div>
        </div>

        <!-- 3D Smartphone UI Frame -->
        <div class="phone-frame">
          <div class="phone-inner-screen">
            
            <!-- App Header UI -->
            <div class="app-top-bar">
              <div class="user-profile-info">
                <span class="user-avatar-circle">👤</span>
                <span class="user-tag">@swychpe_user</span>
              </div>
              <div class="app-balance-box">
                <span class="currency-label">FCFA Balance</span>
                <span class="balance-amount">2,300,800.00</span>
              </div>
            </div>

            <!-- Action Buttons Row -->
            <div class="app-actions">
              <div class="action-btn"><span>⇄</span> Exchange</div>
              <div class="action-btn"><span>📋</span> History</div>
              <div class="action-btn"><span>+</span> Deposit</div>
            </div>

            <!-- App Widgets Body -->
            <div class="app-widgets">
              <div class="widget-card">
                <span class="widget-title">Quick Pay</span>
                <div class="widget-logos">
                  <span class="mini-tag">MTN</span>
                  <span class="mini-tag">Orange</span>
                </div>
              </div>
              <div class="widget-card">
                <span class="widget-title">Transfers</span>
                <span class="mini-recipient">Swychr Express</span>
              </div>
            </div>

          </div>
        </div>

        <!-- Floating 3D Coin Graphics -->
        <div class="floating-coin coin-top">€</div>
        <div class="floating-coin coin-mid">FCFA</div>

      </div>

    </div>
  </section>  


  <section class="contact-form-section">
    <div class="contact-form-container">
      
      <!-- Main Form Dark Card Container -->
      <div class="contact-form-card">
        <form @submit.prevent="handleSubmit" class="contact-form">
          
          <!-- Field 1: Full Name -->
          <div class="form-group">
            <label class="input-label">Full Name *</label>
            <span class="label-subtext">(As per official identity document)</span>
            <input 
              type="text" 
              v-model="form.fullName" 
              placeholder="Enter your full name" 
              required 
              class="form-input"
            />
          </div>

          <!-- Field 2: Mobile Number -->
          <div class="form-group">
            <label class="input-label">Mobile Number *</label>
            <input 
              type="tel" 
              v-model="form.mobileNumber" 
              placeholder="+237 6XX XXX XXX" 
              required 
              class="form-input"
            />
          </div>

          <!-- Field 3: Email Address -->
          <div class="form-group">
            <label class="input-label">Email Address *</label>
            <input 
              type="email" 
              v-model="form.email" 
              placeholder="name@example.com" 
              required 
              class="form-input"
            />
          </div>

          <!-- Field 4: Reason for Contact Dropdown -->
          <div class="form-group">
            <label class="input-label">Reason for Contact *</label>
            <div class="select-wrapper">
              <select v-model="form.reason" required class="form-input custom-select">
                <option value="" disabled selected>Select an inquiry category</option>
                <option value="card_support">SwychPe Card Support & Issuance</option>
                <option value="account_help">Account & App Navigation</option>
                <option value="offers_rewards">Promotional Offers & Cashbacks</option>
                <option value="partnership">Business & Partnership Inquiries</option>
                <option value="other">General Feedback / Others</option>
              </select>
              <span class="select-arrow">▼</span>
            </div>
          </div>

          <!-- Terms Agreement Checkbox -->
          <div class="terms-group">
            <label class="custom-checkbox-label">
              <input type="checkbox" v-model="form.agreedTerms" required />
              <span class="checkbox-mark"></span>
              <span class="terms-text">I agree to the terms and conditions *</span>
            </label>
          </div>

          <!-- Submit Button -->
          <div class="form-submit-row">
            <button type="submit" class="btn-submit-contact">
              Submit
            </button>
          </div>

        </form>
      </div>

    </div>
  </section>


   <section class="partner-support-section">
    <div class="partner-support-container">
      
      <!-- Section Header -->
      <div class="support-header-text">
        <h2 class="support-title">Share your questions with us</h2>
        <p class="support-subtitle">
          Reach out to the SwychPe support team through our primary communication channels:
        </p>
      </div>

      <!-- Top Row: 3 Equal Dark Cards -->
      <div class="support-cards-grid">
        
        <!-- Card 1: Phone Support -->
        <div class="support-card">
          <div class="card-icon-wrapper">
            <div class="icon-glow">
              <span class="icon-symbol">📞</span>
            </div>
          </div>
          <h3 class="card-label">Call us on</h3>
          <a href="tel:+237670126098" class="btn-pill-outline">
            <span class="btn-icon">📞</span>
            +237 670126098
          </a>
        </div>

        <!-- Card 2: Email Support -->
        <div class="support-card">
          <div class="card-icon-wrapper">
            <div class="icon-glow">
              <span class="icon-symbol">✉️</span>
            </div>
          </div>
          <h3 class="card-label">Mail us on</h3>
          <a href="mailto:support@swychpe.com" class="btn-pill-outline">
            <span class="btn-icon">✉️</span>
            support@swychpe.com
          </a>
        </div>

        <!-- Card 3: Locations & Outlets -->
        <div class="support-card">
          <div class="card-icon-wrapper">
            <div class="icon-glow">
              <span class="icon-symbol">📍</span>
            </div>
          </div>
          <h3 class="card-label">Outlets & Service Points</h3>
          <router-link to="/branches" class="btn-pill-outline">
            Find a Swychr Agent
          </router-link>
        </div>

      </div>

      <!-- Bottom Row: 1 Full-Width Dark Banner Card -->
      <div class="support-card-wide">
        <div class="card-icon-wrapper">
          <div class="icon-glow">
            <span class="icon-symbol">📱</span>
          </div>
        </div>
        <h3 class="card-label">Submit inquiries directly via mobile app</h3>
        <router-link to="/download" class="btn-pill-outline">
          Download SwychPe App
        </router-link>
      </div>

    </div>
  </section>



<Footer />
    </div>
    </template>


<script setup>
import { reactive } from 'vue'
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

const form = reactive({
  fullName: '',
  mobileNumber: '',
  email: '',
  reason: '',
  agreedTerms: false
})

const handleSubmit = () => {
  alert('Thank you for reaching out! A SwychPe Customer Experience Specialist will respond shortly.')
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
.swychpe-contact {
   width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #7B1FA2 0%, #4A148C 100%);
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
}


/* Main Contact Hero Section Wrapper */
.contact-hero {
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

.contact-hero-container {
  max-width: 1240px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
}

/* Left Content Column Styling */
.contact-text-column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.contact-title {
  font-size: 3.8rem;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.15;
  margin-bottom: 1.5rem;
  letter-spacing: -1px;
}

.contact-description {
  font-size: 1.15rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.7;
  max-width: 520px;
}

/* Right Visual Column */
.contact-visual-column {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 480px;
}

/* 3D Smartphone Frame */
.phone-frame {
  position: relative;
  width: 240px;
  height: 460px;
  background: #150324;
  border-radius: 44px;
  padding: 10px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.7),
              0 0 0 2px rgba(225, 190, 231, 0.25);
  z-index: 5;
  transform: perspective(1000px) rotateY(-6deg);
}

.phone-inner-screen {
  width: 100%;
  height: 100%;
  background-color: #f8f5fa;
  border-radius: 36px;
  padding: 1.25rem 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #150324;
  overflow: hidden;
}

/* App Header Inside Phone */
.app-top-bar {
  background: linear-gradient(145deg, #2b083e 0%, #150324 100%);
  border-radius: 20px;
  padding: 1rem 0.85rem;
  color: #ffffff;
}

.user-profile-info {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.72rem;
  margin-bottom: 0.75rem;
  color: #E1BEE7;
}

.app-balance-box {
  display: flex;
  flex-direction: column;
}

.currency-label {
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.7);
}

.balance-amount {
  font-size: 1.15rem;
  font-weight: 800;
}

/* Action Buttons inside App UI */
.app-actions {
  display: flex;
  justify-content: space-between;
  gap: 0.3rem;
}

.action-btn {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 0.4rem 0.5rem;
  font-size: 0.65rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.app-widgets {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.widget-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  box-shadow: 0 4px 12px rgba(21, 3, 36, 0.04);
}

.widget-title {
  font-size: 0.7rem;
  font-weight: 700;
}

.widget-logos {
  display: flex;
  gap: 0.4rem;
}

.mini-tag {
  background-color: #f3ecf9;
  color: #7B1FA2;
  font-size: 0.6rem;
  font-weight: 700;
  padding: 0.2rem 0.4rem;
  border-radius: 6px;
}

.mini-recipient {
  font-size: 0.65rem;
  color: #5c4468;
}

/* Stacked Credit Cards behind Phone */
.cards-fan-stack {
  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
  width: 260px;
  height: 380px;
  z-index: 3;
}

.fan-card {
  position: absolute;
  width: 180px;
  height: 280px;
  border-radius: 20px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.card-1 {
  background: linear-gradient(145deg, #150324 0%, #2b083e 100%);
  border: 1px solid rgba(225, 190, 231, 0.3);
  right: 80px;
  top: 30px;
  transform: rotate(-8deg);
  z-index: 4;
}

.card-2 {
  background: linear-gradient(145deg, #2b083e 0%, #10021c 100%);
  border: 1px solid rgba(123, 31, 162, 0.3);
  right: 40px;
  top: 20px;
  transform: rotate(8deg);
  z-index: 3;
}

.card-3 {
  background: linear-gradient(145deg, #0d0117 0%, #150324 100%);
  border: 1px solid rgba(255, 255, 255, 0.15);
  right: 0px;
  top: 10px;
  transform: rotate(22deg);
  z-index: 2;
}

.card-chip {
  width: 32px;
  height: 24px;
  background: linear-gradient(135deg, #e0e0e0 0%, #9e9e9e 100%);
  border-radius: 5px;
}

.card-footer-logo {
  font-size: 1.1rem;
  font-weight: 800;
  color: #ffffff;
}

/* Floating 3D Coin Accents */
.floating-coin {
  position: absolute;
  background: linear-gradient(135deg, #7B1FA2 0%, #2b083e 100%);
  color: #E1BEE7;
  border: 1px solid rgba(225, 190, 231, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  z-index: 6;
}

.coin-top {
  width: 44px;
  height: 44px;
  font-size: 0.9rem;
  top: 20px;
  right: 30px;
}

.coin-mid {
  width: 52px;
  height: 52px;
  font-size: 0.65rem;
  bottom: 40px;
  right: 10px;
}

/* ==========================================================================
   RESPONSIVE DESIGN (DESKTOP, TABLET, MOBILE)
   ========================================================================== */
@media (max-width: 1024px) {
  .contact-hero-container {
    grid-template-columns: 1fr;
    gap: 3.5rem;
    text-align: center;
  }

  .contact-text-column {
    align-items: center;
  }

  .contact-title {
    font-size: 3rem;
  }

  .contact-description {
    max-width: 100%;
  }

  .contact-visual-column {
    min-height: 420px;
  }
}

@media (max-width: 600px) {
  .contact-hero {
    padding: 3.5rem 1.25rem;
  }

  .contact-title {
    font-size: 2.2rem;
  }

  .contact-description {
    font-size: 0.95rem;
  }

  .phone-frame {
    width: 200px;
    height: 400px;
    transform: none;
  }

  .cards-fan-stack {
    width: 200px;
    right: -10px;
  }

  .fan-card {
    width: 140px;
    height: 220px;
  }
}


.contact-form-section {
  width: 100%;
  background-color: #f3ecf9;
  padding: 5rem 1.5rem 6rem 1.5rem;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  justify-content: center;
}

.contact-form-container {
  max-width: 920px;
  width: 100%;
  display: flex;
  justify-content: center;
}

/* Swychr Brand Dark Purple Form Card */
.contact-form-card {
  width: 100%;
  background: linear-gradient(160deg, #2b083e 0%, #150324 100%);
  border-radius: 36px;
  padding: 4rem 3.5rem;
  box-shadow: 0 25px 60px rgba(21, 3, 36, 0.22);
  border: 1px solid rgba(123, 31, 162, 0.3);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  position: relative;
}

.input-label {
  font-size: 0.95rem;
  font-weight: 700;
  color: #E1BEE7;
  margin-bottom: 0.2rem;
  letter-spacing: 0.2px;
}

.label-subtext {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.4rem;
}

/* Minimalist Underline Input Fields */
.form-input {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1.5px solid rgba(225, 190, 231, 0.4);
  padding: 0.75rem 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #ffffff;
  outline: none;
  transition: border-color 0.3s ease;
}

.form-input::placeholder {
  color: rgba(255, 255, 255, 0.35);
  font-size: 0.9rem;
}

.form-input:focus {
  border-bottom-color: #E1BEE7;
}

/* Custom Select Dropdown Styling */
.select-wrapper {
  position: relative;
  width: 100%;
}

.custom-select {
  appearance: none;
  cursor: pointer;
  padding-right: 2rem;
}

.custom-select option {
  background-color: #150324;
  color: #ffffff;
}

.select-arrow {
  position: absolute;
  right: 0;
  bottom: 0.75rem;
  color: #E1BEE7;
  font-size: 0.75rem;
  pointer-events: none;
}

/* Terms Agreement Checkbox */
.terms-group {
  margin-top: 0.5rem;
}

.custom-checkbox-label {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  position: relative;
}

.custom-checkbox-label input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkbox-mark {
  width: 18px;
  height: 18px;
  min-width: 18px;
  min-height: 18px;
  border: 1.5px solid rgba(225, 190, 231, 0.6);
  border-radius: 4px;
  transition: all 0.2s ease;
  position: relative;
}

.custom-checkbox-label input:checked ~ .checkbox-mark {
  background-color: #7B1FA2;
  border-color: #E1BEE7;
}

.checkbox-mark::after {
  content: '';
  position: absolute;
  display: none;
  left: 5px;
  top: 1px;
  width: 4px;
  height: 9px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.custom-checkbox-label input:checked ~ .checkbox-mark::after {
  display: block;
}

.terms-text {
  font-size: 0.88rem;
  font-weight: 500;
  color: #E1BEE7;
}

/* Centered Pill Submit Button */
.form-submit-row {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.btn-submit-contact {
  background-color: #E1BEE7;
  color: #150324;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 800;
  padding: 0.9rem 4rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(225, 190, 231, 0.25);
}

.btn-submit-contact:hover {
  background-color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(255, 255, 255, 0.35);
}

/* ==========================================================================
   RESPONSIVE DESIGN (DESKTOP, TABLET, MOBILE)
   ========================================================================== */
@media (max-width: 768px) {
  .contact-form-card {
    padding: 3rem 1.75rem;
    border-radius: 28px;
  }

  .contact-form {
    gap: 2rem;
  }

  .input-label {
    font-size: 0.9rem;
  }

  .form-input {
    font-size: 0.92rem;
  }
}

@media (max-width: 480px) {
  .contact-form-section {
    padding: 3.5rem 1rem;
  }

  .btn-submit-contact {
    width: 100%;
    padding: 0.95rem;
  }
}



/* Main Background Outer Wrapper */
.partner-support-section {
  width: 100%;
  background-color: #f3ecf9;
  padding: 5rem 1.5rem 6rem 1.5rem;
  font-family: 'Montserrat', sans-serif;
  color: #150324;
  display: flex;
  justify-content: center;
}

.partner-support-container {
  max-width: 1080px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Header Text Styling */
.support-header-text {
  text-align: left;
  margin-bottom: 1.5rem;
}

.support-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #150324;
  margin-bottom: 0.75rem;
  letter-spacing: -0.5px;
}

.support-subtitle {
  font-size: 1rem;
  font-weight: 500;
  color: #5c4468;
  line-height: 1.6;
}

/* Top 3-Card Grid */
.support-cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  width: 100%;
}

/* Individual Dark Purple Card */
.support-card {
  background: linear-gradient(160deg, #2b083e 0%, #150324 100%);
  border-radius: 28px;
  padding: 2.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid rgba(123, 31, 162, 0.3);
  box-shadow: 0 15px 35px rgba(21, 3, 36, 0.18);
  transition: all 0.3s ease;
}

.support-card:hover {
  transform: translateY(-5px);
  border-color: #E1BEE7;
  box-shadow: 0 20px 45px rgba(123, 31, 162, 0.28);
}

/* Bottom Full-Width Card */
.support-card-wide {
  background: linear-gradient(160deg, #2b083e 0%, #150324 100%);
  border-radius: 28px;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid rgba(123, 31, 162, 0.3);
  box-shadow: 0 15px 35px rgba(21, 3, 36, 0.18);
  transition: all 0.3s ease;
  width: 100%;
}

.support-card-wide:hover {
  transform: translateY(-5px);
  border-color: #E1BEE7;
  box-shadow: 0 20px 45px rgba(123, 31, 162, 0.28);
}

/* Icon Graphics Styling */
.card-icon-wrapper {
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-glow {
  width: 52px;
  height: 52px;
  background: linear-gradient(135deg, rgba(225, 190, 231, 0.2) 0%, rgba(123, 31, 162, 0.3) 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(225, 190, 231, 0.4);
}

.icon-symbol {
  font-size: 1.4rem;
}

/* Card Heading Text */
.card-label {
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1.5rem;
}

/* Pill-Shaped Outline Action Buttons */
.btn-pill-outline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 1.5px solid #E1BEE7;
  border-radius: 50px;
  padding: 0.65rem 1.6rem;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.88rem;
  font-weight: 700;
  text-decoration: none !important;
  transition: all 0.3s ease;
  background: transparent;
}

.btn-pill-outline:hover {
  background-color: #E1BEE7;
  color: #150324;
  box-shadow: 0 8px 20px rgba(225, 190, 231, 0.3);
}

.btn-icon {
  font-size: 0.85rem;
}

/* ==========================================================================
   RESPONSIVE DESIGN (DESKTOP, TABLET, MOBILE)
   ========================================================================== */
@media (max-width: 992px) {
  .support-cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .support-title {
    font-size: 2.1rem;
  }
}

@media (max-width: 600px) {
  .partner-support-section {
    padding: 3.5rem 1.25rem;
  }

  .support-header-text {
    text-align: center;
  }

  .support-title {
    font-size: 1.8rem;
  }

  .support-subtitle {
    font-size: 0.9rem;
  }

  .support-cards-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
  .support-card,
  .support-card-wide {
    padding: 2rem 1.25rem;
    border-radius: 22px;
  }

  .btn-pill-outline {
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 0.82rem;
  }
}
</style>