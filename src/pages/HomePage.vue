<template>
  <PreHeader />
  <Header />
  <AllBankTickets />
  <Footer />
</template>

<script>
import PreHeader from "@/components/PreHeader.vue";
import Header from "@/components/Header.vue";
import AllBankTickets from "@/components/AllBankTickets.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    PreHeader,
    Header,
    AllBankTickets,
    Footer,
  },
};
</script>
