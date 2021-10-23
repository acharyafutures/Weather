import react,{useState, useEffect} from 'react';
import './App.css';
import Weather from './Component/Weather';

function App() {
  //For latitude
  const [lat, setlat] = useState([]);
  //For longitude
  const [lon, setlon] = useState([]);
  //Weather Data
  const [data, setdata] = useState([]);
  let componentMounted=true;

  const fetchData= async() => {
    //Getting User Location
    navigator.geolocation.getCurrentPosition(function(position){
      setlat(position.coords.latitude);
      setlon(position.coords.longitude);
      console.log(lat);
      console.log(lon);
    })

    //Fetching data from API
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e07ce6490e231307697e6cbdfc317d9a`);
    if(componentMounted){
      setdata(await response.json());
      console.log(data);
    }
    
    return() => {
      componentMounted=false;
    }

  }

  useEffect(()=>{
    fetchData();
  },[lat,lon]);


  return (
      <>
        {(typeof data.main!='undefined')?(
          <Weather weatherData={data}/>
        ):(
          <div>....Loading</div>
        )
        }
      </>
  );
}

export default App;
