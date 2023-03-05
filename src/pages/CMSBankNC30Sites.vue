<template>
<div id="cmsbanknc30sites">
  <PreHeader />
  <Header />
  <CMSNC30Sites />
  <Footer />
  </div>
</template>

<script>
import PreHeader from "@/components/PreHeader.vue";
import Header from "@/components/Header.vue";
import CMSNC30Sites from "@/components/CMSNC30Sites.vue"
import Footer from '@/components/Footer.vue'

export default {
  name: "CMSBankLiveSites",
  components: {
    PreHeader,
    Header,
    CMSNC30Sites,
    Footer,
  },
};
</script>
