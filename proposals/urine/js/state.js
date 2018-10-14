const store = new Vuex.Store({
  state: {
    rehabID: '',
    patientID: '',
    insuranceID: '',
    view: 'login',
    view2:'',
    labTests: [{name: 'Urine', happened: '', show: ''},
               {name: 'Blood', happened: '', show: ''},
               {name: 'Blood', happened: '', show: ''},
               {name: 'Equinetherapy', happened: '', show: ''},
             ],
   labResults: [{name: 'Urine - Opiods', status: 'Negative', date: 'October 10, 2018'},
              {name: 'Blood - Opiods', status: 'Negative', date: 'October 10, 2018'},
              {name: 'Blood - Methamphetamineood', status: 'Negative', date: 'October 10, 2018'},
            ],
    loginTypes: ['Lab', 'Patient']
  },
  mutations: {
    changeState(state, payload){
      state[payload.key] = payload.value
    }
  }
})
