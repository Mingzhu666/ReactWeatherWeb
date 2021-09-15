const axios = require('axios');

axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=112ab103f1c5ad1981c26cdbe12ff49d`)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
