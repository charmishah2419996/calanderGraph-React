import React, { Component } from 'react';
import Chart from 'react-google-charts';

import './App.css';

class App extends Component {
    startdate = new Date(1789, 3, 30);
    month;
    year;
    day;

    constructor() {
        super();
        this.state = {
            data: [],
        }
    }
    componentDidMount() {

        fetch('https://api.myjson.com/bins/108ogk').
        then((Response) => Response.json()).
        then((findresponse) => {
            console.log(findresponse);
            this.setState({
                data: findresponse.profile,
            })
        })
    }

    render() {
        return ( < div >

            <
            div className = "middle-page" >
            <
            table id = "users" >
            <
            tr className = "border-to-th" >
            <
            th colspan = "2" > Intern - assignment < /th> <
            th className = "rightside" > Start Date < /th> <
            th className = "rightside" > Due Date < /th> < /
            tr > {

                var data = [];

                data.pu
                sh()
                this.state.data.map((dynamicdata, key) =>



                    <
                    tr >
                    <
                    td className = "bordertotd" > { dynamicdata.id } < /td> <
                    td > { dynamicdata.name } < /td> <
                    td className = "rightside" > { dynamicdata.start } < /td>  <
                    td className = "rightside" > { dynamicdata.end } < /td>  < /
                    tr >

                )
            }

            <
            /table>

            <
            /div>

            <
            div >

            {
                this.state.data.map((dynamicdata, key) =>

                    this.startdate = dynamicdata.start + " ",
                    this.month = "charmi",
                    this.day = this.month.substring(0, 2)

                    // <
                    // div >
                    // <
                    // h1 > this.startdate < /h1>  <
                    // h1 > { dynamicdata.name } < /h1>  <
                    // h1 > { dynamicdata.start } < /h1>  

                    // <
                    // /div >

                )
            }

            <
            /div>



            <
            Chart width = { '500px' }
            height = { '300px' }
            chartType = "Timeline"
            loader = { < div > Loading Chart < /div>}
                data = {
                    [
                        [
                            { type: 'string', id: 'President' },
                            { type: 'date', id: 'Start' },
                            { type: 'date', id: 'End' },
                        ],
                        ['Washington', new Date(1797, 2, 4), new Date(1797, 2, 4)],
                        ['Adams', new Date(1797, 2, 4), new Date(1801, 2, 4)],
                        ['Jefferson', new Date(1801, 2, 4), new Date(1809, 2, 4)],
                    ]
                }
                options = {
                    {
                        showRowNumber: true,
                    }
                }
                rootProps = {
                    { 'data-testid': '1' }
                }
                /></div >
            )
        }




    }

    export default App;