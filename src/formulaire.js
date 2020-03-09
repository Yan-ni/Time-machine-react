import React from "react";
import "./bootstrap.min.css";
import "./App.css";
import Counter from "./counter";

class Formulaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date_1: "",
      date_2: todays_date(),
      days: 0
    };

    this.handleChange_1 = this.handleChange_1.bind(this);
    this.handleChange_2 = this.handleChange_2.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange_1(event) {
    this.setState({ date_1: event.target.value });
  }

  handleChange_2(event) {
    this.setState({ date_2: event.target.value });
  }

  handleClick(event) {
    // console.log("la premiere date est : " + this.state.date_1);
    // console.log("la deuxieme date est : " + this.state.date_2);
    // this.setState({ days: 10 });

    this.setState({ days: Counter(this.state.date_1, this.state.date_2) });

    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div className="testing">
          <input
            type="date"
            id="date_1"
            value={this.state.date_1}
            onChange={this.handleChange_1}
            required
          />
          <br />
          <input
            type="date"
            id="date_2"
            value={this.state.date_2}
            onChange={this.handleChange_2}
            required
          />
          <br />
          <input
            type="button"
            value="calculate"
            className="btn btn-primary"
            onClick={this.handleClick}
          />
        </div>

        <div>
          <p>number of days</p>
          <h4 className="result">{this.state.days}</h4>
        </div>
      </div>
    );
  }
}

function todays_date() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;

  return today;
}

export default Formulaire;
