<template>
<div id="cmsbanklivesites">
  <PreHeader />
  <Header />
  <CMSLiveSites />
  <Footer />
  </div>
</template>

<script>
import PreHeader from "@/components/PreHeader.vue";
import Header from "@/components/Header.vue";
import CMSLiveSites from "@/components/CMSLiveSites.vue"
import Footer from '@/components/Footer.vue'

export default {
  name: "CMSBankLiveSites",
  components: {
    PreHeader,
    Header,
    CMSLiveSites,
    Footer,
  },
};
</script>