<template>
    <div class="swychpe-finance">
<Navbar />
<section class="pricing-fees-section">
    <div class="pricing-fees-container">
      
      <!-- Top Section Header & Disclaimers -->
      <div class="pricing-header-text">
        <h1 class="pricing-title">Banking Fees and Charges</h1>
        <p class="pricing-vat-text">All listed fees are exclusive of applicable VAT.</p>
        <p class="pricing-effective-date">These schedule fees are effective starting from February 20, 2026.</p>
      </div>

      <!-- Main Dark Pricing Table Wrapper -->
      <div class="table-responsive-wrapper">
        <table class="swychr-pricing-table">
          <thead>
            <tr>
              <th class="col-service">Services</th>
              <th class="col-description">Description</th>
              <th class="col-fee">Fees</th>
            </tr>
          </thead>
          <tbody>
            
            <!-- Category 1: Accounts -->
            <tr>
              <td class="category-cell" rowspan="2">Accounts</td>
              <td class="desc-cell">Account Opening</td>
              <td class="fee-cell highlight-free">Free</td>
            </tr>
            <tr>
              <td class="desc-cell">Account Management</td>
              <td class="fee-cell highlight-free">Free</td>
            </tr>

            <!-- Category 2: Standing Orders Fees -->
            <tr>
              <td class="category-cell" rowspan="5">Standing Orders Fees</td>
              <td class="desc-cell">Standing Orders Setup & Execution</td>
              <td class="fee-cell">1,000 FCFA</td>
            </tr>
            <tr>
              <td class="desc-cell">Cancellation of Standing Order</td>
              <td class="fee-cell highlight-free">Free</td>
            </tr>
            <tr>
              <td class="desc-cell">Add Beneficiary</td>
              <td class="fee-cell highlight-free">Free</td>
            </tr>
            <tr>
              <td class="desc-cell">Transfer within SwychPe Accounts</td>
              <td class="fee-cell highlight-free">Free</td>
            </tr>
            <tr>
              <td class="desc-cell">Transfer within Swychr Partner Network</td>
              <td class="fee-cell highlight-free">Free</td>
            </tr>

            <!-- Category 3: Transfers -->
            <tr>
              <td class="category-cell" rowspan="6">Transfers</td>
              <td class="desc-cell">Domestic transfer under 25,000 FCFA equivalent</td>
              <td class="fee-cell">100 FCFA</td>
            </tr>
            <tr>
              <td class="desc-cell">Domestic transfer via digital channels (25,000 to 200,000 FCFA)</td>
              <td class="fee-cell">250 FCFA</td>
            </tr>
            <tr>
              <td class="desc-cell">Local Transfer above 200,000 FCFA – Same Day (via electronic channels)</td>
              <td class="fee-cell">1,000 FCFA</td>
            </tr>
            <tr>
              <td class="desc-cell">Local Transfer above 200,000 FCFA – Next Day (via electronic channels)</td>
              <td class="fee-cell">750 FCFA</td>
            </tr>
            <tr>
              <td class="desc-cell">International outgoing transfer (QuickPay Digital Service)</td>
              <td class="fee-cell highlight-free">Free</td>
            </tr>
            <tr>
              <td class="desc-cell">International outgoing transfer (Global Remittance Service)</td>
              <td class="fee-cell">Max 5,000 FCFA</td>
            </tr>

            <!-- Category 4: Documents -->
            <tr>
              <td class="category-cell" rowspan="4">Documents</td>
              <td class="desc-cell">Issuance of Account Confirmation Certificate</td>
              <td class="fee-cell highlight-free">Free</td>
            </tr>
            <tr>
              <td class="desc-cell">Issuance of Periodic Statement (less than 1 year)</td>
              <td class="fee-cell highlight-free">Free</td>
            </tr>
            <tr>
              <td class="desc-cell">Statement request (1 to 2 years)</td>
              <td class="fee-cell highlight-free">Free</td>
            </tr>
            <tr>
              <td class="desc-cell">Statement request (more than 2 years via electronic channels)</td>
              <td class="fee-cell highlight-free">Free</td>
            </tr>

            <!-- Category 5: SwychPe Cards -->
            <tr>
              <td class="category-cell" rowspan="7">SwychPe Cards</td>
              <td class="desc-cell">Issuance / Renewal of Platinum Card</td>
              <td class="fee-cell highlight-free">Free</td>
            </tr>
            <tr>
              <td class="desc-cell">Issuance / Renewal of World Card</td>
              <td class="fee-cell">15,000 FCFA</td>
            </tr>
            <tr>
              <td class="desc-cell">Re-issue of SwychPe Card due to ATM capture or loss</td>
              <td class="fee-cell">1,500 FCFA</td>
            </tr>
            <tr>
              <td class="desc-cell">Cash withdrawal via local ATM networks</td>
              <td class="fee-cell highlight-free">Free</td>
            </tr>
            <tr>
              <td class="desc-cell">International Cash Withdrawal (Non-Regional ATMs)</td>
              <td class="fee-cell">3% (Max 3,500 FCFA)</td>
            </tr>
            <tr>
              <td class="desc-cell">Local POS and Online Merchant Purchases</td>
              <td class="fee-cell highlight-free">Free</td>
            </tr>
            <tr>
              <td class="desc-cell">International purchase FX transaction markup</td>
              <td class="fee-cell">2% of transaction amount</td>
            </tr>

            <!-- Category 6: Personal Finance Products -->
            <tr>
              <td class="category-cell">Personal Finance</td>
              <td class="desc-cell">Administrative fees, Annual Percentage Rate (APR), and VAT included</td>
              <td class="fee-cell">0.50% of financing amount</td>
            </tr>

            <!-- Category 7: Payments -->
            <tr>
              <td class="category-cell">Payments</td>
              <td class="desc-cell">Utility Bills & Merchant Payments</td>
              <td class="fee-cell highlight-free">Free</td>
            </tr>

            <!-- Category 8: Buy/Sell Foreign Currency -->
            <tr>
              <td class="category-cell">FX Currency Exchange</td>
              <td class="desc-cell">Foreign Exchange Board Rate</td>
              <td class="fee-cell">Standard FX Rate</td>
            </tr>

          </tbody>
        </table>
      </div>

      <!-- Bottom Footnote Notes -->
      <div class="pricing-footnotes">
        <ul>
          <li>In the event that a transaction is proven to be wrongly charged, SwychPe shall waive or refund the full fees.</li>
          <li>Annual Percentage Rates (APR) and currency conversion margins may change periodically. Please check the app for live rates.</li>
          <li>The above fees are exclusive of local VAT and are subject to VAT adjustments as required by regulatory authorities.</li>
        </ul>
        <p class="retail-note">To view the latest version of fees and charges, please visit the SwychPe app. The above banking fees apply to retail customers only.</p>
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
.swychpe-finance{
   width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #7B1FA2 0%, #4A148C 100%);
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
}


/* Main Background Section Wrapper */
.pricing-fees-section {
  width: 100%;
  background-color: #f3ecf9;
  padding: 5rem 1.5rem 6rem 1.5rem;
  font-family: 'Montserrat', sans-serif;
  color: #150324;
  display: flex;
  justify-content: center;
}

.pricing-fees-container {
  max-width: 1100px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

/* Header Text Styling */
.pricing-header-text {
  margin-bottom: 2.5rem;
  text-align: left;
}

.pricing-title {
  font-size: 2.8rem;
  font-weight: 800;
  color: #150324;
  margin-bottom: 0.75rem;
  letter-spacing: -0.5px;
}

.pricing-vat-text {
  font-size: 1.05rem;
  font-weight: 600;
  color: #7B1FA2;
  margin-bottom: 0.35rem;
}

.pricing-effective-date {
  font-size: 0.95rem;
  font-weight: 400;
  color: #5c4468;
}

/* Responsive Table Scroll Container */
.table-responsive-wrapper {
  width: 100%;
  overflow-x: auto;
  border-radius: 24px;
  box-shadow: 0 20px 50px rgba(21, 3, 36, 0.2);
  margin-bottom: 3rem;
  border: 1px solid rgba(123, 31, 162, 0.25);
}

/* Swychr Dark Table Container */
.swychr-pricing-table {
  width: 100%;
  border-collapse: collapse;
  background: linear-gradient(160deg, #1f0436 0%, #150324 100%);
  color: #ffffff;
  text-align: left;
  min-width: 750px;
}

/* Table Header */
.swychr-pricing-table thead tr {
  background-color: #10021c;
  border-bottom: 2px solid rgba(225, 190, 231, 0.2);
}

.swychr-pricing-table th {
  padding: 1.4rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 800;
  color: #E1BEE7;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.col-service { width: 25%; }
.col-description { width: 55%; }
.col-fee { width: 20%; }

/* Table Body Cells */
.swychr-pricing-table td {
  padding: 1.1rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  border-bottom: 1px solid rgba(123, 31, 162, 0.15);
  vertical-align: middle;
}

.swychr-pricing-table tbody tr:hover {
  background-color: rgba(123, 31, 162, 0.15);
}

/* Category Column Styling (Left) */
.category-cell {
  font-weight: 800;
  color: #ffffff;
  background-color: rgba(43, 8, 62, 0.4);
  border-right: 1px solid rgba(225, 190, 231, 0.15);
  vertical-align: top !important;
  padding-top: 1.25rem !important;
}

.desc-cell {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
}

.fee-cell {
  font-weight: 700;
  color: #E1BEE7;
}

.highlight-free {
  color: #ffffff;
  font-weight: 800;
}

/* Bottom Footnote Notes */
.pricing-footnotes {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.pricing-footnotes ul {
  list-style: disc;
  padding-left: 1.25rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.pricing-footnotes li {
  font-size: 0.85rem;
  font-weight: 400;
  color: #5c4468;
  line-height: 1.6;
}

.retail-note {
  font-size: 0.82rem;
  font-weight: 600;
  color: #7B1FA2;
  margin-top: 0.5rem;
}

/* ==========================================================================
   RESPONSIVE STYLING (DESKTOP, TABLET, MOBILE)
   ========================================================================== */
@media (max-width: 768px) {
  .pricing-fees-section {
    padding: 3.5rem 1rem;
  }

  .pricing-title {
    font-size: 2.1rem;
  }

  .swychr-pricing-table th,
  .swychr-pricing-table td {
    padding: 1rem 1.1rem;
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .pricing-title {
    font-size: 1.75rem;
  }

  .pricing-vat-text {
    font-size: 0.95rem;
  }

  .pricing-effective-date {
    font-size: 0.85rem;
  }
}
</style>