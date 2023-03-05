<template>
  <div class="header">
    <div class="bg-gray-100 pt-3 pb-3 pl-10 border-t-4 border-b-4 border-amber-800 shadow-2xl">
      <div class="flex">
      <h2 class="text-lg text-gray-700 justify-center pr-3 border-r-2 border-amber-900 transform -border-rotate-45">Clients - </h2>
      <div v-for="client in clients" :key="client.id" class="border-r-2 border-amber-900">
        <ul class="grid grid-cols-auto justify-center ml-5 mr-5 transform hover:scale-125 transition ease-in-out duration-300">
          <li><router-link :to="client.href" id="client.href" class="text-lg font-semibold text-blue-800 hover:text-red-700 underline">{{ client.name }}</router-link></li>
        </ul>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
    data() {
      return {
        clients: [
          { name: 'NCR', href: "/ncrbankdetails" },
          { name: 'NCR-FIS', href: "/ncrfisbankdetails" },
          { name: 'FSS', href: "/fssbankdetails" },
          { name: 'CMS', href: "/cmsbankdetails" },
        ]
      };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>