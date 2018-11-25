Vue.component('talk-info', {
  template: `
  <div>
    <p class='title' v-html='title' @click='toggle' style='cursor: pointer'></p>
    <div class="info" v-if="show">
      <p>
        <table>
          <tr class="info">
            <td>
              <b>Abstract:</b>
            </td>
            <td v-html="abstract" class='info'></td>
          </tr>
        </table>
      </p>
      <div style='margin: 0;'>
        <table>
          <template v-for="(venue, index) in venues">
            <tr class="info">
              <td>
                <template v-if='index == 0'>
                  <b>Venues:</b>
                </template>
              </td>
              <td>
                <a :href="venue.link" target="_blank" v-html='venue.name'></a>
              </td>
              <td v-html="venue.type"></td>
            </tr>
          </template>
        </table>
      </div>
    </div>
  </div>
  `,
  props: ['title', 'abstract', 'venues'],
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
