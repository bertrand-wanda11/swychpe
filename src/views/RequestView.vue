<template>
  <div class="swychpe-request-wrapper">
    <!-- Main Outer Container with SwychPe Brand Styling -->
    <div class="request-card-container">
      
      <!-- Top Right Exit / Back Button -->
      <router-link to="/card" class="btn-close-request" aria-label="Return to Cards">
        ✕
      </router-link>

      <!-- Left Inner Dark Purple Card (App Access & QR Code) -->
      <div class="left-brand-card">
        <h2 class="brand-card-heading">
          Unlock SwychPe <br />
          <span class="brand-subheading">Engineered by Swychr</span>
        </h2>

        <div class="qr-code-wrapper">
          <div class="qr-code-frame">
            <span class="qr-brand-spark">✦</span>
          </div>
          <span class="qr-download-text">Scan to get the mobile app</span>
        </div>
      </div>

      <!-- Right Section (Rephrased Qualification Details) -->
      <div class="right-requirements-content">
        <h1 class="requirements-title">Account Verification</h1>
        <p class="requirements-intro">
          Access our premium multi-currency banking tools instantly by satisfying the following criteria:
        </p>

        <ul class="requirements-checklist">
          <li>
            <span class="purple-check-icon">✓</span>
            <span>Registered Cameroon mobile contact number</span>
          </li>
          <li>
            <span class="purple-check-icon">✓</span>
            <span>Aged 15 or over (parental authorization needed under 18)</span>
          </li>
          <li>
            <span class="purple-check-icon">✓</span>
            <span>Official Government National ID Card or Passport</span>
          </li>
          <li>
            <span class="purple-check-icon">✓</span>
            <span>Confirmed residential address for card dispatch</span>
          </li>
          <li>
            <span class="purple-check-icon">✓</span>
            <span>Active account within the Swychr ecosystem</span>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');

/* Full Page Wrapper with SwychPe Brand Dark Background */
.swychpe-request-wrapper {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(145deg, #150324 0%, #2b083e 55%, #120220 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 1.5rem;
  font-family: 'Montserrat', sans-serif;
}

/* Outer Soft Lilac Container */
.request-card-container {
  background-color: #f3ecf9;
  width: 100%;
  max-width: 960px;
  border-radius: 40px;
  padding: 2.5rem;
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 2.5rem;
  position: relative;
  box-shadow: 0 30px 65px rgba(0, 0, 0, 0.45);
}

/* Close Button with SwychPe Hover Glow */
.btn-close-request {
  position: absolute;
  top: 24px;
  right: 24px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #150324;
  color: #ffffff;
  text-decoration: none;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
  z-index: 10;
}

.btn-close-request:hover {
  background-color: #7B1FA2;
  box-shadow: 0 4px 15px rgba(123, 31, 162, 0.4);
  transform: rotate(90deg);
}

/* Left Inner Dark Purple Card */
.left-brand-card {
  background: linear-gradient(160deg, #2b083e 0%, #10021c 100%);
  border-radius: 32px;
  padding: 3rem 2.2rem;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 350px;
  border: 1px solid rgba(225, 190, 231, 0.2);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
}

.brand-card-heading {
  font-size: 2.3rem;
  font-weight: 800;
  line-height: 1.25;
  color: #ffffff;
}

.brand-subheading {
  font-size: 1.25rem;
  font-weight: 600;
  color: #E1BEE7;
}

.qr-code-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.qr-code-frame {
  width: 90px;
  height: 90px;
  border: 2px solid #E1BEE7;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
}

.qr-brand-spark {
  color: #E1BEE7;
  font-size: 2.2rem;
}

.qr-download-text {
  font-size: 0.82rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.75);
}

/* Right Content Area */
.right-requirements-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 1rem;
}

.requirements-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #150324;
  margin-bottom: 1.2rem;
  letter-spacing: -0.5px;
}

.requirements-intro {
  font-size: 0.95rem;
  font-weight: 500;
  color: #4A148C;
  line-height: 1.6;
  margin-bottom: 2rem;
}

/* Checklist Styling */
.requirements-checklist {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.requirements-checklist li {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  font-size: 0.92rem;
  font-weight: 600;
  color: #150324;
  line-height: 1.45;
}

.purple-check-icon {
  color: #7B1FA2;
  font-size: 1.15rem;
  font-weight: 900;
}

/* ==========================================================================
   RESPONSIVE DESIGN (DESKTOP, TABLET, MOBILE)
   ========================================================================== */
@media (max-width: 900px) {
  .request-card-container {
    grid-template-columns: 1fr;
    padding: 2rem;
    gap: 2rem;
  }

  .right-requirements-content {
    padding-right: 0;
  }

  .requirements-title {
    font-size: 2.1rem;
  }
}

@media (max-width: 600px) {
  .swychpe-request-wrapper {
    padding: 1rem;
  }

  .request-card-container {
    border-radius: 28px;
    padding: 1.5rem;
  }

  .left-brand-card {
    padding: 2rem 1.5rem;
    min-height: 290px;
  }

  .brand-card-heading {
    font-size: 1.8rem;
  }

  .requirements-title {
    font-size: 1.8rem;
  }

  .requirements-intro {
    font-size: 0.88rem;
  }
}
</style>