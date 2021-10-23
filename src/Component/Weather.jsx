import React from "react";

const Weather = ({ weatherData }) => {
  const refresh = () => {
    window.location.reload();
  };

  //Kelvin to Celcius
  let temp = (weatherData.main.temp - 273.15).toFixed(2);
  let mintemp = (weatherData.main.temp_min - 273.15).toFixed(2);
  let maxtemp = (weatherData.main.temp_max - 273.15).toFixed(2);
  

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div class="card text-white bg-primary mb-3">
              <div class="card-header">
                Weather
                <i
                  className="fa fa-refresh float-end pt-1"
                  onClick={refresh}
                ></i>
              </div>
              <div class="card-body">
                <h2 class="card-title">{weatherData.name}</h2>
                <p class="card-text">
                </p>
                <h1>{temp} &deg;C</h1>
                <p>
                  Min:{mintemp} &deg;C |&nbsp;| Max:{maxtemp}&deg;C
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Weather;
