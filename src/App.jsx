import React, { Component } from "react";
import axios from "axios";
import { Divider, Header, Icon, Table } from "semantic-ui-react";

class App extends Component {
  state = {
    geolocation: {},
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(async (position) => {
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
    });
  }
  render() {
    return (
      <>
        <Divider horizontal>
          <Header as="h4" data-cy="title">
            <Icon name="wpexplorer" />
            Weather
          </Header>
        </Divider>

        <Table definition data-cy="table">
          <Table.Body>
            <Table.Row data-cy="Country">
              <Table.Cell width={2} >Country</Table.Cell>
              <Table.Cell>{this.state.location?.country}</Table.Cell>
            </Table.Row>
            <Table.Row data-cy="City">
              <Table.Cell >City</Table.Cell>
              <Table.Cell>{this.state.location?.city}</Table.Cell>
            </Table.Row>
            <Table.Row data-cy="Temperature">
              <Table.Cell>Temperature</Table.Cell>
              <Table.Cell>{this.state.location?.temp}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </>
    );
  }
}

export default App;
