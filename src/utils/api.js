export const getСoordinates = (city) => {
  return fetch(
    `https://geocode-maps.yandex.ru/1.x?geocode=${city}&apikey=e3c02d07-d77f-484e-855a-0dfe5180d15d&format=json&lang=ru`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      return res.response.GeoObjectCollection.metaDataProperty
        .GeocoderResponseMetaData.boundedBy.Envelope.lowerCorner;
    });
};

export const getWeather = (lat, lon) => {
  return fetch(`https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=${lat}&lon=${lon}&lang=ru`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "c22a735d6dmsh6b7f46566bd808dp157d65jsn001088cca26d",
      "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com"
    }
  })
  .then(response => {
    return response.json();
  })
  .then(response => {
    return response;
  })
  .catch(err => {
    console.error(err);
  });
};

//getWeather("55.312148", "37.038186");