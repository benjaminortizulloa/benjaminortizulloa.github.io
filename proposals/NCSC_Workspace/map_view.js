Vue.component('states-layout', {
  template: `
  <div id="mapContainer" style='position: fixed; width: 100%; height: 100%; overflow: scroll'>
    <select v-model="currentScale" style="font-size: 16px">
      <option
        v-for="scl in mapScaleOptions"
        :value="scl">
        {{scl}}
      </option>
    </select>
    <svg style='position: absolute; width: 100%; height: 100%'>
      <g id="mapG">
        <path v-for="lines in mapData"
          :id="'state_' + lines.id"
          :d="mapPath(lines)"
          stroke='black'
          :fill='fillMap(currentScale, lines)'
          @mouseover="mouseover(lines, $event)"
          @mouseout='mouseout(lines)'
          @click='click(lines)'
          style="cursor:pointer;"
          ></path>
      </g>
    </svg>
    <div v-if="showtooltip" :style="tooltipStyle">
      <span v-html="tooltipInfo"></span>
    </div>

  </div>
  `,
  data() {
    return {
      showtooltip: false,
      currentScale: "DeathPenaltyDescription",
      mapScaleOptions: [
        "TrialStructureDescription",
        "PopulationCategoryDescription",
        "RuralDescription",
        "TrialCriminalProcessingDescription",
        "DeathPenaltyDescription",
        "AppellateCriminalStructureDescription",
        "PopulationDensityDescription",
        "CaseloadSizeDescription"
      ],
      tooltipInfo: '',
      tooltipStyle: {
        position: 'fixed',
        top: 0,
        left: 0,
        background: "white",
        border: "5px solid",
        "pointer-events": 'none'

      }
    }
  },
  mounted(){
    d3.select(window)
      .on('resize', this.sizeChange)

    this.sizeChange()
  },
  methods: {
    courtTypeScale(d){
      return d3.scaleBand()
        .domain(courtTypes)
        .range([0,90])(d)
    },
    sizeChange(){
      if(d3.select('#mapContainer').node()){
        sWidth = d3.select('#mapContainer').node().getBoundingClientRect().width
        console.log(sWidth)
        d3.select('#mapG').attr('transform', `scale(${sWidth/1400})`)
        d3.select('svg').attr('height', sWidth * .618)
      }
    },
    mouseover(line, event){
      d3.select('#state_' + line.id)
        .attr('stroke','red')
        .attr('stroke-width', 5)
        .raise()

      this.tooltipInfo = `
      <p style="margin: 0; padding: 0"><b>State:</b> ${line.fullState}</p>
      <p style="margin: 0; padding: 0"><b>${this.currentScale}:</b> ${line[this.currentScale]}</p>`
      this.showtooltip = true
      this.tooltipStyle.top = event.clientY
      this.tooltipStyle.left = event.clientX
    },
    mouseout(line){
      d3.select('#state_' + line.id)
        .attr('stroke','black')
        .attr('stroke-width', 1)

      this.showtooltip = false
      this.tooltipInfo = ''
    },
    click(d){
      store.commit('changeChosenState', d.fullState)
      store.commit('changeView', 'courts')
    },
    mapPath: d3.geoPath(),
    TrialStructureDescription: d3.scaleOrdinal().domain(["Single Tiered","Two Tiered"]).range(["#bdbdbd","#636363"]),
    PopulationCategoryDescription: d3.scaleOrdinal().domain(["up to 990,000","990,001 to 1,860,000","1,860,001 to 3,580,000","3,580,001 to 4,780,000","4,780,001 to 6,490,000","6,490,001 to 9,890,000","9,890,001 to highest"]).range(["#E6E6E6","#D5D5D5","#C3C3C3","#AEAEAE","#969696","#787878","#4D4D4D"]),
    RuralDescription: d3.scaleOrdinal().domain(["Greater than or equal to 50% of the population","26-49% of the population","16-25% of the population","Less than or equal to 15% of the population","Missing information"]).range(["#228B22","#4E9C4E","#7AAF7A","#A6C1A6","#D3D3D3"]),
    TrialCriminalProcessingDescription: d3.scaleOrdinal().domain(["Single Tiered","Two Tiered"]).range(["#bdbdbd","#636363"]),
    DeathPenaltyDescription: d3.scaleOrdinal().domain(["No","Yes","Missing information"]).range(["#91bfdb","#fc8d59","lightgrey"]),
    AppellateCriminalStructureDescription: d3.scaleOrdinal().domain(["COLR Mandatory","COLR Discretionary","Deflective Structure","COLR Discretionary/IAC Mandatory","COLR and IAC Discretionary","IAC by Subject Matter","COLR by Subject Matter","Missing information"]).range(["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","lightgrey"]),
    PopulationDensityDescription: d3.scaleOrdinal().domain(["0-20","21-50","51-100","101-200","201-500","501-1000","10001-highest"]).range(["#E6E6E6","#D5D5D5","#C3C3C3","#AEAEAE","#969696","#787878","#4D4D4D"]),
    CaseloadSizeDescription: d3.scaleOrdinal().domain(["Under 200 Thousand","201 Thousand-500 Thousand","501 Thousand-1 Million","1.1 Million-3 Million","3.1 Million-6 Million","Over 6 Million"]).range(["#E6E6E6","#D1D1D1","#BBBBBB","#A0A0A0","#7F7F7F","#4D4D4D"]),
    fillMap(scale, scaleInput){
      return this[scale](scaleInput[scale])}
  },
  computed: {
    mapData(){
      tempd = topojson
        .feature(us_topo, us_topo.objects.states)
        .features
        .map(x => {
          matching = state_data.filter(d => d.id == x.id)[0]
          x.fullState = matching.STATE_NAME
          x.PopulationCategoryDescription = matching.PopulationCategoryDescription
          x.TrialStructureDescription = matching.TrialStructureDescription
          x.RuralDescription = matching.RuralDescription
          x.TrialCriminalProcessingDescription = matching.TrialCriminalProcessingDescription
          x.DeathPenaltyDescription = matching.DeathPenaltyDescription
          x.AppellateCriminalStructureDescription = matching.AppellateCriminalStructureDescription
          x.PopulationDensityDescription = matching.PopulationDensityDescription
          x.CaseloadSizeDescription = matching.CaseloadSizeDescription
          return x
        })
      console.log(tempd)
      return tempd
    }
  }
})
