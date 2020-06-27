var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var hide = document.getElementById('ani');

function onload() {
  document.addEventListener("deviceready", onDeviceReady, false);
  console.log("ok so far");
  test()
}

function onDeviceReady() {
  console.log("ready");
  document.addEventListener("pause", onPause, false);
  document.addEventListener("resume", onResume, false);
  test()
}

function onPause() {
  console.log("stop...wait a minute");
  localStorage.typels = type;
}

function onResume() {
    test()
}

var pixelRatio = window.devicePixelRatio || 1; /// get pixel ratio of device

var type;

var basic;

var aniheight;


var base = new Image();

base.src = "base3.png";

function test() {
  console.log("steady");

  if (localStorage.typels) {
    type = Number(localStorage.typels);
  } else {
    type = Math.floor(Math.random() * 5) + 1;
  }
  console.log(type);

  typeTest()
  draw()
}

function draw() {

  pixelRatio = window.devicePixelRatio || 1;
  canvas.width = 393 * pixelRatio;   /// resolution of canvas
  canvas.height = 1572 * pixelRatio;
  canvas.style.width = 393 + 'px';   /// CSS size of canvas
  canvas.style.height = 1572 + 'px';

  ctx.drawImage(base, 0, 0);

  if (hide.offsetHeight === 96) {
    type = Math.floor(Math.random() * 5) + 1;
    typeTest()
  }

  ctx.font = "lighter 56px Roboto";
  ctx.textAlign = "center";
  ctx.fillText(basic, 540, 737);


  requestAnimationFrame(draw, 10);
}

function typeTest() {
  if (type === 1) {
    basic = "Physical";
  }
  if (type === 2) {
    basic = "Garden";
  }
  if (type === 3) {
    basic = "Crafts";
  }
  if (type === 4) {
    basic = "Photography";
  }
  if (type === 5) {
    basic = "Drawing";
  }

  localStorage.typels = type;
}

function change() {
  document.querySelector('.ani').classList.remove('grow');
  document.querySelector('.ani').offsetWidth = document.querySelector('.ani').offsetWidth;
  document.querySelector('.ani').classList.add('grow');

}

function chan2() {
  type = Math.floor(Math.random() * 5) + 1;
  typeTest()
}



// document.getElementById('change').addEventListener('click', function () {
//   document.querySelector('.ani').classList.remove('grow');
//   document.querySelector('.ani').offsetWidth = document.querySelector('.ani').offsetWidth;
//   document.querySelector('.ani').classList.add('grow');
// });
