import { useState } from 'react';
import './country.css'
const Country = ({country}) => { 
    console.log(country)
    const{name, flags, population, area, capital, cca3} = country;
    const[visited, setVisited]=useState(false)
    const handleVisited = ()=>{
      setVisited(!visited)

    }
  
    return (
        <div className={`country ${visited && 'visited'}`}>
          <h3 style={{color: visited?'red':''}}>Country Name:{name?.common}</h3> 
          <img src={flags.png} alt="" />
          <p>Population: {population}</p>
          <p>Area: {area}</p>
          <p>Capital: {capital}</p> 
          <p>Code: {cca3}</p>
          <button onClick={handleVisited}>{visited?'visited':'Going'}</button>
          {
            visited? 'I have visited this country': 'I want to visit'
          }
        </div>
    );
};

export default Country;
