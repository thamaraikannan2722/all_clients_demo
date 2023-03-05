<template>
<div id="fssbanknc30sites">
  <PreHeader />
  <Header />
  <FSSNC30Sites />
  <Footer />
  </div>
</template>

<script>
import PreHeader from "@/components/PreHeader.vue";
import Header from "@/components/Header.vue";
import FSSNC30Sites from "@/components/FSSNC30Sites.vue"
import Footer from '@/components/Footer.vue'

export default {
  name: "FSSBankLiveSites",
  components: {
    PreHeader,
    Header,
    FSSNC30Sites,
    Footer,
  },
};
</script>
