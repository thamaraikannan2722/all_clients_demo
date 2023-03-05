<template>
  <div id="fssnc30sites">
    <div class="flex -mt-12 ml-200">
        <button @click="exportExcel" class="ml-2">
          <div class="flex flex-2 gap-1 justify-center content-center group-group4 px-2 p-1 border-2 rounded border-black hover:bg-red-600 shadow-xl">
            <h3 class="group-group4-hover:text-white transition ease-out duration-300">Download - </h3>
            <i class="fas fa-download mt-1 group-group4-hover:text-white transition ease-out duration-300"></i>
          </div>
        </button>
      </div>
    <h2 v-if="bank !==''"
    class="text-xl text-blue-600 text-center font-bold mt-4">
      {{ bank }} NC-30 Sites
    </h2>
    <h2 v-else-if="clicks !==''"
    class="text-xl text-blue-600 text-center font-bold mt-4">
      {{ banksOfNC30Sites() }} NC-30 Sites
    </h2>
    <h2 v-else-if="bank ==='' || clicks ===''"
    class="text-xl text-blue-600 text-center font-bold mt-4">
      FSS NC-30 Sites
    </h2>
    <h2 v-else
    class="text-xl text-blue-600 text-center font-bold mt-4">
      FSS NC-30 Sites
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
        <label for="eventid">Event ID -</label>
        <input v-model="eventid" id="eventid" type="text" placeholder="Event ID" class="placeholder-gray-600 ml-2 w-30 text-center border-2 rounded hover:border-blue-700 transition ease-out duration-300" >
      </div>
      <div class="ml-5">
        <label for="sitename">Site ID -</label>
        <input v-model="siteid" id="siteid" type="text" placeholder="Site ID" class="placeholder-gray-600 ml-2 w-30 text-center border-2 rounded hover:border-blue-700 transition ease-out duration-300" >
      </div>
      <div class="ml-5">
        <label for="mcuid">MCU ID -</label>
        <input v-model="mcuid" id="mcuid" type='text' placeholder="MCU ID" class="placeholder-gray-600 ml-2 w-30 text-center border-2 rounded hover:border-blue-700 transition ease-out duration-300" />
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
              <th>Event ID</th>
              <th>Site ID</th>
              <th>MCU ID</th>
              <th>Location</th>
              <th>State</th>
              <th>Pincode</th>
              <th>Installed Date</th>
              <th>Opened On</th>
              <th>Site Status</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-400 text-center">
            <tr
              class="divide-x divide-gray-400"
              v-for="site in filterNC30SitesByBank"
              :key="site.id"
              @change="filterNC30SitesByBank"
            >
              <td class="text-sm">{{ site.bank }}</td>
              <td class="text-sm">{{ site.eventId }}</td>
              <td class="text-sm">{{ site.sitename }}</td>
              <td class="text-sm">{{ site.mcuid }}</td>
              <td class="text-sm">{{ site.location }}</td>
              <td class="text-sm">{{ site.state }}</td>
              <td class="text-sm">{{ site.pincode }}</td>
              <td class="text-sm">{{ site.installedDate }}</td>
              <td class="text-sm">{{ site.openedOn }}</td>
              <td
                v-if="site.status === 'UnLive'"
              >
                <div class="flex justify-center items-center">
                  <div
                    class="grid grid-cols-1 justify-items-center content-center"
                  >
                    <i
                      class="fas fa-dot-circle text-red-700 justify-center content-center"
                    ></i>
                  </div>
                  <h2 class="text-sm self-center font-semibold ml-1">
                    Offline
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
  name: "FSSNC30Sites",
  data() {
    return {
      nc30Sites: [],
      banks:[],
      bank: "",
      clicks: "",
      eventid:"",
      siteid:"",
      mcuid:""
      //clientbank: [],
    };
  },
  computed: {
    filterNC30SitesByBank: function () {
      return this.nc30Sites
        .filter((site) => !(site.bank || site.bank).indexOf(this.bank || this.clicks))
        .filter((site) => !(site.eventId).toLowerCase().indexOf(this.eventid.toLowerCase()))
        .filter((site) => !(site.sitename).toLowerCase().indexOf(this.siteid.toLowerCase()))
        .filter((site) => !(site.mcuid).toLowerCase().indexOf(this.mcuid.toLowerCase()));
    },
  },
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
    this.fetchNC30SiteData();
    this.filterBanks();
    //this.banksOfNC30Sites();
    this.equalNC30Sites();
    console.log(this.nc30Sites);
  },
  methods: {
    exportExcel () {
      saveExcel({
        data: this.filterNC30SitesByBank,
        fileName:"FSS_NC-30_Sites.xlsx",
        columns: [
          { field: 'bank', title: 'Bank', cellOptions: this.cellOptions },
          { field: 'eventId', title: 'Event Id', cellOptions: this.cellOptions },
          { field: 'sitename', title: 'Site Name', cellOptions: this.cellOptions },
          { field: 'mcuid', title: 'MCU ID', cellOptions: this.cellOptions },
          { field: 'location', title: 'Location', cellOptions: this.cellOptions },
          { field: 'state', title: 'State', cellOptions: this.cellOptions },
          { field: 'pincode', title: 'Pincode', cellOptions: this.cellOptions },
          { field: 'installedDate', title: 'Installed Date', cellOptions: this.cellOptions },
          { field: 'openedOn', title: 'Opened On', cellOptions: this.cellOptions },
          { field: 'status', title: 'Status', cellOptions: this.cellOptions, background: '#008000' },
        ]
      })
    },
    /*banksOfNC30Sites: function () {
      return this.clicks=this.$store.state.onClickNC30Sites;
    },*/
    equalNC30Sites: function () {
      return this.bank=this.$store.state.onClickNC30Sites;
    },
    fetchNC30SiteData: function () {
      var vm = this;
      var url6 = "./json/fssbankdetails.json";
      //vm.emailreports.slice();
      //vm.emailreports.length=0;
      axios
        .get(url6)
        .then(function (response3) {
          response3.data.nc30Sites.forEach((site) => {
              vm.nc30Sites.push(site);

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
      var url7 = "./json/fssbankdetails.json";
      //vm.emailreports.slice();
      //vm.emailreports.length=0;
      axios
        .get(url7)
        .then(function (response2) {
          response2.data.fss.forEach((banks) => {
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
};

// @change="filterUsersByclient_bank"
</script>