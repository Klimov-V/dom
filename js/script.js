(function() {
    'use strict'

    let root = document.querySelector('#root'),
        ul = document.createElement('ul'),
        li = document.createElement('li'),
        playList = [
        {
         author: "LED ZEPPELIN",
         song:"STAIRWAY TO HEAVEN"
        }, {
         author: "QUEEN",
         song:"BOHEMIAN RHAPSODY"
        }, {
         author: "LYNYRD SKYNYRD",
         song:"FREE BIRD"
        }, {
         author: "DEEP PURPLE",
         song:"SMOKE ON THE WATER"
        }, {
         author: "JIMI HENDRIX",
         song:"ALL ALONG THE WATCHTOWER"
        }, {
         author: "AC/DC",
         song:"BACK IN BLACK"
        }, {
         author: "QUEEN",
         song:"WE WILL ROCK YOU"
        }, {
         author: "METALLICA",
         song:"ENTER SANDMAN"
        }];
    
    root.append(ul);

    console.log(playList.length);
    
    for (let i = 0; i < 8; i++) {
        // li.innerHTML = playList[i].author;
        document.querySelector('ul').append(li);
        console.log('печать');
    }

    
})();

//.innerHTML = playList[i].author