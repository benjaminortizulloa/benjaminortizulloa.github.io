Vue.component('education-info', {
  template: `
  <div>
    <p class='title' v-html='title' @click='toggle' style="cursor: pointer"></p>
    <div v-if="show">
      <template v-for='info in information'>
        <p class='info' v-html='info.name'></p>
        <ul class='info' >
          <li v-for='bullet in info.data' v-html="bullet"></li>
        </ul>
      </template>
    </div>
  </div>
  `,
  props: ['title', 'information'],
  data(){
    return {
      show: false
    }
  },
  methods: {
    toggle(){
      this.show = !this.show
    }
  }
})
