Vue.component('tech-table', {
  template: `
  <table style="width: 95%; border-collapse: collapse; margin: 2vmin">
    <tr style='font-size: 2vmin'>
      <th style="border-right: black solid .25vmin; border-bottom: black solid .25vmin; margin: 0;">
        Data Engineering
      </th>
      <th style="border-right: black solid .25vmin; border-bottom: black solid .25vmin; border-left: black solid .25vmin;">
        Data Visualization
      </th>
      <th style="border-right: black solid .25vmin; border-bottom: black solid .25vmin; border-left: black solid .25vmin;">
        Graph Technology
      </th>
      <th style="border-bottom: black solid .25vmin; border-left: black solid .25vmin;">
        Misc.
      </th>
    </tr>
    <tr style='font-size: 2vmin; text-align: center;'>
      <td style="border-right: black solid .25vmin; ">
        <br />
        R <br />
        Python<br /><br />
      </td>
      <td style="border-right: black solid .25vmin; ">
        <br />
        D3.js<br />
        GSAP<br />
        p5.js<br />&nbsp;
      </td>
      <td style="border-right: black solid .25vmin; ">
        <br />
        igraph<br />
        TinkerPop<br />
        Neo4j<br />&nbsp;
      </td>
      <td>
        <br />
        Vue.js<br />
        ElasticSearch<br />
        Inkscape<br />&nbsp;
      </td>
    </tr>
  </table>
  `
})
