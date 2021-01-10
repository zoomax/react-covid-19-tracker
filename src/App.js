import React from "react";
import { Charts, Cards, CountryPicker } from "./components";
import { fetchData } from "./api";
import styles from "./App.module.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      country: "",
    };
    this.handleCountryChange = this.handleCountryChange.bind(this);
  }
  async componentDidMount() {
    const coronaData = await fetchData(this.state.country);
    this.setState({
      data: coronaData,
    });
  }

  async handleCountryChange(country) {
    
    const countryData = await fetchData(country);
    this.setState({
      data: countryData,
      country  : country === "Global" ? ""  : country,
    });
  }
  render() {
    return (
      <div className={styles.container}>
        <h1>Covid-19 Tracker </h1>

        <Cards data={this.state.data} />
        <CountryPicker handleCountryChange = {this.handleCountryChange} />
        <Charts data = {this.state.data}   country ={this.state.country}/>
      </div>
    );
  }
}
export default App;
