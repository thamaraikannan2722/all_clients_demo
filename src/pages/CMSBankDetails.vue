<template>
  <div id="cmsbankdetails">
    <PreHeader />
    <Header />
    <CMS />
    <Footer />
  </div>
</template>

<script>

import PreHeader from "@/components/PreHeader.vue";
import Header from "@/components/Header.vue";
import CMS from "@/components/CMS.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "CMSBankDetails",
  components: {
    PreHeader,
    Header,
    CMS,
    Footer,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
