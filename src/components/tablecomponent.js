import React, { Component } from "react";
import Chart from "react-google-charts";
import "../components/tablecomponent.css";

export default class Table extends Component {
  newStartDate = "";
  newEndDate = "";
  month;
  year;
  day;
  name;
  objdate;
  endDateMonth;
  endDateYear;
  endDateDay;
  graphData = [];
  graphHead = [];
  graphSubData = [];

  constructor() {
    super();
    this.graphHead.push({ type: "string", id: "President" });
    this.graphHead.push({ type: "date", id: "Start" });
    this.graphHead.push({ type: "date", id: "End" });
    this.graphData.push(this.graphHead);
    console.log(this.graphData);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    fetch("https://api.myjson.com/bins/108ogk")
      .then(Response => Response.json())
      .then(findresponse => {
        console.log(findresponse);
        this.setState({
          data: findresponse.profile
        });
      });
  }

  render() {
    return (
      <div>
        <div className="middle-page">
          <table id="users">
            <tr className="border-to-th">
              <th colspan="2"> Intern - assignment </th>{" "}
              <th className="rightside"> Start Date </th>{" "}
              <th className="rightside"> Due Date </th>{" "}
            </tr>{" "}
            {this.state.data.map((dynamicdata, key) => (
              <tr>
                <td className="bordertotd"> {dynamicdata.id} </td>{" "}
                <td> {dynamicdata.name} </td>{" "}
                <td className="rightside"> {dynamicdata.start} </td>{" "}
                <td className="rightside"> {dynamicdata.end} </td>{" "}
              </tr>
            ))}{" "}
          </table>{" "}
        </div>{" "}
        <div>
          {" "}
          {this.state.data.map((dynamicdata, key) => {
            this.graphSubData = [];
            this.name = dynamicdata.name;
            this.day = dynamicdata.start.split("/")[0];
            this.month = dynamicdata.start.split("/")[1];
            this.year = dynamicdata.start.split("/")[2];

            this.graphSubData.push(this.name);

            this.endDateDay = dynamicdata.end.split("/")[0];
            this.endDateMonth = dynamicdata.end.split("/")[1];
            this.endDateYear = dynamicdata.end.split("/")[2];
            this.newEndDate = new Date(
              this.endDateYear,
              this.endDateMonth,
              this.endDateDay
            );

            this.newDate = new Date(this.year, this.month, this.day);
            this.graphSubData.push(this.newDate);
            this.graphSubData.push(this.newEndDate);
            //this.graphSubData.push(this.newEndDate);

            this.graphData.push(this.graphSubData);
            console.log(this.graphData);

            console.log(
              "date after split End date",
              this.newEndDate,
              this.name,
              this.endDateDay,
              this.endDateMonth,
              this.endDateYear
            );
            console.log(
              "date after split Start date",
              this.name,
              this.day,
              this.month,
              this.year
            );
          })}{" "}
        </div>{" "}
        {
          <Chart
            width={"100%"}
            height={"300px"}
            chartType="Timeline"
            loader={<div> Loading Chart </div>}
            data={this.graphData}
            options={{
              showRowNumber: true
            }}
            rootProps={{ "data-testid": "1" }}
          />
        }{" "}
      </div>
    );
  }
}
