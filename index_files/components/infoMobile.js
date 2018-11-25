Vue.component('info-mobile', {
  template: `
  <tr style="margin: 0; padding: 0">
    <td v-bind:style="{'background': color,  padding: '2vmin', 'border': 'black solid .5vmin', margin: 0}" >
      <span v-html="text"
            style="background: white; font-size: 4vmin; padding: .5vmin 3vmin; cursor: pointer;"
            class="infoTitle"
            @click='click'></span>
      <div v-if="show"
           style="width: 100%; height: 70vmin; position: relative;">
        <presentation-slide></presentation-slide>
        <button @click="nextSlide('-')" style="position: absolute; bottom: 1vmin; left: 2vmin; font-size: 4vmin; padding: 1vmin">&#x2190;</button>
        <button class="slideButton" @click="nextSlide('+')" style="position: absolute; bottom: 1vmin; right: 2vmin; font-size: 4vmin; padding: 1vmin">&#x2192;</button>
      </div>
    </td>
  </tr>
  `,
  props: ['color', 'text', 'presentationindex', 'slides'],
  computed: {
    show(){
      return this.presentationindex == store.state.currentPresentationIndex
    }
  },
  methods: {
    nextSlide(direction){
      store.commit('nextSlide', direction)
    },
    click(){
      if(!this.show){
        store.commit('changePresentation', {index: this.presentationindex, presentation: this.slides})
      } else {
        store.commit('changePresentation', {index: -1, presentation: []})
      }
    }
  }
})
