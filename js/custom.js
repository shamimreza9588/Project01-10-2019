// about page pic changing...
let images = [
           "bangla2/3.jpg",
           "bangla2/4.jpg",
           "bangla2/5.jpg",
           "bangla2/6.jpg",
           "bangla2/7.jpg",
           "bangla2/8.jpg",
           "bangla2/9.jpg",
           "bangla2/10.jpg",
           "bangla2/11.jpg",
           "bangla2/12.jpg",
           "bangla2/13.jpg",
           "bangla2/14.jpg",
           "bangla2/15.jpg",
           "bangla2/16.jpg",
           "bangla2/17.jpg",
           "bangla2/18.jpg",
           "bangla2/19.jpg",
           "bangla2/20.jpg"
];
let i = 0;
function sam() {
  let pic = document.getElementById('pic-about');
      pic.src = images[i];
    if(i < images.length - 1) {
      i++;
    }else {
      i = 0;
    }
}﻿
window.setInterval(sam, 5000);
