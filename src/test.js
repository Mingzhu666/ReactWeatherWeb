    navigator.geolocation.getCurrentPosition((location) => {
      console.log("Latitude is :", location.coords.latitude);
      console.log("Longitude is :", location.coords.longitude);
    });