Vue.component('done-labs-page', {
  template: `
  <div class='intro' style="display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; min-height: 100vh;">
    <h1>Thank you for confirming your tests</h1>
    <p>
      We will send you your test results as soon as they are completed.
    </p>
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
