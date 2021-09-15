import React, { Component } from 'react';
// import axios from 'axios';
import CurrentDate from '../CurrentDate';
import './LandingPage.scss';
import { WEATHER_API_URL, WEATHER_API_KEY } from "../../config";
import TemperatureWithInsolation from '../TemperatureWithInsolation';
import WeatherWithDescription from '../WeatherWithDescription';
import SevenDayWeather from '../SevenDayWeather';
import LocationSearchBar from '../LocationSearchBar';
import CurrentLocation from '../CurrentLocation';

const PERMISSION_DENIED = "Permission denied. Can't show any weather information.";
const axios = require('axios');
class LandingPage extends Component {
  constructor() {
    super();

    this.state = {
      searchField: '',
      location: 'Sydney',
      currentDate: 'Monday, 06 September 2021',
      weatherTypeImage: 'Sun',
      weatherTypeText: 'Sun',
      sevenDayWeather: [{
        id: 1,
        day: 'TUE',
        weatherIcon: 'Cloud',
        lowTemperature: '7',
        highTemperature: '22',
      }, 
      {
        id: 2,
        day: 'Wed',
        weatherIcon: 'Cloud',
        lowTemperature: '3',
        highTemperature: '24',
      }, 
      {
        id: 3,
        day: 'THUR',
        weatherIcon: 'Cloud',
        lowTemperature: '5',
        highTemperature: '27',
      }, 
      {
        id: 4,
        day: 'FRI',
        weatherIcon: 'Cloud',
        lowTemperature: '6',
        highTemperature: '27',
      }, 
      {
        id: 5,
        day: 'SAT',
        weatherIcon: 'Cloud',
        lowTemperature: '7',
        highTemperature: '28',
      }, 
      {
        id: 6,
        day: 'SUN',
        weatherIcon: 'Cloud',
        lowTemperature: '-1',
        highTemperature: '15',
      },
      {
        id: 7,
        day: 'MON',
        weatherIcon: 'Cloud',
        lowTemperature: '7',
        highTemperature: '29',
      }],
      insolationData: [
        {
        key: 1,
        insolationIcon: 'Start',
        insolationTime: '06:30',
        },
        {
          key: 1,
          insolationIcon: 'End',
          insolationTime: '05:30',
        }
      ],
      temperatureData: [
        {
          id : 1,
          rangeType : 'Low',
          rangeTemperature : '08',
        },
        {
          id : 2,
          rangeType : 'High',
          rangeTemperature : '28',
        }
      ],
      todaysData: '',
      errorMessage: '',
      errorLog: '',
      getData: '',
    };

    this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // this.fetchLatLon();
    this.fetchTodaysWeather();
    // this.fetchForecastWeather();
  }

  //https://jr-weather-app-server.herokuapp.com/api/weather/${location}

  fetchTodaysWeather = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.location}&appid=${WEATHER_API_KEY}`)
    .then(response => response.data)
    .then(data => this.setState({ todaysData: data }))
    .catch((error) => {
      console.error('Error:', error);
    });

    //3 ways to fix async await, call back function
    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.currentLocation}&appid=${WEATHER_API_KEY}`)
    // .then(response => response.json())
    // .then(data => {
    //   this.setState({ todaysData: data })
    // })
    // .catch((error) => {
    //   console.error('Error:', error);
    // });
  }

  fetchForecastWeather = () => {
    // axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.coords.latitude}&lon=${this.coords.longitude}&units=metric&APPID=${WEATHER_API_KEY}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     // Take every 8th forecast: 40 forecasts/5 days = 8
    //     const forecasts = data.list.filter((_, index) => index % 8 === 0);
    //     this.setState({ ...data, forecasts, getData: true })
    //   });

    // fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.coords.latitude}&lon=${this.coords.longitude}&units=metric&APPID=${WEATHER_API_KEY}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     // Take every 8th forecast: 40 forecasts/5 days = 8
    //     const forecasts = data.list.filter((_, index) => index % 8 === 0);
    //     this.setState({ ...data, forecasts, getData: true })
    //   });
  };

  handleSearchBarChange(event) {
    this.setState(() => (
      {
        searchField: event.target.value,
      }
    ));
  }

  handleSubmit(event) {
    event.preventDefault();

    // this.setState(
    //     { location: this.state.searchField,}
    //    );
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.searchField}&appid=${WEATHER_API_KEY}`)
      .then(response => {
        const { data } = response;
      this.setState({ todaysData: data })})
      .catch((error) => {
        console.error('Error:', error);
      });

   
  }

  render() {
    const { location, currentDate, weatherTypeImage, weatherTypeText, insolationData, temperatureData, sevenDayWeather } = this.state;
    // console.log(this.state.todaysData);
    return (
      <div className="weather-app-container"> 
        <div className="search-bar">
          <LocationSearchBar currentLocation={this.state.todaysData.name} searchField={this.state.searchField} handleSubmit={this.handleSubmit} handleSearchBarChange={this.handleSearchBarChange} />
          <CurrentLocation currentLocation={this.state.todaysData.name} />
          <CurrentDate currentDate={currentDate} />
        </div>

        <div className="weather-app-container__today">
          <WeatherWithDescription weatherTypeImage={weatherTypeImage} weatherTypeText={weatherTypeText} />
          <TemperatureWithInsolation insolationData={insolationData} temperatureData={temperatureData} />
        </div>

        <SevenDayWeather sevenDayWeather={sevenDayWeather} />
      </div>
    )
  }
}

export default LandingPage;