**Main Files**
1. NCSC.html - this is the equivalent of an index.html file that serves as the landing page.
2. map_view.js - this is a vue component that contains the map that pops up at the beginning
3. state_info.js - this is a vue component that layout for the screen where users are lead to when they click on a state
    - state_counter.js - this is a vue component that allows users to add more state charts to compare states.
    - court_layout.js - this is the where the bulk of the chart making happens for the state charts. Contains code for the chart layouts as well how information is shown once a specific court is clicked.

**Data Files**
1. nestedCourtData.js - court level data derived from the Vizathon-Data.xlsx file. Used for the layout and court information table in court_layout.js
2. CourtTypes.js - just a small json array that contains the four levels of courts. Used for layouts in court_layout.js
3. state_data.js - state level data derived from the Vizathon-Data.xlsx file. Used for the map in map_view.js
4. us-10m.v1.js - a topojson file used to draw the shapes of the states

**Support Files**
1. store.js - miscellenaous functions used in vue files stored here
2. NCSC.R - R functions for data formatting and scale creation.
