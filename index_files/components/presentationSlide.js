Vue.component('presentation-slide', {
  template: `
  <div style="position: absolute; left: 5%; top: 5%; width: 90%; height: 80%; background-color: white; border-radius: 25%; border: black solid .5vmin">
    <div class='centered' style="width: 80%"><div v-html="showSlide"></div></div>
  </div>
  `,
  computed: {
    showSlide(){
      return store.state.currentPresentation[store.state.currentSlideIndex]
    }
  }
})
