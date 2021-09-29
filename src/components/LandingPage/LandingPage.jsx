import React, { Component } from 'react';
import axios from 'axios';
import CurrentDate from '../CurrentDate';
import './LandingPage.scss';
import { WEATHER_API_KEY } from "../../config";
import TemperatureWithInsolation from '../TemperatureWithInsolation';
import WeatherWithDescription from '../WeatherWithDescription';
import ForecastWeekWeather from '../ForecastWeekWeather';
import LocationSearchBar from '../LocationSearchBar';
import CurrentLocation from '../CurrentLocation';

class LandingPage extends Component {
  constructor() {
    super();

    this.state = {
      searchField: '',
      location: 'Sydney',
      isLoading: true,
      forecastData: null,
      todaysData: null,
    };

    // this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchWeather(this.state.location);
  }

  fetchWeather = (location) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WEATHER_API_KEY}`)
      .then(response => response.data)
      .then(
        data => axios
          .get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=hourly&appid=${WEATHER_API_KEY}`
          )
          .then(result => this.setState({ forecastData: result.data, todaysData: result.data.daily[0], isLoading: false}, () => console.log(1111, this.state.todaysData.weather[0].icon)))
          .catch((error) => {
            console.error('Error:', error);
          })
      )
      .catch(e => console.error(e));
  }

  handleChange = (event) => {
    this.setState(() => ({
      searchField: event.target.value,
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // this.setState({location: this.searchField,})
    // return this.fetchWeather(this.state.location);

    this.fetchWeather(this.state.searchField);
    this.setState({
      location: this.state.searchField,
    })

    // axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.searchField}&appid=${WEATHER_API_KEY}`)
    //   .then(response => response.data)
    //   .then(
    //     data => axios
    //       .get(
    //         `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=hourly&appid=${WEATHER_API_KEY}`
    //       )
    //       .then(result => this.setState({ location: this.state.searchField, forecastData: result.data, todaysData: result.data.daily[0], isLoading: false}, () => console.log(1111, this.state.forecastData)))
    //       .catch((error) => {
    //         console.error('Error:', error);
    //       })
    //   )
    //   .catch(e => this.setState({location: e.message}));
  }

  render() {
    const { location, searchField, todaysData, forecastData } = this.state;
    // const { sunrise, sunset, temp } = this.state?.todaysData;
    // console.log(this.state?.todaysData);

    return (
      this.state.isLoading ? (
        <div>LOADING...</div>
      ) : (
        <div className="weather-app-container"> 
          <div className="search-bar">
            <LocationSearchBar 
              currentLocation={location} 
              searchField={searchField} 
              handleSubmit={this.handleSubmit} 
              handleChange={this.handleChange} 
            />
            <CurrentLocation currentLocation={location} />
            <CurrentDate currentDate={todaysData.dt} timezone={forecastData.timezone} />
          </div>
          <div className="weather-app-container__today">
            <WeatherWithDescription icon={todaysData.weather[0].icon} description={todaysData.weather[0].description} />
            <TemperatureWithInsolation
              sunrise={todaysData.sunrise}
              sunset={todaysData.sunset}
              tempMin={todaysData.temp.min}
              tempMax={todaysData.temp.max}
              timezone={forecastData.timezone}
            />
          </div>
          <ForecastWeekWeather forecastData={forecastData.daily} />
        </div>
      )
    )
  }
}

export default LandingPage;