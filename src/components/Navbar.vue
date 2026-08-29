<template>
<div class="swychpe-card"></div>
<header 
  class="swychpe-navbar"
  :class="{ 'navbar-hovered': isNavHovered }"
  @mouseenter="isNavHovered = true"
  @mouseleave="isNavHovered = false"
>
  <div class="nav-left">
    <router-link to="/" class="brand-logo-badge" @click="closeMobileMenu">
      <img src="@/assets/images/swychpe-logo.png" alt="SwychPe Logo" class="logo-img" />
    </router-link>

    <!-- Desktop Nav Links -->
    <nav class="nav-links desktop-only">
      <a href="/card">Cards</a>
      <a href="/offer">Offers</a>
      <a href="/partner">Partners</a>
      <a href="/contact">Contact us</a>
    </nav>
  </div>

  <!-- Desktop Right Section -->
  <div class="nav-right desktop-only">
    <a href="/finance" class="pricing-link">
      <span class="pricing-icon">💳</span> Finance & Savings
    </a>
    <a href="#get-app" class="btn-get-app">Get the App</a>
  </div>

  <!-- Mobile Hamburger Toggle Button (Hidden on Desktop) -->
  <button 
    class="mobile-hamburger-btn" 
    :class="{ 'is-active': isMobileMenuOpen }" 
    @click="toggleMobileMenu" 
    aria-label="Toggle Navigation Menu"
  >
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </button>
</header>

<!-- Background Overlay Backdrop (Closes menu when tapping outside) -->
<div 
  class="mobile-backdrop" 
  :class="{ 'is-open': isMobileMenuOpen }" 
  @click="closeMobileMenu"
></div>

<!-- Sliding Mobile Drawer Menu -->
<div class="mobile-drawer-menu" :class="{ 'is-open': isMobileMenuOpen }">
  <!-- Close '✕' Button Header -->
  <div class="drawer-header">
    <button class="mobile-close-btn" @click="closeMobileMenu" aria-label="Close menu">
      ✕
    </button>
  </div>

  <!-- Drawer Links -->
  <nav class="mobile-nav-links">
    <a href="/card" @click="closeMobileMenu">Cards</a>
    <a href="/offer" @click="closeMobileMenu">Offers</a>
    <a href="/partner" @click="closeMobileMenu">Partners</a>
    <a href="/contact" @click="closeMobileMenu">Contact us</a>
    <a href="/finance" class="mobile-pricing-link" @click="closeMobileMenu">
      💳 Finance & Savings
    </a>
    <a href="/request" class="btn-mobile-get-app" @click="closeMobileMenu">
      Get the App
    </a>
  </nav>
</div>
</template>

<script setup>
import { ref } from 'vue'

const isNavHovered = ref(false)

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

</script>

<style scoped>
/* ==========================================================================
   HEADER / NAVBAR STYLES
   ========================================================================== */
.swychpe-navbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 4rem;
  background-color: transparent;
  transition: background-color 0.35s ease, box-shadow 0.35s ease;
}

.swychpe-navbar.navbar-hovered {
  background-color: rgba(35, 8, 62, 0.45);
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.brand-logo-badge {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 8px 18px;
  border-radius: 24px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.brand-logo-badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
}

.logo-img {
  height: 28px;
  width: auto;
  display: block;
}

.nav-links {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.nav-links a {
  color: #ffffff;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 600;
  padding: 0.6rem 1.1rem;
  border-radius: 20px;
  white-space: nowrap;
  transition: all 0.25s ease-in-out;
}

.nav-links a:hover {
  background-color: rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(8px);
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.pricing-link {
  color: #ffffff;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  white-space: nowrap;
  padding: 0.6rem 1.1rem;
  border-radius: 20px;
  transition: all 0.25s ease-in-out;
}

.pricing-link:hover {
  background-color: rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(8px);
}

.btn-get-app {
  background-color: #ffffff;
  color: #7B1FA2;
  padding: 0.65rem 1.5rem;
  border-radius: 24px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 700;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.25s ease-in-out;
}

.btn-get-app:hover {
  background-color: #f3e5f5;
  color: #4A148C;
  transform: translateY(-2px);
}




/* ==========================================================================
   NAVBAR & MOBILE DRAWER STYLES
   ========================================================================== */
.swychpe-navbar {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 4rem;
  background-color: transparent;
  transition: background-color 0.35s ease, box-shadow 0.35s ease;
  z-index: 50;
}

.desktop-only {
  display: flex;
}

/* Hide Mobile Drawer on Desktop Screen Sizes */
.mobile-drawer-menu {
  display: none;
  position: fixed;
  top: 0;
  right: -100%;
  width: 80%;
  max-width: 320px;
  height: 100vh;
  background: linear-gradient(160deg, #23083e 0%, #10021c 100%);
  padding: 6rem 2rem 2rem 2rem;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
  transition: right 0.35s ease-in-out;
  z-index: 99;
}

.mobile-hamburger-btn {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 100;
  padding: 0;
}

.mobile-hamburger-btn .bar {
  width: 100%;
  height: 3px;
  background-color: #ffffff;
  border-radius: 4px;
  transition: all 0.3s ease;
}

/* Hamburger active transformation to X */
.mobile-hamburger-btn.is-active .bar:nth-child(1) {
  transform: translateY(8.5px) rotate(45deg);
}
.mobile-hamburger-btn.is-active .bar:nth-child(2) {
  opacity: 0;
}
.mobile-hamburger-btn.is-active .bar:nth-child(3) {
  transform: translateY(-8.5px) rotate(-45deg);
}

/* ==========================================================================
   MOBILE BREAKPOINT SWITCH (Activates under 850px width)
   ========================================================================== */
@media (max-width: 850px) {
  .swychpe-navbar {
    padding: 1rem 1.5rem;
  }

  /* Hide Desktop Links on Mobile */
  .desktop-only {
    display: none !important;
  }

  /* Show Hamburger Button and Drawer on Mobile */
  .mobile-hamburger-btn {
    display: flex;
  }

  .mobile-drawer-menu {
    display: flex;
    flex-direction: column;
  }

  .mobile-drawer-menu.is-open {
    right: 0;
  }

  .mobile-nav-links {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .mobile-nav-links a {
    color: #ffffff;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 600;
    padding: 0.8rem 1rem;
    border-radius: 12px;
    transition: background-color 0.2s ease;
  }

  .mobile-nav-links a:hover {
    background: rgba(255, 255, 255, 0.15);
  }

  .btn-mobile-get-app {
    background-color: #ffffff;
    color: #7B1FA2 !important;
    text-align: center;
    font-weight: 800 !important;
    border-radius: 24px !important;
    margin-top: 1rem;
  }
}


/* Dark Backdrop Blur Overlay */
.mobile-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 80;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.mobile-backdrop.is-open {
  opacity: 1;
  pointer-events: auto;
}

/* Drawer Header & Close Button */
.drawer-header {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1.5rem;
}

.mobile-close-btn {
  background: rgba(255, 255, 255, 0.15);
  border: none;
  color: #ffffff;
  font-size: 1.4rem;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s ease;
}

.mobile-close-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* Adjust Mobile Drawer Styling */
.mobile-drawer-menu {
  padding: 1.5rem 2rem 2rem 2rem !important;
  z-index: 90 !important;
}
</style>