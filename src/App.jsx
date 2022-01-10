import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    geolocation: {},
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(async position => {
      let { latitude, longitude } = position.coords;
      
      let locationResponse = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=fea8964d93c5492aa5eb1586b96eab48`
      );

      let weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=fdba6bd050a855fe561e999acfb75785`
      );

      let weatherInfo = {
        city: locationResponse.data.results[0].components.city,
        country: locationResponse.data.results[0].components.country,
        temp: weatherResponse.data.current.temp,
      };
      this.setState({ location: weatherInfo });
      debugger
    });
  }
  render() {
    return (
      <div>
      </div>
    );
  }
}

export default App;