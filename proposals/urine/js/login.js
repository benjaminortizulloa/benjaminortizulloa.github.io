Vue.component('login-page', {
  template: `
  <div class='login' style="display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; min-height: 100vh;">
    <h1>Login</h1>
    <div>
      <p>UserName</p>
      <input />
      <p>Password</p>
      <input />
      <p>Login Type</p>
      <select v-model="loginType" style="display: block; margin: 0 auto;">
        <option disabled value="">Please select a login type</option>
        <option v-for="type in loginTypes" v-bind:value='type'>
          {{type}}
        </option>
      </select>
      <button v-if="loginType" @click='enter'>Log In</button>
    </div>
  </div>
  `,
  data(){
    return {
      loginType: ''
    }
  },
  computed: {
    loginTypes(){return store.state.loginTypes}
  },
  methods: {
    enter(){
      store.commit('changeState', {key: 'view', value: this.loginType})
      store.commit('changeState', {key: 'view2', value: this.loginType})
    },
    patientInfo (e) {
      store.commit('changeState', {key: 'patientID', value: e.target.value})
    }
  }
})
