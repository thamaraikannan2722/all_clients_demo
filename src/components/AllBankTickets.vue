<template>
  <div class="allbanktickets">
    <div
      v-if="
        (allbanktickets && allbanktickets.length > 0) ||
        (charts && charts.length > 0)
      "
    >
    <div class="flex -mt-11 ml-170">
        <h3>Ticket Status -</h3>
        <div class="ml-2">
          <select
            v-model="bank"
            class="text-center border-2 rounded hover:border-blue-700 transition ease-out duration-300"
          >
            <option disabled selected value>Select a Bank</option>
            <option v-for="bank in banks" :key="bank.id" :value="bank.bankName">
              {{ bank.bankName }}
            </option>
          </select>
        </div>
      </div>
      <h2 class="text-xl text-blue-600 text-center font-bold mt-10">
        All Bank Tickets
      </h2>
      <div
        v-if="allbanktickets && allbanktickets.length > 0"
        class="grid grid-cols-4 gap-10 ml-10 mr-10 mt-5 mb-5 h-38"
      >
        <div
          v-for="ticket in allbanktickets"
          :key="ticket.id"
          @change="fetchTicketsData"
          class="flex mt-4 pt-5 pb-5 text-center rounded-xl bg-gray-300 shadow-xl overflow-hidden transform hover:scale-105 hover:bg-opacity-90 transition ease-out duration-300"
        >
          <div
            class="flex justify-items-center content-center mt-2 animate-slideup"
          >
            <div
              v-if="allbanktickets[0].name === ticket.name"
              class="flex -mt-8 -ml-6 h-2 w-96"
            >
              <svg width="800" height="140" viewBox="0 0 1320 500">
                <path
                  class="animate-wave1"
                  fill-opacity="0.7"
                  d="
              M0,192
              C220,100,440,100,660,192
              C880,290,1100,290,1320,192
              L1320 500
              L0 500
              "
                  fill="#ff8077"
                />
                <path
                  class="animate-wave2"
                  fill-opacity="0.7"
                  d="
              M0,192
              C220,100,440,100,660,192
              C880,290,1100,290,1320,192
              L1320 500
              L0 500
              "
                  fill="#e15d52"
                />
                <path
                  class="animate-wave3"
                  fill-opacity="0.6"
                  d="
              M0,192
              C220,100,440,100,660,192
              C880,290,1100,290,1320,192
              L1320 500
              L0 500
              "
                  fill="#c23a2e"
                />
                <path
                  class="animate-wave4"
                  fill-opacity="0.5"
                  d="
              M0,192
              C220,100,440,100,660,192
              C880,290,1100,290,1320,192
              L1320 500
              L0 500
              "
                  fill="#a20808"
                />
              </svg>
            </div>
            <div
              v-else-if="allbanktickets[1].name === ticket.name"
              class="flex mt-2 -ml-6 h-2 w-96"
            >
              <svg width="800" height="130" viewBox="0 0 1320 500">
                <path
                  class="animate-wave1"
                  fill-opacity="0.7"
                  d="
              M0,192
              C220,100,440,100,660,192
              C880,290,1100,290,1320,192
              L1320 500
              L0 500
              "
                  fill="#f39d56"
                />
                <path
                  class="animate-wave2"
                  fill-opacity="0.7"
                  d="
              M0,192
              C220,100,440,100,660,192
              C880,290,1100,290,1320,192
              L1320 500
              L0 500
              "
                  fill="#d88441"
                />
                <path
                  class="animate-wave3"
                  fill-opacity="0.6"
                  d="
              M0,192
              C220,100,440,100,660,192
              C880,290,1100,290,1320,192
              L1320 500
              L0 500
              "
                  fill="#be6c2b"
                />
                <path
                  class="animate-wave4"
                  fill-opacity="0.6"
                  d="
              M0,192
              C220,100,440,100,660,192
              C880,290,1100,290,1320,192
              L1320 500
              L0 500
              "
                  fill="#a35515"
                />
              </svg>
            </div>
            <div
              v-else-if="allbanktickets[2].name === ticket.name"
              class="flex mt-11 -ml-6 w-96"
            >
              <svg width="800" height="130" viewBox="0 0 1320 500">
                <path
                  class="animate-wave1"
                  fill-opacity="0.7"
                  d="
              M0,192
              C220,100,440,100,660,192
              C880,290,1100,290,1320,192
              L1320 500
              L0 500
              "
                  fill="#f2bb68"
                />
                <path
                  class="animate-wave2"
                  fill-opacity="0.7"
                  d="
              M0,192
              C220,100,440,100,660,192
              C880,290,1100,290,1320,192
              L1320 500
              L0 500
              "
                  fill="#d79f4d"
                />
                <path
                  class="animate-wave3"
                  fill-opacity="0.6"
                  d="
              M0,192
              C220,100,440,100,660,192
              C880,290,1100,290,1320,192
              L1320 500
              L0 500
              "
                  fill="#bd8331"
                />
                <path
                  class="animate-wave4"
                  fill-opacity="0.6"
                  d="
              M0,192
              C220,100,440,100,660,192
              C880,290,1100,290,1320,192
              L1320 500
              L0 500
              "
                  fill="#a26914"
                />
              </svg>
            </div>
            <div v-else class="flex mt-16 -ml-6 h-2 w-96">
              <svg width="800" height="130" viewBox="0 0 1320 500">
                <path
                  class="animate-wave1"
                  fill-opacity="0.7"
                  d="
              M0,192
              C220,100,440,100,660,192
              C880,290,1100,290,1320,192
              L1320 500
              L0 500
              "
                  fill="#54eac9"
                />
                <path
                  class="animate-wave2"
                  fill-opacity="0.7"
                  d="
              M0,192
              C220,100,440,100,660,192
              C880,290,1100,290,1320,192
              L1320 500
              L0 500
              "
                  fill="#3cbea0"
                />
                <path
                  class="animate-wave3"
                  fill-opacity="0.6"
                  d="
              M0,192
              C220,100,440,100,660,192
              C880,290,1100,290,1320,192
              L1320 500
              L0 500
              "
                  fill="#23947a"
                />
                <path
                  class="animate-wave4"
                  fill-opacity="0.6"
                  d="
              M0,192
              C220,100,440,100,660,192
              C880,290,1100,290,1320,192
              L1320 500
              L0 500
              "
                  fill="#056d56"
                />
              </svg>
            </div>
          </div>
          <div class="flex justify-center content-center -ml-85 mr-5 relative">
            <div
              v-if="allbanktickets[0].name === ticket.name"
              class="grid grid-cols-1 justify-items-center content-center bg-red-400 rounded-full h-24 w-24 shadow-lg"
            >
              <i
                class="fas fa-ticket-alt fa-2x animate-wiggle1 transform -rotate-45 text-red-700"
              ></i>
            </div>
            <div
              v-else-if="allbanktickets[1].name === ticket.name"
              class="grid grid-cols-1 justify-items-center content-center bg-orange-400 rounded-full h-24 w-24 shadow-lg"
            >
              <i
                class="fas fa-ticket-alt fa-2x animate-wiggle2 transform -rotate-45 text-orange-700"
              ></i>
            </div>
            <div
              v-else-if="allbanktickets[2].name === ticket.name"
              class="grid grid-cols-1 justify-items-center content-center bg-yellow-400 rounded-full h-24 w-24 shadow-lg"
            >
              <i
                class="fas fa-ticket-alt fa-2x animate-wiggle3 transform -rotate-45 text-yellow-700"
              ></i>
            </div>
            <div
              v-else
              class="grid grid-cols-1 justify-items-center content-center overflow-hidden bg-green-400 rounded-full h-24 w-24 shadow-lg"
            >
              <!-- <div class="h-16 overflow-hidden">
            <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
              <path d="M0.00,92.27 C216.83,192.92 304.30,8.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z" style="stroke: none;fill: #e1efe3;"></path>
            </svg>
          </div> -->
              <i
                class="fas fa-ticket-alt fa-2x animate-wiggle4 transform -rotate-45 text-green-700"
              ></i>
            </div>
            <div>
              <h2 v-if="allbanktickets[0].name === ticket.name" class="ml-4">
                Total SOS Tickets
              </h2>
              <h2
                v-else-if="allbanktickets[1].name === ticket.name"
                class="ml-4"
              >
                Total Critical Tickets
              </h2>
              <h2
                v-else-if="allbanktickets[2].name === ticket.name"
                class="ml-4"
              >
                Total Medium Tickets
              </h2>
              <h2 v-else class="ml-4">Total Low Tickets</h2>
              <h2 class="text-5xl font-semibold justify-self-center ml-4">
                {{ ticket.count }}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="text-lg grid grid-cols-1 justify-items-center mt-30">
        <div
        class="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-600"
      ></div>
        <h2>Tickets Loading...</h2>
      </div>
      <div v-if="charts && charts.length > 0" class="grid grid-cols-2">
        <div class="pl-10 pr-5 pt-3 pb-5">
          <area-chart
            class="pl-3 pr-3 pt-5 pb-5 border-2 border-black h-40 w-60"
            @change="filterTicketsChart"
            loading="Loading..."
            :data="charts[0]"
            :colors="['#8B0000', '#483D8B']"
            :download="{ background: '#fff' }"
            :library="{
              animation: { easing: 'easeInOutQuad' },
              elements: { arc: { borderWidth: 0 } },
            }"
          ></area-chart>
        </div>
        <div class="pl-5 pr-10 pt-3 pb-5">
          <pie-chart
            class="pl-3 pr-3 pt-5 pb-5 border-2 border-black h-40 w-60"
            @change="filterTicketsChart"
            loading="Loading..."
            :data="charts[0]"
            label="Value"
            :download="{ background: '#fff' }"
            :library="{
              animation: { easing: 'easeInOutQuad' },
              elements: { arc: { borderWidth: 2 } },
              hoverOffset: 10,
              plugins: {
                labels: {
                  render: 'percentage',
                  precision: 1,
                  fontColor: '#000',
                  position: 'outside',
                },
              },
            }"
          ></pie-chart>
        </div>
      </div>
      <div v-else class="text-lg grid grid-cols-1 justify-items-center mt-30">
        <div
        class="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-600"
      ></div>
        <h2>Charts Loading...</h2>
      </div>
    </div>
    <div v-else class="grid grid-cols-1 justify-items-center mt-60">
      <div
        class="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-600"
      ></div>
      <h2 class="text-xl text-center">Loading...</h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AllBankTickets",
  data() {
    return {
      allbanktickets: [],
      alltickets: [],
      charts: [],
      banks: [],
      bank: "",
      //alltickets:[],
      //alltickets: [],
    };
  },
  created() {
    this.fetchTicketsData();
    this.filterTicketsChart();
    this.filterBanks();
    //this.fetchTickets();
    //this.filterTicketsDataByBank();
    //this.ticketsAll();
    this.intervalFetchTicketsData();
    this.intervalTicketsChartData();
    this.totalCounts();
    //console.log(this.alltickets);
    //console.log(this.filterChart());
    //this.intervalFetchData();
    //console.log(this.bank);
    //console.log(this.charts);
    console.log(this.allbanktickets);
    console.log(this.alltickets);
  },
  methods: {
    /*intervalFetchData: function () {
      setInterval(() => {
        this.fetchDataAll();
      },10* 1000);
    },*/
    intervalFetchTicketsData: function () {
      setInterval(
        function () {
          this.fetchTicketsData();
        }.bind(this),
        5000
      );
    },
    intervalTicketsChartData: function () {
      setInterval(
        function () {
          this.filterTicketsChart();
        }.bind(this),
        5000
      );
    },
    fetchTicketsData: function () {
      var vm = this;
      var url1 =
        "./json/alltickets2.json";
      vm.allbanktickets.slice();
      vm.allbanktickets.length = 0;
      axios
        .get(url1)
        .then(function (response) {
          var sos = response.data.allbanksticket.filter((ticket) => (ticket.name==="SOS")).filter((ticket) => !(ticket.bankName).indexOf(vm.bank)).reduce((acc1, val1) => {
            //console.log('SOS:', acc1);
            //console.log('Value:', val1);
            return acc1+val1.count;
          }, 0)
          var critical = response.data.allbanksticket.filter((ticket) => (ticket.name==="Critical")).filter((ticket) => !(ticket.bankName).indexOf(vm.bank)).reduce((acc2, val2) => {
            //console.log('Critical:', acc2);
            //console.log('Value:', val2);
            return acc2+val2.count;
          }, 0)
          var medium = response.data.allbanksticket.filter((ticket) => (ticket.name==="Medium")).filter((ticket) => !(ticket.bankName).indexOf(vm.bank)).reduce((acc3, val3) => {
            //console.log('Medium:', acc3);
            //console.log('Value:', val3);
            return acc3+val3.count;
          }, 0)
          var low = response.data.allbanksticket.filter((ticket) => (ticket.name==="Low")).filter((ticket) => !(ticket.bankName).indexOf(vm.bank)).reduce((acc4, val4) => {
            //console.log('Low:', acc4);
            //console.log('Value:', val4);
            return acc4+val4.count;
          }, 0)
          //console.log(sos);
          //console.log(critical);
          //console.log(medium);
          //console.log(low);
          vm.allbanktickets.push({"name":"SOS","count":sos}, {"name":"Critical","count": critical}, {"name":"Medium","count": medium}, {"name":"Low","count": low});
            //vm.allbanktickets.push(counts);
            /*setTimeout(function () {
                {this.fetchDataAll()}
              }, 10000);*/
            //console.log(counts);
            //console.log(vm.allbanktickets);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    /*fetchTickets: function () {
      var vm = this;
      var url1 ="http://127.0.0.1:8080/";
      //var url2 ="http://127.0.0.1:8080/api/AllBanksController/fssidfc";
      //var url3 ="http://127.0.0.1:8080/api/AllBanksController/fssiob";
      //var url4 ="http://127.0.0.1:8080/api/AllBanksController/fsssbi";
      //var url5 ="http://127.0.0.1:8080/api/AllBanksController/fsscanara";
      //var url6 ="http://127.0.0.1:8080/api/AllBanksController/ncrfissbi";
      //var url7 ="http://127.0.0.1:8080/api/AllBanksController/ncrfisubi";
      //var url8 ="http://127.0.0.1:8080/api/AllBanksController/ncrfislvb";
      //var url9 ="http://127.0.0.1:8080/api/AllBanksController/ncridbi";
      //var url10 ="http://127.0.0.1:8080/api/AllBanksController/ncrlvb";
      //var url11 ="http://127.0.0.1:8080/api/AllBanksController/ncricici";
      //var url12 ="http://127.0.0.1:8080/api/AllBanksController/ncrhdfc";
      //var url13 ="http://127.0.0.1:8080/api/AllBanksController/ncrkvb";
      //var url14 ="http://127.0.0.1:8080/api/AllBanksController/ncrpnb";
      //var url15 ="http://127.0.0.1:8080/api/AllBanksController/ncrcub";
      //var url16 ="http://127.0.0.1:8080/api/AllBanksController/ncrsbi";
      //var url17 ="http://127.0.0.1:8080/api/AllBanksController/ncrbandhan";
      //var url18 ="http://127.0.0.1:8080/api/AllBanksController/fsstomsbi";
      //var url19 ="http://127.0.0.1:8080/api/AllBanksController/cmshdfc";
      //var url20 ="http://127.0.0.1:8080/api/AllBanksController/cmsicici";

      vm.alltickets.slice();
      vm.alltickets.length = 0;
        //axios.headers.get['Content-Type'] = 'application/x-www-form-urlencoded',
				//axios.headers.get['accesskey'] = '-5Pp79KsL-NffZS_vjtWwR'
        //axios.defaults.baseURL = "https://localhost:44309/api/AllBanksController/fsshdfc";
        //axios.defaults.headers["Content-Type"] ="application/json";
        //axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
      axios
      axios.all([axios.get(url1+"api/AllBanksController/fsshdfc"),axios.get(url1+"api/AllBanksController/fssidfc"),
        axios.get(url1+"api/AllBanksController/fssiob"),axios.get(url1+"api/AllBanksController/fsssbi"),
        axios.get(url1+"api/AllBanksController/fsscanara"),axios.get(url1+"api/AllBanksController/ncrfissbi"),
        axios.get(url1+"api/AllBanksController/ncrfisubi"),axios.get(url1+"api/AllBanksController/ncrfislvb"),
        axios.get(url1+"api/AllBanksController/ncridbi"),axios.get(url1+"api/AllBanksController/ncrlvb"),
        axios.get(url1+"api/AllBanksController/ncricici"),axios.get(url1+"api/AllBanksController/ncrhdfc"),
        axios.get(url1+"api/AllBanksController/ncrkvb"),axios.get(url1+"api/AllBanksController/ncrpnb"),
        axios.get(url1+"api/AllBanksController/ncrcub"),axios.get(url1+"api/AllBanksController/ncrsbi"),
        axios.get(url1+"api/AllBanksController/ncrbandhan"),axios.get(url1+"api/AllBanksController/fsstomsbi"),
        axios.get(url1+"api/AllBanksController/cmshdfc"),axios.get(url1+"api/AllBanksController/cmsicici")])
        .then(axios.spread((response1,response2,response3,response4,response5,response6,response7,response8,response9,response10,
        response11,response12,response13,response14,response15,response16,response17,response18,response19,response20) => {  
          var count =JSON.parse(response1.data,response2.data,response3.data,response4.data,response5.data,response6.data,response7.data,
          response8.data,response9.data,response10.data,response11.data,response12.data,response13.data,response14.data,
          response15.data,response16.data,response17.data,response18.data,response19.data,response20.data);
          vm.alltickets.push(count);
     }))
          //response.header("Access-Control-Allow-Origin", "true");
          //var count = JSON.parse(response.data)
            /*setTimeout(function () {
                {this.fetchDataAll()}
              }, 10000);*/
            //console.log(counts);
            //console.log(vm.allbanktickets);
        //.catch(error => console.log(error))
    //},*/
    /*ticketsAll: function () {
      var vm = this;
      var url2 =
        "api";
      axios
        .get(url2)
        .then(function (res) {
          res.data.Table.map((count1) => {
            if (count1.Count) {
              vm.alltickets.push(count1);
              setTimeout(function () {
                location.reload();
              }, 10000);
              //console.log(counts);
              //console.log(vm.allbanktickets);
            }
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    },*/
    
            /*else if(val.name === "Critical") {
              console.log('Accu:', acc);
              console.log('Value:', val);
              return acc+val.count;
            }
            else if(val.name === "Medium") {
              console.log('Accu:', acc);
              console.log('Value:', val);
              return acc+val.count;
            }
            else {
              console.log('Accu:', acc);
              console.log('Value:', val);
              return acc+val.count;
            }*/
            //vm.allbanktickets.push(counts);
            /*setTimeout(function () {
                {this.fetchDataAll()}
              }, 10000);*/
            //console.log(counts);
            //console.log(vm.allbanktickets);
    totalCounts: function() {
      return this.allbanktickets.reduce((acc, val) => {
        return acc+val.count;
      }, 0)
    },
    /*fetchTicketsData: function () {
      var vm = this;
      var url1 =
        "api";
      vm.allbanktickets.slice();
      vm.allbanktickets.length = 0;
      axios
        .get(url1)
        .then(function (response) {
          response.data.Table.map((counts) => {
            vm.allbanktickets.push(counts);

            setTimeout(function () {
                {this.fetchDataAll()}
              }, 10000);
            //console.log(counts);
            //console.log(vm.allbanktickets);
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    },*/
    /*ticketsAll: function () {
      var vm = this;
      var url2 =
        "api";
      axios
        .get(url2)
        .then(function (res) {
          res.data.Table.map((count1) => {
            if (count1.Count) {
              vm.alltickets.push(count1);
              setTimeout(function () {
                location.reload();
              }, 10000);
              //console.log(counts);
              //console.log(vm.allbanktickets);
            }
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    },*/
    filterTicketsChart: function () {
      var vm = this;
      var url1 =
        "./json/alltickets2.json";
      vm.charts.slice();
      vm.charts.length = 0;
      axios
        .get(url1)
        .then(function (response) {
          var sos = response.data.allbanksticket.filter((ticket) => (ticket.name==="SOS")).filter((ticket) => !(ticket.bankName).indexOf(vm.bank)).reduce((acc1, val1) => {
            //console.log('SOS:', acc1);
            //console.log('Value:', val1);
            return acc1+val1.count;
          }, 0)
          var critical = response.data.allbanksticket.filter((ticket) => (ticket.name==="Critical")).filter((ticket) => !(ticket.bankName).indexOf(vm.bank)).reduce((acc2, val2) => {
            //console.log('Critical:', acc2);
            //console.log('Value:', val2);
            return acc2+val2.count;
          }, 0)
          var medium = response.data.allbanksticket.filter((ticket) => (ticket.name==="Medium")).filter((ticket) => !(ticket.bankName).indexOf(vm.bank)).reduce((acc3, val3) => {
            //console.log('Medium:', acc3);
            //console.log('Value:', val3);
            return acc3+val3.count;
          }, 0)
          var low = response.data.allbanksticket.filter((ticket) => (ticket.name==="Low")).filter((ticket) => !(ticket.bankName).indexOf(vm.bank)).reduce((acc4, val4) => {
            //console.log('Low:', acc4);
            //console.log('Value:', val4);
            return acc4+val4.count;
          }, 0)
          vm.charts.push({"SOS Ticket": sos, "Critical Ticket": critical, "Medium Ticket": medium, "Low Ticket": low});
            //console.log(jsonn);
            //vm.charts.push(jsonn);
          //console.log(jsonn);
          //vm.charts.push(jsonn);
        });
    },
    filterBanks: function () {
      var vm = this;
      var url7 = "./json/alltickets2.json";
      //vm.emailreports.slice();
      //vm.emailreports.length=0;
      axios
        .get(url7)
        .then(function (response2) {
          response2.data.allbanksticket.filter((thing, index, self) =>index === self.findIndex((t) => (t.bankName === thing.bankName))).forEach((banks) => {
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
    /*.finally(function () {
          setInterval(() => {
            (vm.fetchDataAll(), 1 * 1000);
          });
        });
    },
    /*intervalFetchData: function () {
      setInterval(() => {
        this.fetchDataAll();
      }, 10 * 1000);
    },*/
  },
  /*mounted() {
    axios.get("api")
      .then(response => {
        this.allbanktickets = response.data.Table.Count;
        console.log(this.allbanktickets)
      })
      .catch(error => {
        alert(error)
      })
  }*/
  /*computed: {
        filterColorByTicket: function(){
            return this.allbanktickets.if(ticket => ticket.name.indexOf(this.place))
        }
    }*/
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
