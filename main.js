
let start;

function goTimer(){
  let now = new Date();
  milli = now.getTime() - start.getTime();
  milliSec = Math.floor(milli/100);
  seconds = Math.floor(milli / 1000);
  minutes = Math.floor(seconds / 60);
  hours = Math.floor(minutes / 60);
  
  milliSec = milliSec - seconds*10;
  seconds = seconds - minutes*60;
  minutes = minutes - hours*60;
  
  document.getElementById('timer').innerHTML= hours + ":" + minutes + ":" + seconds + ":" + milliSec;
}

function countUp(){
  start = new Date();
  tm=setInterval('goTimer()',100);
}
function countStop() {                  
  clearInterval(tm);
}

function countReset(){
  document.getElementById('timer').innerHTML= 0+":"+0+":"+0+":"+0;
}  
  


