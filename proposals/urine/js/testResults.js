Vue.component('results-page', {
  template: `
  <div class='labTests' v-bind:style="{position: 'absolute', width: '100%', height: '100%'}">
    <h1>Your Results:</h1>
    <table style="width:60%">
     <tr>
       <th>Test</th>
       <th>Date</th>
       <th>Results</th>
     </tr>
     <tr v-for="test in labTests">
       <td>{{test.name}}</td>
       <td>{{test.date}}</td>
       <td>{{test.status}}</td>
     </tr>
    </table>
  </div>
  `,
  data(){
    return {

    }
  },
  computed: {
    labTests(){ return store.state.labResults}
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
    changeData(input, i){
      temp = this.labTests.map((x,n) => {
        if(n == i){
          x.happened = input
        };
        return x
      })
      store.commit('changeState', {key: 'labTests', value: temp})
      console.log(store.state.labTests.map(x => x.happened));

    }
  }
})
