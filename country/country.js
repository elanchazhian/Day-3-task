const URL = "https://restcountries.com/v3.1/all"

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);
xhr.send();

xhr.onload = () => {
    console.log(JSON.parse(xhr.response));
    const obj1 = JSON.parse(xhr.response);
   
      
       obj1.forEach(country => {
        console.log( country.name.common , country.region, country.subregion, country.population);
       //  for (let country of countries ){

      // console.log(country.flags.png)}
       });

}

    




