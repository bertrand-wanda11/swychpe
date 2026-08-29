<template>
  <div class="swychpe-about">
    <Navbar />
    <section class="about-hero-section">
    <div class="about-hero-container">
      
      <!-- Top Section Title -->
      <h1 class="about-main-title">About SwychPe</h1>

      <!-- Content Grid: Left Accent Line & Right Narrative -->
      <div class="about-content-grid">
        
        <!-- Left Horizontal Accent Line Container -->
        <div class="about-divider-column">
          <div class="purple-accent-line"></div>
        </div>

        <!-- Right Body Text Column -->
        <div class="about-text-column">
          <p class="trademark-notice">
            SwychPe is a registered financial technology brand operating under Swychr.
          </p>

          <p class="narrative-paragraph">
            At SwychPe, we are more than just a digital payment platform. We are fueled by a relentless passion for financial accessibility and an unyielding commitment to placing our users at the center of everything we build. We challenge conventional banking models by engineering modern, secure solutions that expand what everyday financial technology can achieve across global markets.
          </p>

          <p class="narrative-paragraph">
            Our philosophy is straightforward: place customer empowerment at the core of our innovation. By leveraging high-speed transaction infrastructure and intuitive design, we deliver financial tools that are not only seamless and dependable, but truly transformative for individuals and businesses alike. We are here to reshape cross-border payments and establish a higher benchmark for digital wallets.
          </p>

          <p class="narrative-paragraph">
            SwychPe is founded on the conviction that user-centric design and continuous technological evolution drive long-term impact. We strive for excellence in every feature—constantly expanding boundaries to make financial management effortless.
          </p>

          <p class="narrative-highlight">
            We don't follow existing conventions — we create the future of global payments.
          </p>
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
.swychpe-about {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #7B1FA2 0%, #4A148C 100%);
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
}



/* Main Background Section Wrapper */
.about-hero-section {
  width: 100%;
  background-color: #f3ecf9;
  padding: 5rem 1.5rem 6rem 1.5rem;
  font-family: 'Montserrat', sans-serif;
  color: #150324;
  display: flex;
  justify-content: center;
}

.about-hero-container {
  max-width: 1100px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

/* Page Title Styling */
.about-main-title {
  font-size: 3.2rem;
  font-weight: 800;
  color: #150324;
  letter-spacing: -0.5px;
  margin-bottom: 3.5rem;
}

/* Content Grid Layout */
.about-content-grid {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 3rem;
  align-items: flex-start;
}

/* Left Accent Line */
.about-divider-column {
  padding-top: 0.75rem;
}

.purple-accent-line {
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #150324 0%, #7B1FA2 100%);
  border-radius: 2px;
}

/* Right Text Column Styling */
.about-text-column {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 820px;
}

.trademark-notice {
  font-size: 0.95rem;
  font-weight: 700;
  color: #7B1FA2;
  margin-bottom: 0.5rem;
  letter-spacing: 0.2px;
}

.narrative-paragraph {
  font-size: 1.05rem;
  font-weight: 400;
  color: #3b2847;
  line-height: 1.75;
  margin: 0;
}

.narrative-highlight {
  font-size: 1.15rem;
  font-weight: 700;
  color: #150324;
  line-height: 1.6;
  margin-top: 0.5rem;
}

/* ==========================================================================
   RESPONSIVE STYLING (DESKTOP, TABLET, MOBILE)
   ========================================================================== */
@media (max-width: 992px) {
  .about-content-grid {
    grid-template-columns: 120px 1fr;
    gap: 2rem;
  }

  .about-main-title {
    font-size: 2.6rem;
    margin-bottom: 2.5rem;
  }
}

@media (max-width: 768px) {
  .about-hero-section {
    padding: 3.5rem 1.25rem;
  }

  .about-content-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .about-divider-column {
    padding-top: 0;
  }

  .purple-accent-line {
    width: 80px;
  }

  .about-main-title {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }

  .narrative-paragraph {
    font-size: 0.98rem;
    line-height: 1.65;
  }

  .narrative-highlight {
    font-size: 1.05rem;
  }
}

@media (max-width: 480px) {
  .about-main-title {
    font-size: 1.8rem;
  }
}
</style>
