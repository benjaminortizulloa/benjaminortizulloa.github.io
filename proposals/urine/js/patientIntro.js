Vue.component('patient-intro-page', {
  template: `
  <div id='patientIntro'>
    <template v-if="view == 'Patient'">
      <patient-main-page></patient-main-page>
    </template>
    <template v-if="view == 'results'">
      <results-page></results-page>
    </template>
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
