const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const lodash = require('lodash');

console.clear();

fetch('https://randomuser.me/api/?results=5')
.then(res => res.json())    //convert the response to file type like here json
.then(json => {
    json.results.forEach(person => {
        const temp = person.name;
        console.log(`${temp.first} ${temp.last}`);
    });
}); 

let ran1 = lodash.random(100);
console.log(ran1);
