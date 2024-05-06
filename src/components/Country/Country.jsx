import './country.css'
const Country = ({country}) => { 
    console.log(country)
    const{name, flags, population, area, capital} = country;
  
    return (
        <div className='country'>
          <h3>Country Name:{name?.common}</h3> 
          <img src={flags.png} alt="" />
          <p>Population: {population}</p>
          <p>Area: {area}</p>
          <p>Capital: {capital}</p> 
        </div>
    );
};

export default Country;
