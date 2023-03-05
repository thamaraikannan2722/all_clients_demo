<template>
<div id="ncrfisbanklivesites">
  <PreHeader />
  <Header />
  <NCRFISLiveSites />
  <Footer />
  </div>
</template>

<script>
import PreHeader from "@/components/PreHeader.vue";
import Header from "@/components/Header.vue";
import NCRFISLiveSites from "@/components/NCRFISLiveSites.vue"
import Footer from '@/components/Footer.vue'

export default {
  name: "NCRBankLiveSites",
  components: {
    PreHeader,
    Header,
    NCRFISLiveSites,
    Footer,
  },
};
</script>
