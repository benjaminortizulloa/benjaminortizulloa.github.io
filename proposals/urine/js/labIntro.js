Vue.component('lab-intro-page', {
  template: `
  <div id='labIntro'>
    <template v-if="view == 'Lab'">
      <select-patient-page></select-patient-page>
    </template>
    <template v-if="view == 'confirm'">
      <confirm-page></confirm-page>
    </template>
    <template v-if="view == 'labs'">
      <lab-page></lab-page>
    </template>
    <template v-if="view == 'doneLabs'">
      <done-labs-page></done-labs-page>
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
