<template>
  <div id="fss">
    <div class="flex -mt-12 ml-200">
        <button @click="exportExcel" class="ml-2">
          <div class="flex flex-2 gap-1 justify-center content-center group-group4 px-2 p-1 border-2 rounded border-black hover:bg-red-600 shadow-xl">
            <h3 class="group-group4-hover:text-white transition ease-out duration-300">Download - </h3>
            <i class="fas fa-download mt-1 group-group4-hover:text-white transition ease-out duration-300"></i>
          </div>
        </button>
      </div>
      <div class="flex -mt-8 ml-170">
        <h3>Mail Status -</h3>
          <div class="ml-2">
            <select
              v-model="bank"
              class="text-center border-2 rounded hover:border-blue-700 transition ease-out duration-300"
            >
              <option disabled selected value>Select a Bank</option>
              <option v-for="bank in banks" :key="bank.id" :value="bank.name">
                {{ bank.name }}
              </option>
            </select>
          </div>
        </div>
    <div class="flex justify-center gap-58 mt-4">
      <div>
        <h2 class="text-xl text-blue-600 text-center font-bold mt-4">
          FSS Bank Details
        </h2>
      </div>
    </div>
    <div class="grid grid-cols-5 gap-10 ml-10 mr-10 mt-5 mb-5">
      <div
        v-for="(fss, id) in fssbankdetails"
        :key="id"
        class="group mt-12 pt-5 pb-5 pl-5 pr-5 text-center rounded-xl h-40 bg-gray-300 shadow-xl animate-pulse1 transform hover:scale-105 hover:bg-opacity-90 transition ease-out duration-300"
      >
      <div class="group">
      <div class="hidden group-hover:block group-hover:animate-slideup1 -mt-24">
        <div class="flex gap-5 justify-center content-center mb-6">
          <div>
          <div
            class="flex justify-center content-center mt-4 mb-2 -pb-3 rounded-full bg-orange-400 shadow-xl"
          >
            <div class="grid grid-cols-1 justify-items-center content-center ml-2">
              <i class="fas fa-dot-circle text-orange-700 p-auto justify-center content-center"></i>
            </div>
            <h2 class="text-lg self-center font-semibold ml-1 mr-2">
              {{ fss.openedTickets }}
            </h2>
          </div>
          <h2 class="animate-slideup1 text-sm truncate">Opened Tickets</h2>
          </div>
          <div>
          <div
            class="flex justify-center content-center mt-4 mb-2 -pt-3 rounded-full bg-yellow-400 shadow-xl"
          >
            <div class="grid grid-cols-1 justify-items-center content-center ml-2">
              <i class="fas fa-dot-circle text-yellow-700 p-auto justify-center content-center"></i>
            </div>
            <h2 class="text-lg self-center font-semibold ml-1 mr-2">
              {{ fss.closedTickets }}
            </h2>
            </div>
            <h2 class="animate-slideup1 text-sm truncate">Closed Tickets</h2>
          </div>
          </div>
          </div>
        <h2 class="text-lg">{{ fss.name }}</h2>
        <h2 class="text-5xl font-semibold">{{ fss.totalSite }}</h2>
        <div class="flex gap-5 justify-center content-center">
          <div
            class="flex justify-center content-center mt-4 mb-2 -pt-3 rounded-full"
          >
            <h2 class="text-md self-center ml-1 mr-2">
              Active Sites
            </h2>
          </div>
          <div
            class="flex justify-center content-center mt-4 mb-2 -pt-3 rounded-full bg-green-400 shadow-xl transform hover:scale-105 hover:shadow-2xl"
          >
          <button type="button" :value="fss.name" v-on:click="LiveSites($event, fss.name)">
            <div>
            <div class="flex justify-center items-center ml-2">
              <i class="fas fa-dot-circle text-green-700 p-auto"></i>
              <h2 class="text-lg self-center font-semibold ml-1 mr-2">
              {{ fss.live_site }}
            </h2>
            </div>
            </div>
            </button>
          </div>
        </div>
        <div class="hidden group-hover:block group-hover:animate-slidebottom">
        <div class="flex gap-5 justify-center content-center mt-3">
          <div
            class="flex justify-center content-center mt-4 mb-2 -pt-3 rounded-full"
          >
            <h2 class="text-md self-center ml-1 mr-2">
              NC-30
            </h2>
          </div>
          <div
            class="flex justify-center content-center mt-4 mb-2 -pt-3 rounded-full bg-red-400 shadow-xl transform hover:scale-105 hover:shadow-2x"
          >
            <button :value="fss.name" v-on:click="NC30Sites($event, fss.name)">
            <div>
            <div class="flex justify-center items-center ml-2">
              <i class="fas fa-dot-circle text-red-700 p-auto"></i>
              <h2 class="text-lg self-center font-semibold ml-1 mr-2">
              {{ fss.nc_30 }}
            </h2>
            </div>
            </div>
            </button>
            </div>
          </div>
          </div>
        </div>
        </div>
        <div class="container col-span-2 rounded-xl overflow-y-scroll border border-black mt-12">
            <div class="grid grid-cols-1 h-40">
              <table class="table-auto border border-collapse text-sm -mx-24">
                <thead>
                  <tr class="border-b-2 border-black text-center divide-x divide-gray-400">
                    <th>Bank</th>
                    <th>Subject</th>
                    <th>Time</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-400 text-center">
                  <tr class="divide-x divide-gray-400" v-for="mail in filterMailsByBank" :key="mail.id" @change="filterMailsByBank">
                    <td class="text-xs">{{ mail.bank }}</td>
                    <td class="text-xs">{{ mail.subject }}</td>
                    <td class="text-xs">{{ mail.atTime }}</td>
                    <td v-if="mail.status === 'Mail Sent'" class="border border-b-2 border-black bg-green-400 font-semibold text-xs">{{ mail.status }}</td>
                    <td v-else-if="mail.status === 'Mail Not Sent'" class="border border-b-2 border-black bg-red-400 font-semibold text-xs">{{ mail.status }}</td>
                    <td v-if="mail.status === 'File Missing'" class="border border-b-2 border-black bg-orange-400 font-semibold text-xs">{{ mail.status }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
        <!-- <div class="pl-10 pr-5 pt-5 pb-5">
          <h2>Reports Notification</h2>
          <h3 class="font-bold pb-4">Select Bank from the List</h3>
            <div>
              <select v-model="bank" class="text-center border-2 rounded hover:border-blue-700 transition ease-out duration-300">
                <option value="NCR-PNB">NCR-PNB</option>
                <option value="NCR-SBI">NCR-SBI</option>
                <option value="NCR-LVB">NCR-LVB</option>
                <option Value="NCR-ICICI">NCR-ICICI</option>
                <option Value="NCR-KVB">NCR-KVB</option>
                <option Value="NCR-CUB">NCR-CUB</option>
                <option Value="NCR-IDBI">NCR-IDBI</option>
                <option Value="NCR-YESBANK">NCR-YESBANK</option>
              </select>
            </div>
          <div class="container">
        <h3 class="p-3 text-center">Displaying Mails</h3>
        <div class="flex justify-center">
          <table class="table-fixed border border-gray-500 border-collapse w-4/5 mx-24 mt-14">
            <thead>
              <tr class="border-b-2 border-black text-center">
                <th>Bank</th>
                <th>Subject</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody
            class="divide-y divide-gray-400 text-center">
              <tr v-for="mail in filterMailsByBank" :key="mail.id" @change="filterMailsByBank">
                <td>{{ mail.bank }}</td>
                <td>{{ mail.subject }}</td>
                <td>{{ mail.atTime }}</td>
                <td>{{ mail.status }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div> -->
          <!-- <div 
            v-for="ncr in ncr"
            :key="ncr.id"
            class="pl-3 pr-3 pt-5 pb-5 border-2 border-black h-40 w-60">
              <div
                v-for="ncrreports in ncr.reports"
                :key="ncrreports.id">
                  <h2> {{ncrreports.bank}} </h2>
                  <h2> {{ncrreports.subject}} </h2>
                  <h2> {{ncrreports.atTime}} </h2>
                  <h2> {{ncrreports.status}} </h2>
              </div>
          </div>
        </div> -->
      </div>
    </div>
</template>

<script>
import axios from "axios";
import { saveExcel } from '@progress/kendo-vue-excel-export';

export default {
  name: "FSS",
  data() {
    return {
      fssbankdetails: [],
      bank: '',
      bankName:"",
      banks:[],
      emailreports: [],
      reports:[],
      report:[]
    };
  },
  components: {},
  computed: {
    /*forEachBanks: function(){
      return this.emailreports.forEach((bank) => {
        return this.reports.push(bank);
      });
    },*/
    filterMailsByBank: function(){
      /*this.emailreports.forEach((bank) => {
        this.reports.push(bank);
      });
      this.reports.forEach((email) => {
        this.report.push(email);
      });*/
      return this.reports.filter(mail => !mail.bank.indexOf(this.bank))
    }
  },
  created() {
    this.fetchBanksData();
    this.fetchReportsData();
    this.filterBanks();
    //this.loggedInUser();
    //this.forEachBanks();
    //console.log(this.alltickets);
    //console.log(this.filterChart());
    //this.intervalFetchData();
    //console.log(this.emailreports);
    console.log(this.fssbankdetails);
    console.log(this.reports);
    //console.log(this.bankName);
    //console.log(this.names);
  },
  methods: {
    exportExcel () {
      saveExcel({
        data: this.filterMailsByBank,
        fileName:"FSS_Mail_Status.xlsx",
        columns: [
          { field: 'bank', title: 'Bank', cellOptions: this.cellOptions },
          { field: 'subject', title: 'Subject', cellOptions: this.cellOptions },
          { field: 'atTime', title: 'Date & Time', cellOptions: this.cellOptions },
          { field: 'status', title: 'Status', cellOptions: this.cellOptions },
        ]
      })
    },
    /*loggedInUser: function() {
      return this.$store.state.onClickLiveSites
    },*/
    LiveSites: function (e, id) {
      //this.bankName = id;
      this.$store.commit('setLiveSites', {onClickLiveSites: id});
      //console.log(this.bankName)
      //location.href='';
      this.$router.push('/fssbanklivesites')
    },
    NC30Sites: function (e, id1) {
      this.$store.commit('setNC30Sites', {onClickNC30Sites: id1});
      this.$router.push('/fssbanknc30sites')
    },
    fetchBanksData: function () {
      var vm = this;
      var url3 =
        "./json/fssbankdetails.json";
      //vm.emailreports.slice();
      //vm.emailreports.length=0;
      axios
        .get(url3)
        .then(function (response1) {
          response1.data.fss.forEach((banks) => {
            vm.fssbankdetails.push(banks);
              
              /*setTimeout(function () {
                {this.fetchDataAll()}
              }, 10000);*/
              //console.log(counts);
              //console.log(vm.allbanktickets);
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    fetchReportsData: function () {
      var vm = this;
      var url4 =
        "./json/fssbankdetails.json";
      //vm.emailreports.slice();
      //vm.emailreports.length=0;
      axios
        .get(url4)
        .then(function (response2) {
          response2.data.reports.forEach((email) => {
                vm.reports.push(email);
              
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
    /*forEachBanks: function(){
      this.emailreports.forEach((bank) => {
        return this.reports.push(bank);
      });
    },*/
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
