Vue.component('info-div', {
  template: `
  <div>
    <div v-if="show" v-bind:style="mainStyle">
      <presentation-slide></presentation-slide>
      <button @click="nextSlide('-')" style="position: absolute; top: 90%; left: 15%; width: 10%; font-size: 2vh">&#x2190;</button>
      <button class="slideButton" @click="nextSlide('+')" style="position: absolute; top: 90%; left: 75%; width: 10%; font-size: 2vh">&#x2192;</button>
    </div>
    <div v-bind:style="buttonStyle"
         @mouseover="mouseover"
         @mouseout="mouseout"
         @click="click"
         class="infoButton">
    </div>
  </div>
  `,
  props: ['color', 'x', 'xside', 'y', 'yside', 'text', 'presentationindex', 'slides'],
  data() {
    return {
      current: {
        color: 'grey',
        cursor: 'pointer'
      }
    }
  },
  computed: {
    show(){
      return this.presentationindex == store.state.currentPresentationIndex
    },
    colorButton(){
      return this.show | this.presentationindex == store.state.hoverColor
    },
    mainStyle(){
      let mainStyle = {
        'background-color': this.color,
        'left': '20vw',
        'top': '20vh',
        "width": "60vw",
        "height": '60vh',
        'position': 'absolute',
        "border-radius": "25%",
        "border": 'black solid 1vmin',
        'margin': '0vh'
      }
      return mainStyle
    },
    buttonStyle(){

      let buttonStyle = {
        'background-color': this.colorButton ? this.color : 'grey',
        'border-radius': '100%',
        "transform": "translate(-50%, -50%)",
        "width": "7vmin",
        "height": "7vmin",
        'position': 'absolute',
        'cursor': this.current.cursor,
        "border": `${this.colorButton ? 'black' : this.color} solid .5vw`,
        'margin': '0vh'
      }

      buttonStyle[this.xside] = this.x + 'vw'
      buttonStyle[this.yside] = this.y + 'vh'

      return buttonStyle
    }
  },
  methods: {
    nextSlide(direction){
      store.commit('nextSlide', direction)
    },
    changeColor(clr, pres){
      store.commit('changeHoverColor', pres)
      store.commit('changeColor', clr)
    },
    changeSubTitle(txt){
      store.commit('changeText', txt)
    },
    mouseover(){
      this.changeSubTitle(this.text)
      this.changeColor(this.color, this.presentationindex)
    },
    mouseout(){
      this.changeSubTitle(store.state.defaultText)
      this.changeColor("grey", -1)
    },
    click(){
      if(!this.show){

        this.current.color = this.color
        store.commit('changePresentation', {index: this.presentationindex, presentation: this.slides})
      } else {
        store.commit('changePresentation', {index: -1, presentation: []})
        this.current.color = 'grey'
      }
    }
  }
})
