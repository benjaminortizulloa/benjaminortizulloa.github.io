Vue.component('employment-info', {
  template: `
  <div>
    <p class="title" v-html='employer' @click='toggle' style="cursor: pointer"></p>
    <div v-if='show'>
      <p class="info"><b>Role:</b> <span v-html="role"></span></p>
      <p class="info">Responsibilities include:</p>
      <ul class='info'>
        <template v-for="responsibility in responsibilities">
          <li v-html="responsibility"></li>
        </template>
      </ul>
    </div>
  </div>
  `,
  props: ['employer', 'role', 'responsibilities'],
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
