<template>
<div class="swychpe-term">
    <Navbar />
<section class="terms-hero-section">
    <div class="terms-hero-container">
      
      <!-- Top Banner Box -->
      <div class="terms-banner-box">
        <h1 class="terms-banner-title">Terms and Conditions</h1>
        
        <div class="spark-graphic">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0L58 42L100 50L58 58L50 100L42 58L0 50L42 42L50 0Z" fill="#7B1FA2" opacity="0.3"/>
          </svg>
        </div>
      </div>

      <!-- Main Layout: Sticky Navigation Sidebar + Complete Content -->
      <div class="terms-body-grid">
        
        <!-- Left Sidebar Navigation -->
        <aside class="terms-sidebar-column">
          <div class="sidebar-sticky-box">
            <button 
              v-for="tab in navigationTabs" 
              :key="tab.id"
              :class="['sidebar-nav-pill', { active: activeTab === tab.id }]"
              @click="activeTab = tab.id"
            >
              {{ tab.label }}
            </button>
          </div>
        </aside>

        <!-- Right Legal Document Content -->
        <main class="terms-content-column">
          
          <!-- TAB 1: COMPLETE TERMS & CONDITIONS -->
          <div v-if="activeTab === 'terms'" class="legal-document-body">
            
            <ol class="terms-ordered-list">
              <li>
                <strong>Definitions and Interpretations:</strong>
                <ul class="nested-alpha-list">
                  <li><strong>(a)</strong> "SwychPe" and/or "Swychr" refers to Swychr Inc. and its affiliated digital banking and wallet infrastructure.</li>
                  <li><strong>(b)</strong> "Customer" means any individual or entity in whose name an account or card has been registered.</li>
                  <li><strong>(c)</strong> "User" refers to any authorized person accessing SwychPe electronic banking services.</li>
                  <li><strong>(d)</strong> "Electronic Banking" includes access to accounts, wallet balances, card controls, and transfer services via mobile or web interfaces.</li>
                </ul>
              </li>

              <li>
                <strong>Scope of Electronic Banking Services:</strong> Electronic Banking facilities shall be available for services designated by SwychPe from time to time at its sole discretion.
              </li>

              <li>
                <strong>Customer Authorization & Account Debit:</strong> The Customer explicitly authorizes SwychPe to execute electronic instructions received through verified credentials, respond to account inquiries, and debit specified amounts for transfers, bill payments, and card transactions without recourse.
              </li>

              <li>
                <strong>Service Fees and Charges:</strong> The Customer agrees to pay applicable service fees as outlined in the SwychPe Fees and Charges schedule. SwychPe reserves the right to modify transactional charges with prior notice.
              </li>

              <li>
                <strong>Account Security & User Duties:</strong> The Customer is solely responsible for maintaining strict confidentiality of their account PIN, passwords, and biometrics. SwychPe shall not be held liable for unauthorized access resulting from user negligence.
              </li>

              <li>
                <strong>Digital Wallet Provisioning & Tokenization:</strong> Once a payment instrument is linked, SwychPe stores a Virtual Card Number representing the payment card. Your use of Digital Wallet applications is governed by these terms as well as partner card issuer agreements.
              </li>

              <li>
                <strong>Biometric & CDCVM Verification:</strong> Consumer Device Cardholder Verification Methods (CDCVM) including fingerprint scanners and facial recognition replace manual card PINs for digital wallet authorization. Users accept full responsibility for keeping device biometric access secure.
              </li>

              <li>
                <strong>Digital Wallet Deactivation Scenarios:</strong> SwychPe reserves the right to suspend or remove payment tokens from Digital Wallets if: (a) the wallet app is uninstalled; (b) the device is reported lost/stolen; (c) the account remains inactive for 24 consecutive months; or (d) suspicious activity or identity document expiration occurs.
              </li>

              <li>
                <strong>Minor & Dependent Accounts (Parental Consent):</strong> Independent accounts created for minors under 15 years old must be registered by a parent or legal guardian. The parent acknowledges full legal responsibility for funds deposited and account management until the child reaches legal age and presents a valid national ID.
              </li>

              <li>
                <strong>Instant Payments & Transfer Limits:</strong> Instant local transfers require valid recipient identifiers (IBAN, registered phone, or national ID). Transactions completed using correct recipient details are final and irrevocable.
              </li>

              <li>
                <strong>Electronic KYC (e-KYC) & Biometric mPIN:</strong> Customers must update their identity documentation through digital e-KYC channels. Accessing SwychPe mobile apps via 5-digit mPIN or biometrics provides binding legal consent for all executed transactions.
              </li>

              <li>
                <strong>Limitation of Liability & Disclaimer of Warranties:</strong> Services are provided on an "as is" and "as available" basis. SwychPe disclaims all express or implied warranties regarding uninterrupted or error-free operations resulting from external telecommunication failures or third-party outages.
              </li>

              <li>
                <strong>Governing Law & Dispute Resolution:</strong> These Terms and Conditions are governed by applicable financial sector laws. Any unresolved disputes shall be submitted to official banking and financial arbitration committees.
              </li>
            </ol>

          </div>

          <!-- TAB 2: PREPAID CARD AGREEMENT -->
          <div v-else-if="activeTab === 'prepaid'" class="legal-document-body">
            <h2 class="sub-doc-title">Prepaid Card Agreement</h2>
            <p class="narrative-paragraph">
              This Agreement governs the issuance and usage of SwychPe Prepaid Cards. By activating or funding your prepaid card, you agree to abide by all daily spending caps, ATM withdrawal limits, and load parameters specified in your user portal.
            </p>
            <p class="narrative-paragraph">
              Prepaid cards remain the property of Swychr. Lost or stolen cards must be immediately frozen through the SwychPe mobile application or customer service line to prevent unauthorized liability.
            </p>
          </div>

          <!-- TAB 3: PRIVACY POLICY -->
          <div v-else-if="activeTab === 'privacy'" class="legal-document-body">
            <h2 class="sub-doc-title">Privacy Policy</h2>
            <p class="narrative-paragraph">
              SwychPe collects personal information (registration data, transaction history, device parameters) strictly to fulfill financial transactions, verify identity through e-KYC, prevent fraud, and comply with regulatory requirements.
            </p>
            <p class="narrative-paragraph">
              We employ bank-grade encryption and secure socket layers to protect your financial records. We do not sell or rent customer data to unauthorized third parties.
            </p>
          </div>

        </main>

      </div>

    </div>
  </section>

<Footer />
</div> 
 </template>   


<script setup>
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
const activeTab = ref('terms')

const navigationTabs = [
  { id: 'terms', label: 'Terms and Conditions' },
  { id: 'prepaid', label: 'Prepaid Card Agreement' },
  { id: 'privacy', label: 'Privacy Policy' }
]

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
.swychpe-term{
   width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #7B1FA2 0%, #4A148C 100%);
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
}



/* Main Background Outer Wrapper */
.terms-hero-section {
  width: 100%;
  background-color: #f3ecf9;
  padding: 4rem 1.5rem 6rem 1.5rem;
  font-family: 'Montserrat', sans-serif;
  color: #150324;
  display: flex;
  justify-content: center;
}

.terms-hero-container {
  max-width: 1140px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

/* Top Banner Header Box */
.terms-banner-box {
  width: 100%;
  background-color: rgba(225, 190, 231, 0.45);
  border-radius: 40px;
  padding: 3.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 4rem;
  border: 1px solid rgba(123, 31, 162, 0.15);
}

.terms-banner-title {
  font-size: 2.8rem;
  font-weight: 800;
  color: #150324;
  letter-spacing: -0.5px;
  text-align: center;
  z-index: 2;
}

.spark-graphic {
  position: absolute;
  left: 35%;
  bottom: 1.5rem;
  width: 40px;
  height: 40px;
  pointer-events: none;
  z-index: 1;
}

/* Two-Column Grid Layout */
.terms-body-grid {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 3.5rem;
  align-items: flex-start;
}

/* Left Sidebar Sticky Styling */
.terms-sidebar-column {
  width: 100%;
}

.sidebar-sticky-box {
  position: sticky;
  top: 6rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.sidebar-nav-pill {
  width: 100%;
  padding: 0.85rem 1.25rem;
  border-radius: 30px;
  border: 1.5px solid rgba(123, 31, 162, 0.3);
  background: transparent;
  color: #150324;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.88rem;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  transition: all 0.25s ease;
}

.sidebar-nav-pill:hover {
  background-color: rgba(123, 31, 162, 0.1);
  border-color: #7B1FA2;
}

/* Swychr Active Pill Theme */
.sidebar-nav-pill.active {
  background: linear-gradient(145deg, #2b083e 0%, #150324 100%);
  color: #ffffff;
  border-color: #150324;
  box-shadow: 0 8px 20px rgba(21, 3, 36, 0.2);
}

/* Right Content Column */
.terms-content-column {
  display: flex;
  flex-direction: column;
}

.legal-document-body {
  font-size: 0.92rem;
  font-weight: 400;
  color: #3b2847;
  line-height: 1.75;
}

.terms-ordered-list {
  padding-left: 1.25rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.terms-ordered-list > li {
  padding-left: 0.5rem;
}

.nested-alpha-list {
  list-style: none;
  padding-left: 0;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.nested-alpha-list li {
  padding-left: 0.5rem;
}

.sub-doc-title {
  font-size: 1.8rem;
  font-weight: 800;
  color: #150324;
  margin-bottom: 1rem;
}

.narrative-paragraph {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #3b2847;
  margin-bottom: 1.25rem;
}

/* ==========================================================================
   RESPONSIVE STYLING (DESKTOP, TABLET, MOBILE)
   ========================================================================== */
@media (max-width: 992px) {
  .terms-body-grid {
    grid-template-columns: 220px 1fr;
    gap: 2rem;
  }

  .terms-banner-title {
    font-size: 2.2rem;
  }
}

@media (max-width: 768px) {
  .terms-hero-section {
    padding: 3rem 1.25rem;
  }

  .terms-banner-box {
    padding: 2.5rem 1.25rem;
    border-radius: 28px;
    margin-bottom: 2.5rem;
  }

  .terms-banner-title {
    font-size: 1.8rem;
  }

  .terms-body-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .sidebar-sticky-box {
    position: static;
    flex-direction: column;
  }

  .legal-document-body {
    font-size: 0.88rem;
  }
}

@media (max-width: 480px) {
  .terms-banner-title {
    font-size: 1.5rem;
  }
}
</style>