/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countries.css'

const Countries = () => {
    const [countries , setCountries] = useState([]);
    const [visitedCountry , setvisitedCountry] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data=> setCountries(data))
    }, [])
    const handleVisitedCountry = (country) =>{
        const newVisitedCountry = [...visitedCountry, country];
        setvisitedCountry(newVisitedCountry);

    }
    return (
        <div>
           <h3>Countries: {countries.length}</h3>
           <div>
            <h3>Visited Country : {visitedCountry.length} </h3>
                   {
                    visitedCountry.map(country => <li>{country.name.common}</li>)
                   }  
           </div>
           <div className="country-container">
           {
            countries.map(country => 
            <Country key={country.cca3}
            handleVisitedCountry = {handleVisitedCountry}
             country={country}> </Country>)
           } 
           </div>
        </div>
    )
};

export default Countries;