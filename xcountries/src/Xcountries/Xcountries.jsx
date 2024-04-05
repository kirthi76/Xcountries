import {useState,useEffect}  from "react";
import "./Xcountries.css";


export default function Xcountries(){
 
  const [countries, setCountries] = useState([]);

  const getCountriesData = async() =>{
    try{
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountries(data);

    }
    catch(err){
      console.error("Error fetching data:", err);
    }
  }

  useEffect(() => { getCountriesData();
  }, []);


  return (
    <div class="container">
    {countries.map((country) => (
        <div class="cardStyle" key={country.name.common}>
            <img src={country.flags.png} alt={country.name.common} />
          <h2>{country.name.common}</h2>
          
        </div>
        
      ))}
    </div>
  );
};