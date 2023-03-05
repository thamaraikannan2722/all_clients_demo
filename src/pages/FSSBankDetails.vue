<template>
  <div id="fssbankdetails">
    <PreHeader />
    <Header />
    <FSS />
    <Footer />
  </div>
</template>

<script>

import PreHeader from "@/components/PreHeader.vue";
import Header from "@/components/Header.vue";
import FSS from "@/components/FSS.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "FSSBankDetails",
  components: {
    PreHeader,
    Header,
    FSS,
    Footer,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
