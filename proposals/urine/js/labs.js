Vue.component('lab-page', {
  template: `
  <div class='labTests' v-bind:style="{position: 'absolute', width: '100%', height: '100%'}">
    <h1>Have you completed:</h1>
    <ul>
      <li v-for="test, i in labTests" style="">
        <span style="float: left; width: 25%">{{test.name}}</span>
        <button @click='changeData("Yes", "happened", i)'>&#10003;</button>
        <button @click='changeData("No", "happened", i)'>&#215;</button>
        <button @click='changeData("Showing", "show", i)'>Network?</button>
        <span v-bind:style="colorButton(test.happened)"><b>{{test.happened}}</b></span>
        <span>{{test.show}}</span>
      </li>
    </ul>
    <div v-if="labTests.filter(x => !x.happened).length == 0" style="margin: auto; width: 50%; border: 3px solid green; padding: 10px;">
      <h2>Are you sure?</h2>
      <button @click="enter">Yes</button>
    </div>
  </div>
  `,
  data(){
    return {

    }
  },
  computed: {
    labTests(){ return store.state.labTests}
  },
  methods: {
    enter(){
      store.commit('changeState', {key: 'view2', value: 'doneLabs'})
    },
    colorButton(input){
      if(input == 'Yes'){
        return({color: 'green'})
      }
      if(input == 'No'){
        return({color: 'red'})
      }
      return({color: 'yellow'})
    },
    changeData(input,key, i){
      temp = this.labTests.map((x,n) => {
        if(n == i){
          x[key] = input
        };
        return x
      })
      store.commit('changeState', {key: 'labTests', value: temp})
      console.log(store.state.labTests.map(x => x.happened));

    }
  }
})
