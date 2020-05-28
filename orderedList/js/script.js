(function() {
    'use strict'

    let root = document.querySelector('#root'),
        ol = document.createElement('ol'),
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
    
    root.append(ol);
    
    for (let i = 0; i < 8; i++) {
        let li = document.createElement('li');
        ol.append(li);
        li.innerHTML = `<strong>${playList[i].author}</strong> - ${playList[i].song}`;
    }

})();
