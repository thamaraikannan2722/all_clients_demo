<template>
<div id="ncrbanknc30sites">
  <PreHeader />
  <Header />
  <NCRNC30Sites />
  <Footer />
  </div>
</template>

<script>
import PreHeader from "@/components/PreHeader.vue";
import Header from "@/components/Header.vue";
import NCRNC30Sites from "@/components/NCRNC30Sites.vue"
import Footer from '@/components/Footer.vue'

export default {
  name: "NCRBankNC30Sites",
  components: {
    PreHeader,
    Header,
    NCRNC30Sites,
    Footer,
  },
};
</script>