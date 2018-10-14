Vue.component('select-patient-page', {
  template: `
  <div class='intro' style="display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; min-height: 100vh;">
    <h1>Patient ID</h1>
    <div>
      <input  @input="patientInfo" @keyup.enter="enter" >
      <button @click='enter'>Enter</button>
    </div>
  </div>
  `,
  data(){
    return {

    }
  },
  computed: {

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
