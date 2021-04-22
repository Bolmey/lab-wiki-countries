import React from 'react';
import { Link } from 'react-router-dom'
import countries from "../countries.json";


function CountriesList(props) {

    console.log(countries)


    return (
        <div>
            {countries.map((country) => {
                return (

                    <li>
                        <Link to={`/country/${country.cca3}`}>
                            {country.name.common}
                        </Link>
                    </li>

                )
            })}


        </div>
    );
}

export default CountriesList;