<template>
<div class="swychpe-disclaim">
    <Navbar />

  <section class="disclaimer-hero-section">
    <div class="disclaimer-hero-container">
      
      <!-- Top Section Title -->
      <h1 class="disclaimer-main-title">Disclaimer</h1>

      <!-- Content Grid: Left Accent Line & Right Legal Disclosure -->
      <div class="disclaimer-content-grid">
        
        <!-- Left Horizontal Accent Line Container -->
        <div class="disclaimer-divider-column">
          <div class="purple-accent-line"></div>
        </div>

        <!-- Right Corporate & Legal Disclosure Text -->
        <div class="disclaimer-text-column">
          <p class="corporate-disclosure-paragraph">
            <strong>"SwychPe"</strong> is a registered financial technology trademark owned and operated by <strong>Swychr Inc.</strong>, a licensed financial infrastructure provider. Services offered through the SwychPe application and website operate in full compliance with applicable financial regulations, cross-border payment standards, and data protection frameworks. All corporate registrations, tax identifiers, and official headquarters details for Swychr Inc. are registered under relevant banking authority guidelines.
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


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
.swychpe-disclaim{
   width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #7B1FA2 0%, #4A148C 100%);
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
}



/* Main Background Section Wrapper */
.disclaimer-hero-section {
  width: 100%;
  background-color: #f3ecf9;
  padding: 5rem 1.5rem 6rem 1.5rem;
  font-family: 'Montserrat', sans-serif;
  color: #150324;
  display: flex;
  justify-content: center;
}

.disclaimer-hero-container {
  max-width: 1100px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

/* Page Title Styling */
.disclaimer-main-title {
  font-size: 3.2rem;
  font-weight: 800;
  color: #150324;
  letter-spacing: -0.5px;
  margin-bottom: 3.5rem;
}

/* Content Grid Layout */
.disclaimer-content-grid {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 3rem;
  align-items: flex-start;
}

/* Left Accent Line Column */
.disclaimer-divider-column {
  padding-top: 0.75rem;
}

.purple-accent-line {
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #150324 0%, #7B1FA2 100%);
  border-radius: 2px;
}

/* Right Text Column Styling */
.disclaimer-text-column {
  display: flex;
  flex-direction: column;
  max-width: 820px;
}

.corporate-disclosure-paragraph {
  font-size: 0.92rem;
  font-weight: 400;
  color: #3b2847;
  line-height: 1.8;
  margin: 0;
  letter-spacing: 0.1px;
}

.corporate-disclosure-paragraph strong {
  color: #150324;
  font-weight: 700;
}

/* ==========================================================================
   RESPONSIVE STYLING (DESKTOP, TABLET, MOBILE)
   ========================================================================== */
@media (max-width: 992px) {
  .disclaimer-content-grid {
    grid-template-columns: 120px 1fr;
    gap: 2rem;
  }

  .disclaimer-main-title {
    font-size: 2.6rem;
    margin-bottom: 2.5rem;
  }
}

@media (max-width: 768px) {
  .disclaimer-hero-section {
    padding: 3.5rem 1.25rem;
  }

  .disclaimer-content-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .disclaimer-divider-column {
    padding-top: 0;
  }

  .purple-accent-line {
    width: 80px;
  }

  .disclaimer-main-title {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }

  .corporate-disclosure-paragraph {
    font-size: 0.88rem;
    line-height: 1.7;
  }
}

@media (max-width: 480px) {
  .disclaimer-main-title {
    font-size: 1.8rem;
  }
}

</style>