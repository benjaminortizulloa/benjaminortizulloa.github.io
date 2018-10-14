Vue.component('confirm-page', {
  template: `
  <div class='confirm' v-bind:style="{position: 'absolute', width: '100%', height: '100%'}">
    <h1>Confirm you are:<br> {{patientID}}</h1>
    <img src="assets/qrcode.png" alt="qrcode" @click='enter' style = 'width: 80%; display:block; margin: 0 auto;'>
  </div>
  `,
  data(){
    return {

    }
  },
  computed: {
    patientID(){ return store.state.patientID}
  },
  methods: {
    enter(){
      store.commit('changeState', {key: 'view2', value: 'labs'})
    },
    changeState (e) {
      console.log(e.target.value)
      store.commit('changeState', {key: 'patientID', value: e.target.value})
    },
    confirmation(){
      const contract = TruffleContract(data)
      web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));
      contract.setProvider(web3.currentProvider)
      instance = contract.deployed().then(x => {console.log(x);
        testvar = x;
      console.log(x.testTestPassResult('fail').then(y => console.log(y)));})

    }
  }
})
// <button @click="confirmation">Confirm u r u</button>
// <img src="assets/qrcode.png" alt="qrcode" @click='enter' style = 'width: 80%; display:block; margin: 0 auto;'>
