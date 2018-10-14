Vue.component('results-page', {
  template: `
  <div class='labTests' v-bind:style="{position: 'absolute', width: '100%', height: '100%'}">
    <h1>Your Results:</h1>
    <table style="width:100%">
     <tr>
       <th>Test</th>
       <th>Date</th>
       <th>Results</th>
     </tr>
     <tr v-for>
     <tr>
       <td>Jill</td>
       <td>Smith</td>
       <td>50</td>
     </tr>
     <tr>
       <td>Eve</td>
       <td>Jackson</td>
       <td>94</td>
     </tr>
    </table>
    <ul>
      <li v-for="test, i in labTests" style="">
        <span style="float: left; width: 20%">{{test.name}}</span>
        <button @click='changeData("Yes", i)'>&#10003;</button>
        <button @click='changeData("No", i)'>&#215;</button>
        <span v-bind:style="colorButton(test.happened)"><b>{{test.happened}}</b></span>
      </li>
    </ul>
    <div v-if="labTests.filter(x => !x.happened).length == 0">
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
