const store = new Vuex.Store({
  state: {
    hoverColor: -1,
    currentPresentationIndex: -1,
    currentPresentation: [],
    currentSlideIndex: 0,
    defaultColor: 'grey',
    currentColor: 'grey',
    defaultText: "and here is my <a href='./resume.html' target='_blank'>C.V.</a>",
    currentText: "and here is my <a href='./resume.html' target='_blank'>C.V.</a>"
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
