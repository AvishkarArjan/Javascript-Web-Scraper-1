const PORT = 8000;
const axios = require('axios');
const express = require('express');
const cheerio = require('cheerio');

const app = express();
// use get listen

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

    }).catch(err => console.log(err))   // sort of important

app.listen(PORT, ()=>console.log(`server running on ${PORT}`))

//success (almost)