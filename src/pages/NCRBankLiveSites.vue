<template>
<div id="ncrbanklivesites">
  <PreHeader />
  <Header />
  <NCRLiveSites />
  <Footer />
  </div>
</template>

<script>
import PreHeader from "@/components/PreHeader.vue";
import Header from "@/components/Header.vue";
import NCRLiveSites from "@/components/NCRLiveSites.vue"
import Footer from '@/components/Footer.vue'

export default {
  name: "NCRBankLiveSites",
  components: {
    PreHeader,
    Header,
    NCRLiveSites,
    Footer,
  },
};
</script>
