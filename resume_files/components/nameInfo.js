Vue.component('name-info', {
  template: `
  <div style="padding: 2vmin; margin: 0; background: lightgrey; border-bottom: black solid .5vmin">
    <h1 style="text-align: center; margin: 0; font-size: 7vmin">{{name}}</h1>
    <div style="text-align: center; padding: 0">
      <div style="display: inline-block; ">
        <p style="margin: 0 10; padding: 0; font-size: 2.5vmin;">
          <em><b>phone:</b> {{phone}}</em>
        </p>
      </div>
      <div style="display: inline-block; ">
        <p style="margin: 0 10; padding: 0; font-size: 2.5vmin;">
          <em><b>email:</b> <a :href="emailLink">{{email}}</a></em>
        </p>
      </div>
      <div style="display: inline-block; ">
        <p style="margin: 0 10; padding: 0; font-size: 2.5vmin;">
          <em><b>portfolio:</b> <a :href="portfolio" target="_blank">{{portfolio}}</a></em>
        </p>
      </div>
    </div>
  </div>
  `,
  props: ['name', 'email', 'phone', 'portfolio'],
  computed: {
    emailLink(){
      return "mailto:" + this.email
    }
  }
})
