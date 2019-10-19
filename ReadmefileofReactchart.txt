=>Project structure:
    1)App component
    2)Table component
    *Relationship between component:
    -The table component is a child of the App component.
    
=>I made Api which has data the same as in bucket file.

=>Table module.
        -I made Api get a call, and display the output into table format.
        -I made one object which I need to pass in the chart.
        -I made the same object that the chart needs as input.
        
=>Chart.js module    
        -In the project, I used the "react-google-charts" library.
        -pass whole Data object from Table module so that the Second time API call is not necessary to render the chart.
        -making an object in Table module REMOVE UNNESSESORY APICAL.