<template>
<div class="swychpe-privacy">
<Navbar />
  <section class="privacy-policy-section">
    <div class="privacy-policy-container">
      
      <!-- Top Title & Accent Line -->
      <div class="privacy-header-block">
        <h1 class="privacy-main-title">Privacy Policy</h1>
        <div class="privacy-accent-line"></div>
      </div>

      <!-- Main Privacy Document Body -->
      <div class="privacy-content-body">
        
        <!-- Section 1 -->
        <article class="privacy-article">
          <h2 class="privacy-section-title">1. Overview</h2>
          <p class="privacy-paragraph">
            SwychPe is a digital payment brand operated by Swychr ("we", "us", "our"). Swychr plays a pivotal role in expanding digital financial accessibility by delivering retail banking products, virtual prepaid cards, cross-border money transfers, and modern financial tools.
          </p>
          <p class="privacy-paragraph">
            Swychr is committed to safeguarding your privacy and complying with global data protection laws and personal data regulations. Personal Data refers to any information relating to an identified or identifiable individual, including name, phone number, email address, national identity numbers, and transaction records.
          </p>
          <p class="privacy-paragraph">
            This Privacy Policy explains how Swychr collects, processes, and protects your Personal Data when using the SwychPe mobile app and web platform, ensuring transparency to empower your financial decisions.
          </p>
        </article>

        <!-- Section 2 -->
        <article class="privacy-article">
          <h2 class="privacy-section-title">2. Purpose</h2>
          <p class="privacy-paragraph">
            This notice provides clarity on how Swychr collects, uses, stores, shares, and protects your Personal Data. Our commitment is to deliver personalized, secure, and compliant financial services while enforcing strict administrative and technical security measures to prevent unauthorized access, loss, or misuse.
          </p>
        </article>

        <!-- Section 3 -->
        <article class="privacy-article">
          <h2 class="privacy-section-title">3. Your Personal Data</h2>
          <p class="privacy-paragraph">
            Swychr collects data strictly necessary to provide seamless digital financial services, including:
          </p>
          <ul class="privacy-bullet-list">
            <li><strong>Personal Information:</strong> Full name, date of birth, physical address, email, phone number, and government identification numbers.</li>
            <li><strong>Financial Information:</strong> Linked bank account details, transaction history, card numbers, balance records, and beneficiary details.</li>
            <li><strong>Technical & Device Data:</strong> IP addresses, mobile device identifiers, operating system version, and login session logs.</li>
          </ul>
        </article>

        <!-- Section 4 -->
        <article class="privacy-article">
          <h2 class="privacy-section-title">4. Purposes of Processing</h2>
          <p class="privacy-paragraph">Personal Data may be processed for the following operational needs:</p>
          <ul class="privacy-bullet-list">
            <li>Account onboarding, verification, identity checks, and closure.</li>
            <li>Processing deposits, withdrawals, transfers, merchant payments, and card transactions.</li>
            <li>Risk assessment, fraud monitoring, anti-money laundering (AML), and Know Your Customer (KYC) compliance.</li>
            <li>Providing customer support and resolving service inquiries.</li>
            <li>Delivering promotional rewards, partner cashbacks, and product announcements (with your consent).</li>
          </ul>
        </article>

        <!-- Section 5 -->
        <article class="privacy-article">
          <h2 class="privacy-section-title">5. Legal Basis for Processing</h2>
          <p class="privacy-paragraph">
            We process Personal Data under recognized legal grounds: (a) explicit user consent; (b) necessity to fulfill contractual agreements; (c) legal and regulatory compliance; and (d) legitimate business interests to protect platform security.
          </p>
        </article>

        <!-- Section 6 -->
        <article class="privacy-article">
          <h2 class="privacy-section-title">6. Disclosure of Personal Data</h2>
          <p class="privacy-paragraph">
            We may disclose relevant data to Swychr group subsidiaries, authorized third-party service providers (payment processors, card networks), legal advisors, and regulatory bodies as mandated by law.
          </p>
        </article>

        <!-- Section 7 -->
        <article class="privacy-article">
          <h2 class="privacy-section-title">7. Data Security & Retention</h2>
          <p class="privacy-paragraph">
            Swychr implements end-to-end encryption, multi-factor authentication, and secure server architecture to guard your records. Personal Data is retained only for the duration required by financial regulators and operational requirements, after which it is securely destroyed.
          </p>
        </article>

        <!-- Section 8 -->
        <article class="privacy-article">
          <h2 class="privacy-section-title">8. Your Rights & Contacts</h2>
          <p class="privacy-paragraph">
            You maintain the right to access your data, request correction of inaccurate records, request data deletion (subject to legal retention mandates), and withdraw consent for marketing channels.
          </p>
          <p class="privacy-paragraph">
            For privacy inquiries or complaints, contact our Compliance Team at <strong>privacy@swychpe.com</strong> or submit a ticket through the SwychPe mobile app.
          </p>
        </article>

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
.swychpe-privacy{
   width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #7B1FA2 0%, #4A148C 100%);
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
}



/* Section Background Outer Wrapper */
.privacy-policy-section {
  width: 100%;
  background-color: #f3ecf9;
  padding: 5rem 1.5rem 6rem 1.5rem;
  font-family: 'Montserrat', sans-serif;
  color: #150324;
  display: flex;
  justify-content: center;
}

.privacy-policy-container {
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

/* Header Text & Accent Line */
.privacy-header-block {
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.privacy-main-title {
  font-size: 3.2rem;
  font-weight: 800;
  color: #150324;
  letter-spacing: -0.5px;
  margin: 0;
}

.privacy-accent-line {
  width: 120px;
  height: 4px;
  background: linear-gradient(90deg, #150324 0%, #7B1FA2 100%);
  border-radius: 2px;
}

/* Document Body Layout */
.privacy-content-body {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.privacy-article {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.privacy-section-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: #150324;
  letter-spacing: -0.2px;
  margin: 0;
}

.privacy-paragraph {
  font-size: 0.98rem;
  font-weight: 400;
  color: #3b2847;
  line-height: 1.75;
  margin: 0;
}

.privacy-bullet-list {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.privacy-bullet-list li {
  font-size: 0.95rem;
  font-weight: 400;
  color: #3b2847;
  line-height: 1.65;
}

.privacy-bullet-list strong {
  color: #150324;
}

/* ==========================================================================
   RESPONSIVE STYLING (DESKTOP, TABLET, MOBILE)
   ========================================================================== */
@media (max-width: 768px) {
  .privacy-policy-section {
    padding: 3.5rem 1.25rem;
  }

  .privacy-main-title {
    font-size: 2.4rem;
  }

  .privacy-accent-line {
    width: 90px;
  }

  .privacy-section-title {
    font-size: 1.3rem;
  }

  .privacy-paragraph,
  .privacy-bullet-list li {
    font-size: 0.9rem;
    line-height: 1.65;
  }
}

@media (max-width: 480px) {
  .privacy-main-title {
    font-size: 1.9rem;
  }

  .privacy-section-title {
    font-size: 1.15rem;
  }
}
</style>
