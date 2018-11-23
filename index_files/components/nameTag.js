
Vue.component('name-tag', {
  template: `
  <div class='centered' v-if="show" >
    <div id='tagTop' class="tag" v-bind:style="color_tag">
      <p style="font-size: 12vmin; margin: 1vmin">HELLO</p>
      <p style="font-size: 3vmin; margin: 1vmin">my name is</p>
    </div>
    <div id='tagCenter' class='tag' >
      <p style="font-size: 10vmin; margin: 1vmin;">Benjamin Ortiz Ulloa</p>
      <p style='font-size: 3vmin; margin: 1vmin'><span v-html='current_subtitle' ></span></p>
    </div>
    <div id='tagBottom' class='tag' v-bind:style="color_tag"></div>
  </div>
  `,
  computed: {
    show(){
      return store.state.currentPresentationIndex == -1
    },
    current_subtitle(){
      return store.state.currentText
    },
    color_tag(){
      return {'background': store.state.currentColor}
    }
  }
})
