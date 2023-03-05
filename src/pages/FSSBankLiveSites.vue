<template>
<div id="fssbanklivesites">
  <PreHeader />
  <Header />
  <FSSLiveSites />
  <Footer />
  </div>
</template>

<script>
import PreHeader from "@/components/PreHeader.vue";
import Header from "@/components/Header.vue";
import FSSLiveSites from "@/components/FSSLiveSites.vue"
import Footer from '@/components/Footer.vue'

export default {
  name: "FSSBankLiveSites",
  components: {
    PreHeader,
    Header,
    FSSLiveSites,
    Footer,
  },
};
</script>