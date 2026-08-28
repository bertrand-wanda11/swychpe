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
              <div class="logo-box">
                <!-- Inline SVG Brand Icon -->
                <svg class="partner-svg-icon" viewBox="0 0 24 24" fill="currentColor" v-html="partner.icon"></svg>
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
              <div class="logo-box">
                <!-- Inline SVG Brand Icon -->
                <svg class="partner-svg-icon" viewBox="0 0 24 24" fill="currentColor" v-html="partner.icon"></svg>
                <span class="logo-brand-name">{{ partner.name }}</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>


  <section class="become-partner-section">
    <div class="become-partner-container">
      
      <!-- Top Section Header -->
      <div class="form-header-text">
        <h2 class="form-title">Become a Partner</h2>
        <p class="form-subtitle">
          Complete the application below to integrate SwychPe financial solutions and grow your customer base.
        </p>
      </div>

      <!-- Main Form Container Card -->
      <div class="partner-form-card">
        <form @submit.prevent="handleSubmit" class="partner-form">
          
          <!-- Field 1: Account Type Dropdown -->
          <div class="form-group full-width">
            <label class="input-label">Account Type *</label>
            <div class="select-wrapper">
              <select v-model="form.accountType" required class="form-input custom-select">
                <option value="" disabled selected>Select your account type</option>
                <option value="corporate">Corporate / Merchant</option>
                <option value="sme">Small / Medium Enterprise</option>
                <option value="fintech">Fintech / Financial Institution</option>
              </select>
              <span class="select-arrow">▼</span>
            </div>
          </div>

          <!-- Field 2: Company Name -->
          <div class="form-group full-width">
            <label class="input-label">Company Name *</label>
            <input 
              type="text" 
              v-model="form.companyName" 
              placeholder="(As stated on official business registration documents)" 
              required 
              class="form-input"
            />
          </div>

          <!-- Field 3 & 4: Number of Outlets & Registration Number -->
          <div class="form-row">
            <div class="form-group">
              <label class="input-label">Number of Outlets / Branches *</label>
              <input 
                type="number" 
                v-model="form.branches" 
                placeholder="e.g. 5" 
                required 
                class="form-input"
              />
            </div>
            <div class="form-group">
              <label class="input-label">Commercial Registration (CR) Number</label>
              <input 
                type="text" 
                v-model="form.crNumber" 
                placeholder="Enter registration number" 
                class="form-input"
              />
            </div>
          </div>

          <!-- Field 5 & 6: Phone & Email -->
          <div class="form-row">
            <div class="form-group">
              <label class="input-label">Business Mobile Number *</label>
              <input 
                type="tel" 
                v-model="form.phone" 
                placeholder="+237 6XX XXX XXX" 
                required 
                class="form-input"
              />
            </div>
            <div class="form-group">
              <label class="input-label">Official Email Address *</label>
              <input 
                type="email" 
                v-model="form.email" 
                placeholder="partner@company.com" 
                required 
                class="form-input"
              />
            </div>
          </div>

          <!-- Field 7: Head Office Address -->
          <div class="form-group full-width">
            <label class="input-label">Headquarters Physical Address</label>
            <input 
              type="text" 
              v-model="form.address" 
              placeholder="City, Street, Building Name" 
              class="form-input"
            />
          </div>

          <!-- File Upload Row: Company Profile & Supplemental Documents -->
          <div class="form-row upload-row">
            <div class="form-group">
              <label class="input-label">Company Profile Document</label>
              <div class="file-upload-box">
                <input type="file" @change="handleFileUpload($event, 'companyProfile')" id="file-profile" class="file-input" />
                <label for="file-profile" class="file-label">
                  <span class="file-text">{{ profileFileName || 'Upload Document' }}</span>
                  <span class="file-icon">📎</span>
                </label>
              </div>
            </div>
            <div class="form-group">
              <label class="input-label">Other Supporting Attachments</label>
              <div class="file-upload-box">
                <input type="file" @change="handleFileUpload($event, 'otherDoc')" id="file-other" class="file-input" />
                <label for="file-other" class="file-label">
                  <span class="file-text">{{ otherFileName || 'Upload Document' }}</span>
                  <span class="file-icon">📎</span>
                </label>
              </div>
            </div>
          </div>

          <!-- Checkbox Section: Type of Collaboration -->
          <div class="collaboration-section">
            <label class="section-subheading">Type of Collaboration *</label>
            
            <div class="checkbox-grid">
              
              <label class="custom-checkbox-card">
                <input type="checkbox" value="cashback" v-model="form.collaborations" />
                <span class="checkbox-mark"></span>
                <span class="checkbox-label-text">
                  <strong>SwychPe Cashback Partner:</strong> Provide instant purchase rewards to cardholders
                </span>
              </label>

              <label class="custom-checkbox-card">
                <input type="checkbox" value="vouchers" v-model="form.collaborations" />
                <span class="checkbox-mark"></span>
                <span class="checkbox-label-text">
                  <strong>Voucher & Discounts:</strong> Offer discounted bulk purchase gift cards and vouchers
                </span>
              </label>

              <label class="custom-checkbox-card">
                <input type="checkbox" value="miniApp" v-model="form.collaborations" />
                <span class="checkbox-mark"></span>
                <span class="checkbox-label-text">
                  <strong>Mini-App Integration:</strong> Showcase a dedicated storefront module inside the SwychPe app
                </span>
              </label>

              <label class="custom-checkbox-card">
                <input type="checkbox" value="bnpl" v-model="form.collaborations" />
                <span class="checkbox-mark"></span>
                <span class="checkbox-label-text">
                  <strong>Flexible Installments (BNPL):</strong> Enable customers to split payments with zero interest
                </span>
              </label>

              <label class="custom-checkbox-card">
                <input type="checkbox" value="loyalty" v-model="form.collaborations" />
                <span class="checkbox-mark"></span>
                <span class="checkbox-label-text">
                  <strong>Earn & Burn Program:</strong> Integrate joint loyalty and reward point programs
                </span>
              </label>

              <label class="custom-checkbox-card">
                <input type="checkbox" value="others" v-model="form.collaborations" />
                <span class="checkbox-mark"></span>
                <span class="checkbox-label-text">
                  <strong>Others:</strong> Custom strategic partnership models
                </span>
              </label>

            </div>
          </div>

          <!-- Terms Agreement Checkbox -->
          <div class="terms-agree-group">
            <label class="terms-checkbox-label">
              <input type="checkbox" v-model="form.agreedTerms" required />
              <span class="checkbox-mark"></span>
              <span class="terms-text">I agree to the partner program terms and conditions *</span>
            </label>
          </div>

          <!-- Form Submit Button -->
          <div class="form-submit-row">
            <button type="submit" class="btn-submit-partner">
              Submit Application
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
import { reactive, computed } from 'vue'
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
const row1Partners = [
  { 
    name: 'Anghami', 
    icon: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>' 
  },
  { 
    name: 'Huawei', 
    icon: '<path d="M12 3l2.5 5.5L20 9l-4 4.5 1 6-5-3-5 3 1-6-4-4.5 5.5-.5L12 3z"/>' 
  },
  { 
    name: 'Nahdi', 
    icon: '<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>' 
  },
  { 
    name: 'Jawaker', 
    icon: '<path d="M12 2L9 9H2l6 4.5L5.5 21 12 16.5 18.5 21 16 13.5 22 9h-7L12 2z"/>' 
  },
  { 
    name: 'Lebara', 
    icon: '<path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 14a4 4 0 110-8 4 4 0 010 8z"/>' 
  },
  { 
    name: 'Mobily', 
    icon: '<path d="M4 4h16v4H4V4zm0 6h16v4H4v-4zm0 6h16v4H4v-4z"/>' 
  },
  { 
    name: 'STC', 
    icon: '<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>' 
  },
  { 
    name: 'Nintendo', 
    icon: '<path d="M6 3h12c1.7 0 3 1.3 3 3v12c0 1.7-1.3 3-3 3H6c-1.7 0-3-1.3-3-3V6c0-1.7 1.3-3 3-3zm2 4.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>' 
  },
  { 
    name: 'Amazon', 
    icon: '<path d="M15.9 19c-3.2 2.3-7.8 2.5-11.4.3-1.1-.7-2-1.7-2.7-2.8-.2-.3 0-.6.3-.5 3.7 1.6 8.1 1.7 12 .3.4-.1.7.3.3.6zM17.4 16.5c-.3-.4-1.8-.2-2.5-.1-.2 0-.3-.2-.1-.3 1-1 2.9-.7 3.2-.3.3.4 0 2.3-.9 3.1-.2.2-.4.1-.3-.1.4-.7.9-2 .6-2.3z"/>' 
  }
]

// Row 2 Partners with inline SVG paths
const row2Partners = [
  { 
    name: 'Roblox', 
    icon: '<path d="M5.2 2L2 18.8 18.8 22 22 5.2 5.2 2zm8.3 11.3l-3-1.8 1.8-3 3 1.8-1.8 3z"/>' 
  },
  { 
    name: 'PlayStation', 
    icon: '<path d="M8.4 14.8c1.7.5 3.6.4 5.2-.4V8.7L11 7.6v5.8l-2.6-1.1v2.5zm12.3.9c-.3-.4-1-.7-2-.8l-4-.3V12l4 .4c1.1.1 1.9.4 2.1 1.1.3.8-.4 1.6-1.8 2.1-1.4.5-3.3.6-4.6.3v-1.6c1.1.2 2.6.1 3.7-.3.7-.2 1-.5.9-.8z"/>' 
  },
  { 
    name: 'Zain', 
    icon: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>' 
  },
  { 
    name: 'Shahid VIP', 
    icon: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>' 
  },
  { 
    name: 'Spotify', 
    icon: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.59 14.42c-.18.3-.54.4-.84.22-2.31-1.41-5.22-1.73-8.65-.95-.34.08-.67-.14-.75-.48-.08-.34.14-.67.48-.75 3.77-.86 7-.49 9.54 1.07.3.17.4.53.22.89zm1.23-2.73c-.23.37-.7.49-1.07.26-2.64-1.62-6.67-2.09-9.79-1.14-.41.13-.85-.1-.98-.51-.13-.41.1-.85.51-.98 3.57-1.09 8.01-.57 11.07 1.3.37.23.49.7.26 1.07zm.11-2.84C14.78 8.9 9.03 8.7 5.67 9.72c-.52.16-1.07-.14-1.23-.66-.16-.52.14-1.07.66-1.23 3.86-1.17 10.21-.93 14.1 1.38.47.28.62.89.34 1.36-.28.47-.89.62-1.36.34z"/>' 
  },
  { 
    name: 'StarzPlay', 
    icon: '<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>' 
  },
  { 
    name: 'Steam', 
    icon: '<path d="M12 2a10 10 0 00-9.93 8.84l4.47 1.85a3.25 3.25 0 011.83-.56c.3 0 .58.04.85.12l2.7-3.95v-.05a3.25 3.25 0 113.25 3.25h-.06l-3.91 2.75a3.25 3.25 0 11-5.06 2.45L2.09 14.8A10 10 0 1012 2z"/>' 
  },
  { 
    name: 'Uber', 
    icon: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9V7h4c1.66 0 3 1.34 3 3s-1.34 3-3 3h-2v4z"/>' 
  },
  { 
    name: 'Razer Gold', 
    icon: '<path d="M12 2L2 7l10 5 10-5-10-5zm0 9L2 16l10 5 10-5-10-5z"/>' 
  }
]

// Tripled lists to ensure smooth continuous marquee loops
const doubledRow1 = computed(() => [...row1Partners, ...row1Partners, ...row1Partners])
const doubledRow2 = computed(() => [...row2Partners, ...row2Partners, ...row2Partners])

const form = reactive({
  accountType: '',
  companyName: '',
  branches: '',
  crNumber: '',
  phone: '',
  email: '',
  address: '',
  collaborations: [],
  agreedTerms: false
})

const profileFileName = ref('')
const otherFileName = ref('')

const handleFileUpload = (event, type) => {
  const file = event.target.files[0]
  if (file) {
    if (type === 'companyProfile') profileFileName.value = file.name
    if (type === 'otherDoc') otherFileName.value = file.name
  }
}

const handleSubmit = () => {
  alert('Thank you! Your partnership request has been submitted successfully.')
}
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');

/* Main Light Background Section */
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

/* Heading */
.section-heading {
  font-size: 2.4rem;
  font-weight: 800;
  color: #150324;
  margin-bottom: 3rem;
  text-align: center;
  letter-spacing: -0.5px;
}

/* Marquee Wrapper */
.ticker-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
}

/* Side Gradients for Smooth In/Out Fading */
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

.ticker-left .ticker-track {
  animation: scrollLeft 35s linear infinite;
}

.ticker-right .ticker-track {
  animation: scrollRight 35s linear infinite;
}

.ticker-wrapper:hover .ticker-track {
  animation-play-state: paused;
}

/* ==========================================================================
   SWYCHR BRAND FLOATING CARD CONTAINERS & HIGH-CONTRAST ICONS
   ========================================================================== */
.partner-logo-card {
  background: linear-gradient(160deg, #2b083e 0%, #150324 100%) !important;
  border-radius: 20px;
  padding: 0.8rem 1.4rem;
  min-width: 160px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(123, 31, 162, 0.4);
  box-shadow: 0 10px 25px rgba(21, 3, 36, 0.25);
  transition: all 0.3s ease;
  cursor: pointer;
}

.partner-logo-card:hover {
  transform: translateY(-4px) scale(1.03);
  border-color: #E1BEE7;
  box-shadow: 0 15px 30px rgba(123, 31, 162, 0.35);
}

.logo-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  width: 100%;
}

/* Bright Lilac/White High-Contrast Icon Styling */
.partner-svg-icon {
  width: 26px !important;
  height: 26px !important;
  min-width: 26px;
  min-height: 26px;
  color: #E1BEE7 !important; /* Swychr Accent Lilac */
  fill: currentColor !important;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4));
  transition: transform 0.3s ease, color 0.3s ease;
}

.partner-logo-card:hover .partner-svg-icon {
  color: #ffffff !important;
  transform: scale(1.15);
}

.logo-brand-name {
  font-size: 0.85rem;
  font-weight: 700;
  color: #ffffff !important;
  letter-spacing: -0.2px;
  white-space: nowrap;
}

/* Animation Keyframes */
@keyframes scrollLeft {
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.333%); }
}

@keyframes scrollRight {
  0% { transform: translateX(-33.333%); }
  100% { transform: translateX(0); }
}

/* Responsive Media Queries */
@media (max-width: 992px) {
  .section-heading {
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }

  .partner-logo-card {
    min-width: 140px;
    height: 70px;
    padding: 0.6rem 1rem;
  }

  .partner-svg-icon {
    width: 22px !important;
    height: 22px !important;
  }

  .logo-brand-name {
    font-size: 0.8rem;
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

  .partner-logo-card {
    min-width: 120px;
    height: 64px;
    padding: 0.5rem 0.85rem;
    border-radius: 16px;
  }

  .partner-svg-icon {
    width: 20px !important;
    height: 20px !important;
  }

  .logo-brand-name {
    font-size: 0.75rem;
  }
}


.become-partner-section {
  width: 100%;
  background-color: #f3ecf9;
  padding: 5rem 1.5rem 6rem 1.5rem;
  font-family: 'Montserrat', sans-serif;
  color: #150324;
  display: flex;
  justify-content: center;
}

.become-partner-container {
  max-width: 960px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Header Text */
.form-header-text {
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
}

.form-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #150324;
  margin-bottom: 0.75rem;
  letter-spacing: -0.5px;
}

.form-subtitle {
  font-size: 0.95rem;
  font-weight: 500;
  color: #5c4468;
  line-height: 1.6;
}

/* Swychr Brand Dark Purple Form Card */
.partner-form-card {
  width: 100%;
  background: linear-gradient(160deg, #2b083e 0%, #150324 100%);
  border-radius: 36px;
  padding: 3.5rem 3rem;
  box-shadow: 0 25px 60px rgba(21, 3, 36, 0.25);
  border: 1px solid rgba(123, 31, 162, 0.3);
}

.partner-form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Grid Layout Rows */
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  position: relative;
}

.form-group.full-width {
  width: 100%;
}

.input-label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #E1BEE7;
  margin-bottom: 0.5rem;
  letter-spacing: 0.2px;
}

/* Minimalist Underline Inputs */
.form-input {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1.5px solid rgba(225, 190, 231, 0.4);
  padding: 0.75rem 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  color: #ffffff;
  outline: none;
  transition: border-color 0.3s ease;
}

.form-input::placeholder {
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.85rem;
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

/* File Upload Attachment Inputs */
.upload-row {
  margin-top: 0.5rem;
}

.file-upload-box {
  position: relative;
  width: 100%;
}

.file-input {
  display: none;
}

.file-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1.5px solid rgba(225, 190, 231, 0.4);
  padding: 0.75rem 0;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.file-label:hover {
  border-bottom-color: #E1BEE7;
}

.file-text {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.file-icon {
  color: #E1BEE7;
  font-size: 1.1rem;
}

/* Collaboration Checkboxes Block */
.collaboration-section {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
}

.section-subheading {
  font-size: 0.95rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1.25rem;
}

.checkbox-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.custom-checkbox-card {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  cursor: pointer;
  position: relative;
}

.custom-checkbox-card input,
.terms-checkbox-label input {
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
  margin-top: 2px;
  transition: all 0.2s ease;
  position: relative;
}

.custom-checkbox-card input:checked ~ .checkbox-mark,
.terms-checkbox-label input:checked ~ .checkbox-mark {
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

.custom-checkbox-card input:checked ~ .checkbox-mark::after,
.terms-checkbox-label input:checked ~ .checkbox-mark::after {
  display: block;
}

.checkbox-label-text {
  font-size: 0.82rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
}

.checkbox-label-text strong {
  color: #ffffff;
}

/* Terms Agreement Checkbox */
.terms-agree-group {
  margin-top: 0.5rem;
}

.terms-checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
}

.terms-text {
  font-size: 0.85rem;
  font-weight: 500;
  color: #E1BEE7;
}

/* Centered CTA Submit Button */
.form-submit-row {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}

.btn-submit-partner {
  background-color: #E1BEE7;
  color: #150324;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  font-weight: 800;
  padding: 0.9rem 3.5rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(225, 190, 231, 0.25);
}

.btn-submit-partner:hover {
  background-color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(255, 255, 255, 0.35);
}

/* ==========================================================================
   RESPONSIVE DESIGN (DESKTOP, TABLET, MOBILE)
   ========================================================================== */
@media (max-width: 992px) {
  .checkbox-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .partner-form-card {
    padding: 2.5rem 1.5rem;
    border-radius: 28px;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .checkbox-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
}

@media (max-width: 480px) {
  .become-partner-section {
    padding: 3.5rem 1rem;
  }

  .form-title {
    font-size: 1.9rem;
  }

  .btn-submit-partner {
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