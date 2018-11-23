const store = new Vuex.Store({
  state: {
    hoverColor: -1,
    currentPresentationIndex: -1,
    currentPresentation: [],
    currentSlideIndex: 0,
    defaultColor: 'grey',
    currentColor: 'grey',
    defaultText: "and I am an awesome person",
    currentText: "and I am an awesome person"
  },
  mutations: {
    nextSlide(state, payload){
      if(payload == '+'){
        if(state.currentSlideIndex >= state.currentPresentation.length - 1){
          state.currentSlideIndex = 0
        } else {
          state.currentSlideIndex++
        }
      } else {
        if(state.currentSlideIndex <= 0){
          state.currentSlideIndex = state.currentPresentation.length - 1
        } else {
          state.currentSlideIndex--
        }
      }
    },
    changeText(state, payload){
      state.currentText = payload
    },
    changeHoverColor(state, payload){
      state.hoverColor = payload
    },
    changeColor(state, payload){
      state.currentColor = payload
    },
    changePresentation(state, payload){
      state.currentPresentationIndex = payload.index
      state.currentPresentation = payload.presentation
      state.currentSlideIndex = 0
    }
  }
})
