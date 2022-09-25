Web Scraping using JS
Code with Ania Kubow

go to npmjs.com = to get package install commands
project includes
- node.js
- express framework package - will use it to listen to our path and ports
- cheerio - this is what we'll be using to pick out html elements - provideds api ? - identical to "jquery"
- axios - promise based http client - send http requests

1. npm init 
    create package.json
    keep pressing enter
2. npm i express
    install express package

3. npm i cheerio
    install cheerio package

4. npm i axios
    install axios

5. "scripts": {
    "start":"nodemon index.js"
  }

  do that to enable npm run start
    nodemon listens out any changes made to index js file
    make sure nodemon is installed globally
    npm install -g nodemon

index.js

1. require the packages before using
    const axios = require('axios');
    for all 3 axios, express, cheerio


lets start some Scraping

main gist of the thing

const url = 'https://www.hindustantimes.com/';  // 1
const articles =[];  // 5

axios(url)
    .then(response => {
        const html = response.data
        // console.log(html);  // 2  gives the entire html
        const $ = cheerio.load(html)  //3
        $('.hdg3',html).each(function(){  // 4
            const title = $(this).text()
            const url = $(this).find('a').attr('href');
            articles.push({  //6
                title,
                url
            });
        })
          // 7
        for(let i=0; i<articles.length; i++){
            console.log(articles[i].title);
        }

    })





