Vue.component('help-box', {
  template: `
  <div>
    <div @mouseover='createNotes'
         @mouseout="removeNotes"
         style="position: absolute; right: 5vmin; top: 5vmin; width: 5vmin; height: 5vmin; border: black solid 1vmin; margin: 0; padding: 0;">
      <p style="margin: .5vmin 1vmin; color: black; font-size: 5vmin"> 	&#x3f;</p>
    </div>
    <div v-if="annotateAnnotation"
         style="position: absolute; right: 7.5vmin; top: 7.5vmin; width: 9vmin; height: 9vmin; border: black solid 1vmin; margin: 0; padding: 0; pointer-events: none; transform: translate(40%, -40%)">
    </div>
    <p v-if="annotateAnnotation"
       style="position: absolute; right: 7.5vmin; top: 11vmin; font-size: 4vmin; text-align: center; background: rgba(255, 255, 255, .75);"
       v-html="magicBox"></p>
  </div>

  `,
  data() {
    return {magicBox: "This magic box<br>uses <b>D3</b>"}
  },
  methods: {
    createNotes(){
      let infoTitle = d3
        .select('.infoTitle')
        .node()

      if(infoTitle){
        infoTitleBB = infoTitle.getBoundingClientRect()

        d3.select('body')
          .append('div')
          .attr("class", "note")
          .style('position', 'fixed')
          .style('margin', '0')
          .style('padding', '0')
          .style("transform", "translate(-50%, -50%)")
          .style('left', infoTitleBB.left + infoTitleBB.width/2 + 'px')
          .style('top', infoTitleBB.top + infoTitleBB.height/2 +'px')
          .style('width', infoTitleBB.width + infoTitleBB.width/4  + 'px')
          .style('height', infoTitleBB.height + infoTitleBB.height/3  +'px')
          .style('border', 'black solid 1vmin')
          .style('pointer-events', 'none')

        d3.select("body")
          .append('p')
          .attr('class', 'note')
          .style('position', 'fixed')
          .style('margin', '0')
          .style('padding', '0')
          .style('left', infoTitleBB.left + infoTitleBB.width + 'px')
          .style('top', infoTitleBB.top - infoTitleBB.height * 1.5 +'px')
          .style('background', 'rgba(255, 255, 255, .8)')
          .style('font-size', "4vmin")
          .html("Click here <br>to toggle info")
      }

      let infoButton = d3
        .select('.infoButton')
        .node()

      if(infoButton){
        infoButtonBB = infoButton.getBoundingClientRect()

        let infoButtonR = infoButtonBB.width + infoButtonBB.width/2

        d3.select('body')
          .append('div')
          .attr("class", "note")
          .style('position', 'fixed')
          .style('margin', '0')
          .style('padding', '0')
          .style("transform", "translate(-50%, -50%)")
          .style('left', infoButtonBB.left + infoButtonBB.width/2 + 'px')
          .style('top', infoButtonBB.top + infoButtonBB.width/2 +'px')
          .style('width', infoButtonR  + 'px')
          .style('height', infoButtonR  +'px')
          .style('border', 'black solid 1vmin')
          .style('border-radius', '100%')
          .style('pointer-events', 'none')

        d3.select("body")
          .append('p')
          .attr('class', 'note')
          .style('position', 'fixed')
          .style('margin', '0')
          .style('padding', '0')
          .style("transform", "translate(-100%, -50%)")
          .style('left', infoButtonBB.left - infoButtonBB.width/2 + 'px')
          .style('top', infoButtonBB.top + infoButtonBB.width/2 +'px')
          .style('font-size', "4vmin")
          .html("Click or hover here<br> to toggle info")
      }

      let slideButton = d3
        .select('.slideButton')
        .node()

      if(slideButton){
        slideButtonBB = slideButton.getBoundingClientRect()

        d3.select('body')
          .append('div')
          .attr("class", "note")
          .style('position', 'fixed')
          .style('margin', '0')
          .style('padding', '0')
          .style("transform", "translate(-50%, -50%)")
          .style('left', slideButtonBB.left + slideButtonBB.width/2 + 'px')
          .style('top', slideButtonBB.top + slideButtonBB.height/2 +'px')
          .style('width', slideButtonBB.width + slideButtonBB.width/2  + 'px')
          .style('height', slideButtonBB.height + slideButtonBB.height/2  +'px')
          .style('border', 'black solid 1vmin')
          .style('pointer-events', 'none')

        d3.select("body")
          .append('p')
          .attr('class', 'note')
          .style('position', 'fixed')
          .style('margin', '0')
          .style('padding', '0')
          .style('left', slideButtonBB.left + slideButtonBB.width * 1.5 + 'px')
          .style('top', slideButtonBB.top + slideButtonBB.height * 1.5 +'px')
          .style('background', 'rgba(255, 255, 255, .8)')
          .style('font-size', "4vmin")
          .html("Click here for next slide")
      }
    },
    removeNotes(){
      d3.selectAll('.note').remove()
    }
  },
  computed: {
    annotateAnnotation(){
      return store.state.currentPresentation[store.state.currentSlideIndex] == `
          <p style=\"font-size: 4vmin\"><a href=\"https://github.com/benjaminortizulloa/benjaminortizulloa.github.io/blob/master/index_files/components/helpBox.js\" target=\"_blank\">The help box functionality actually uses <b>D3</b>'s selection capabilities</a></p>
          `
    },

  }
})
