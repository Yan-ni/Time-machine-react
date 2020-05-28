import React from "react";
import "./bootstrap.min.css";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date_1: "",
      date_2: this.todays_date(),
      days: 0,
    };
  }

  todays_date() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();

    return `${yyyy}-${mm}-${dd}`;
  }

  Counter(date_1, date_2) {
    const date1 = new Date(date_1);
    const date2 = new Date(date_2);
    return Math.abs((date1 - date2) / 86400000);
  }

  render() {
    return (
      <div className="container">
        <form
          className="form-container"
          onSubmit={(e) => {
            e.preventDefault();
            this.setState({
              days: this.Counter(this.state.date_1, this.state.date_2),
            });
          }}
        >
          <input
            type="date"
            id="date_1"
            value={this.state.date_1}
            onChange={(e) => this.setState({ date_1: e.target.value })}
            required
          />
          <br />
          <input
            type="date"
            id="date_2"
            value={this.state.date_2}
            onChange={(e) => this.setState({ date_2: e.target.value })}
            required
          />
          <br />
          <button type="submit" className="btn btn-primary">
            calculate
          </button>
        </form>
        <div>
          <p>number of days</p>
          <h4 className="result">{this.state.days}</h4>
        </div>
      </div>
    );
  }
}

export default App;
