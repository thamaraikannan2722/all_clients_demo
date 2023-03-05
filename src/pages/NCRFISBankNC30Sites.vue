<template>
<div id="ncrfisbanknc30sites">
  <PreHeader />
  <Header />
  <NCRFISNC30Sites />
  <Footer />
  </div>
</template>

<script>
import PreHeader from "@/components/PreHeader.vue";
import Header from "@/components/Header.vue";
import NCRFISNC30Sites from "@/components/NCRFISNC30Sites.vue"
import Footer from '@/components/Footer.vue'

export default {
  name: "NCRBankLiveSites",
  components: {
    PreHeader,
    Header,
    NCRFISNC30Sites,
    Footer,
  },
};
</script>
