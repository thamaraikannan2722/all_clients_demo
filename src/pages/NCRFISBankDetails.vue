<template>
  <div id="ncrfisbankdetails">
    <PreHeader />
    <Header />
    <NCRFIS />
    <Footer />
  </div>
</template>

<script>

import PreHeader from "@/components/PreHeader.vue";
import Header from "@/components/Header.vue";
import NCRFIS from "@/components/NCRFIS.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "NCRFISBankDetails",
  components: {
    PreHeader,
    Header,
    NCRFIS,
    Footer,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
