Vue.component('state-counter', {
  template: `
  <div class='counter' style='display: block; margin: 0 auto'>
    <button style="display: inline-block; margin: 10 auto;font-size: 16px;" onclick="store.commit('addState')">Add State</button>
    <button style="display: inline-block; margin: 10 auto;font-size: 16px;" onclick="store.commit('changeView', 'map')">Go to Map</button>
  </div>
  `
})
