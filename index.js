function myFunction(){
  let x = document.getElementById("name").value;
  let y = document.getElementById("address").value;
  if(x=="" || y==""){
    alert("Everything must be filled out")
  }
  else{
    alert("Submitted!");
  }
}

document.querySelector("a.navbar-brand").addEventListener("click", handleClick);
function handleClick(){
  alert("You clicked");
}

function play() {
  var audio = new Audio('audio .mp3');
  audio.play();
}


function changeText(id) {
  id.innerHTML = "Choice for every taste!";
}

function mOver(obj) {
  obj.innerHTML = "Without joke!"
}

function mOut(obj) {
  obj.innerHTML = "We recommend only the best "
}

var string = "Recommendations";
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
var running = setTimeout(animate, 90);
})();
