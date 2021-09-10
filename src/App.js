// import DailyWeather from "./components/DailyWeather";
import SevenDayWeather from "./components/SevenDayWeather/SevenDayWeather";
import TemperatureWithInsolation from "./components/TemperatureWithInsolation";
import WeatherWithDescription from "./components/WeatherWithDescription";
import SearchBar from "./components/SearchBar";
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// <FontAwesomeIcon icon="coffee" />

// get our fontawesome imports
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function App() {
  return (
    <div>
      <SearchBar />
      <WeatherWithDescription />
      <TemperatureWithInsolation />
      <SevenDayWeather />
    </div>
  );
}

export default App;
