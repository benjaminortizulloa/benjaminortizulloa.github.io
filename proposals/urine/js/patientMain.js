Vue.component('patient-main-page', {
  template: `
  <div id='patientMain' style="display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; min-height: 100vh;">
    <h2><button>Check Lab Results</button></h2>
    <h2><button>Support Network</button></h2>
  </div>
  `,
  data(){
    return {

    }
  },
  computed: {
    view(){
      return store.state.view2
    }
  },
  methods: {
    enter(){
      store.commit('changeState', {key: 'view2', value: 'confirm'})
    },
    patientInfo (e) {
      store.commit('changeState', {key: 'patientID', value: e.target.value})
    }
  }
})
