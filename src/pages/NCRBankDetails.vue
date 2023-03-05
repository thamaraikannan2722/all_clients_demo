<template>
  <div id="ncrbankdetails">
    <PreHeader />
    <Header />
    <NCR />
    <Footer />
  </div>
</template>

<script>

import PreHeader from "@/components/PreHeader.vue";
import Header from "@/components/Header.vue";
import NCR from "@/components/NCR.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "NCRBankDetails",
  components: {
    PreHeader,
    Header,
    NCR,
    Footer,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>