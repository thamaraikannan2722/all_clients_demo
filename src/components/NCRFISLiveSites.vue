<template>
  <div id="ncrfislivesites">
    <div class="flex -mt-12 ml-200">
        <button @click="exportExcel" class="ml-2">
          <div class="flex flex-2 gap-1 justify-center content-center group-group4 px-2 p-1 border-2 rounded border-black hover:bg-red-600 shadow-xl">
            <h3 class="group-group4-hover:text-white transition ease-out duration-300">Download - </h3>
            <i class="fas fa-download mt-1 group-group4-hover:text-white transition ease-out duration-300"></i>
          </div>
        </button>
      </div>
    <h2 v-if="bank !==''"
    class="text-xl text-blue-600 text-center font-bold mt-8">
      {{ bank }} Active Sites
    </h2>
    <h2 v-else-if="clicks !==''"
    class="text-xl text-blue-600 text-center font-bold mt-8">
      {{ banksOfLiveSites() }} Active Sites
    </h2>
    <h2 v-else-if="bank ==='' || clicks ===''"
    class="text-xl text-blue-600 text-center font-bold mt-8">
      NCR-FIS Active Sites
    </h2>
    <h2 v-else
    class="text-xl text-blue-600 text-center font-bold mt-8">
      NCR-FIS Active Sites
    </h2>
    <div class="flex justify-center mt-4">
      <h3>Bank -</h3>
      <div class="ml-2">
        <select
          v-model="bank"
          class="text-center border-2 rounded hover:border-blue-700 transition ease-out duration-300"
        >
          <option disabled selected value>Select a Bank</option>
          <option v-for="bank in banks" :key="bank.id" :value="bank.name"> {{bank.name}} </option>
        </select>
      </div>
      <div class="ml-5">
        <label for="siteid">Site ID -</label>
        <input v-model="siteid" id="siteid" type="text" placeholder="Site ID" class="placeholder-gray-600 ml-2 w-30 text-center border-2 rounded hover:border-blue-700 transition ease-out duration-300" />
      </div>
      <div class="ml-5">
        <label for="mcuid">MCU ID -</label>
        <input v-model="mcuid" id="mcuid" type="text" placeholder="MCU ID" class="placeholder-gray-600 ml-2 w-30 text-center border-2 rounded hover:border-blue-700 transition ease-out duration-300" />
      </div>
    </div>
    <div
      class="container rounded-xl overflow-y-scroll border border-black mt-8"
    >
      <div class="grid grid-cols-1 h-98">
        <table
          class="table-auto border border-collapse text-sm -mx-24 overflow-x-auto"
        >
          <thead>
            <tr
              class="border-b-2 border-black text-center divide-x divide-gray-400"
            >
              <th>Bank</th>
              <th>Site ID</th>
              <th>MCU ID</th>
              <th>Location</th>
              <th>State</th>
              <th>Pincode</th>
              <th>Installed Date</th>
              <th>Site Status</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-400 text-center">
            <tr
              class="divide-x divide-gray-400"
              v-for="site in filterLiveSitesByBank"
              :key="site.id"
              @change="filterLiveSitesByBank"
            >
              <td class="text-sm">{{ site.bank }}</td>
              <td class="text-sm">{{ site.sitename }}</td>
              <td class="text-sm">{{ site.mcuid  }}</td>
              <td class="text-sm">{{ site.location }}</td>
              <td class="text-sm">{{ site.state }}</td>
              <td class="text-sm">{{ site.pincode }}</td>
              <td class="text-sm">{{ site.installedDate }}</td>
              <td
                v-if="site.status === 'Live'"
              >
                <div class="flex justify-center items-center">
                  <div
                    class="grid grid-cols-1 justify-items-center content-center"
                  >
                    <i
                      class="fas fa-dot-circle text-green-700 justify-center content-center"
                    ></i>
                  </div>
                  <h2 class="text-sm self-center font-semibold ml-1">
                    Online
                  </h2>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { saveExcel } from '@progress/kendo-vue-excel-export';

export default {
  name: "NCRFISLiveSites",
  data() {
    return {
      liveSites: [],
      banks:[],
      bank: "",
      siteid:"",
      mcuid:"",
      clicks:"",
      //clientbank: [],
    }
  },
  computed: {
    filterLiveSitesByBank: function () {
      return this.liveSites
        .filter((site) => !(site.bank || site.bank).indexOf(this.bank || this.clicks))
        .filter((site) => !(site.sitename).toLowerCase().indexOf(this.siteid.toLowerCase()))
        .filter((site) => !(site.mcuid).toLowerCase().indexOf(this.mcuid.toLowerCase()));
    }
    //filterSiteName: function(s) {
      //return this.liveSites.filter((site) => site.sitename.includes(s)===this.siteid);
      /*if(this.siteid){
      return this.liveSites.filter((site)=>{
        return this.siteid.toLowerCase().every(v => site.sitename.toLowerCase().includes(v))
      })
      }else{
        return this.liveSites;
      }*/
      //return this.liveSites.filter(site => !site.sitename.match(this.siteid))
    //}
    /*filterLiveSitesBySiteId: function () {
      return this.liveSites.filter((site) => !site.sitename.indexOf(this.sitename));
    }*/
  },
  /*mounted() {
    this.clicks=this.$store.state.onClickLiveSites;
  },*/
  /*computed: {
      filterUsersByclient_bank: function(){
          return this.ncr.filter(pnb => !pnb.place.indexOf(this.client_bank))
      }
  },*/
  /*mounted: function() {
      axios.get("/json/data1.json")
        .then(response => {
          this.ncr = response.data;
            console.log(response.data.ncrbank);
             //var count = Object.keys(this.ncr).length;
              var count1 = Object.keys(this.ncr.ncrbank).length;
              console.log(count1);
        })
        .catch(error => {
          console.log(error);
        });
        
  },*/
  created() {
    //this.fetchDataAll();
    this.fetchLiveSiteData();
    this.filterBanks();
    //this.banksOfLiveSites();
    this.equalLiveSites();
    //this.filterSiteName();
    console.log(this.liveSites);
    console.log(this.banks);
    //console.log(this.siteid);
    //console.log(this.clicks);
    //console.log(this.names);
  },
  methods: {
    exportExcel () {
      saveExcel({
        data: this.filterLiveSitesByBank,
        fileName:"NCRFIS_Live_Sites.xlsx",
        columns: [
          { field: 'bank', title: 'Bank', cellOptions: this.cellOptions },
          { field: 'sitename', title: 'Site Name', cellOptions: this.cellOptions },
          { field: 'mcuid', title: 'MCU ID', cellOptions: this.cellOptions },
          { field: 'location', title: 'Location', cellOptions: this.cellOptions },
          { field: 'state', title: 'State', cellOptions: this.cellOptions },
          { field: 'pincode', title: 'Pincode', cellOptions: this.cellOptions },
          { field: 'installedDate', title: 'Installed Date', cellOptions: this.cellOptions },
          { field: 'status', title: 'Status', cellOptions: this.cellOptions, background: '#008000' },
        ]
      })
    },
    /*banksOfLiveSites: function () {
      return this.clicks=this.$store.state.onClickLiveSites;
    },*/
    equalLiveSites: function () {
      return this.bank=this.$store.state.onClickLiveSites;
    },
    /*filterInput(){
      this.liveSites = this.liveSites.filter(site =>
        site.name.toLowerCase().includes(this.siteid.toLowerCase()))
    },*/
    fetchLiveSiteData: function () {
      var vm = this;
      var url5 = "./json/ncrfisbankdetails.json";
      //vm.emailreports.slice();
      //vm.emailreports.length=0;
      axios
        .get(url5)
        .then(function (response2) {
          response2.data.liveSites.forEach((site) => {
              vm.liveSites.push(site);

            /*setTimeout(function () {
                {this.fetchDataAll()}
              }, 10000);*/
            //console.log(counts);
            //console.log(vm.allbanktickets);
          });
          /*vm.emailreports.forEach((bank) => {
            vm.reports.push(bank);
          });*/
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    filterBanks: function () {
      var vm = this;
      var url7 = "./json/ncrfisbankdetails.json";
      //vm.emailreports.slice();
      //vm.emailreports.length=0;
      axios
        .get(url7)
        .then(function (response2) {
          response2.data.ncrfis.forEach((banks) => {
              vm.banks.push(banks);

            /*setTimeout(function () {
                {this.fetchDataAll()}
              }, 10000);*/
            //console.log(counts);
            //console.log(vm.allbanktickets);
          });
          /*vm.emailreports.forEach((bank) => {
            vm.reports.push(bank);
          });*/
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
}
</script>