import './sass/main.scss';
import temp from './templates/country.hbs';
import liCountry from './templates/li-country.hbs';
import apiService from './api.js';
var debounce = require('lodash.debounce');
const input = document.querySelector('.input');
const div = document.querySelector('div');

input.addEventListener('input', debounce(country, 1000));

function country(e) {
  const curentCountry = e.target.value;

  apiService(curentCountry).then(data => {
      const arrayLength = data.length;
console.log(data);
      if(arrayLength >= 2 && arrayLength <= 10 ){
        renderCountryList(data)
      }
  });



  // if(data.length > 1)
}



function renderCountryList(array){
const names = array.map(item => item.name)
   
const markup =  liCountry({names})

console.log(markup);
}

