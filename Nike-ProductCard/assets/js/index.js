//variables priority HIGHEST
const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
const shoe = document.querySelectorAll('.shoes');
const gradients = document.querySelectorAll('.gradient');
//const bg = document.querySelector('.bg');

let prevColor = "blue";//previus color background
let animationEnd = true;//animation end bool

//functions
function changeSize() {
  sizes.forEach(size => size.classList.remove('active'));
  this.classList.add('active');
}

function changeColor() {

  if(!animationEnd) return;
  let primary = this.getAttribute('primary'); //get primary
  let color = this.getAttribute('color'); //get color
  let shoes = document.querySelector(`.shoes[color="${color}"]`);
  let gradient = document.querySelector(`.gradient[color="${color}"]`);
  let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`);

  colors.forEach(c => c.classList.remove('active'));
  this.classList.add('active');

  //@here var --primary -> index.css
  document.documentElement.style.setProperty('--primary', primary);

  shoe.forEach(s => s.classList.remove('show'));
  shoes.classList.add('show');
  
  gradients.forEach(g => g.classList.remove('first', 'second'));
  gradient.classList.add('first');
  prevGradient.classList.add('second');
  
  prevColor = color;
  animationEnd = false;
  
  gradient.addEventListener('animationend', () => {
    animationEnd = true;
  })/*If the animation still does not finish, the user will not be able to interact with another color button*/
}
//events
sizes.forEach(size => size.addEventListener('click', changeSize));

colors.forEach(c => c.addEventListener('click', changeColor));
/* @HERE / Buged Responsive
let x = window.matchMedia("(max-width: 1000px)");
function changeHeigth() {
  if(x.matches) {
    let shoeHeight = shoe[0].offsetHeight;
    bg.style.height = `${shoeHeight * 0.9}px`;
  } 
  else {
    bg.style.height = "475px";
  }
}

changeHeigth();

window.addEventListener('resize', changeHeigth);
*/