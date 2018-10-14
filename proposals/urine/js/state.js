const store = new Vuex.Store({
  state: {
    rehabID: '',
    patientID: '',
    insuranceID: '',
    view: 'login',
    view2:'',
    labTests: [{name: 'urine', happened: '', show: ''},
               {name: 'blood', happened: '', show: ''},
               {name: 'blood', happened: '', show: ''},
               {name: 'horse', happened: '', show: ''},
             ],
   labResults: [{name: 'urine', happened: ''},
              {name: 'blood', happened: ''},
              {name: 'blood', happened: ''},
            ],
    loginTypes: ['Lab', 'Patient']
  },
  mutations: {
    changeState(state, payload){
      state[payload.key] = payload.value
    }
  }
})
