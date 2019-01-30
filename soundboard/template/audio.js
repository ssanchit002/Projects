
const keys = document.querySelectorAll('.sound');
const bands= document.querySelectorAll('header>nav>a');

function clickSound(e){
  let soundKey = e.target.dataset['sound'];
  let audio = document.querySelector(`audio[data-sound="${soundKey}"]`);
  audio.currentTime = 0;
  audio.play();
}

function switchband(e){
  e.preventDefault();
  let band1 = document.querySelector('#band1');
  let band2 = document.querySelector('#band2');
  let band3 = document.querySelector('#band3');
  
  let band = e.target.dataset['band'];
  if(band=="band1"){
    band1.style.display = "flex";
    band2.style.display = "none";
     band2.style.display = "none";
    return;
  }
  if(band=="band2"){
  band1.style.display = "none";
band3.style.display = "none";
  band2.style.display = "flex";
  return;
}
 if(band=="band3"){
  band1.style.display = "none";
band3.style.display = "flex";
  band2.style.display = "none";
  return;
}
 band1.style.display = "flex";
  band2.style.display = "none";
 band3.style.display = "none";
  }
keys.forEach(function(key){
    key.addEventListener("click", clickSound);
});

bands.forEach(function(band){
  band.addEventListener("click", switchband);
});
