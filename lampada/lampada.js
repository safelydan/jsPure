const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const lamp = document.getElementById("lamp");
const text = document.getElementById("text");


let isBroken = false;

const lampOn = () => {
  if (isBroken === false) {
    lamp.src = "./img/ligada.jpg";
  }
};

const lampOff = () => {
  if (isBroken === false) {
    lamp.src = "./img/desligada.jpg";
  }
};

const lampBreak = () => {
  lamp.src = "./img/quebrada.jpg";
  isBroken = true;
  text.innerHTML = 'quebrasse burrao'
};

turnOn.addEventListener("click", lampOn);
turnOff.addEventListener("click", lampOff);
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);
lamp.addEventListener("dblclick", lampBreak);
