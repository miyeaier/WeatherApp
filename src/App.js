import axios from "axios";
import React ,{Component} from "react";

class App extends Component {
  state = {
    geolocation:{}
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
    let { latitude, longitude } = position.coords
     let locationResponse = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${
       longitude}&key=52a24ce7d8224da799le0b87c729c88`)
       let weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=23dbdac88f7ef28c212457040bb05fc3`)
     })
  }

  render(){
    return(
      <div>

      </div>
    )
  }
}
export default App